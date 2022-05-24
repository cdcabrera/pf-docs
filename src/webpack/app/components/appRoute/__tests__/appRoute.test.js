import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { AppRoute } from '../appRoute';

describe('AppRoute', () => {
  it('should render a basic component', () => {
    const { container } = render(<AppRoute child="Lorem ipsum" />);
    expect(container).toMatchSnapshot('basic');
  });
});
