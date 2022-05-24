const { slugger, makeSlug } = require('../slugger');

describe('Slugger', () => {
  it('should makeSlug', () => {
    expect(makeSlug('Lorem source', 'Ipsum section', 'Dolor ID')).toMatchSnapshot('makeSlug');
  });

  it('should slugger', () => {
    expect(slugger(['Lorem ipsum', 'Dolor sit'])).toMatchSnapshot('slugger');
  });
});
