export const validateRegister = ({ formSelector }) => {
	const buttonRegister = formSelector.querySelector('.js-button-register');

	buttonRegister.disabled = 'disabled'

	const errorContainers = [...formSelector.querySelectorAll('.js-error-reg')];

	const errors = {
		name: '',
		surname: '',
		email: '',
		password: '',
		verifypassword: ''
	};

	const form = {
		name: '',
		surname: '',
		email: '',
		password: '',
		verifypassword: ''
	};

	const valid = {
		name: false,
		surname: false,
		email: false,
		password: false,
		verifypassword: false
	}

	const initalColor = '#343436';
	const errorColor = '#fa0019';

	const setError = (inputItem) => {
		let input = inputItem;
		input.style.borderColor = errorColor
	};

	const setValid = (inputItem) => {
		let input = inputItem;
		input.style.borderColor = initalColor
	};

	const errorMessage = (inputName, containers) => {
		containers.map((container) => {
			if (inputName === container.dataset.name) {
				container.textContent = errors[inputName]
			}
		})
	};

	const validateText = (value, input) => {
		if (value.length < 3) {
			errors[input.name] = 'Не менее трех символов'
			return true;
		} else if (!/^[а-яА-ЯёЁa-zA-Z]+$/.test(value)) {
			errors[input.name] = 'Некорректные символы'
			return true;
		}
		errors[input.name] = ''
		return false;
	};

	const validateEmail = (value, input) => {
		if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
			errors[input.name] = 'Неверный формат'
			return false;
		}
		errors[input.name] = ''
		return true;
	};

	const validatePassword = (value, input) => {
		if (value.length < 6) {
			errors[input.name] = 'Не менее шести символов'
			return true;
		}
		errors[input.name] = ''
		return false;
	};

	const validate = (type, input) => {
		switch (type) {
			case 'text': {
				if (validateText(input.value, input)) {
					setError(input)
					return;
				}
				setValid(input)
				break;
			}
			case 'email': {
				if (validateEmail(input.value, input)) {
					setValid(input)
					return;
				}
				setError(input)
				break;
			}
			case 'password': {
				if (validatePassword(input.value, input)) {
					setError(input)
					return;
				}
				setValid(input)
				break;
			}
		}
	};

	formSelector.addEventListener('input', (event) => {
		const target = event.target;
		form[target.name] = target.value
		validate(target.type, target);
		errorMessage(target.name, errorContainers)
	})

	buttonRegister.addEventListener('click', (e) => {
		e.preventDefault()
		const { verifypassword, ...withoutVerifyPassword } = form;
		console.log(JSON.stringify(withoutVerifyPassword, null, 2))
	})
};
