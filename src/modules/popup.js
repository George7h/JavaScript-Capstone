const popUpWindow = document.querySelector('.popSection');

popUpWindow.innerHTML = `
<div class="popupContainter">
<div class="closeBtn">
  <span id="closePop" class="material-symbols-outlined">
    cancel
    </span>
</div>



  <img src="${episode.image.original}" alt="${episode.name}">
  <h2>${episode.name}</h2>


  
  <ul class="description">
    <li><strong>Summary</strong>: ${episode.summary}</li>
    <li><strong>No. of Seasons</strong>: ${episode.season}</li>
    <li><strong>Rating</strong>: ${episode.rating.average}</li>
  </ul>

  <section class="comment-box">
  <h2>Comments (<span class="comment-counter">0</span>)</h2>
  <section class="comment-section">
  </section>

  <h2>Add a Comment</h2>
  <form data-index="${index}" class="comment-form">
    <input type="text" name="name" id="name" placeholder="Your name" required="">
    <textarea col="30" rows="10" name="insights" placeholder="Your insights" required=""></textarea>
    <input type="submit" value="Comment">
  </form>
</section>


</div>`;