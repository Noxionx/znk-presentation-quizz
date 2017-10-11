var data = {
	music: {
		software: {
			question: 'Quel logiciel ne permet pas la production musicale ?',
			hint: 'On parle de production de musique, pas de bruit ;)',
			choices: [
				'Audacity',
				'Reason',
				'Ableton',
				'FL Studio'
			],
			response: 'Audacity',
			win: {
				text: 'Gagné !',
				img: ''
			},
			loose: {
				text: 'Perdu !',
				img: ''
			}
		}
	},
	games: {
		moba: {
			question: 'Lequel de ces jeux n\'est pas un Moba ?',
			hint: 'Moba : Jeux multijoueur en equipe à 5 contre 5. <a target="_blank" href="http://lmgtfy.com/?q=Moba">+ d\'info</a>',
			choices: [
				'Smite',
				'League of Legends',
				'Dota',
				'Warcraft 3'
			],
			response: 'Warcraft 3',
			win: {
				text: 'Gagné !',
				img: ''
			},
			loose: {
				text: 'Perdu !',
				img: ''
			}
		}
	},
	beer: {
		country: {
			question: 'Laquelle de ces bières n\'est pas une bière belge ?',
			hint: 'Dans le doute, mieux vaut toutes les goûter !',
			choices: [
				'La Chouffe',
				'La Goudale',
				'La Gulden Draak',
				'La Chimay'
			],
			response: 'La Goudale',
			win: {
				text: 'Gagné !',
				img: ''
			},
			loose: {
				text: 'Perdu !',
				img: ''
			}
		}
	}
}

function generateQuizzHtml(quizzData) {
	var contentElt = document.createElement('div');

	var questionElt = document.createElement('div');
	questionElt.className = 'question';
	var hintElt = document.createElement('div');
	hintElt.className = 'hint';
	var responsesElt = document.createElement('div');
	responsesElt.className = 'responses';

	questionElt.innerHTML = quizzData.question;
	hintElt.innerHTML = quizzData.hint;

	quizzData.choices.forEach(function(choice) {
		var responseElt = document.createElement('button');
		responseElt.innerHTML = choice;
		responseElt.addEventListener('click', function(){
			var html = ((choice === quizzData.response) ? generateWinHtml(quizzData.win) : generateLooseHtml(quizzData.loose));
			contentElt.innerHTML = '';
			contentElt.appendChild(html);
		});
		responsesElt.appendChild(responseElt);
	});

	contentElt.appendChild(questionElt);
	contentElt.appendChild(hintElt);
	contentElt.appendChild(responsesElt);

	return contentElt;
}

function generateWinHtml(data) {
	var container = document.createElement('div');
	var img = document.createElement('img');
	img.setAttribute('src', data.img);
	var text = document.createElement('div');
	text.innerHTML = data.text;

	if (data.img && data.img.length) {
		container.appendChild(img);
	}
	container.appendChild(text);

	return container;
}

function generateLooseHtml(data) {
	var container = document.createElement('div');
	var img = document.createElement('img');
	img.setAttribute('src', data.img);
	var text = document.createElement('div');
	text.innerHTML = data.text;

	if (data.img && data.img.length) {
		container.appendChild(img);
	}
	container.appendChild(text);

	return container;
}

document.addEventListener('DOMContentLoaded', function(){
	var quizzElts = document.querySelectorAll('[data-quizz]');
	quizzElts.forEach(function(elt){
		var quizzPath = elt.getAttribute('data-quizz');
		var quizzData = eval('data.' + quizzPath);
		var quizzHtml = generateQuizzHtml(quizzData);
		elt.appendChild(quizzHtml);
	})
})
