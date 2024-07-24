import mockAxios from 'axios';
import httpAdapter from '../../adapters/httpAdapter';

describe('httpAdapter', () => {
  it('should make a GET request with correct URL and params', async () => {
    const url = '/test-url';
    const params = { param1: 'value1' };
    const mockResponse = { data: { success: true } };

    mockAxios.get = jest.fn(() => mockResponse);
    const response = await httpAdapter.get(url, params);

    expect(mockAxios.get).toHaveBeenCalledWith(url, { params });
    expect(response).toEqual(mockResponse);
  });
});
