import { request } from './api';

jest.mock('./api', () => ({
  __esModule: true,
  request: jest.fn(),
}));

describe('Sample test', () => {
  it('should work one', async () => {
    (request as jest.Mock).mockResolvedValueOnce('hello');
    const data = await request({} as any);
    expect(data).toBe('hello');
  });

  it('should work two', async () => {
    (request as jest.Mock).mockResolvedValueOnce('hi');
    const data = await request({} as any);
    expect(data).toBe('hi');
  });
});
