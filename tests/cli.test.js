const { setGroupedRoutes } = require('../src/webpack/app/routes');
const routes = {
  '/extensions/quick-starts/Basic-Quick-Starts': {
    id: 'Quick Starts',
    title: 'Quick Starts',
    toc: [
      {
        text: 'Basic Quick Starts Usage EDIT'
      },
      [
        {
          text: 'Catalog Page'
        },
        {
          text: 'Fullscreen Example'
        }
      ]
    ],
    examples: ['Catalog Page'],
    fullscreenExamples: ['Fullscreen Example'],
    section: 'Extensions',
    source: 'Basic-Quick-Starts'
  }
};

const transformedGroupedRoutes = {
  Extensions: {
    'Quick Starts': {
      id: 'Quick Starts',
      section: 'Extensions',
      title: 'Quick Starts',
      slug: '/extensions/quick-starts',
      sources: [
        {
          slug: '/extensions/quick-starts/Basic-Quick-Starts',
          id: 'Quick Starts',
          title: 'Quick Starts',
          toc: [
            {
              text: 'Basic Quick Starts Usage EDIT'
            },
            [
              {
                text: 'Catalog Page'
              },
              {
                text: 'Fullscreen Example'
              }
            ]
          ],
          examples: ['Catalog Page'],
          fullscreenExamples: ['Fullscreen Example'],
          section: 'Extensions',
          source: 'Basic-Quick-Starts'
        }
      ],
      katacodaLayout: undefined,
      hideNavItem: undefined
    }
  }
}

describe('CLI', () => {

  test('Grouped Routes Transformation', () => {
    expect(setGroupedRoutes(routes)).toMatchObject(transformedGroupedRoutes);
  })
});
