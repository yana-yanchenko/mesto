const buttonEditProfile = document.querySelector('.profile__button-edit')
const popups = document.querySelectorAll(".popup");
const popupProfile = document.querySelector('.popup_type_profile')
const popupCard = document.querySelector('.popup_type_card')
const popupPhoto = document.querySelector('.popup_type_photo')
const buttonClose = document.querySelector('.popup__button-close')
const formProfile = document.querySelector('.popup__form_profile')
const formCard = document.querySelector('.popup__form_card')
const nameInput = document.querySelector('.popup__input_value_name')
const jobInput = document.querySelector('.popup__input_value_occupation')
const titleInput = document.querySelector('.popup__input_value_title')
const linkInput = document.querySelector('.popup__input_value_link')
const popupImage = document.querySelector('.popup__image')
const popupCaption = document.querySelector('.popup__caption')
const nameProfile = document.querySelector('.profile__name')
const jobProfile = document.querySelector('.profile__occupation')

const buttonAddCard = document.querySelector('.profile__button-add')
const placeCard = document.querySelector('.elements')

function openPropfilePopup() {
  nameInput.value = nameProfile.textContent
  jobInput.value = jobProfile.textContent
  openPopup(popupProfile)
}

function openPopup(element) {
  element.classList.add('popup_opened');
}

function closePopup(element) {
  element.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value
  jobProfile.textContent = jobInput.value
  closePopup(popupProfile)
}

function cardSubmitHandler(evt) {
  evt.preventDefault();
  placeCard.prepend(renderCard(titleInput.value, linkInput.value))
  closePopup(popupCard)
  formCard.reset()
}

popups.forEach((popup) => {
  popup.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("popup__button-close")) {
      closePopup(popup);
    }
  });
});

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

function renderCard(name, link) {
  const templateCard = document.querySelector('.template').content.querySelector('.element').cloneNode(true);
  const buttonCardLike = templateCard.querySelector('.element__button-like');
  const buttonCardDelete = templateCard.querySelector('.element__button-delete');
  const imageCard = templateCard.querySelector('.element__image');
  const titleCard = templateCard.querySelector('.element__title');
  titleCard.textContent = name;
  imageCard.src = link;
  imageCard.alt = name;
  buttonCardDelete.addEventListener('click', handleDeleteCard)
  buttonCardLike.addEventListener('click', handleLikeCard)
  imageCard.addEventListener('click', () => handleImagePopup(name, link))
  return templateCard
}

initialCards.forEach(function (item) {
  const card = renderCard(item.name, item.link);
  placeCard.append(card)
})


formProfile.addEventListener('submit', formSubmitHandler);
formCard.addEventListener('submit', cardSubmitHandler);
buttonEditProfile.addEventListener('click', () => openPropfilePopup());
buttonAddCard.addEventListener('click', () => openPopup(popupCard))