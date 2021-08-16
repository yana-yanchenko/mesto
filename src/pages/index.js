import './index.css'
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
  initialCards,
  popupCaption,
} from "../components/constants.js";
import Popup from "../components/Popup";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section";
import PopoupWithImage from "../components/PopupWithImage";
import PopupWithForm from "../components/PopupWithForm";

// function openPropfilePopup() {
//   nameInput.value = nameProfile.textContent;
//   jobInput.value = jobProfile.textContent;
//   validProfile.resetValidation();
//   openPopup(popupProfile);
// };

// function openPopupCard() {
//   formCard.reset();
//   validCard.resetValidation();
//   openPopup(popupCard);
// };

// export function openPopup(element) {
//   element.classList.add('popup_opened');
//   document.addEventListener('keydown', handleCloseEscape);
// };

// function closePopup(element) {
//   element.classList.remove('popup_opened');
//   document.removeEventListener('keydown', handleCloseEscape);
// };

// function handleProfileFormSubmit(evt) {
//   evt.preventDefault();
//   nameProfile.textContent = nameInput.value;
//   jobProfile.textContent = jobInput.value;
//   closePopup(popupProfile);
// };

// function handleCardFormSubmit(evt) {
//   evt.preventDefault();
//   const data = {};
//   data.name = titleInput.value;
//   data.link = linkInput.value;
//   placeCard.prepend(renderCard(data));
//   closePopup(popupCard);
//   formCard.reset();
// };

// popups.forEach((popup) => {
//   popup.addEventListener("click", (evt) => {
//     if (evt.target.classList.contains("popup__button-close") || evt.target.classList.contains("popup_opened")) {
//       closePopup(popup);
//     };
//   });
// });

// const handleCloseEscape = (event) => {
//   if (event.key === 'Escape') {
//     const popupOpen = document.querySelector(".popup_opened");
//     closePopup(popupOpen);
//   };
// };


  const containerCard = new Section({
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item, '.template', {
        handleCardClick: (name, link) => {
          popupPhoto.open(name, link)
        }
      });
      containerCard.addItem(card.generateCard());
    }
  }, '.elements');

  containerCard.renderItems()

  const popupPhoto = new PopoupWithImage('.popup_type_photo')
  popupPhoto.setEventListeners()
  const profileForm = new PopupWithForm('.popup_type_profile');
  profileForm.setEventListeners();
// formProfile.addEventListener('submit', handleProfileFormSubmit);
// formCard.addEventListener('submit', handleCardFormSubmit);
buttonEditProfile.addEventListener('click', () => {
  profileForm.open()
});
// buttonAddCard.addEventListener('click', () => openPopupCard());


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