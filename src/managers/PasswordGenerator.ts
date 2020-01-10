import md5 from 'md5';
import { Service, Inject } from 'typedi';
import { StringDecorator } from './StringDecorator';

@Service(PasswordGenerator.name)
export class PasswordGenerator {
  @Inject(StringDecorator.name)
  private stringDecorator!: StringDecorator;
  constructor () { }

  /**
   * Метод генерирует пароль на основе входных строк
   */
  public generate (strings: Array<string>, length: number): string {
    const mixOfStrings = this.stringFromCharDecompos(strings);
    const mixOfStringsHash = md5(mixOfStrings);
    const shortenHash = this.shortenString(mixOfStringsHash, length);
    // место первого элемента займет декоратор
    const stringWithDecorate = this.stringDecorator
      .decorate(shortenHash.substr(1))
      .lastLetterToUpperCase()
      .appendSpecialCharacter()
      .result();

    const result = stringWithDecorate;

    return result;
  }

  /**
   * Метод укорачивает длину строки до заданной
   * @param {string} original хэш пароля
   */
  private shortenString (original: string, length: number) {
    if (length % 2 != 0)
      throw Error('passwordLength odd number');

    // hash.length - 8 - поскольку минимальная длина пароля - 8 символов
    if (length < 0 || length > original.length - 8)
      throw Error('passwordLength < 0 or > max length');

    return original.substr(Math.ceil((original.length - length) / 2), length);
  }

  /**
   * Метод возвращает строку формата [первый символ первой строки][первый символ второй строки]...
   * ...[второй символ первой строки][второй символ второй строки]...
   */
  private stringFromCharDecompos (strings: Array<string>): string {
    const arrayOfSplitStrings = this.getArrayOfSplitStrings(strings);
    let stringFromCharDecompose = '';

    for (const j in Array.from({ length: this.getMaxLengthOfStrings(arrayOfSplitStrings) })) {
      for (const i in Array.from({ length: arrayOfSplitStrings.length })) {
        stringFromCharDecompose += (arrayOfSplitStrings[ i ][ j ]) ? arrayOfSplitStrings[ i ][ j ] : '';
      }
    }

    return stringFromCharDecompose;
  }

  /**
   * Метод возвращает размер самой длинной входной строки
   */
  private getMaxLengthOfStrings (strings: Array<Array<any>>): number {
    return Math.max(...strings.map(it => it.length));
  }

  /**
   * Метод возвращает массивы символов каждой входной строки
   */
  private getArrayOfSplitStrings (strings: Array<string>): Array<Array<string>> {
    return strings.map(it => it.split(''));
  }
}
