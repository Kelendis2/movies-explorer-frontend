export default class Api {
  constructor({ baseUrl}) {
    this._baseUrl = baseUrl;
  }
  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  register = ({ name, email, password, }) => {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      credentials: 'include',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    }).then(this._getResponseData);
  };

  authorize = (email, password) => {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      credentials: 'include',
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then(this._getResponseData);
  };

  getSavedMovies() {
    return fetch(`${this._baseUrl}/saved-movies`, {
      method: "GET",
      credentials: 'include',
      headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        "Content-Type": "application/json",
      }
    }).then(this._getResponseData);
    }

  saveMovie(movie) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      credentials: 'include',
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie),
    });
  }
  deleteMovie(movieId) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: "DELETE",
      credentials: 'include',
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
      }
    });
  }

  getProfile() {
    return fetch(`${this._baseUrl}/profile`, {
      method: "GET",
      credentials: 'include',
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
      },
    });
  }
  udateProfile({ name, email }) {
    return fetch(`${this._baseUrl}/profile`, {
      method: "PATH",
      credentials: 'include',
      headers: {
        authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    }).then(this._getResponseData);
  }
}
export const api = new Api({
  baseUrl: "http://localhost:3000",
  //baseUrl: "https://api.movies.kelendis.nomoreparties.co/",
});
