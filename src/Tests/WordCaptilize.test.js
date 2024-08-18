const { capitalizeEveryWord } = require("../Util/WordCaptilize");

test('capitalize every word', () => {
    expect(capitalizeEveryWord('hello world')).toBe('Hello World');
})