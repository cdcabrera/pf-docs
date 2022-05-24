const anchorHeader = require('../anchor-header');

describe('Anchor-header', () => {
  it('should anchorHeader', () => {
    let updatedValue;
    const callback = anchorHeader(value => updatedValue = value);
    callback({});
    expect(updatedValue).toMatchSnapshot('callback');
  });
});
