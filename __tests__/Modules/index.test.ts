import HelloWorld from '../../src/Modules/main';

describe('Hello World', () => {
  it('should returns hello world', () => {
    const hello = HelloWorld();

    expect(hello).toBe('Hello world');
  });
});
