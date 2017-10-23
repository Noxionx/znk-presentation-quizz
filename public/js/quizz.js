function httpGetAsync(theUrl, callback)
{
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
      callback(xmlHttp.responseText);
  }
  xmlHttp.open("GET", theUrl, true); // true for asynchronous
  xmlHttp.send(null);
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function generateQuizzHtml(quizzData) {
	var played = false;
	var contentElt = document.createElement('div');

	var questionElt = document.createElement('div');
	questionElt.className = 'question';
	var hintElt = document.createElement('div');
	hintElt.className = 'hint';
	var responsesElt = document.createElement('div');
	responsesElt.className = 'responses';

	questionElt.innerHTML = quizzData.question;
	hintElt.innerHTML = quizzData.hint;

	shuffle(quizzData.choices).forEach(function(choice) {
		var win = choice === quizzData.response
		var responseElt = document.createElement('button');
		responseElt.className = 'response' + (win ? ' win' : '');
		responseElt.innerHTML = choice;
		responseElt.addEventListener('click', function(){
			if (!played) {
				played = true;
				responseElt.style.backgroundColor = win ? '#2ecc71' : '#e74c3c';
				if (!win) {
					var winElt = responsesElt.getElementsByClassName('win')[0];
					winElt.style.backgroundColor ='#2ecc71';
				}
				//contentElt.appendChild(generateResultHtml(quizzData, win));
			}
		});
		responsesElt.appendChild(responseElt);
	});

	contentElt.appendChild(questionElt);
	contentElt.appendChild(hintElt);
	contentElt.appendChild(responsesElt);

	return contentElt;
}

function generateResultHtml(data, win) {
	var container = document.createElement('div');
	var img = document.createElement('img');
	img.className = 'result-img';
	img.setAttribute('src', data.result.img);
	var winOrLost = document.createElement('div');
	winOrLost.className = 'result-title';
	winOrLost.innerHTML = win ? 'Gagné ! :-D' : 'Perdu ! X-(';
	var text = document.createElement('div');
	text.className = 'result-text';
	text.innerHTML = data.result.text;

	if (data.img && data.img.length) {
		container.appendChild(img);
	}
	container.appendChild(winOrLost);
	container.appendChild(text);

	return container;
}

document.addEventListener('DOMContentLoaded', function(){
	httpGetAsync('/quizz', function(rep) {
		var data = JSON.parse(rep);
		var quizzElts = document.querySelectorAll('[data-quizz]');
		quizzElts.forEach(function(elt){
			var quizzPath = elt.getAttribute('data-quizz');
			var quizzData = eval('data.' + quizzPath);
			var quizzHtml = generateQuizzHtml(quizzData);
			elt.appendChild(quizzHtml);
		})
	})
})
