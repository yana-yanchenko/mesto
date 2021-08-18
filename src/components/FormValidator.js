export default class FormValidator {
  constructor(config, formSelector) {
    this._form = document.querySelector(formSelector);

    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    
    this._buttonSubmitForm = this._form.querySelector(this._submitButtonSelector);
    this._inputs = Array.from(this._form.querySelectorAll(this._inputSelector));
  };

  resetValidation(){
    this._toggleButtonState(); 
      this._inputs.forEach((input) => {
        this._hideInputError(input)
      });
  };

  _checkInputValidity(input) {
    if (!input.validity.valid) {
      this._showInputError(input);
    } else {
      this._hideInputError(input);
    };
  };

  _showInputError(input) {
    const errorElement = this._form.querySelector(`#${input.id}-error`);
    input.classList.add(this._inputErrorClass);
    errorElement.textContent = input.validationMessage;
    errorElement.classList.add(this._errorClass);
  };

  _hideInputError(input) {
    const errorElement = this._form.querySelector(`#${input.id}-error`);
    input.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  };

  _hasInvalidInput() {
    return this._inputs.some((input) => {
      return !input.validity.valid;
    });
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonSubmitForm.classList.add(this._inactiveButtonClass);
      this._buttonSubmitForm.setAttribute("disabled", true);
    } else {
      this._buttonSubmitForm.classList.remove(this._inactiveButtonClass);
      this._buttonSubmitForm.removeAttribute("disabled");
    };
  };

  _setEventListeners() {
    
    this._toggleButtonState();

    this._inputs.forEach((input => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        this._toggleButtonState();
      });
    }));
  };
  
  enableValidation(){
    this._setEventListeners();
  }};



