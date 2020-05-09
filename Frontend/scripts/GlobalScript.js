var users = {};

/*----------------------------------------------Business----------------------------------------------*/

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

/*----------------------------------------------Users----------------------------------------------*/

async function getUserOnline(){
    
    usersURL = '../../Backend/api/usersApi.php';

    const user = await axios({
        method:'GET',
        url: usersURL,
        responsetype:'json'
    });

    if(user.request.status == 200)
        return user.data;

}

async function userAuthentication(emailValue,passwordValue){

    loginURL = '../../Backend/api/loginUser.php';
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
            const user = await getUserOnline();
            return user;
        }
    }
}



async function userLogOut(){
    logoutURL = '../../Backend/api/logoutUser.php';

    const logout = await axios({
        method:'GET',
        url: logoutURL, 
        responsetype:'json'
    });

    if(logout.request.status == 200){
        return logout.data;
    }
}

async function createUser(user){
    signUpURL = '../../Backend/api/signUpUser.php';

    const signUp = await axios({
        method:'POST',
        url: signUpURL, 
        responsetype:'json',
        data:user
    });

    if(signUp.request.status == 200){
        return signUp.data;
    }

}


/*----------------------------------------------Principal----------------------------------------------*/
async function getAllProducts(){
    productUrl = '../../Backend/api/productsApi.php';

    const products = await axios({
        method:'GET',
        url: productUrl, 
        responsetype:'json',
    });

    if(products.request.status == 200){
        return products.data;
    }
}

/*----------------------------------------------BusinessPage----------------------------------------------*/
async function getProductsOfBusiness(){
    productUrl = '../../Backend/api/productsApi.php?selfProducts=true';

    const products = await axios({
        method:'GET',
        url: productUrl, 
        responsetype:'json',
    });

    if(products.request.status == 200){
        return products.data;
    }
}
/*----------------------------------------------UserPage----------------------------------------------*/

async function getProductByIndex(businessName,productIndex, quantValue){
    productUrl = `../../Backend/api/productsApi.php?businessName=${businessName}&id=${productIndex}`;

    const product = await axios({
        method:'GET',
        url: productUrl, 
        responsetype:'json',
    });

    if(product.request.status == 200){
        if(quantValue)
            product.data["quant"] = quantValue;

        return product.data;
    }
}

async function getproductsLiked(){
    userOnline = await getUserOnline();
    if(userOnline){
        products = userOnline.productsLiked;
        if(products){
            productsJson = [];
            for(product of products){
                Productliked =  await getProductByIndex(product.businessName, product.productIndex);
                productsJson.push(Productliked);
            }
            console.log('aver:', productsJson)
            return productsJson;
        }
    }
}