import './index.css';
import fetchmetaData from './modules/mazeapi.js';
import displayMetaData from './modules/display.js';
import itemCounter from './modules/itemcounter.js';

const appId = 'XgSataEYPyY1k6p4lDdg';

const init = async () => {
  const displayData = await fetchmetaData();
  displayMetaData(displayData);
  itemCounter();

  // Fetch and update like counts for each show
  await Promise.all(displayData.map(async (card) => {
    const likeCountElement = document.getElementById(card.id);
    const likesResponse = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`);
    const likesData = await likesResponse.json();

    const showLikes = likesData.find((item) => item.item_id === card.id);
    if (showLikes) {
      likeCountElement.textContent = showLikes.likes;
    }
  }));
};

init();
