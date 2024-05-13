// import { modals } from "../pages/index.js";

export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
  }

  open() {
    this._popupElement.classList.add("modal_opened");
    document.addEventListener("keyup", this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove("modal_opened");
    document.removeEventListener("keyup", this._handleEscClose);
  }

  _handleEscClose(e) {
    if (e.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    // this._popupElement.forEach((popup) => {
    //   popup.addEventListener("mousedown", (evt) => {
    //     if (evt.target.classList.contains("modal_opened")) {
    //       popup.close();
    //       console.log("pop up closed!");
    //     }
    //     if (evt.target.classList.contains("modal_close")) {
    //       popup.close();
    //       console.log("pop up closed!");
    //     }
    //   });
    // });
    this._popupElement.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("modal_opened")) {
        this.close();
      }
    });

    this._popupElement.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("modal_close")) {
        this.close();
      }
    });

    this._popupElement.addEventListener("click", () => {
      this.open();
    });
  }
}
