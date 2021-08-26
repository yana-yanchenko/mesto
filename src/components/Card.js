import Api from './Api'
import {api} from '../pages/index'

export default class Card {
  constructor (data, user, cardSelector, {handleCardClick, handleDeleteCard}) {
    this._cardSelector = cardSelector;
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._likes = data.likes;
    this._handleCardClick = handleCardClick; 
    this._owner = data.owner;
    this._user = user
    this._handleLikeCard = this._handleLikeCard.bind(this)
    this._handleDeleteCard = handleDeleteCard
  };

  
  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
    this._element = cardElement;
  };

  _setUserMeLike(){
    if (this._likes.some((i) => (this._user === i._id))) {
      this._like.classList.add('element__button-like_active');
    }
  }

  _handleLikeCard(){
    if (!this._like.classList.contains('element__button-like_active')) {
      api.setLikeCard(this._id)
      .then((data) =>{
        this._like.classList.add('element__button-like_active');
        this._countLike.textContent = data.likes.length;
        return
      })
    } else {
      api.removeLikeCard(this._id)
      .then((data) => {
        this._like.classList.remove('element__button-like_active');
        this._countLike.textContent = data.likes.length;
        return
      })
    }
  }

  _handleLike() {
    this._like.classList.toggle('element__button-like_active');
  };

  _handleDelete() {
    this._element.remove();
    this._element = null;
  };

  _setButtonDelete(){
    console.log(this._user);
    if (this._owner._id !== this.user ) {
      this._delete.classList.add('element__button-delete_type_hidden')
    } else {
      this._delete.classList.remove('element__button-delete_type_hidden')
    }
  }

  _setEventListeners() {
    this._image.addEventListener('click', () => {
      this._handleCardClick(this._name,this._link);
    });

    this._like.addEventListener('click', () => {
      this._handleLikeCard();
    });
    this._delete.addEventListener('click', () => {
      this._handleDeleteCard(this);
   })
  };

  generateCard() {
    this._getTemplate();
    this._image = this._element.querySelector('.element__image');
    this._like = this._element.querySelector('.element__button-like');
    this._delete = this._element.querySelector('.element__button-delete');
    this._title = this._element.querySelector('.element__title');
    this._countLike = this._element.querySelector('.element__count-like');
    this._countLike.textContent = this._likes.length;
    this._image.src = this._link;
    this._title.textContent = this._name;
    this._image.alt = this._name;
    this._setUserMeLike();
    this._setButtonDelete();
    this._setEventListeners();
    return this._element;
  };
}
