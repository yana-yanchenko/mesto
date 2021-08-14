import {openPopup} from '../pages/index.js'
import {popupPhoto, popupImage, popupCaption} from './constants.js'

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
    popupImage.src = this._link;
    popupImage.alt = this._name;
    popupCaption.textContent = this._name;
    openPopup(popupPhoto);
  };

  _handleLike() {
    this._like.classList.toggle('element__button-like_active');
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
    this._title = this._element.querySelector('.element__title');
    this._image.src = this._link;
    this._title.textContent = this._name;
    this._image.alt = this._name;
    this._setEventListeners();
    return this._element;
  };
}
