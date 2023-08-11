export const appId = 'XgSataEYPyY1k6p4lDdg';

export const postLikeCount = async (appId, showId) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ item_id: showId }),
    });

    if (!response.ok) {
      // console.error('Failed to update like count.');
    }
  } catch (error) {
    // console.error('Error:', error);
  }
};

export default postLikeCount;