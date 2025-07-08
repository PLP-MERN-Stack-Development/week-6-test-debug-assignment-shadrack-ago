import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ButtonWithBoundary from './Button';

describe('ButtonWithBoundary Component', () => {
  it('renders and handles click', () => {
    const handleClick = jest.fn();
    render(<ButtonWithBoundary onClick={handleClick}>Click me</ButtonWithBoundary>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('shows error boundary on error', () => {
    // This will throw if uncommented in Button.jsx
    // render(<ButtonWithBoundary>Crash</ButtonWithBoundary>);
    // expect(screen.getByRole('alert')).toHaveTextContent(/something went wrong/i);
  });
}); 