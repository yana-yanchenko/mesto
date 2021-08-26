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
import Api from '../components/Api';
import PopupWithDelete from '../components/PopupWithDelete';
import Popup from '../components/Popup';

const infoUser = new UserInfo(nameProfile, jobProfile);
const popupWithDelete = new PopupWithDelete({
  popupSelector: '.popup_type_delete',
  handleDeleteCard: () => {

  }
})
popupWithDelete.setEventListeners()

export const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-27',
  headers: {
    "content-type": "application/json",
    authorization: "2c65705e-3be3-4e0a-bdee-8f09d7a37648",
  }
})

let containerCard; // перезаписываем при отрисовке дефолтных карточек и перезаписываем переменную при рендере новых карточек
//Загрузка карточек

api.getInitialCards()
  .then((data) => {
    console.log(data)
    containerCard = new Section({
      items: data,
      renderer: (item) => {
        containerCard.addItem(cardRender(item))
      }
    }, '.elements');
    containerCard.renderItems()
  })
  .catch((err) => {
    console.log(err)
  })
  
let user;
console.log(user);

api.getInfoUser()
  .then((data) => {
    user = data._id
    infoUser.setUserInfo(data)
  })
  .catch((err) => {
    console.log(err);
  })



const cardRender = (item) => {
  const card = new Card(item, user, '.template', {
    handleCardClick: (name, link) => {
      popupPhoto.open(name, link)
    },
    handleDeleteCard: () =>{
      popupWithDelete.open()
    }
  });
  return card.generateCard()
}



const popupPhoto = new PopoupWithImage('.popup_type_photo')
popupPhoto.setEventListeners()

const profileForm = new PopupWithForm({
  popupSelector: '.popup_type_profile',
  handleSubmitForm: (info) => {
    console.log(info);
    api.setInfoUser(info.name, info.occupation)
      .then((info) => {
        console.log(info)
        infoUser.setUserInfo(info)
      })
  }
});
profileForm.setEventListeners();

const cardForm = new PopupWithForm({
  popupSelector: '.popup_type_card',
  handleSubmitForm: (data) => {
    console.log(data);
    api.generateNewCard(data.name, data.link)
      .then((data) => {
        console.log(data)
        containerCard.addNewCard(cardRender(data))
      })
  }
});
cardForm.setEventListeners();

buttonEditProfile.addEventListener('click', () => {
  const userData = infoUser.getUserInfo()
  nameInput.value = userData.name;
  jobInput.value = userData.occupation;
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