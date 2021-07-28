import {
  buttonEditProfile,
  popups,
  popupProfile,
  popupCard,
  popupPhoto,
  buttonClose,
  formProfile,
  formCard,
  nameInput,
  jobInput,
  titleInput,
  linkInput,
  popupImage,
  popupCaption,
  nameProfile,
  jobProfile,
  buttonAddCard,
  placeCard,
  buttonSubmitCard,
  initialCards
} from "./constants.js";

import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

function openPropfilePopup() {
  nameInput.value = nameProfile.textContent
  jobInput.value = jobProfile.textContent
  openPopup(popupProfile)
}

function openPopup(element) {
  element.classList.add('popup_opened')
  document.addEventListener('keydown', handleCloseEscape)
}

function closePopup(element) {
  element.classList.remove('popup_opened')
  document.removeEventListener('keydown', handleCloseEscape)
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault()
  nameProfile.textContent = nameInput.value
  jobProfile.textContent = jobInput.value
  console.log(nameInput.value)
  closePopup(popupProfile)
}

function handleCardFormSubmit(evt) {
  evt.preventDefault()
  const data = {}
  data.name = titleInput.value 
  data.link = linkInput.value
  placeCard.prepend(renderCard(data))
  closePopup(popupCard)
  formCard.reset()
}

popups.forEach((popup) => {
  popup.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("popup__button-close") || evt.target.classList.contains("popup_opened")) {
      closePopup(popup)
    }
  });
});

const handleCloseEscape = (event) => {
  if (event.key === 'Escape') {
    const popupOpen = document.querySelector(".popup_opened")
    closePopup(popupOpen)
  }
}

function handleDeleteCard(item) {
  item.target.closest('.element').remove();
}

function handleLikeCard(item) {
  item.target.classList.toggle('element__button-like_active')
}

function handleImagePopup(name, link) {
  openPopup(popupPhoto)
  popupImage.src = link
  popupCaption.textContent = name
  popupImage.alt = name
}

// function renderCard(name, link) {
//   const templateCard = document.querySelector('.template').content.querySelector('.element').cloneNode(true)
//   const buttonCardLike = templateCard.querySelector('.element__button-like')
//   const buttonCardDelete = templateCard.querySelector('.element__button-delete')
//   const imageCard = templateCard.querySelector('.element__image')
//   const titleCard = templateCard.querySelector('.element__title')
//   titleCard.textContent = name
//   imageCard.src = link
//   imageCard.alt = name
//   buttonCardDelete.addEventListener('click', handleDeleteCard)
//   buttonCardLike.addEventListener('click', handleLikeCard)
//   imageCard.addEventListener('click', () => handleImagePopup(name, link))
//   return templateCard
// }

function renderCard(item) {
  const card = new Card(item, '.template')
  return card.generateCard()
}

initialCards.forEach(function (item) {
  const card = renderCard(item)
  placeCard.append(card)
})


formProfile.addEventListener('submit', handleProfileFormSubmit)
formCard.addEventListener('submit', handleCardFormSubmit)
buttonEditProfile.addEventListener('click', () => openPropfilePopup())
buttonAddCard.addEventListener('click', () => openPopup(popupCard))


const config = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-keep',
  inactiveButtonClass: 'popup__botton-keep_type_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_type_activ'
}

const validProfile = new FormValidator(config, popupProfile)
validProfile.enableValidation()