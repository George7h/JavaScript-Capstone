async function createapp() {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify()
    });

    if (response.ok) {
      const appID = await response.text();
      console.log('New app created with ID:', appID);
    } else {
      console.error('Failed to create new app.');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

createapp();

//App id : XgSataEYPyY1k6p4lDdg

const uniqueAppId = async () => {
  if (localStorage.getItem('uniqueAppId')) {
    return localStorage.getItem('uniqueAppId');
  }
  const newAppId = await createApp();
  return newAppId;
};

export default uniqueAppId;

