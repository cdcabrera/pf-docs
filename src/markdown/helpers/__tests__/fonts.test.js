import * as fonts from "../fonts";

describe('LiveCodeTypes', () => {
  it('should return specific fonts', () => {
    expect(fonts).toMatchSnapshot('fonts');
  });
});
