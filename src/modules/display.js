import postLikeCount from "./postLikeCount.js";
import { appId } from "./postLikeCount.js";

export default function displayMetaData(displayData) {
  const showSection = document.getElementById('mainContainer');

  displayData.forEach((card) => {
    const div = document.createElement('div');
    div.className = 'shows';

    const imageElement = document.createElement('img');
    imageElement.src = card.image.medium;

    const UI = document.createElement('div');
    UI.innerHTML = `
      <div class="contain">
        ${card.name}
        <span class="material-symbols-outlined thumb-icon" id="thumb_${card.id}">thumb_up</span>
      </div>
      Likes: <span id='${card.id}' class="like-count">0</span>
    `;

    const commentsButton = document.createElement('button');
    commentsButton.className = 'comments';
    commentsButton.innerHTML = 'Comments';

    div.appendChild(imageElement);
    div.appendChild(UI);
    div.appendChild(commentsButton);

    showSection.appendChild(div);

    // Thumbs-up icon click event
    const thumbUpIcon = UI.querySelector(`#thumb_${card.id}`);
    thumbUpIcon.addEventListener('click', async () => {
      const likeCountElement = UI.querySelector('.like-count');
      const currentLikes = parseInt(likeCountElement.textContent, 10);

      if (thumbUpIcon.style.color === 'blue') {
        // Remove like
        thumbUpIcon.style.color = 'black';
        likeCountElement.textContent = currentLikes - 1;

        // Call the function to post the updated like count to the API
        await postLikeCount(appId, card.id, currentLikes - 1);
      } else {
        // Add like
        thumbUpIcon.style.color = 'blue';
        likeCountElement.textContent = currentLikes + 1;

        // Call the function to post the updated like count to the API
        await postLikeCount(appId, card.id, currentLikes + 1);
      }
    });
  });
}
