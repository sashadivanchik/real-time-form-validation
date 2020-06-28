import './styles/validation.css';
import { validateRegister } from './js/validation';
import { switching } from './js/tabs';

const tabsButton = document.querySelectorAll('.js-tab-button');
const formContent = document.querySelectorAll('.js-form-container');

const formRegistrationOptions = {
	formSelector: document.querySelector('.js-form-registration')
};

switching(tabsButton, formContent)
validateRegister(formRegistrationOptions);