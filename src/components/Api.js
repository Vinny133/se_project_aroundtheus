export default class Api {
  constructor({ baseUrl, authToken }) {
    this._baseUrl = baseUrl;
    this._authToken = authToken;
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: this._authToken,
        "Content-Type": "application/json",
      },
    })
      .then((res) =>
        res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
      )
      .catch((err) => {
        console.log(err);
      });
  }

  updateUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this._authToken,
      },
    });
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: {
        authorization: this._authToken,
      },
    })
      .then((res) =>
        res.ok ? res.json() : Promise.reject(`Error: ${res.status}`)
      )
      .catch((err) => {
        console.log(err);
      });
  }

  createCard({ name, link }) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: {
        authorization: this._authToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        link,
      }),
    });
  }
}