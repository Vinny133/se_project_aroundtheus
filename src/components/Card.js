class Card {
  constructor(
    { name, link, id },
    cardSelector,
    handleImageClick,
    handleDeleteCardClick
  ) {
    this._name = name;
    this._link = link;
    this._id = id;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
    this._handleDeleteCardClick = handleDeleteCardClick;
  }

  getId() {
    return this._id;
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._handleLikeIcon();
    });

    this._deleteButton.addEventListener("click", () => {
      this._handleDeleteCardClick();
    });

    this._cardImage.addEventListener("click", () => {
      this._handleImageClick({
        name: this._name,
        link: this._link,
      });
    });

    // this._confirmDelete.addEventListener("click", () => {
    //   this._handleDeleteCard();
    // });
  }

  _handleLikeIcon() {
    this._likeButton.classList.toggle("card__like-button_active");
  }

  handleDeleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  getView() {
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    this._likeButton = this._cardElement.querySelector(".card__like-button");
    this._deleteButton = this._cardElement.querySelector(
      ".card__delete-button"
    );
    this._deleteModal = document.querySelector("#delete-modal");
    this._confirmDelete = this._deleteModal.querySelector(
      ".modal__delete-button"
    );

    this._cardImage = this._cardElement.querySelector(".card__image");

    const cardName = this._cardElement.querySelector(".card__name");

    cardName.textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    this._setEventListeners();

    return this._cardElement;
  }
}

export default Card;
