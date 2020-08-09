import './styles/validation.css';
import { validateRegister, validateEnter } from './js/validation';
import { switching } from './js/tabs';

const tabsButton = document.querySelectorAll('.js-tab-button');
const formContent = document.querySelectorAll('.js-form-container');

const formRegistrationOptions = {
	formSelector: document.querySelector('.js-form-registration')
};

const formLoginOptions = {
	formSelector: document.querySelector('.js-form-login')
};

if (tabsButton && formContent) {
	switching(tabsButton, formContent)
}

validateRegister(formRegistrationOptions);
validateEnter(formLoginOptions);