import { renderHook, act } from '@testing-library/react';
import useFormValidation from '../../hooks/useFormValidation';

describe('useFormValidation hook', () => {
  it('should initialize form values correctly', () => {
    const initialValues = { name: '', email: '' };
    const { result } = renderHook(() => useFormValidation(initialValues));

    expect(result.current.formValues).toEqual(initialValues);
  });

  it('should update form values on input change', () => {
    const initialValues = { name: '', email: '' };
    const { result } = renderHook(() => useFormValidation(initialValues));

    act(() => {
      result.current.handleInputChange({ target: { name: 'name', value: 'John Doe' } });
    });

    expect(result.current.formValues.name).toBe('John Doe');
  });

  it('should return true if the form was completed correctly', () => {
    const initialValues = { name: '', email: '' };
    const { result } = renderHook(() => useFormValidation(initialValues));

    act(() => {
      result.current.handleInputChange({ target: { name: 'name', value: 'John Doe' } });
    });

    act(() => {
      result.current.handleInputChange({ target: { name: 'email', value: 'johndoe@gmail.com' } });
    });

    let validation;
    act(() => {
      validation = result.current.validateForm();
    });

    expect(validation.valid).toBe(true);
  });

  it('should return false if any field is empty', () => {
    const initialValues = { name: '', email: '' };
    const { result } = renderHook(() => useFormValidation(initialValues));

    act(() => {
      result.current.handleInputChange({ target: { name: 'name', value: 'John Doe' } });
    });

    let validation;
    act(() => {
      validation = result.current.validateForm();
    });

    expect(validation.valid).toBe(false);
  });
});
