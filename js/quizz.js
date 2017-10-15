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
			result: {
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
				img: ''
			}
		},
		tempo: {
			question: 'Quel est le sigle (ou abréviation) pour exprimer le tempo ?',
			hint: 'On s\'en sert aussi pour exprimer le rythme cardiaque',
			choices: [
				'TPMP',
				'APM',
				'BPM',
				'TPS'
			],
			response: 'BPM',
			result: {
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
				img: ''
			}
		}
	},
	games: {
		moba: {
			question: 'Lequel de ces jeux n\'est pas un MOBA ?',
			hint: '<a target="_blank" href="http://lmgtfy.com/?q=Moba">Besoin d\'info ?</a>',
			choices: [
				'Smite',
				'League of Legends',
				'Paragon',
				'Warcraft 3'
			],
			response: 'Warcraft 3',
			result: {
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
				img: ''
			}
		},
		other: {
			question: 'Lequel de ces jeux n\'est pas un Moba ?',
			hint: 'Moba : Jeux multijoueur en equipe à 5 contre 5. <a target="_blank" href="http://lmgtfy.com/?q=Moba">+ d\'info</a>',
			choices: [
				'Smite',
				'League of Legends',
				'Paragon',
				'Warcraft 3'
			],
			response: 'Warcraft 3',
			result: {
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
			result: {
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
				img: ''
			}
		},
		ipa: {
			question: 'Que signifie IPA ?',
			hint: 'C\'est un type de bière',
			choices: [
				'Instrument de Pauvre Alcoolique',
				'Internet Privacy Act',
				'Irish Pale Ale',
				'India Pale Ale'
			],
			response: 'India Pale Ale',
			result: {
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
				img: ''
			}
		}
	}
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

	quizzData.choices.forEach(function(choice) {
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
				contentElt.appendChild(generateResultHtml(quizzData, win));
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
	var quizzElts = document.querySelectorAll('[data-quizz]');
	quizzElts.forEach(function(elt){
		var quizzPath = elt.getAttribute('data-quizz');
		var quizzData = eval('data.' + quizzPath);
		var quizzHtml = generateQuizzHtml(quizzData);
		elt.appendChild(quizzHtml);
	})
})
