// import commentsCounter from './commentsCounter.js';
// import displayComments from './displayComments.js';
// import postComments from './postComments.js';

export default function displayMetaData(displayData) {
  const showSection = document.getElementById('mainContainer');

  displayData.forEach((card) => {
    const div = document.createElement('div');
    div.className = 'shows';

    const imageElement = document.createElement('img');
    imageElement.src = card.image.medium;
    const UI = document.createElement('div');
    UI.innerHTML = `${card.name}`;
    const commentsButton = document.createElement('button');
    commentsButton.className = 'comments';
    commentsButton.innerHTML = 'Comments';

    // Add event listener to commentsButton
    const popupModal = document.querySelector('.popupContainter');
    commentsButton.addEventListener('click', () => {
      popupModal.classList.add('active');
    });

    // Close popup
    const xBtn = document.getElementById('closePop');
    xBtn.addEventListener('click', () => {
      popupModal.classList.remove('active');
    });

    div.appendChild(imageElement);
    div.appendChild(UI);
    div.appendChild(commentsButton);

    showSection.appendChild(div);
  });
}