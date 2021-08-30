import './index.css'
import {
  buttonEditProfile,
  nameInput,
  jobInput,
  nameProfile,
  jobProfile,
  buttonAddCard,
  config,
  avatarProfile,
  avatarBox,
  popupAvatar,
  popupCard,
  popupProfile
} from "../components/constants.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section";
import PopupWithImage from "../components/PopupWithImage";
import PopupWithForm from "../components/PopupWithForm";
import UserInfo from "../components/UserInfo";
import Api from '../components/Api';
import PopupWithDelete from '../components/PopupWithDelete';

let containerCard; // перезаписываем при отрисовке дефолтных карточек и перезаписываем переменную при рендере новых карточек
let user; // перезаписываем в переменную id карточки 

const infoUser = new UserInfo(nameProfile, jobProfile, avatarProfile);

export const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-27',
  headers: {
    "content-type": "application/json",
    authorization: "2c65705e-3be3-4e0a-bdee-8f09d7a37648",
  }
})

Promise.all([
  api.getInfoUser(),
  api.getInitialCards()
])
.then(([data, cards]) => {
  user = data._id
  infoUser.setUserInfo(data)
  containerCard = new Section({
    items: cards,
    renderer: (item) => {
      containerCard.addItem(cardRender(item))
    }
  }, '.elements');
  containerCard.renderItems()
  
})
.catch((err) =>{
  console.log(err);
})

const cardRender = (item) => {
  const card = new Card(item, user, '.template', {
    handleCardClick: (name, link) => {
      popupPhoto.open(name, link)
    },
    handleDeleteCard: (obj) =>{
      popupWithDelete.obj = obj
      popupWithDelete.open()
    },
    handleLikeCard: (id, element) => {
      const buttonLike = element.querySelector('.element__button-like')
      const state = buttonLike.classList.contains('element__button-like_active')
      if (state) {
        api.removeLikeCard(id)
        .then((data) => {
          card.toggleLike(data)
        })
        .catch((err) => {
          console.log(err)
        })
        return
      } else {
        api.setLikeCard(id)
        .then((data) =>{
          card.toggleLike(data)
        })
        .catch((err) => {
          console.log(err)
        })
        return
      }
    },
  });
   return card.generateCard();
}

function isLoading(popup, state){
  const buttonSubmit = popup.querySelector('.popup__button-keep')
  if (state === true) {
    buttonSubmit.textContent = 'Сохранить'
  } else {
    buttonSubmit.textContent = 'Сохранение...'
  }
}

const popupPhoto = new PopupWithImage('.popup_type_photo')

const profileAvatar = new PopupWithForm({
  popupSelector: '.popup_type_avatar',
  handleSubmitForm: (data) => {
    console.log(data);
    isLoading(popupAvatar, false)
    api.updateAvatar(data.avatar)
      .then((data) => {
        infoUser.setUserInfo(data)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        isLoading(popupAvatar, true)
        profileAvatar.close()
      })
  }
})

const profileForm = new PopupWithForm({
  popupSelector: '.popup_type_profile',
  handleSubmitForm: (info) => {
    isLoading(popupProfile, false)
    api.setInfoUser(info.name, info.occupation)
      .then((info) => {
        infoUser.setUserInfo(info)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        profileForm.close();
        isLoading(popupProfile, true)
      })
  }
});

const cardForm = new PopupWithForm({
  popupSelector: '.popup_type_card',
  handleSubmitForm: (data) => {
    isLoading(popupCard, false)
    api.generateNewCard(data.name, data.link)
      .then((data) => {
        containerCard.addNewCard(cardRender(data))
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        cardForm.close();
        isLoading(popupCard, true)
      })
  }
});

const popupWithDelete = new PopupWithDelete({
  popupSelector: '.popup_type_delete',
  handleDeleteCard: () => {
    const cardId = popupWithDelete.obj._id
    api.deleteCard(cardId)
    .then(() => {
      popupWithDelete.obj.handleDelete()
      popupWithDelete.close()
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      popupWithDelete.close();
    })
  }
})

//слушатели классов popup
popupWithDelete.setEventListeners()
cardForm.setEventListeners();
popupPhoto.setEventListeners()
profileForm.setEventListeners();
profileAvatar.setEventListeners()

avatarBox.addEventListener('click', () => {
  profileAvatar.open()
  // profileAvatar.resetValidation()
})

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

const validAvatar = new FormValidator(config, '.popup__form_avatar');
validAvatar.enableValidation();
