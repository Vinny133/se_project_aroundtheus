import Card from "../components/card.js";
// import FormValidator from "../components/FormValidator";

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

// Elements

const profileEditBtn = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const addCardModal = document.querySelector("#add-card-modal");
const previewImageModal = document.querySelector("#preview-image-modal");
const profileModalClose = profileEditModal.querySelector(
  "#profile-modal-close"
);
const addCardModalClose = addCardModal.querySelector("#add-card-modal-close");
const previewModalClose = previewImageModal.querySelector(
  "#preview-modal-close"
);
const previewImageEl = document.querySelector(".card__preview-image");
const previewNameEl = document.querySelector(".modal__preview-name");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

const profileEditForm = profileEditModal.querySelector(".modal__form");
const addCardForm = addCardModal.querySelector(".modal__form");
const cardListEl = document.querySelector(".cards__list");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

const addNewCardButton = document.querySelector(".profile__add-button");

const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const cardTitleInput = addCardForm.querySelector("#add-place-title-input");
const cardUrlInput = addCardForm.querySelector("#add-place-url-input");

const closeButtons = document.querySelectorAll(".modal__close");

const cardData = {
  name: "Yosemite Valley",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
};

const card = new Card(cardData, "#card-template");
cardListEl.prepend(card.getView());

// Functions

function closePopUp(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keyup", handleEsc);
}

function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keyup", handleEsc);
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardNameEl = cardElement.querySelector(".card__name");
  // const likeButton = cardElement.querySelector(".card__like-button");
  // const deleteButton = cardElement.querySelector(".card__delete-button");

  // deleteButton.addEventListener("click", handleDeleteIcon);

  cardImageEl.addEventListener("click", () => {
    openModal(previewImageModal);
    previewNameEl.textContent = cardData.name;
    previewImageEl.alt = cardData.name;
    previewImageEl.src = cardData.link;
  });

  // likeButton.addEventListener("click", handleLikeIcon);

  cardNameEl.textContent = cardData.name;
  cardImageEl.alt = cardData.name;
  cardImageEl.src = cardData.link;
  return cardElement;
}

function renderCard(cardData, wrapper) {
  const cardElement = getCardElement(cardData);
  wrapper.prepend(cardElement);
}

// Event Handlers

function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopUp(profileEditModal);
}

function handleAddCardSubmit(e) {
  e.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  renderCard({ name, link }, cardListEl);
  e.target.reset();
  closePopUp(addCardModal);
}

const handleEsc = (evt) => {
  evt.preventDefault();
  isEscEvent(evt, closePopUp);
};

// const handleLikeIcon = (evt) => {
//   evt.target.classList.toggle("card__like-button_active");
// };

// const handleDeleteIcon = (evt) => {
//   evt.target.closest(".card").remove();
// };

// Event Listeners

profileEditBtn.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openModal(profileEditModal);
});

profileEditForm.addEventListener("submit", handleProfileEditSubmit);
addCardForm.addEventListener("submit", handleAddCardSubmit);

const modals = document.querySelectorAll(".modal");

modals.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("modal_opened")) {
      closePopUp(popup);
    }
    if (evt.target.classList.contains("modal__close")) {
      closePopUp(popup);
    }
  });
});

const isEscEvent = (evt, action) => {
  if (evt.key === "Escape") {
    const activeModal = document.querySelector(".modal_opened");
    action(activeModal);
  }
};

// Add New Card Button
addNewCardButton.addEventListener("click", () => openModal(addCardModal));

initialCards.forEach((cardData) => renderCard(cardData, cardListEl));
