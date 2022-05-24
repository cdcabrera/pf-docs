const { liveCodeTypes } = require('../liveCodeTypes');

describe('LiveCodeTypes', () => {
  it('should return a specific list', () => {
    expect(liveCodeTypes).toMatchSnapshot('list');
  });
});
