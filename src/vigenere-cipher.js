const CustomError = require("../extensions/custom-error");

const ASCII_FIRST_CODE = 65;
const ASCII_LAST_CODE = 90;
const ALPHABET_LENGTH = 26;

const makeCode = function(type, isDirect, message, key) {
  if (arguments.length < 2) {
    throw new Error('Pass two arguments');
  } else {

  let result = '';
  let keyLetterOrdinal = 0;

  const upperMessage = message.toUpperCase();
  const upperKey = key.toUpperCase();

  for (let i = 0; i < upperMessage.length; i++) {
    if (upperMessage[i].charCodeAt() < ASCII_FIRST_CODE || upperMessage[i].charCodeAt() > ASCII_LAST_CODE) {
      result += upperMessage[i];
      continue;
    }

    const keyLetterCode = upperKey[keyLetterOrdinal % upperKey.length].charCodeAt();
    const messageLetterCode = upperMessage[i].charCodeAt();
    const newLetter = type === 'encrypt'
      ? String.fromCodePoint(((keyLetterCode + messageLetterCode) % ALPHABET_LENGTH) + ASCII_FIRST_CODE)
      : String.fromCodePoint(((messageLetterCode - keyLetterCode + ALPHABET_LENGTH) % ALPHABET_LENGTH) + ASCII_FIRST_CODE);

    keyLetterOrdinal += 1;
    result += newLetter;
  }

  return isDirect ? result : result.split('').reverse().join('');
  }
}

class VigenereCipheringMachine {
  constructor(isDirect) {
    this.isDirect = isDirect === false ? isDirect : true;
  }

  encrypt(message, key) {
    return makeCode('encrypt', this.isDirect, message, key);
  }

  decrypt(message, key) {
    return makeCode('decrypt', this.isDirect, message, key);
  }
}

module.exports = VigenereCipheringMachine;
