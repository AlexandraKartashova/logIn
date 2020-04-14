/*jshint esversion: 6 */


validationLogin = (login) => {
	let letters = /^([A-Za-z])+$/;
	if(login.value.match(letters)) {
		errorLogin.innerHTML = " ";
		return true;
	} else {
		errorLogin.innerHTML = 'Username must have only letters';
		return false;
	}
};

validationPassword = (password) => {
	let patternPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=(.*[a-zA-Z])(?=.*[0-9])).{6,10}$/;
	console.log(' password.length', password);
	if(password.value.match(patternPassword)) {
		// console.log('OK');
		errorPassword.innerHTML = " ";
	} else {
		errorPassword.innerHTML = "Password is not a valid format.<br> Use symbol: a-z, A-Z, 0-9 " ;
		return false;
	}
	return true;
};

let login = document.getElementById('login');
let password = document.getElementById('password');

unlockBtn = () => {
	if(password.value.length < 5 || login.value.length < 5) {
		document.getElementById('btn').setAttribute('disabled', true);
	} else {
		document.getElementById('btn').removeAttribute('disabled');
		document.getElementById('btn').classList.add('btn-success');
	}
};

login.addEventListener('input', unlockBtn);
password.addEventListener('input', unlockBtn);



logIn = () => {

	let login = document.getElementById('login');
	let password = document.getElementById('password');

	// console.log('login',login);
	// console.log('password',password);

	if(login.value === 'admin' && password.value === 'admiN7') {
		console.log('just do IT');
		window.location.assign('file:///D:/proj/regist/adminPage.html');
	} else {
		// document.getElementById('btn').classList.remove('hidden');
		console.log('dab');
	}

	if(validationLogin(login)){	
	if(validationPassword(password)) {
	}
	}

	
};


