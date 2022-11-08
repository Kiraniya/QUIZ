const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');
form.addEventListener('submit', e => {
	e.preventDefault();

	checkInputs();
});

function checkInputs() {
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!validateEmail(emailValue)) {
		setErrorFor(email, 'Not vit email');
	} else {
		setSuccessFor(email);
		window.location.href = "instruction.html";
	}

	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else if(!isPassten(passwordValue)){
                setErrorFor(password, 'password should contain more than 10 letters,at least one uppercase letter, one lowercase letter, one number and one special character');
        } else {
		setSuccessFor(password);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(email)){
        if((email.indexOf("@vit.ac.in", email.length - "@vit.ac.in".length) !== -1)||(email.indexOf("@vitstudent.ac.in", email.length - "@vitstudent.ac.in".length) !== -1)){
            return true;
        }
    }
}
function isPassten(str)
{
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/.test(str);
}
