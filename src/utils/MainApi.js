export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }
  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }
  createUser({ name, password, email }) {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    }).then(this._getResponseData);
  };
  autorization({ password, email }) {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then(this._getResponseData);
  };
  getSavedMovies(){
    return fetch (`${this._baseUrl}/saved-movies`,{
      method: "GET",
      headers: this._headers,
    })
  }
  saveMovie(movie){
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(movie)
    })
  }
  // deleteMovie()
  // showProfile()
  // udateProfile()
}
export const api = new Api({
  // baseUrl: "https://localhost:3000",
  baseUrl: "https://api.movies.kelendis.nomoreparties.co/",
});
