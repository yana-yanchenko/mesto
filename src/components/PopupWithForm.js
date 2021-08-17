import Popup from "./Popup";
export default class PopupWithForm extends Popup {
  constructor({popupSelector, handleSubmitForm}){
    super(popupSelector);
    this._handleSubmitForm = handleSubmitForm;
    this._form = this._popup.querySelector(".popup__form");
  }
  _getInputValues(){
    this._inputs = this._popup.querySelectorAll(".popup__input"); 
    this._object = {}; 
    this._inputs.forEach( (input) => (
      this._object[input.name] = input.value
    )
  );
    return this._object; 
  } 
   close(){
     super.close();
     this._form.reset();
   }

  setEventListeners(){
    super.setEventListeners();
    this._form.addEventListener('submit', (event) => {
      event.preventDefault();
      this._handleSubmitForm(this._getInputValues());
      this.close();
    });
  }
  }
