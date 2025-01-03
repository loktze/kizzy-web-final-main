import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Welcome to Page 1 text', () => {
  render(<App />);
  const headingElement = screen.getByText(/Welcome to Page 1/i);
  expect(headingElement).toBeInTheDocument();
});
