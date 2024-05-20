import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";

const cardListEl = document.querySelector(".cards__list");

const previewImageModal = new PopupWithImage("#preview-image-modal");
previewImageModal.setEventListeners();

const addCardModal = new PopupWithForm("#add-card-modal", handleAddCardSubmit);
addCardModal.setEventListeners();

const profileEditModal = new PopupWithForm(
  "#profile-edit-modal",
  handleProfileEditSubmit
);
profileEditModal.setEventListeners();

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

const section = new Section(
  {
    items: initialCards,
    renderer: renderCard,
  },
  "#card-template"
);

section.renderItems();
section.addItems();

// Elements

const profileEditBtn = document.querySelector("#profile-edit-button");

const previewImageEl = document.querySelector(".card__preview-image");
const previewNameEl = document.querySelector(".modal__preview-name");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

const profileEditForm = document.querySelector("#profile-edit-form");
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

const userInfo = new UserInfo(".profile__title", ".profile__description");
userInfo.getUserInfo();

const currentUserData = {
  name: profileTitle.textContent,
  job: profileDescription.textContent,
};

// Functions

function createCard(data) {
  const card = new Card(data, "#card-template", handleImageClick).getView();
  return card;
}

// Event Handlers

function handleProfileEditSubmit(inputValues) {
  console.log(inputValues);
  userInfo.setUserInfo(currentUserData);
  profileEditModal.close();
  profileEditValidator.disableButton();
}

function handleAddCardSubmit(inputValues) {
  console.log(inputValues);
  renderCard(inputValues);
  addCardModal.close();
  addCardValidator.disableButton();
}

function handleImageClick(cardData) {
  previewImageModal.open(cardData);
}

// Event Listeners

profileEditBtn.addEventListener("click", () => {
  profileTitleInput.value = currentUserData.name;
  profileDescriptionInput.value = currentUserData.job;
  profileEditModal.open();
});

// Add New Card Button
addNewCardButton.addEventListener("click", () => addCardModal.open());

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
