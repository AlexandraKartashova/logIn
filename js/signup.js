/*jshint esversion: 6 */

let loginSignUp = document.getElementById('login-sugn-up');
let passwordSignUp = document.getElementById('password-sugn-up');
let emailSignUp = document.getElementById('email-sugn-up');
let confirmPasswordSignUp = document.getElementById('password-confirm');


let flagLoginSignUp = false;
let flagPasswordSignUp = false;
let flagEmailSignUp = false;

loginSignUp.addEventListener( "keyup" , () => {
	let letters = /^([A-Za-z])+$/;
	if(loginSignUp.value.match(letters) && loginSignUp.value.length >= 5) {
		hintLogin.innerHTML = " ";
		flagLoginSignUp = true;
		return true;
	} else {
		hintLogin.innerHTML = 'Login must consist of letters Aa-Zz';
		flagLoginSignUp = false;
		return false;
	}
});

emailSignUp.addEventListener( "keyup", () => {
	let letters =/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"/;
	if(loginSignUp.value.match(letters)) {
		hintLogin.innerHTML = " ";
		flagEmailSignUp = true;
		return true;
	} else {
		hintLogin.innerHTML = 'Login must consist of letters Aa-Zz';
		flagEmailSignUp = false;
		return false;
	}
});

passwordSignUp.addEventListener( "keyup" , () => {
	let patternPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=(.*[a-zA-Z])(?=.*[0-9])).{5,10}$/;

	if(passwordSignUp.value.match(patternPassword)) {
		hintPassword.innerHTML = " ";
		flagPasswordSignUp = true;
	} else {
		hintPassword.innerHTML = "Password must contain:<br>1 lowercase letter<br>1 capital letter<br>1 digit<br>password length 6-10 characters" ;
		return false;
	}
	return true;
});

unlockBtn = () => {
	if(!(flagLoginSignUp == true && flagPasswordSignUp == true)) {
		document.getElementById('btn').setAttribute('disabled', true);
		document.getElementById('btn').classList.remove('btn-success');
	} else {
		document.getElementById('btn').removeAttribute('disabled');
		document.getElementById('btn').classList.add('btn-success');
	}
};

loginSignUp.addEventListener('keyup', unlockBtn);
passwordSignUp.addEventListener('keyup', unlockBtn);


signUp = () => {
	if(loginSignUp.value === 'admin' && passwordSignUp.value === 'admiN77') {
		window.location.assign('file:///D:/proj/regist/adminPage.html');
	} else {
		// document.getElementById('btn').classList.remove('hidden');
		alert('try again');
	}
};


