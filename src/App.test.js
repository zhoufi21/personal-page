
import { render, screen } from '@testing-library/react';
import App from './App';

it('renders learn react link', () => {
  render(<App />);
  const footer = screen.getByText("This website has been made completely independently as a personal project by Filippo Zhou.2022©");
  expect(footer).toBeInTheDocument();
});
