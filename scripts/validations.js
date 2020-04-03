function emailValidation(input) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(input.value)){
        input.classList.remove('wrong');
        input.classList.add('correct');
        return true
    } else {
        input.classList.remove('correct');
        input.classList.add('wrong');
    }
}

function businessNameValidation(input) {
    if (/^(?!\s)(?!.*\s$)(?=.*[a-zA-Z0-9])[a-zA-Z0-9 '~?!]{2,}$/.test(input.value)){
        input.classList.remove('wrong');
        input.classList.add('correct');
        return true
    } else {
        input.classList.remove('correct');
        input.classList.add('wrong');
    }
}

function passwordValidation(input) {
    if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(input.value)){
        input.classList.remove('wrong');
        input.classList.add('correct');
        return true
    } else {
        input.classList.remove('correct');
        input.classList.add('wrong');
    }
}

function passwordConfirmValidation(input,password) {
    if (input.value == password){
        input.classList.remove('wrong');
        input.classList.add('correct');
        return true;
    } else {
        input.classList.remove('correct');
        input.classList.add('wrong');
    }
}

function creditNumberValidation(input) {
    if (/^[0-9]{16}$/.test(input.value)){
        input.classList.remove('wrong');
        input.classList.add('correct');
        return true
    } else {
        input.classList.remove('correct');
        input.classList.add('wrong');
    }
}

function expirationValidation(input) {
    if (/^[\d]{2}\/[\d]{4}$/.test(input.value)){
        input.classList.remove('wrong');
        input.classList.add('correct');
        return true
    } else {
        input.classList.remove('correct');
        input.classList.add('wrong');
    }
}

function cvvValidation(input) {
    if (/^[0-9]{3,4}$/.test(input.value)){
        input.classList.remove('wrong');
        input.classList.add('correct');
        return true
    } else {
        input.classList.remove('correct');
        input.classList.add('wrong');
    }
}

function namesValidation(input) {
    if (/^(?!\s)(?!.*\s$)(?=.*[a-zA-Z0-9])[a-zA-Z0-9 '~?!]{2,}$/.test(input.value)){
        input.classList.remove('wrong');
        input.classList.add('correct');
        return true
    } else {
        input.classList.remove('correct');
        input.classList.add('wrong');
    }
}