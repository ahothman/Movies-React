import axios from "axios";
const loadData = programType => cb => {
  axios
    .get(
      "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json"
    )
    .then(res => {
      let entries = res.data.entries || [];
      entries = entries
        .filter(s => s.programType === programType && s.releaseYear > 2010)
        .slice(0, 22)
        .sort((a, b) => (a < b ? -1 : 1))
        .map(s => ({
          title: s.title,
          imageUrl: s.images["Poster Art"].url
        }));
      cb(entries);
    });
};

export const loadMovies = loadData("movie");
export const loadSeries = loadData("series");
