import './index.css';
import fetchmetaData from './modules/mazeapi.js';
import displayMetaData from './modules/display.js';

const init = async () => {
  const displayData = await fetchmetaData();
  displayMetaData(displayData);
};

init();
