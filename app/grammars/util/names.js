/**
 * Names mixin. Mix into a grammar to get access to #names# fragment
 * Generates realistic-sounding names
 */
export default {
  name: [
    '#startFragment.capitalize##bodyFragment#',
    '#startFragment.capitalize##bodyFragment##bodyFragment#',
  ],

  startFragment: [
    '#hardLetter##vowel#',
    '#hardLetter#l#vowel#',
    '#hardLetter#r#vowel#',
    '#softLetter##vowel#',
  ],
  bodyFragment: [
    '#hardLetter##vowel##softLetter##vowel#',
    '#hardLetter##softLetter##vowel#',
    '[leadingLetter:#hardLetter#]#leadingLetter##leadingLetter##vowel#',
    '#vowel##vowel##softLetter#',
    '#vowel##softLetter##vowel#',
  ],
  
  // Letters
  vowel: [
    'a',
    'e',
    'i',
    'o',
    'u',
  ],

  softLetter: [
    'f',
    'h',
    'j',
    'l',
    'm',
    'n',
    'r',
    's',
    'v',
    'w',
    'y',
    'z',
  ],

  hardLetter: [
    'b',
    'd',
    'k',
    'p',
    't',
  ],

  ambiguousLetter: [
    'c',
    'g',
    'q',
    'x',
  ],
};