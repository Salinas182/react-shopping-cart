import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../../components/Button';

describe('Button Component', () => {
  const mockProps = {
    label: 'mock label',
    styles: {
      buttonContainer: { padding: '10px' },
      button: { backgroundColor: 'blue', color: 'white', padding: '10px' },
    },
    onClick: jest.fn(),
  };

  it('should render the button with the correct label', () => {
    render(<Button {...mockProps} />);
    const buttonElement = screen.getByText(/mock label/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it('should apply the disabled styles when disabled', () => {
    render(<Button {...mockProps} disabled />);
    const buttonElement = screen.getByText(/mock label/i);
    expect(buttonElement).toHaveStyle('cursor: not-allowed');
    expect(buttonElement).toHaveStyle('background-color: grey');
  });

  it('should call onClick when clicked and not disabled', () => {
    render(<Button {...mockProps} />);
    const buttonElement = screen.getByText(/mock label/i);
    fireEvent.click(buttonElement);
    expect(mockProps.onClick).toHaveBeenCalledTimes(1);
  });

  it('should not call onClick when disabled', () => {
    render(<Button {...mockProps} disabled />);
    const buttonElement = screen.getByText(/mock label/i);
    fireEvent.click(buttonElement);
    expect(mockProps.onClick).not.toHaveBeenCalled();
  });
});
