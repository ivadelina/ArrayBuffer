/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import ArrayBufferConverter from './app.js';
import getBuffer from './getBuffer.js';


test('Turn to data', () => {
  const classTest = new ArrayBufferConverter(getBuffer());
  const result = classTest.toString();
  expect(result).toEqual('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
