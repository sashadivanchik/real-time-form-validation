export const validateRegister = ({ formSelector }) => {
	const buttonRegister = formSelector.querySelector('.js-button-register');

	const errorContainers = [...formSelector.querySelectorAll('.js-error-reg')];

	const errors = {
		name: '',
		surname: '',
		email: '',
		password: ''
	};
	

	const form = {
		name: '',
		surname: '',
		email: '',
		password: ''
	};

	const isValid = {
		name: false,
		surname: false,
		email: false,
		password: false
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
			isValid[input.name] = false;
			return true;
		} else if (!/^[а-яА-ЯёЁa-zA-Z]+$/.test(value)) {
			errors[input.name] = 'Некорректные символы'
			isValid[input.name] = false;
			return true;
		}
		errors[input.name] = ''
		isValid[input.name] = true;
		return false;
	};

	const validateEmail = (value, input) => {
		if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
			errors[input.name] = 'Неверный формат'
			isValid[input.name] = false;
			return false;
		}
		errors[input.name] = ''
		isValid[input.name] = true;
		return true;
	};

	const validatePassword = (value, input) => {
		if (value.length < 6) {
			errors[input.name] = 'Не менее шести символов'
			isValid[input.name] = false;
			return true;
		}
		errors[input.name] = ''
		isValid[input.name] = true;
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
	
		const valid = (isValid.name && isValid.surname && isValid.password && isValid.email);

		valid ? buttonRegister.removeAttribute('disabled') : buttonRegister.setAttribute('disabled', true);
	})

	buttonRegister.addEventListener('click', (e) => {
		e.preventDefault()
		alert(JSON.stringify(form, null, 2))
	})
};

export const validateEnter = ({ formSelector }) => {
	const buttonLogin = formSelector.querySelector('.js-button-login');

	const errorContainers = [...formSelector.querySelectorAll('.js-error-login')];

	const errors = {
		email: '',
		password: ''
	};
	

	const form = {
		email: '',
		password: ''
	};

	const isValid = {
		email: false,
		password: false
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

	const validateEmail = (value, input) => {
		if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
			errors[input.name] = 'Неверный формат'
			isValid[input.name] = false;
			return false;
		}
		errors[input.name] = ''
		isValid[input.name] = true;
		return true;
	};

	const validatePassword = (value, input) => {
		if (value.length < 6) {
			errors[input.name] = 'Не менее шести символов'
			isValid[input.name] = false;
			return true;
		}
		errors[input.name] = ''
		isValid[input.name] = true;
		return false;
	};

	const validate = (type, input) => {
		switch (type) {
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
	
		const valid = (isValid.password && isValid.email);

		valid ? buttonLogin.removeAttribute('disabled') : buttonLogin.setAttribute('disabled', true);
	})

	buttonLogin.addEventListener('click', (e) => {
		e.preventDefault()
		alert(JSON.stringify(form, null, 2))
	})
};
