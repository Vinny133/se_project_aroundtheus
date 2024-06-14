import Popup from "./Popup.js";

export default class PopupDelete extends Popup {
  constructor(popupSelector, handleDeleteClick) {
    super({ popupSelector });
    this._deleteButton = this._popupElement.querySelector(
      ".modal__delete-button"
    );
    this._handleDeleteClick = handleDeleteClick;
  }

  setEventListeners() {
    super.setEventListeners();
    this._deleteButton.addEventListener("click", this._handleDeleteClick);
  }
}
