const { capitalize } = require('../capitalize');

describe('Capitalize', () => {
  it('should capitalize', () => {
    expect(capitalize('lorem ipsum dolor sit')).toMatchSnapshot('capitalize');
  });
});
