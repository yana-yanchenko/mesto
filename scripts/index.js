const buttonEditProfile = document.querySelector('.profile__button-edit');
const popupProfile = document.querySelector('.popup');
const buttonClose = document.querySelector('.popup__button-close');
const formElement = document.querySelector('.popup__form')
const nameInput = document.querySelector('.popup__input_value_name')
const jobInput = document.querySelector('.popup__input_value_occupation')
const nameProfile = document.querySelector('.profile__name')
const jobProfile = document.querySelector('.profile__occupation')

function openPopup(element) {
  element.classList.add('popup_opened');
  nameInput.value = nameProfile.textContent
  jobInput.value = jobProfile.textContent
}

function closePopup(element) {
  element.classList.remove('popup_opened');
}


function formSubmitHandler (evt) {
    evt.preventDefault(); 
    nameProfile.textContent = nameInput.value
    jobProfile.textContent = jobInput.value

    closePopup(popupProfile)
}

formElement.addEventListener('submit', formSubmitHandler); 

buttonEditProfile.addEventListener('click', () => openPopup(popupProfile));
buttonClose.addEventListener('click', () => closePopup(popupProfile));