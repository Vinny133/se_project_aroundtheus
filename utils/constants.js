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

export const profileEditForm = profileEditModal.querySelector(".modal__form");
export const addCardForm = addCardModal.querySelector(".modal__form");
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

export const addCardButton = addCardModal.querySelector("#add-modal-button");
