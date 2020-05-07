/*---------------------------------------Funcionalidades Sign---------------------------------------*/

async function login(){
    emailInput = document.getElementById('emailInput');
    passwordInput = document.getElementById('passwordInput');

    if(emailInput.value && passwordInput.value){
        visualLoadingLogin(true);
        const user = await userAuthentication(emailInput.value, passwordInput.value);
        visualLoadingLogin(false);

        if(user){
            window.location.href = "../LandingPageV2";
        }
        else{
            console.log("error")
        }
    }
}

async function signUpUser(){   
    
    nameSignInput = document.getElementById('nameSignInput');
    lastnameSignInput = document.getElementById('lastnameSignInput');
    usernameSignInput = document.getElementById('usernameSignInput');
    emailSignInput = document.getElementById('emailSignInput');
    passwordSignInput = document.getElementById('passwordSignInput');
    passwordConfirmSignInput = document.getElementById('passwordConfirmSignInput');


    if( namesValidation(nameSignInput) && namesValidation(lastnameSignInput) && namesValidation(usernameSignInput) && emailValidation(emailSignInput) && passwordValidation(passwordSignInput)  && confirmPasswordVal()){
        
        user = {  
            firstname:nameSignInput.value,
            lastName:lastnameSignInput.value,
            email: emailSignInput.value,
            userName:usernameSignInput.value,
            password:passwordSignInput.value,
            imageProfile:'../img/profile.jpg',
            followBusinesses:[],
            productsLiked:[],
            cart:[],
        }
        visualLoadingSignUp(true);
        const newUser = await createUser(user);
        

        if(newUser){
            const userSession = await  userAuthentication(user.email, user.password);
            visualLoadingSignUp(false);
            if(userSession)
                window.location.href = "../LandingPageV2/";
        }  
    }
    else{
        console.log("Rellenar el formulario con datos validos")
    }


}

function confirmPasswordVal(){
    passwordSignInput = document.getElementById('passwordSignInput');
    passwordConfirmSignInput = document.getElementById('passwordConfirmSignInput');
    if(passwordSignInput.value && passwordConfirmSignInput.value){
        
        return  passwordConfirmValidation(passwordConfirmSignInput, passwordSignInput.value);
    }
    else
        return  false
}

function visualLoadingLogin(loading){
    loginButton = document.getElementById('loginButtonUser');

    if(loading){
        loginButton.disabled = true;
        loginButton.innerHTML = `   <span class="fa-1x loadingVisible">
                                    <i class="fas fa-circle-notch fa-spin"></i>
                                    </span> 
                                    Entrando...`;
    }
    else{
        loginButton.disabled = false;
        loginButton.innerHTML = 'Entrar';
    }
}

function visualLoadingSignUp(loading){
    signUpButton = document.getElementById('signUpButtonUser');

    if(loading){
        signUpButton.disabled = true;
        signUpButton.innerHTML = `  <span class="fa-1x loadingVisible">
                                    <i class="fas fa-circle-notch fa-spin"></i>
                                    </span> 
                                    Creando Usuario...`;

    }
    else{

        signUpButton.disabled = false;
        signUpButton.innerHTML = 'Únete';
    }
}