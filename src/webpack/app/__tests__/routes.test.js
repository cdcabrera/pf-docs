const { setGroupedRoutes } = require('../routes');
const { routes, transformedGroupedRoutes } = require('../../../../__data__/routes.data')

describe('Routes', () => {

  test('Grouped Routes Transformation', () => {
    expect(setGroupedRoutes(routes)).toMatchObject(transformedGroupedRoutes);
  })
});
