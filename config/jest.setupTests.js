/**
 * Emulate reach/router globally
 */
jest.mock('@reach/router', () => ({
  ...jest.requireActual('@reach/router'),
  useLocation: jest.fn()
}));
