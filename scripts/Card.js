import {openPopup} from './index.js'

export default class Card {
  constructor (data, cardSelector) {
    this._cardSelector = cardSelector;
    this._name = data.name;
    this._link = data.link;
  };
  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
    this._element = cardElement;
  };

  _handleOpenPopup() {
    this._popupImage = document.querySelector('.popup_type_photo');
    this._popupImage.querySelector('.popup__image').src = this._link;
    this._popupImage.querySelector('.popup__image').alt = this._name;
    this._popupImage.querySelector('.popup__caption').textContent = this._name;
    openPopup(this._popupImage);
  };

  _handleLike() {
    this._element.querySelector('.element__button-like').classList.toggle('element__button-like_active');
  };

  _handleDelete() {
    this._element.remove();
  };

  _setEventListeners() {
    this._image.addEventListener('click', () => {
      this._handleOpenPopup();
    });

    this._like.addEventListener('click', () => {
      this._handleLike();
    });

    this._delete.addEventListener('click', () => {
      this._handleDelete();
    })
  };

  generateCard() {
    this._getTemplate();
    this._image = this._element.querySelector('.element__image');
    this._like = this._element.querySelector('.element__button-like');
    this._delete = this._element.querySelector('.element__button-delete');
    this._element.querySelector('.element__image').src = this._link;
    this._element.querySelector('.element__title').textContent = this._name;
    this._element.querySelector('.element__image').alt = this._name;
    this._setEventListeners();
    return this._element;
  };
}
