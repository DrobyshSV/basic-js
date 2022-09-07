const {NotImplementedError} = require('../extensions/index.js');

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
/*Формула кодировки С = (M + K) mod N
C - индекс зашифрованной буквы (от mod N - массив алфавита)
M - индекс исходной буквы (от mod N - массив алфавита)
K - индекс  буквы ключа (от mod N - массив алфавита)
Исходный текст:       ATTACKATDAWN
Ключ:                 LEMONLEMONLE - ключ повторяется на всю длину исходного текста(без пробелов и др символов)
Зашифрованный текст:  LXFOPVEFRNHR*/


class VigenereCipheringMachine {

    latinAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    constructor(bool = true) {
        this.directionOfMachine = bool
    }

    isValidate (message,key) {
        if (message === undefined || key === undefined) {
            throw new Error(("Incorrect arguments!"))
        }
    }

    getDoubleMessage(message,key) {
        let keyIndex = 0;
        this.message = message.toUpperCase().split('').map(t=> {
            if(!this.latinAlphabet.includes(t)) {
                return t
            } else {
                if(keyIndex === key.length) {
                    keyIndex = 0
                }
                t = [...t, key[keyIndex].toUpperCase()];
                keyIndex++
                return t
            }
        })
        return this.message
    }

    returnResult(result) {
        if(this.directionOfMachine) {
            return this.result.join('')
        } else {
            return this.result.reverse().join('')
        }
    }

    encrypt(message, key) {
        this.isValidate(message,key)
        this.message = this.getDoubleMessage(message,key)
        this.result = this.message.map(t=> {
            if (this.latinAlphabet.includes(t[0])) {

                this.c = this.latinAlphabet.indexOf(t[0]) + this.latinAlphabet.indexOf(t[1]);
                console.log(this.c)
                if (this.c < this.latinAlphabet.length) {
                    return this.latinAlphabet[this.c]
                } else {
                    this.c = this.c - this.latinAlphabet.length
                    return this.latinAlphabet[this.c]
                }
            } else {
                return t[0]
            }
        })
        return this.returnResult(this.result)
    }

    decrypt(message, key) {
        this.isValidate(message,key)
        this.message = this.getDoubleMessage(message,key)
        this.result = this.message.map(t=> {
            if (this.latinAlphabet.includes(t[0])) {
                this.m = this.latinAlphabet.indexOf(t[0]) - this.latinAlphabet.indexOf(t[1]);
                if (this.m < 0) {
                    this.m = this.m + this.latinAlphabet.length
                    return this.latinAlphabet[this.m]
                } else {
                    return this.latinAlphabet[this.m]
                }
            } else {
                return t[0]
            }
        })
        return this.returnResult(this.result)
    }
}

module.exports = {
    VigenereCipheringMachine
};
