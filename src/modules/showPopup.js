import fetchAndDisplayComments from './fetchDisplayComment.js';
import submitComment from './submitComment.js';
import updateCommentCount from './commentCounter.js';

const popupContent = document.getElementById('popup-content');
const popupContainer = document.getElementById('popup-container');

const showPopup = async (info) => {
  popupContent.innerHTML = `
  <div>
  <span id="closeBut" class="material-symbols-outlined closeBut"> cancel </span>
  </div>
    <img src="${info.image.medium}" alt="${info.name}">
    <h2>${info.name}</h2>
    <p>${info.summary}</p>
    <p>Language: ${info.language}</p>
    <p>Ratings: ${info.rating.average}</p>
    
    <form id="comment-form">
      <label for="username">Your Name:</label>
      <input type="text" id="username" required><br>
      <label for="comment">Comments:</label>
      <textarea id="comment" rows="4" required></textarea><br>
      <button type="submit">Submit Comment</button>
    </form>
    
    <div id="comments-container"></div>
    <div id="comment-count"></div>
    
    
  `;
  popupContainer.style.display = 'flex';

  await fetchAndDisplayComments(info.name);

  const commentForm = document.getElementById('comment-form');

  commentForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    await submitComment(info);
    await fetchAndDisplayComments(info.name);
    await updateCommentCount(info.name);
    document.getElementById('username').value = '';
    document.getElementById('comment').value = '';
  });
  popupContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('closeBut')) {
      popupContainer.style.display = 'none';
    }
  });
};

export default showPopup;