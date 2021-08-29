export default class Api {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }

  _responce(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`error - ${res.status}`);
  };

  updateAvatar(avatar) {
    return fetch(`${this._url}/users/me/avatar`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          avatar: avatar
        })
      })
      .then(this._responce)
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
        method: 'GET',
        headers: this._headers
      })
      .then(this._responce)
  }

  getInfoUser() {
    return fetch(`${this._url}/users/me`, {
        method: 'GET',
        headers: this._headers
      })
      .then(this._responce)
  }

  setInfoUser(name, occupation, avatar) {
    return fetch(`${this._url}/users/me`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          name: name,
          about: occupation,
          avatar: avatar
        })
      })
      .then(this._responce)
  }

  generateNewCard(name, link) {
    return fetch(`${this._url}/cards`, {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({
          name: name,
          link: link
        })
      })
      .then(this._responce)
  }

  setLikeCard(id) {
    return fetch(`${this._url}/cards/likes/${id}`, {
        method: 'PUT',
        headers: this._headers,
      })
      .then(this._responce)
  }

  removeLikeCard(id) {
    return fetch(`${this._url}/cards/likes/${id}`, {
        method: 'DELETE',
        headers: this._headers,
      })
      .then(this._responce)
  }
  deleteCard(id){
    return fetch(`${this._url}/cards/${id}`,{
      method: 'DELETE',
      headers: this._headers,
    })
    .then(this._responce)
  }
}