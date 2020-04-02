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