import { fetchCommentCount } from './commentCounter.js';

describe('fetchCommentCount', () => {
  it('should fetch and return comment count', async () => {
    const itemName = 'exampleItemName';
    const expectedCommentCount = 5;

    const mockedComments = [
      { username: 'user1', comment: 'Great show!', creation_date: '2023-08-01' },
      { username: 'user2', comment: 'I loved it!', creation_date: '2023-08-02' },
      { username: 'user3', comment: 'Awesome!', creation_date: '2023-08-03' },
      { username: 'user4', comment: 'Well done!', creation_date: '2023-08-04' },
      { username: 'user5', comment: 'Impressive!', creation_date: '2023-08-05' },
    ];

    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockedComments),
    });

    const commentCount = await fetchCommentCount(itemName);

    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining(`item_id=${itemName}`),
    );
    expect(commentCount).toEqual(expectedCommentCount);
  });

  it('should handle fetch error and return 0', async () => {
    const itemName = 'exampleItemName';

    global.fetch = jest.fn().mockRejectedValue(new Error('Fetch error'));

    const commentCount = await fetchCommentCount(itemName);

    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining(`item_id=${itemName}`),
    );
    expect(commentCount).toEqual(0);
  });
});
