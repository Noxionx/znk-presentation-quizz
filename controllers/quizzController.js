export function getData() {
  return {
    music: {
      software: {
        question: 'Quel logiciel ne permet pas la production musicale ?',
        hint: 'On parle de production de musique, pas de bruit ;)',
        choices: [
          'Pinnacle Studio',
          'Reason',
          'Ableton',
          'FL Studio'
        ],
        response: 'Pinnacle Studio',
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
  };
}
