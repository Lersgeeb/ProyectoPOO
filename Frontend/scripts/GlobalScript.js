var users = {};
var loginURL = '../../Backend/api/loginBusiness.php';
var businessesURL = '../../Backend/api/businessesApi.php';
var businessOnline = null;

function getUser(){
    axios({
        method:'GET',
        url: businessesURL, //Por lo general se usara dirreciones absolutas
        responsetype:'json'
    }).then( res => {
        console.log(res);
        return res;
    }).catch(error=>{
        console.error(error);
    });
}


function authentication(emailValue,passwordValue){

    logInData = {
        email:emailValue,
        password:passwordValue
    }
    console.log(logInData)

    axios({
        method:'POST',
        url: loginURL, //Por lo general se usara dirreciones absolutas
        responsetype:'json',
        data:logInData
    }).then( res => {
        console.log(res);
        if(res){
            return getUser();
        }
    }).catch(error=>{
        return false;
    });
}


