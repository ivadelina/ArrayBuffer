/* eslint-disable linebreak-style */
export default class ArrayBufferConverter {
  constructor(buffer) {
    this.buffer = buffer;
  }

  toString() {
    const dataString = String.fromCharCode(...this.buffer);
    return dataString;
  }
}
