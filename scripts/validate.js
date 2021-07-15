const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach((formElement) => {
    setEventListeners(formElement, config)
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault()
      formElement.reset()
      setEventListeners(formElement, config)
    })
  })
}


const showInputError = (formElement, inputElement, config, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`)
  inputElement.classList.add(config.inputErrorClass)
  errorElement.textContent = errorMessage
  errorElement.classList.add(config.errorClass)
}


const hideInputError = (formElement, inputElement, config) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`)
  inputElement.classList.remove(config.inputErrorClass)
  errorElement.classList.remove(config.errorClass)
  errorElement.textContent = ""
}


const checkInputValidity = (formElement, inputElement, config) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, config, inputElement.validationMessage)
  } else {
    hideInputError(formElement, inputElement, config)
  }
}


const setEventListeners = (formElement, config) => {
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector))
  const buttonElement = formElement.querySelector(config.submitButtonSelector)
  toggleButtonState(inputList, buttonElement, config)
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement, config)
      toggleButtonState(inputList, buttonElement, config)
    })
  })
};


function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid
  })
}


function toggleButtonState(inputList, buttonElement, config) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(config.inactiveButtonClass)
  } else {
    buttonElement.classList.remove(config.inactiveButtonClass)
  }
}


enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-keep',
  inactiveButtonClass: 'popup__botton-keep_type_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_type_activ'
})