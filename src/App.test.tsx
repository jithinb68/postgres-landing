import { render, screen } from '@testing-library/react';
import App from './App';

test('renders entire App', () => {
  render(<App />);
  const linkElement = screen.getByText(/GraphQL API for PostgreSQL Instantly!/i);
  expect(linkElement).toBeInTheDocument();
});
