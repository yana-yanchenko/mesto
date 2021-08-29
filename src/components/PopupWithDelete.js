import Popup from "./Popup";

export default class PopupWithDelete extends Popup{
constructor({popupSelector, handleDeleteCard}){
  super(popupSelector);
  this.buttonDelete = this._popup.querySelector('.popup__button-keep_type_delete');
  this._handleDeleteCard = handleDeleteCard;
}

_handleDelete(){
  this._handleDeleteCard()
}

setEventListeners(){
  super.setEventListeners()
  this.buttonDelete.addEventListener('click',()=>{
    this._handleDelete()
  } )
}

}