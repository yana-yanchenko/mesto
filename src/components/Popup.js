export default class Popup {
  constructor(popupSelector){
    this._popup = document.querySelector(popupSelector);
    this._closeIcon = this._popup.querySelector('.popup__button-close');
    this.close = this.close.bind(this);
  }
  open() { 
    this._popup.classList.add('popup_opened');
    document.addEventListener("keydown", this._handleEscClose);
  } 
  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener("keydown", this._handleEscClose);
  }
  _handleEscClose = (event) => {
    if (event.key === 'Escape') {
     this.close();
    };
  }
  _handleOverlayClose = (event) => { 
    if (event.target.classList.contains("popup_opened")) { 
      this.close(); 
    } 
  }; 

  setEventListeners(){
    this._closeIcon.addEventListener("click", this.close);
    document.addEventListener("click", this._handleOverlayClose);
  }
}