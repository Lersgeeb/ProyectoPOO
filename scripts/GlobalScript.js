/*Temporary js script until backend be implemented  */

/*

    Cosas Por Hacer
    
    
    -BusinessSign 
        solo permitir enviar el formulario de registro una vez que las validaciones para todos los inputs esten correctos 

    -GlobalScript & BusinessSign
        Enviar un mensaje de retorno por algun dato invalido(usuario,email,numero de tarjeta existente) en el formulario 
        de registro (CreateBusinessUser => signUpBusiness). De estar todo correcto cerrar la ventana modal y borrar los valores puestos

    -BusineesSign
        Una vez que el usuario haya iniciado sesion quitar los planes en la landingpage de las empresas (y agregar mas caracteristicas y funcionalidades
        de la pagina)

    
        
    





*/

var localstorage = window.localStorage

if(localstorage.getItem('userOnline')){
    var userOnline = JSON.parse(localstorage.getItem('userOnline'));
}
else{
    var userOnline = false;
}


var businesses = [
    {
        email:'gabriel@gmail.com',
        password:1234,
        businessName:'Jetstereo',
        plan:'Plan Empresarial',
        country:"Honduras",
        cardNumber:'1234567891234567',
        expiration: '12/2020',
        cvv: '190'
    },
    
]



function authentication(emailValue,passwordValue){

    business = businesses.find(businesses => businesses.email==emailValue);
    if(business){
        if(business.password==passwordValue){
            userOnline = business;
            localstorage.setItem('userOnline', JSON.stringify(userOnline));
            return userOnline;
        }
    }
}

function createBusinessUser(newBusiness){
    hasBusiness = businesses.find(businesses => businesses.email==newBusiness.email);
    if(!hasBusiness){
        businesses.push(newBusiness);
    }
    else{
        console.log("Usuario existente")
    }    
}

function logOut(){
    userOnline = null;
    localstorage.setItem('userOnline', JSON.stringify(userOnline));
}




/*------------------------------Validaciones-------------------------*/    
function emailValidation(input) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(input.value)){
        input.classList.remove('wrong');
        input.classList.add('correct');
    } else {
        input.classList.remove('correct');
        input.classList.add('wrong');
    }
}

function businessNameValidation(input) {
    if (/^(?!\s)(?!.*\s$)(?=.*[a-zA-Z0-9])[a-zA-Z0-9 '~?!]{2,}$/.test(input.value)){
        input.classList.remove('wrong');
        input.classList.add('correct');
    } else {
        input.classList.remove('correct');
        input.classList.add('wrong');
    }
}

function passwordValidation(input) {
    if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(input.value)){
        input.classList.remove('wrong');
        input.classList.add('correct');
    } else {
        input.classList.remove('correct');
        input.classList.add('wrong');
    }
}

function passwordConfirmValidation(same) {
    if (same){
        input.classList.remove('wrong');
        input.classList.add('correct');
    } else {
        input.classList.remove('correct');
        input.classList.add('wrong');
    }
}

function creditNumberValidation(input) {
    if (/^[0-9]{16}$/.test(input.value)){
        input.classList.remove('wrong');
        input.classList.add('correct');
    } else {
        input.classList.remove('correct');
        input.classList.add('wrong');
    }
}

function expirationValidation(input) {
    if (/^[\d]{2}\/[\d]{4}$/.test(input.value)){
        input.classList.remove('wrong');
        input.classList.add('correct');
    } else {
        input.classList.remove('correct');
        input.classList.add('wrong');
    }
}

function cvvValidation(input) {
    if (/^[0-9]{3,4}$/.test(input.value)){
        input.classList.remove('wrong');
        input.classList.add('correct');
    } else {
        input.classList.remove('correct');
        input.classList.add('wrong');
    }
}

