function login(){
    emailInput = document.getElementById('emailInput');
    passwordInput = document.getElementById('passwordInput');

    if(emailInput.value && passwordInput.value){
        user = userAuthentication(emailInput.value, passwordInput.value);
        if(user){
            window.location.href = "../LandingPageV2";
        }
        else{
            console.log("error")
        }
    }
}

function signUpUser(){   
    
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
       
        newUser = createUser(user);
        if(newUser){
            userAuthentication(user.email, user.password);
            
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