import fetchmetaData from './mazeapi.js';

const itemCounter = async () => {
  const amountOfSeries = await fetchmetaData();

  const allSeries = document.getElementById('countSeries');
  allSeries.innerHTML = amountOfSeries.length;
};

export default itemCounter;