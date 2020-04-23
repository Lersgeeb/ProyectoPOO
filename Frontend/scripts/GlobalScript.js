var users = {};
var loginURL = '../../Backend/api/loginBusiness.php';
var logoutURL = '../../Backend/api/logoutBusiness.php';
var businessesURL = '../../Backend/api/businessesApi.php';


function getBusinessOnline(){
    
    return new Promise((resolve,reject) => {
        axios({
            method:'GET',
            url: businessesURL, //Por lo general se usara dirreciones absolutas
            responsetype:'json'
        }).then( business => {
            if(business)
                resolve(business.data);
            else    
                resolve(false);
        }).catch(error=>{
            console.error(error);
            reject("Error al acceder con el usuario en linea")
        });
    })
    
}


function authentication(emailValue,passwordValue){

    logInData = {
        email:emailValue,
        password:passwordValue
    }

    return new Promise((resolve,reject) => {
        axios({
            method:'POST',
            url: loginURL, //Por lo general se usara dirreciones absolutas
            responsetype:'json',
            data:logInData
        }).then( login => {
            if(login){
                getBusinessOnline().then((business) => {
                    resolve(business);
                });
            }
            else
                resolve(false);
        }).catch(error=>{
            return false;
            reject("error durante la autenticacion")
        });
    });
    
}

function logOut(){
    return new Promise((resolve,reject) => {
        axios({
            method:'GET',
            url: logoutURL, //Por lo general se usara dirreciones absolutas
            responsetype:'json'
        }).then( logout => {
            resolve(logout);
        }).catch(error=>{
            console.error(error);
            reject("Error al acceder con el usuario en linea")
        });
    })
}


