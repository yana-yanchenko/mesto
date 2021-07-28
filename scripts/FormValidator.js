export default class FormValidator {
  constructor(config, formSelector) {
    this._formSelector = formSelector;
    this._inputSelector = config.inputSelector
    this._submitButtonSelector = config.submitButtonSelector
    this._inactiveButtonClass = config.inactiveButtonClass
    this._inputErrorClass = config.inputErrorClass
    this._errorClass = config.errorClass
    
  }
  _checkInputValidity() {
    if (!input.validity.valid) {
      this._showInputError();
    } else {
      this._hideInputError();
    }
  }

  _showInputError() {
    const errorElement = this._formSelector.querySelector(`#${this._inputSelector.id}-error`);
    this._inputSelector.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError() {
    const errorElement = this._formSelector.querySelector(`#${this._inputSelector.id}-error`)
    this._inputSelector.classList.remove(this._inputErrorClass)
    errorElement.classList.remove(this._errorClass)
    errorElement.textContent = ""
  }

  _hasInvalidInput(inputs) {
    return inputs.some((input) => {
      return !input.validity.valid
    });
  }

  _toggleButtonState(inputs, submitButtonSelector) {
    if (this._hasInvalidInput(inputs)) {
      submitButtonSelector.classList.add(this._inactiveButtonClass);
    } else {
      submitButtonSelector.classList.remove(this._inactiveButtonClass);
    }
  }

  _setEventListeners() {
    const inputs = Array.from(this._formSelector.querySelectorAll(this._inputSelector));
    const button = this._formSelector.querySelector(this._submitButtonSelector);
    this._toggleButtonState(inputs, button);

    inputs.forEach((input => {
      input.addEventListener('input', function(){
        console.log('zzs')
        // this._checkInputValidity();
        this._toggleButtonState(inputs, button);
      })
    }))
  }
  enableValidation(){
    this._setEventListeners();
  }
}

// const config = {
//   inputSelector: '.popup__input',
//   submitButtonSelector: '.popup__button-keep',
//   inactiveButtonClass: 'popup__botton-keep_type_disabled',
//   inputErrorClass: 'popup__input_type_error',
//   errorClass: 'popup__input-error_type_activ'
// }


