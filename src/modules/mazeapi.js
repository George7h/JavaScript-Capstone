const fetchmetaData = async () => {
  const url = 'https://api.tvmaze.com/shows';
  const response = await fetch(url);
  const data = await response.json();

  const showData = data.map((shows) => ({
    id: shows.id,
    name: shows.name,
    image: shows.image,
    rating: shows.rating,
    summary: shows.summary,
    season: shows.season,
    airdate: shows.airdate,
  }));

  return showData;
};

export default fetchmetaData;
