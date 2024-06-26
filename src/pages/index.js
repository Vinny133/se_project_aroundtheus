import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import {
  cardListEl,
  profileEditBtn,
  editSubmitButton,
  profileEditForm,
  addCardForm,
  addCardButton,
  addNewCardButton,
  profileTitle,
  profileDescription,
  profileTitleInput,
  profileDescriptionInput,
  config,
  confirmDeleteBtn,
  avatarButton,
  avatarForm,
  avatarPopupButton,
} from "../utils/constants.js";
import "./index.css";
import PopupDelete from "../components/PopupDelete.js";

// Class Instances

let section;

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "83383a9f-8b6f-44ef-86cf-3551dcd43118",
    "Content-Type": "application/json",
  },
});

api
  .getInitialCards()
  .then((cards) => {
    section = new Section(
      {
        items: cards,
        renderer: renderCard,
      },
      ".cards__list"
    );
    section.renderItems();
  })
  .catch((err) => {
    console.log(err);
  });

const previewImageModal = new PopupWithImage("#preview-image-modal");
previewImageModal.setEventListeners();

const addCardModal = new PopupWithForm("#add-card-modal", handleAddCardSubmit);
addCardModal.setEventListeners();

const profileEditModal = new PopupWithForm(
  "#profile-edit-modal",
  handleProfileEditSubmit
);
profileEditModal.setEventListeners();

const avatarModal = new PopupWithForm("#avatar-modal", handleAvatarSubmit);
avatarModal.setEventListeners();

let cardToDelete;

const deleteModal = new PopupDelete("#delete-modal", handleConfirmDelete);
deleteModal.setEventListeners();

const userInfo = new UserInfo(
  ".profile__title",
  ".profile__description",
  ".profile__image"
);

api
  .getUserInfo()
  .then((userData) => {
    userInfo.setAvatar(userData);
    userInfo.setUserInfo({
      name: userData.name,
      about: userData.about,
    });
  })
  .catch((err) => {
    console.log(err);
  });

// Functions

// function renderLoading(isLoading, button) {
//   if (isLoading) {
//     button.textContent = "Saving...";
//   } else {
//     button.textContent = "Save";
//   }
// }

// Event Handlers

function handleProfileEditSubmit(inputValues) {
  console.log(inputValues);
  profileEditModal.renderLoading(true);
  api
    .updateUserInfo(inputValues)
    .then((res) => {
      userInfo.setUserInfo(res);
      profileEditModal.close();
      profileEditForm.reset();
      profileEditValidator.disableButton();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      profileEditModal.renderLoading(false);
    });
}

function handleAvatarSubmit(inputValues) {
  console.log(inputValues);
  avatarModal.renderLoading(true);
  api
    .updateAvatar(inputValues)
    .then((res) => {
      userInfo.setAvatar(res);
      avatarModal.close();
      avatarForm.reset();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      avatarModal.renderLoading(false);
    });
}

function handleAddCardSubmit(inputValues) {
  addCardModal.renderLoading(true);
  api
    .createCard(inputValues)
    .then((res) => {
      renderCard(res);
      addCardModal.close();
      addCardForm.reset();
      addCardValidator.disableButton();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      addCardModal.renderLoading(false);
    });
  console.log(inputValues);
}

function handleImageClick(cardData) {
  previewImageModal.open(cardData);
}

function handleDeleteCardClick(card) {
  console.log("Card to delete:", card);
  deleteModal.open();
  cardToDelete = card;
}

function handleConfirmDelete() {
  // console.log("Card ID:", cardToDelete._id);
  if (cardToDelete) {
    api
      .deleteCard(cardToDelete._id)
      .then(() => {
        cardToDelete.handleDeleteCard();
        deleteModal.close();
        // confirmDeleteBtn.removeEventListener("click", handleConfirmDelete);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

function handleLikeClick(card) {
  if (card.isLiked) {
    api
      .unlikeCard(card._id)
      .then((newCardData) => {
        card.isLiked = newCardData.isLiked;
        card.renderLikes();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  if (!card.isLiked) {
    api
      .likeCard(card._id)
      .then((newCardData) => {
        card.isLiked = newCardData.isLiked;
        card.renderLikes();
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

// Event Listeners

profileEditBtn.addEventListener("click", () => {
  const currentUserData = userInfo.getUserInfo();
  console.log(currentUserData);
  profileTitleInput.value = currentUserData.name;
  profileDescriptionInput.value = currentUserData.about;
  profileEditModal.open();
});

avatarButton.addEventListener("click", () => {
  avatarModal.open();
});

// Add New Card Button
addNewCardButton.addEventListener("click", () => addCardModal.open());

function createCard(data) {
  const card = new Card(
    data,
    "#card-template",
    handleImageClick,
    handleDeleteCardClick,
    handleLikeClick
  ).getView();
  return card;
}

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
const avatarValidator = new FormValidator(config, avatarForm);

profileEditValidator.enableValidation();
addCardValidator.enableValidation();
avatarValidator.enableValidation();
