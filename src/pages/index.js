import './index.css'
import {
  buttonEditProfile,
  nameInput,
  jobInput,
  titleInput,
  linkInput,
  nameProfile,
  jobProfile,
  buttonAddCard,
  initialCards,
  config,
} from "../components/constants.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section";
import PopoupWithImage from "../components/PopupWithImage";
import PopupWithForm from "../components/PopupWithForm";
import UserInfo from "../components/UserInfo";

const infoUser = new UserInfo(nameProfile, jobProfile);

  const cardRender = (item) => {
    const card = new Card(item, '.template', {
      handleCardClick: (name, link) => {
        popupPhoto.open(name, link)
      }
    });
    return card.generateCard()
  }

  const containerCard = new Section({
    items: initialCards,
    renderer: (item) => {
      containerCard.addItem(cardRender(item))
    }
  }, '.elements');
  containerCard.renderItems()

  const popupPhoto = new PopoupWithImage('.popup_type_photo')
  popupPhoto.setEventListeners()

  const profileForm = new PopupWithForm({
    popupSelector: '.popup_type_profile',
    handleSubmitForm: () => {
      nameProfile.textContent = nameInput.value;
      jobProfile.textContent = jobInput.value;
    }
  });
  profileForm.setEventListeners();

  const cardForm = new PopupWithForm({
    popupSelector: '.popup_type_card',
    handleSubmitForm: () => {
        const data = {};
        data.name = titleInput.value;
        data.link = linkInput.value;
        containerCard.addNewCard(cardRender(data))
    }
  });
  cardForm.setEventListeners();

buttonEditProfile.addEventListener('click', () => {
  profileForm.open()
  validProfile.resetValidation()
});

buttonAddCard.addEventListener('click', () => {
  cardForm.open()
  validCard.resetValidation()
});

const validProfile = new FormValidator(config, '.popup__form_profile');
validProfile.enableValidation();

const validCard = new FormValidator(config, '.popup__form_card');
validCard.enableValidation();