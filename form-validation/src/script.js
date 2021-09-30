import _ from 'lodash'
import countryList from './countries'

const logic = (()=>{

  function checkCountryValidity() {
    let optionFound = false;
    let datalist = this.list;
    const arr =[...datalist.options]
    arr.some((option)=>{
      if (this.value.toLowerCase() == option.value.toLowerCase()) {
        optionFound = true;
        return true
      }
    })

    const errSpan = document.getElementById('err-country')
    if (optionFound) {
        console.log("found!", this.value)
        this.setCustomValidity("");
        display.deleteError(errSpan)
      } else {
        console.log("not found", this.value)
        this.setCustomValidity('Please select a valid country');
        display.showError(errSpan,'Please select a valid country!')
      }
  }

  function checkEmailValidity(){
    const email = this.value
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const errSpan = document.getElementById('err-email')
    re.test(email) ? display.deleteError(errSpan) : display.showError(errSpan, "Please input a valid email!")
  }

  function checkZipcodeValidity(){
    const zipcode = this.value
    const re = /^\d{5}(?:[-\s]\d{4})?$/
    const errSpan = document.getElementById('err-zipcode')
    re.test(zipcode) ? display.deleteError(errSpan) : display.showError(errSpan, "Please input a valid zipcode(USA)!")
  }

  function checkPasswordValidity(passwordConfirmationDOM){
    const password = this.value
    console.log("password: ", password)
    
    const re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/
    const errSpan = document.getElementById('err-password')
    re.test(password) ? display.deleteError(errSpan) : display.showError(errSpan, "Please input password with at least one number and one uppercase and lowercase letter, and at least 8 or more characters!")
    
    checkPasswordConfirmationValidity.call(passwordConfirmationDOM)
  }

  function checkPasswordConfirmationValidity(){
    const passC = this.value
    console.log("confirmation: ", passC)
    
    const pass = document.getElementById('password').value
    const errSpan = document.getElementById('err-password-confirmation')

    passC === pass ? display.deleteError(errSpan) : display.showError(errSpan, "Password confirmation not the same as password!")
    passC === '' ? display.showError(errSpan, "Password confirmation must not be empty!") : null
  }

  function isEverythingValid() {
    const emailDOM = document.getElementById('email')
    const countryInputDOM = document.getElementById('country')
    const zipcodeDOM = document.getElementById('zipcode')
    const passwordDOM = document.getElementById('password')
    const passwordConfirmationDOM = document.getElementById('password-confirmation')

    checkEmailValidity.call(emailDOM)
    checkCountryValidity.call(countryInputDOM)
    checkZipcodeValidity.call(zipcodeDOM)
    checkPasswordValidity.call(passwordDOM, passwordConfirmationDOM)
    checkPasswordConfirmationValidity.call(passwordConfirmationDOM)

    const allErrorSpan = Array.from(document.querySelectorAll('.errors'))
    return allErrorSpan.every((span)=>{
      if(span.textContent==='valid'){
        return true
      }
      return false
    })
  }

  return { checkEmailValidity, checkCountryValidity, checkZipcodeValidity, checkPasswordValidity, checkPasswordConfirmationValidity, isEverythingValid }
})()


const display = (()=>{
  function initializeCountryField() {
    const countryListDOM = document.getElementById('country-list')
    const countryInputDOM = document.getElementById('country')

    countryList.forEach((country)=>{
      const c = document.createElement('option')
      c.value = country
      countryListDOM.appendChild(c)
  })
    countryInputDOM.addEventListener('input', _.throttle(logic.checkCountryValidity,500,{
      'leading': false,
      'trailing': true
      }))
  }

  function initializeEmailField() {
    const emailDOM = document.getElementById('email')
    emailDOM.addEventListener('input', _.debounce(logic.checkEmailValidity, 500))
  }

  function initializeZipcodeField() {
    const zipcodeDOM = document.getElementById('zipcode')
    zipcodeDOM.addEventListener('input', _.debounce(logic.checkZipcodeValidity, 500))
  }

  function initializeErrors() {
    const errors = document.querySelectorAll('.errors')
    errors.forEach(deleteError)
  }

  function initializePasswordField() {
    const p = document.getElementById('password')
    const pc = document.getElementById('password-confirmation')
    p.addEventListener('input', _.debounce(()=> logic.checkPasswordValidity.call(p,pc), 500))
  }

  function initializePasswordConfirmationField() {
    const pc = document.getElementById('password-confirmation')
    pc.addEventListener('input', _.debounce(logic.checkPasswordConfirmationValidity, 500))
  }

  function showError(element, text) {
    element.textContent = text
    element.style.visibility = 'visible'
  }

  function deleteError(element) {
    element.textContent = 'valid'
    element.style.visibility = 'hidden'
  }

  function initializeSubmitBtn() {
    const submitBtn = document.getElementById('submit')
    submitBtn.addEventListener('click', (e)=>{
      e.preventDefault()

      const valid = logic.isEverythingValid()
      console.log("valid",valid)

      const successMessage = document.getElementById('successMsg')
      successMessage.textContent = 'ALL DATA IS VALID!'
      valid ? document.getElementById('form-wrapper').appendChild(successMessage) : successMessage.textContent = ''
    })
  }

  function initializeDOM() {
    initializeEmailField()
    initializeCountryField()
    initializeZipcodeField()
    initializePasswordField()
    initializePasswordConfirmationField()
    initializeErrors()
    initializeSubmitBtn()
  }

  return { initializeDOM, showError, deleteError }
})()

display.initializeDOM()
