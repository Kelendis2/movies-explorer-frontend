const EMAIL_VALID = /^\S+@\S+\.\S+$/;
const BASE_MOVIE_URL = "https://api.nomoreparties.co/beatfilm-movies";
const BASE_MYAPI_URL = "https://api.movies.kelendis.nomoreparties.co";
const BASE_IMAGE_URL = "https://api.nomoreparties.co";


const EEROR_MOVIE = "Ошибка при удалении фильма:";
const ERROR_NOT_MOVIE = "Не удалось найти id фильма для удаления.";
const SECSESS_UPDATE_PROFILE = "Профиль успешно обновлен";
module.exports = {
  EMAIL_VALID,
  BASE_MOVIE_URL,
  BASE_MYAPI_URL,
  EEROR_MOVIE,
  ERROR_NOT_MOVIE,
  SECSESS_UPDATE_PROFILE,
  BASE_IMAGE_URL
};
