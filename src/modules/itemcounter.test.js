import itemCounter from './itemcounter.js';
import fetchmetaData from './mazeapi.js';

const { JSDOM } = require('jsdom');

jest.mock('./mazeapi.js', () => ({
  __esModule: true,
  default: jest.fn(),
}));

beforeEach(() => {
  const dom = new JSDOM();
  global.document = dom.window.document;
});

test('Count items in DOM', async () => {
  fetchmetaData.mockResolvedValue([{}, {}, {}, {}, {}]);

  document.body.innerHTML = '<div id="countSeries"></div>';

  await itemCounter();

  const allSeriesCount = document.getElementById('countSeries');
  expect(allSeriesCount.innerHTML).toBe('5');
});

test('Test if there is an empty array', async () => {
  fetchmetaData.mockResolvedValue([]);

  document.body.innerHTML = '<div id="countSeries"></div>';

  await itemCounter();

  const allSeriesCount = document.getElementById('countSeries');
  expect(allSeriesCount.innerHTML).toBe('0');
});
