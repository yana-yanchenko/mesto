import {
  buttonEditProfile,
  popups,
  popupProfile,
  popupCard,
  formProfile,
  formCard,
  nameInput,
  jobInput,
  titleInput,
  linkInput,
  nameProfile,
  jobProfile,
  buttonAddCard,
  buttonSubmitCard,
  placeCard,
  initialCards
} from "./constants.js";

import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

function openPropfilePopup() {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  openPopup(popupProfile);
};

function openPopupCard() {
  formCard.reset();
  buttonSubmitCard.classList.add('popup__botton-keep_type_disabled');
  openPopup(popupCard);
};

export function openPopup(element) {
  element.classList.add('popup_opened');
  document.addEventListener('keydown', handleCloseEscape);
};

function closePopup(element) {
  element.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleCloseEscape);
};

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(popupProfile);
};

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const data = {};
  data.name = titleInput.value;
  data.link = linkInput.value;
  placeCard.prepend(renderCard(data));
  closePopup(popupCard);
  formCard.reset();
};

popups.forEach((popup) => {
  popup.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("popup__button-close") || evt.target.classList.contains("popup_opened")) {
      closePopup(popup);
    };
  });
});

const handleCloseEscape = (event) => {
  if (event.key === 'Escape') {
    const popupOpen = document.querySelector(".popup_opened");
    closePopup(popupOpen);
  };
};

function renderCard(item) {
  const card = new Card(item, '.template');
  return card.generateCard();
};

initialCards.forEach(function (item) {
  const card = renderCard(item);
  placeCard.append(card);
});


formProfile.addEventListener('submit', handleProfileFormSubmit);
formCard.addEventListener('submit', handleCardFormSubmit);
buttonEditProfile.addEventListener('click', () => openPropfilePopup());
buttonAddCard.addEventListener('click', () => openPopupCard());


const config = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-keep',
  inactiveButtonClass: 'popup__botton-keep_type_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_type_activ',
};

const validProfile = new FormValidator(config, '.popup__form_profile');
validProfile.enableValidation();

const validCard = new FormValidator(config, '.popup__form_card');
validCard.enableValidation();