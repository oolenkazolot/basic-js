const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(revers) {
    this.revers = revers === false ? true : false;
    this.en = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    let res = [];
    message = message.toUpperCase();
    key = key.toUpperCase();
    let j = 0;
    for (let i = 0; i < message.length; i++) {
      const char = message[i];
      const charIndex = this.en.indexOf(char);
      if (charIndex === -1) {
        res.push(char);
        continue;
      }
      const k = Math.floor(j / key.length);
      const charKey = key[j - k * key.length];
      const keyIndex = this.en.indexOf(charKey);
      const kR = Math.floor((charIndex + keyIndex) / this.en.length);
      const newChar = this.en[charIndex + keyIndex - kR * this.en.length];
      j++;
      res.push(newChar);
    }

    return this.revers ? res.reverse().join('') : res.join('');
  }
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    let res = [];
    const message = encryptedMessage.toUpperCase();

    key = key.toUpperCase();
    let j = 0;
    for (let i = 0; i < message.length; i++) {
      const char = message[i];
      const charIndex = this.en.indexOf(char);
      if (charIndex === -1) {
        res.push(char);
        continue;
      }
      const k = Math.floor(j / key.length);
      const charKey = key[j - k * key.length];
      const keyIndex = this.en.indexOf(charKey);
      const kR = Math.floor((charIndex - keyIndex) / this.en.length);
      const newChar = this.en[charIndex - keyIndex - kR * this.en.length];
      j++;
      res.push(newChar);
    }

    return this.revers ? res.reverse().join('') : res.join('');
  }
}

module.exports = {
  VigenereCipheringMachine,
};
