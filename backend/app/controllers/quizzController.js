export default function getData () {
  return {
    music: {
      software: {
        question: 'Quel logiciel ne permet pas la production musicale ?',
        hint: 'On parle de production de musique, pas de bruit ;)',
        choices: [
          'Audacity',
          'Reason',
          'Ableton',
          'FL Studio',
        ],
        response: 'Audacity',
      },
      tempo: {
        question: 'Quel est le sigle (ou abréviation) pour exprimer le tempo ?',
        hint: 'On s\'en sert aussi pour exprimer le rythme cardiaque',
        choices: [
          'TPMP',
          'APM',
          'BPM',
          'TPS',
        ],
        response: 'BPM',
      },
      family: {
        question: 'Le saxophone fait partie de quelle famille d\'instruments ?',
        hint: 'Un peu de culture générale !',
        choices: [
          'Bois',
          'Cuivres',
          'Cordes',
          'Percussions',
        ],
        response: 'Bois',
      },
    },
    games: {
      moba: {
        question: 'Lequel de ces jeux n\'est pas un MOBA ?',
        hint: '<a target="_blank" href="http://lmgtfy.com/?q=Moba">Besoin d\'info ?</a>',
        choices: [
          'Smite',
          'League of Legends',
          'Paragon',
          'Starcraft',
        ],
        response: 'Starcraft',
      },
      hl: {
        question: 'La série Half Life est développée par quel studio ?',
        hint: '"Rise and shine Mister Freeman..."',
        choices: [
          'Ubisoft',
          'Electronic Arts',
          'Valve',
          'Blizzard',
        ],
        response: 'Valve',
      },
      sell: {
        question: 'Quel est le jeu le plus vendu de tout les temps ?',
        hint: '"Shut up and take my money !"',
        choices: [
          'Minecraft',
          'Tetris',
          'GTA V',
          'World of Warcraft',
        ],
        response: 'Tetris',
      },
    },
    beer: {
      country: {
        question: 'Laquelle de ces bières n\'est pas une bière belge ?',
        hint: 'Dans le doute, mieux vaut toutes les goûter !',
        choices: [
          'La Chouffe',
          'La Goudale',
          'La Gulden Draak',
          'La Chimay',
        ],
        response: 'La Goudale',
      },
      ipa: {
        question: 'Que signifie IPA ?',
        hint: 'C\'est un type de bière',
        choices: [
          'Instrument de Pauvre Alcoolique',
          'Internet Privacy Act',
          'Irish Pale Ale',
          'India Pale Ale',
        ],
        response: 'India Pale Ale',
      },
      craft: {
        question: 'Les bières d\'abbaye sont fabriquées par..',
        hint: 'Question piège...',
        choices: [
          'Des moines',
          'Des brasseries',
          'Des curés',
          'Des russes',
        ],
        response: 'Des brasseries',
      },
    },
  };
}
