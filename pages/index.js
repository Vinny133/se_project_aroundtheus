import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";

const cardListEl = document.querySelector(".cards__list");

const previewImageModal = new PopupWithImage("#preview-image-modal");
previewImageModal.setEventListeners();

const addCardModal = new PopupWithForm(
  "#add-card-modal",
  handleAddCardSubmit()
);
addCardModal.setEventListeners();

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

const previewImageEl = document.querySelector(".card__preview-image");
const previewNameEl = document.querySelector(".modal__preview-name");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

const profileEditForm = profileEditModal.querySelector(".modal__form");
// const addCardModal = document.querySelector("#add-card-modal");
const addCardForm = document.querySelector("#add-card-form");

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

// Functions

function createCard(data) {
  const card = new Card(data, "#card-template", handleImageClick).getView();
  return card;
}

// Event Handlers

function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopUp(profileEditModal);
  profileEditValidator.disableButton();
}

function handleAddCardSubmit(inputValues) {
  console.log(inputValues);
  renderCard({ inputValues });
  // e.target.reset();
  addCardModal.close();
  addCardValidator.disableButton();
}

function handleImageClick(cardData) {
  previewImageModal.open(cardData);
}

// Event Listeners

profileEditBtn.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openModal(profileEditModal);
});

// profileEditForm.addEventListener("submit", handleProfileEditSubmit);
// addCardForm.addEventListener("submit", handleAddCardSubmit);

// const isEscEvent = (evt, action) => {
//   if (evt.key === "Escape") {
//     const activeModal = document.querySelector(".modal_opened");
//     action(activeModal);
//   }
// };

// Add New Card Button
addNewCardButton.addEventListener("click", () => addCardModal.open());

initialCards.forEach((cardData) => renderCard(cardData, cardListEl));

function renderCard(cardData) {
  const card = createCard(cardData);
  cardListEl.prepend(card);
}

const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

const profileEditValidator = new FormValidator(config, profileEditForm);
const addCardValidator = new FormValidator(config, addCardForm);

profileEditValidator.enableValidation();
addCardValidator.enableValidation();
