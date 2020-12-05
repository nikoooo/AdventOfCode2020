var count = require('./index');

describe('Count hits', () => {
  it('should hit 3', () => {
    expect(count()).toBe(3);
  });
});