const input = document.querySelector('#email-input')
const submitBtn = document.querySelector('.landing-page__submit-btn')
const errorText = document.querySelector('.error')
const errorSign = document.querySelector('.landing-page__error-icon')

const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

const submitAdress = () => {
	if (regexEmail.test(input.value)) {
		errorText.style.display = 'block'
		errorSign.style.display = 'none'
		errorText.textContent = 'Thank You ! - Please check your email to confirm'
		setTimeout(closeInfo, 6000)
	} else {
		errorText.style.display = 'block'
		errorSign.style.display = 'block'
		errorText.textContent = 'Please provide a valid email'
	}
}

const closeInfo = () => {
	errorText.style.display = 'none'
	errorText.textContent = ''
}

submitBtn.addEventListener('click', submitAdress)
