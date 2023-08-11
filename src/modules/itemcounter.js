import fetchShows from './hitApi.js';

const itemCounter = async () => {
  const amountOfSeries = await fetchShows();

  const allSeries = document.getElementById('countSeries');
  allSeries.innerHTML = amountOfSeries.length;
};

export default itemCounter;