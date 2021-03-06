export default {
  // Duplicated rules make the last rule less likely.
  origin: [
    '#name.capitalize# #location.capitalize# of #attribute.capitalize#', 
    '#name.capitalize# #location.capitalize#',
    '#name.capitalize# #location.capitalize# of #attribute.capitalize#', 
    '#name.capitalize# #location.capitalize#',
    '#name.capitalize# #location.capitalize# of #attribute.capitalize#', 
    '#name.capitalize# #location.capitalize#',
    '#name.capitalize# #location.capitalize# of #attribute.capitalize#', 
    '#name.capitalize# #location.capitalize#',
    '#name.capitalize# #location.capitalize# of #attribute.capitalize#', 
    '#name.capitalize# #location.capitalize#',
    // Double-barrel name e.g. Foggy-Foggy marsh
    '[generatedName:#simpleName#]#generatedName.capitalize#-#generatedName.capitalize# #location.capitalize#',
  ],
  simpleName: [
    'uncanny',
    'forbidden',
    'fantasy',
    'dire',
    'galloping',
    'cartoon',
    'miyazaki',
    'silicon',
    'frictional',
    'barked',
    'rough',
    'hilly',
    'vile',
    'swampy',
    'marshy',
    'jarvis',
    'andrews',
    'entombed',
    'magical',
    'rocky',
    'dark',
    'beautiful',
    'autumnal',
    'villainous',
    'calm',
    'eastern',
    'western',
    'northern',
    'southern',
    'far',
    'queens',
    'uncharted',
    'unplottable',
    'marble',
    'paper',
    'golden',
    'smokey',
    'foggy',
    'misty',
    'rainy',
    'thunder',
    'windy',
    'smugglers',
    'neon',
    'blue',
    'red',
    'endless',
    'wooded',
    'flooded',
    'godrics',
    'salazaars',
    'helgas',
    'rowenas',
    'hogwarts',
    'bills',
    'shigeru',
    'miyamoto',
    'rollo',
    'solar',
    'lam',
    'sinoma',
    'rubico',
    'sino',
    'kappa',
  ],

  // Complex Names: Names that are not single words
  complexName: [
    'really dangerous',
    'big boss',
    'cao cao',
    'liu bai',
    'liu bai',
    'wai lin',
    'bo hao',
    'su mai',
    'har gao',
  ],
  name: [
    '#simpleName#',
    '#complexName#',
  ],
  location: [
    'Roads',
    'valley',
    'forest',
    'fields',
    'docks',
    'gorge',
    'encampment',
    'jungle',
    'plains',
    'temple',
    'farmlands',
    'gulley',
    'outcrop',
    'trails',
    'drylands',
    'ocean',
    'ethereal plane',
    'labyrinth',
    'crag',
    'cliffs',
    'cavern',
    'cave',
    'mountain',
    'sea',
    'lake',
    'river',
    'archives',
    'dungeon',
    'village',
    'megacity',
    'megalopolis',
    'path',
    'cove',
    'bay',
    'desert',
    'casino',
    'hideout',
    'gardens',
    'glade',
    'hollow',
    'school',
    'way',
    'volcano',
    'maze',
    'house',
    'passage',
    'pass',
    'ports',
    'belt',
    'starscape',
    'plaza',
    'ministry',
    'castle',
  ],
  attribute: [
    'Death',
    'life',
    'sacrifice',
    'innovation',
    'networking',
    'magic',
    'confusion',
    'imminent death',
    'unity',
    'harmony',
    'chaos',
    'entropy',
    'order',
    'unpredictability',
    'resolution',
    'gaben',
    'time',
    'fire',
    'air',
    'earth',
    'water',
    'lightening',
    'jasaar',
    'mystery',
    'jas’kar',
    'clarity',
    'susan jessica',
    'witchcraft and wizardry',
    'might',
    'advancement',
    'popularity',
    'ja’den dionne',
    'feline dion',
    'dion blaster',
    'power tennis',
  ],
};