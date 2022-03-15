const form = document.querySelector('.boxes__form')
const firstName = document.querySelector('.boxes__form__first')
const lastName = document.querySelector('.boxes__form__last')
const mail = document.querySelector('.boxes__form__mail')
const password = document.querySelector('.boxes__form__password')
const btn = document.querySelector('.boxes__form__btn')
const errorInfo = document.querySelectorAll('.error-info')
const errorInfoEmail = document.querySelector('.error-info-email')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (firstName.value === "") {
        firstName.classList.add('error')
        errorInfo[0].style.display = "block"
    } else {
        firstName.classList.remove('error')
        errorInfo[0].style.display = ""
    }
    if (lastName.value === "") {
        lastName.classList.add('error')
        errorInfo[1].style.display = "block"
    } else {
        lastName.classList.remove('error')
        errorInfo[1].style.display = ""
    }
    if (mail.value === "") {
        mail.classList.add('error')
        errorInfo[2].style.display = "block"
        errorInfoEmail.style.display = ""
    } else if (!validateEmail(mail.value)){
        mail.classList.add('error')
        errorInfoEmail.style.display = "block"
        errorInfo[2].style.display = ""
    } else {
        mail.classList.remove('error')
        errorInfo[2].style.display = ""
        errorInfoEmail.style.display = ""
    }
    if (password.value === "") {
        password.classList.add('error')
        errorInfo[3].style.display = "block"
    } else {
        password.classList.remove('error')
        errorInfo[3].style.display = ""
    }
})

const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

