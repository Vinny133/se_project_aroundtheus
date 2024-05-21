import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
    this._image = this._popupElement.querySelector(".card__preview-image");
    this._caption = this._popupElement.querySelector(".modal__preview-name");
  }

  open(data) {
    this._image.setAttribute("src", data.link);
    this._image.setAttribute("alt", data.name);
    this._caption.textContent = data.name;
    super.open();
  }
}
