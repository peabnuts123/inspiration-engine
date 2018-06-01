import _ from 'lodash';

import names from 'inspiration-engine/grammars/util/names';

export default _.assign({
  origin: [
    'I was #activity# and overheard [personA:#name#]#personA# talking to [personB:#name#]#personB# about the old house… apparently #gossip#',
  ],

  /**
   * Sample: "I heard that #gossip#"
   */
  gossip: [
    '[personC:#name#]#personC# was #activity# and #suspiciousHouseActivity#.'
  ],

  /**
   * Sample: "I have an appointment this #timeOfDay#"
   */
  timeOfDay: [
    'morning',
    'afternoon',
    'evening',
  ],

  /**
   * Sample: "I had an appointment #relativeDay# afternoon"
   */
  relativeDay: [
    'yesterday',
    'this',
  ],
  
  /**
   * Sample: "I was walking #relativeTime#"
   */
  relativeTime: [
    '#relativeDay# #timeOfDay#',
    '#relativeDay# #timeOfDay#',
    'yesterday around lunchtime',
    'yesterday after breakfast',
    'the other day',
    'last night',
  ],
  
  /**
   * Sample: "I was coming back from #location#"
   */
  location: [
    'the green',
    'the allotment',
    'work',
    'Sinoma Forest',
    'the beach',
    'the old memorial statue',
    'the market',
  ],
  
  /**
   * Sample: "I was picking some #flowers#"
   */
  flowers: [
    'roses',
    'gardenias',
    'posies',
    'daises',
    'tulips',
    'bluebells',
  ],
  
  /**
   * Sample: "I was #activity#"
   */
  activity: [
    'picking some #flowers# at #location# #relativeTime#',
    'picking some #flowers# at #location#',
    'tending to the #flowers# #relativeTime#',
    'tending to the #flowers#',
    'selling #flowers# down by #location# #relativeTime#',
    'selling #flowers# down by #location#',
    'meeting a friend at #location# #relativeTime#',
    'meeting a friend at #location#',
    'walking past #location# #relativeTime#',
    'walking past #location#',
    'on the way back from #location# #relativeTime#',
    'on the way back from #location#',
    'going to #location# #relativeTime#',
    'going to #location#',
  ],

  /**
   * Sample: "Jaden Dion said that they #suspiciousHouseActivity#"
   */
  suspiciousHouseActivity: [
    'saw smoke rising from the chimney and firelight flickering through a second floor window',
    'heard somebody talking inside, as if somebody were living there',
    'saw freshly delivered milk on the door stop',
    'heard somebody say they saw somebody moving their things in',
    'thought they could see somebody walking about inside',
    'heard somebody had moved in',
  ],

  // Mixins
}, names);