import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import {
  initialCards,
  cardListEl,
  profileEditBtn,
  profileEditForm,
  addCardForm,
  addNewCardButton,
  profileTitleInput,
  profileDescriptionInput,
  config,
} from "../utils/constants.js";
import "./index.css";

// Class Instances

const previewImageModal = new PopupWithImage("#preview-image-modal");
previewImageModal.setEventListeners();

const addCardModal = new PopupWithForm("#add-card-modal", handleAddCardSubmit);
addCardModal.setEventListeners();

const profileEditModal = new PopupWithForm(
  "#profile-edit-modal",
  handleProfileEditSubmit
);
profileEditModal.setEventListeners();

const section = new Section(
  {
    items: initialCards,
    renderer: renderCard,
  },
  ".cards__list"
);

section.renderItems();

const userInfo = new UserInfo(".profile__title", ".profile__description");

// Functions

function createCard(data) {
  const card = new Card(data, "#card-template", handleImageClick).getView();
  return card;
}

// Event Handlers

function handleProfileEditSubmit(inputValues) {
  console.log(inputValues);
  userInfo.setUserInfo(inputValues);
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
  const currentUserData = userInfo.getUserInfo();
  console.log(currentUserData);
  profileTitleInput.value = currentUserData.name;
  profileDescriptionInput.value = currentUserData.description;
  profileEditModal.open();
});

// Add New Card Button
addNewCardButton.addEventListener("click", () => addCardModal.open());

function renderCard(cardData) {
  const card = createCard(cardData);
  section.addItems(card);
}

// const formValidators = {};

// const enableValidation = (config) => {
//   const formList = Array.from(document.querySelectorAll(config.formSelector));
//   formList.forEach((formElement) => {
//     const validator = new FormValidator(config, formElement);
//     // here you get the name of the form (if you don’t have it then you need to add it into each form in `index.html` first)
//     const formName = formElement.getAttribute("name");

//     // here you store the validator using the `name` of the form
//     formValidators[formName] = validator;
//     validator.enableValidation();
//   });
// };

// enableValidation(config);

const profileEditValidator = new FormValidator(config, profileEditForm);
const addCardValidator = new FormValidator(config, addCardForm);

profileEditValidator.enableValidation();
addCardValidator.enableValidation();
