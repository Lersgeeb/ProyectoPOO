/*---------------------------------------Funcionalidades Sign---------------------------------------*/

async function login(){
    emailInput = document.getElementById('emailInput');
    passwordInput = document.getElementById('passwordInput');

    if(emailInput.value && passwordInput.value){
        const user = await userAuthentication(emailInput.value, passwordInput.value);
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
       
        const newUser = await createUser(user);
        if(newUser){
            const userSession = await  userAuthentication(user.email, user.password);
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