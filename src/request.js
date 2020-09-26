

 const API_KEY='3cdba3a392000ba80cd5eaceb130e6da';
const requests={
      fetchTrending: `/movie/popular?api_key=${API_KEY}&language=en-US`,
     fetchNetflixOriginals: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
     fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
      fetchActionMovies: `/discover/movie?api_key=${API_KEY} &with_genres=28`,
      fetchComedyMovies: `/discover/movie?api_key=${API_KEY} &with_genres=35`,
       fetchHorrorMovies: `/discover/movie?api_key=${API_KEY} &with_genres=27`,
      fetchRomanceMovies: `/discover/movie?api_key=${API_KEY} &with_genres=10749`,
       fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`,

 
 }
export default requests;
///discover/movie?api_key=%24%7BAPI_KEY%7D%20&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1
