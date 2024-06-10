class Card {
  constructor(
    { name, link, _id, isLiked },
    cardSelector,
    handleImageClick,
    handleDeleteCardClick,
    handleLikeClick
  ) {
    this._name = name;
    this._link = link;
    this._id = _id;
    this.isLiked = isLiked;
    this._cardSelector = cardSelector;
    this._handleImageClick = handleImageClick;
    this._handleDeleteCardClick = handleDeleteCardClick;
    this._handleLikeClick = handleLikeClick;
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._handleLikeClick(this);
    });

    this._deleteButton.addEventListener("click", () => {
      this._handleDeleteCardClick(this);
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

  renderLikes() {
    if (this.isLiked) {
      this._likeButton.classList.add("card__like-button_active");
    } else {
      this._likeButton.classList.remove("card__like-button_active");
    }
  }

  // handleLikeIcon() {
  //   this._isLiked = !this._isLiked;
  //   this._likeButton.classList.toggle("card__like-button_active");
  // }

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
