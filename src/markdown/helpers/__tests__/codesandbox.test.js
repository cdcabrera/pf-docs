import { getReactParams, getStaticParams, getExampleDeclaration, prettyExampleCode } from '../codesandbox';

describe('Codesandbox', () => {
  it('should getReactParams', () => {
    expect(getReactParams('Lorem ipsum', 'module.exports={}', null, null)).toMatchSnapshot('react params');
  });
});
