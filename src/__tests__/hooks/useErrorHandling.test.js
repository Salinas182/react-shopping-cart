import { renderHook, act } from '@testing-library/react';
import useErrorHandling from '../../hooks/useErrorHandling';

describe('useErrorHandling hook', () => {
  it('should initialize with no error', () => {
    const { result } = renderHook(() => useErrorHandling());

    expect(result.current.error).toBeNull();
  });

  it('should update the error state when handleError is called', () => {
    const mockError = new Error('Mock error');

    const { result } = renderHook(() => useErrorHandling());

    act(() => {
      result.current.handleError(mockError);
    });

    expect(result.current.error).toBe(mockError);
  });
});
