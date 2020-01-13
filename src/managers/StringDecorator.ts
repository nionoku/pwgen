import { Service } from 'typedi';

@Service()
export class StringDecorator {
  private stringToDecorate: string = '';

  public decorate (stringToDecorate: string) {
    this.stringToDecorate = stringToDecorate;
    return this;
  }

  /**
   * Метод добавляет в начало строки восклицательный знак
   */
  public appendSpecialCharacter () {
    this.stringToDecorate = `!${this.stringToDecorate}`;
    return this;
  }

  /**
   * Метод заменяет последнюю букву в строке на прописную версию
   */
  public lastLetterToUpperCase () {
    const lastLetter = this.stringToDecorate.match(/[a-z]/g);

    if (lastLetter) {
      const lastLetterIndex = this.stringToDecorate.lastIndexOf(lastLetter[ lastLetter.length - 1 ]);

      this.stringToDecorate = this.stringToDecorate.substring(0, lastLetterIndex)
        + this.stringToDecorate.substr(lastLetterIndex, 1).toUpperCase()
        + this.stringToDecorate.substr(lastLetterIndex + 1);
    }

    return this;
  }

  public result () {
    const tmp = this.stringToDecorate;
    this.stringToDecorate = '';

    return tmp;
  }
}
