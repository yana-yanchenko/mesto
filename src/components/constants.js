export const buttonEditProfile = document.querySelector('.profile__button-edit')
export const popupPhoto = document.querySelector('.popup_type_photo')
export const buttonClose = document.querySelector('.popup__button-close')
export const nameInput = document.querySelector('.popup__input_value_name')
export const jobInput = document.querySelector('.popup__input_value_occupation')
export const titleInput = document.querySelector('.popup__input_value_title')
export const linkInput = document.querySelector('.popup__input_value_link')
export const popupImage = document.querySelector('.popup__image')
export const nameProfile = document.querySelector('.profile__name')
export const jobProfile = document.querySelector('.profile__occupation')
export const buttonAddCard = document.querySelector('.profile__button-add')

export const config = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-keep',
  inactiveButtonClass: 'popup__botton-keep_type_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_type_activ',
};

export const initialCards = [{
  name: 'Архыз',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
},
{
  name: 'Челябинская область',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
},
{
  name: 'Иваново',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
},
{
  name: 'Камчатка',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
},
{
  name: 'Холмогорский район',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
},
{
  name: 'Байкал',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
}
];
