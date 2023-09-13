const EMAIL_VALID = /^\S+@\S+\.\S+$/;
const BASE_MOVIE_URL = "https://api.nomoreparties.co/";
const BASE_MYAPI_URL = "https://api.movies.kelendis.nomoreparties.co";
const SCREEN_WIDTH = window.innerWidth;

const EEROR_MOVIE = "Ошибка при удалении фильма:";
const ERROR_NOT_MOVIE = "Не удалось найти id фильма для удаления.";
const SECSESS_UPDATE_PROFILE = "Профиль успешно обновлен";
module.exports = {
  EMAIL_VALID,
  BASE_MOVIE_URL,
  BASE_MYAPI_URL,
  SCREEN_WIDTH,
  EEROR_MOVIE,
  ERROR_NOT_MOVIE,
  SECSESS_UPDATE_PROFILE,
};
