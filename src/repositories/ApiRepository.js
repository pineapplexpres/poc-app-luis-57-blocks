import ApiClient from './clients/ApiClient';

export default {
  getAllMovies() {
    return ApiClient.get('/movies');
  },
  getMoviesByPage(page) {
    return ApiClient.get(`/movies?_page=${page}&_limit=20`);
  },
};