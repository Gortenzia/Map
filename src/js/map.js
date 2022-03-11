export default class ErrorRepository {
  constructor() {
    this.map = new Map([
      ['404', 'Bad Request'],
      ['505', 'Server Error'],
    ]);
  }

  translate(code) {
    if (this.map.get(code)) {
      return this.map.get(code);
    }
    return 'Unknown error';
  }
}
