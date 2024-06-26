export const initialCards = [
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

export const profileEditBtn = document.querySelector("#profile-edit-button");
export const profileEditModal = document.querySelector("#profile-edit-modal");
export const addCardModal = document.querySelector("#add-card-modal");
export const previewImageModal = document.querySelector("#preview-image-modal");
export const profileModalClose = profileEditModal.querySelector(
  "#profile-modal-close"
);
export const addCardModalClose = addCardModal.querySelector(
  "#add-card-modal-close"
);
export const previewModalClose = previewImageModal.querySelector(
  "#preview-modal-close"
);
export const previewImageEl = document.querySelector(".card__preview-image");
export const previewNameEl = document.querySelector(".modal__preview-name");
export const profileTitle = document.querySelector(".profile__title");
export const profileDescription = document.querySelector(
  ".profile__description"
);

export const profileEditForm = document.querySelector("#profile-edit-form");
export const addCardForm = document.querySelector("#add-card-form");
export const cardListEl = document.querySelector(".cards__list");
export const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

export const addNewCardButton = document.querySelector(".profile__add-button");

export const profileTitleInput = document.querySelector("#profile-title-input");
export const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
export const cardTitleInput = addCardForm.querySelector(
  "#add-place-title-input"
);
export const cardUrlInput = addCardForm.querySelector("#add-place-url-input");

export const closeButtons = document.querySelectorAll(".modal__close");

export const editSubmitButton = document.querySelector("#edit-submit-button");
export const addCardButton = addCardModal.querySelector("#add-modal-button");

export const confirmDeleteBtn = document.querySelector(".modal__delete-button");

export const avatarForm = document.querySelector("#avatar-form");

export const avatarButton = document.querySelector("#avatar-edit-button");

export const avatarPopupButton = document.querySelector("#avatar-modal-button");

export const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};
