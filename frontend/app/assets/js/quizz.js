function httpGetAsync (theUrl, callback) {
  const xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = () => {
    if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
      callback(xmlHttp.responseText);
    }
  };
  xmlHttp.open('GET', theUrl, true); // true for asynchronous
  xmlHttp.send(null);
}

function shuffle (array) {
  const newArray = array;
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = newArray[currentIndex];
    newArray[currentIndex] = newArray[randomIndex];
    newArray[randomIndex] = temporaryValue;
  }

  return newArray;
}

function animateRightAnswer (elt) {
  const delay = 400;
  setTimeout(() => {
    elt.style.backgroundColor = '#2ecc71';
  }, delay);
  setTimeout(() => {
    elt.style.backgroundColor = '#ffffff';
  }, delay + 150);
  setTimeout(() => {
    elt.style.backgroundColor = '#2ecc71';
  }, delay + 300);
}

function generateQuizzHtml (quizzData) {
  let played = false;
  const contentElt = document.createElement('div');

  const questionElt = document.createElement('div');
  questionElt.className = 'question';
  const hintElt = document.createElement('div');
  hintElt.className = 'hint';
  const responsesElt = document.createElement('div');
  responsesElt.className = 'responses';

  questionElt.innerHTML = quizzData.question;
  hintElt.innerHTML = quizzData.hint;

  shuffle(quizzData.choices).forEach((choice) => {
    const win = choice === quizzData.response;
    const responseElt = document.createElement('button');
    responseElt.className = `response${(win ? ' win' : '')}`;
    responseElt.innerHTML = choice;
    responseElt.addEventListener('click', () => {
      if (!played) {
        played = true;
        responseElt.style.backgroundColor = win ? '#2ecc71' : '#e74c3c';
        if (!win) {
          const winElt = responsesElt.getElementsByClassName('win')[0];
          animateRightAnswer(winElt);
        }
      }
    });
    responsesElt.appendChild(responseElt);
  });

  contentElt.appendChild(questionElt);
  contentElt.appendChild(hintElt);
  contentElt.appendChild(responsesElt);

  return contentElt;
}

/* eslint-disable */
document.addEventListener('DOMContentLoaded', () => {
  httpGetAsync('/quizz', (rep) => {
    const data = JSON.parse(rep);
    const quizzElts = document.querySelectorAll('[data-quizz]');
    quizzElts.forEach((elt) => {
      const quizzPath = elt.getAttribute('data-quizz');
      const quizzData = eval(`data.${quizzPath}`);
      const quizzHtml = generateQuizzHtml(quizzData);
      elt.appendChild(quizzHtml);
    });
  });
});
