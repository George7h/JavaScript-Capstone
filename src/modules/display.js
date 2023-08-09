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

    div.appendChild(imageElement);
    div.appendChild(UI);
    div.appendChild(commentsButton);

    showSection.appendChild(div);
  });
}