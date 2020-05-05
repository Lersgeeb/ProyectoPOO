var users = {};

async function getBusinessOnline(){
    
    businessesURL = '../../Backend/api/businessesApi.php';

    const business = await axios({
        method:'GET',
        url: businessesURL,
        responsetype:'json'
    });

    if(business.request.status == 200)
        return business.data;

}


async function authentication(emailValue,passwordValue){
    loginURL = '../../Backend/api/loginBusiness.php';
    logInData = {
        email:emailValue,
        password:passwordValue
    }

    const login = await axios({
        method:'POST',
        url: loginURL, 
        responsetype:'json',
        data:logInData
    });

    if(login.request.status == 200){
        if(login.data){
            const business = await getBusinessOnline();
            return business;
        }
    }
        

    
}

async function logOut(){
    logoutURL = '../../Backend/api/logoutBusiness.php';

    const logout = await axios({
        method:'GET',
        url: logoutURL, 
        responsetype:'json'
    });

    if(logout.request.status == 200){
        return logout.data;
    }

}


async function createBusinessUser(businessUser){
    signUpURL = '../../Backend/api/signUpBusiness.php';

    const signUp = await axios({
        method:'POST',
        url: signUpURL, 
        responsetype:'json',
        data:businessUser
    });

    if(signUp.request.status == 200){
        return signUp.data;
    }

}