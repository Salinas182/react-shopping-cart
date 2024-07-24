import { render, screen, fireEvent } from '@testing-library/react';
import Input from '../../components/Input';

describe('Input Component', () => {
  it('should render the component with the correct label and placeholder, if any', () => {
    const mockProps = {
      name: 'username',
      label: 'Username',
      placeholder: 'Enter your username',
      styles: {
        inputGroup: 'input-group',
        tooltip: 'tooltip',
      },
    };

    render(<Input fieldProps={mockProps} />);

    expect(screen.getByLabelText('Username')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your username')).toBeInTheDocument();
  });

  it('should render the tooltip when provided', () => {
    const mockProps = {
      name: 'email',
      label: 'Email',
      tooltipLabel: 'Enter a valid email address',
      styles: {
        inputGroup: 'input-group',
        tooltip: 'tooltip',
      },
    };

    render(<Input fieldProps={mockProps} />);

    expect(screen.getByText('Enter a valid email address')).toBeInTheDocument();
  });

  it('should call onChange when the input value changes', () => {
    const handleChange = jest.fn();
    const mockProps = {
      name: 'password',
      label: 'Password',
      defaultValue: '',
      onChange: handleChange,
      styles: {
        inputGroup: 'input-group',
        tooltip: 'tooltip',
      },
    };

    render(<Input fieldProps={mockProps} />);
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'newPassword' } });

    expect(handleChange).toHaveBeenCalled();
  });

  it('should render the input with the correct type', () => {
    const mockProps = {
      name: 'password',
      type: 'password',
      label: 'Password',
      styles: {
        inputGroup: 'input-group',
        tooltip: 'tooltip',
      },
    };

    render(<Input fieldProps={mockProps} />);
    expect(screen.getByLabelText('Password')).toHaveAttribute('type', 'password');
  });
});
