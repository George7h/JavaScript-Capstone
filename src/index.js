import fetchShows from './modules/hitApi.js';

import './index.css';


const showContainer = document.getElementById('show-container');


document.addEventListener('DOMContentLoaded', async () => {
  const shows = await fetchShows();
  shows.forEach(async (show) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${show.image.medium}" alt="${show.name}">
      <p>${show.name}</p>
      <button class="like-button">Like</button>
      <div class="like-count">Likes: 0</div>
    `;


    showContainer.appendChild(card);
  });
});
