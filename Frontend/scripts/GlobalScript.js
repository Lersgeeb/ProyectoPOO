var users = {};

/*----------------------------------------------BusinessSign----------------------------------------------*/

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

async function addProductToCart(businessName, productIndex, quant){
    cartNewProduct = {
        "businessName": businessName,
        "productIndex": productIndex,  
        "quant":quant,
    }

    cartUrl = '../../Backend/api/cartApi.php';

    const productAdded = await axios({
        method:'POST',
        url: cartUrl, 
        responsetype:'json',
        data:cartNewProduct
    });

    if(productAdded.request.status == 200){
        return productAdded.data;
    }
}

async function getProductByIdForModal(id,businessName){
    productUrl = '../../Backend/api/productsApi.php';

    const product = await axios({
        method:'GET',
        url: productUrl, 
        responsetype:'json',
        params:{
            "id":id,
            "businessName":businessName,
            "modal":true
        }
    });

    if(product.request.status == 200){
        return product.data;
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

async function addProductOnBusiness(newProduct){
    productUrl = '../../Backend/api/productsApi.php';

    const products = await axios({
        method:'POST',
        url: productUrl, 
        responsetype:'json',
        data:newProduct
    });

    if(products.request.status == 200){
        return products.data;
    }
}

async function addSaleOnlinebusiness(newSale, productKey){
    productUrl = '../../Backend/api/productsApi.php';

    sale = {
        "inSale":newSale,
        "productKey":productKey
    }

    const inSale = await axios({
        method:'PUT',
        url: productUrl, 
        responsetype:'json',
        data:sale
    });

    if(inSale.request.status == 200){
        return inSale.data;
    }
}

async function removeSaleOnlinebusiness(productKey){
    productUrl = '../../Backend/api/productsApi.php';

    const deleteSale = await axios({
        method:'DELETE',
        url: productUrl, 
        responsetype:'json',
        params:{
            "inSale":true,
            "productKey":productKey
        }
    });

    if(deleteSale.request.status == 200){
        return deleteSale.data;
    }
}

async function removeProductOfBusiness(productKey){
    productUrl = '../../Backend/api/productsApi.php';

    const deleteProduct = await axios({
        method:'DELETE',
        url: productUrl, 
        responsetype:'json',
        params:{
            "productKey":productKey
        }
    });

    if(deleteProduct.request.status == 200){
        return deleteProduct.data;
    }
}

async function getProductByKey(productKey){
    productUrl = `../../Backend/api/productsApi.php?productKey=${productKey}`;

    const product = await axios({
        method:'GET',
        url: productUrl, 
        responsetype:'json',
    });

    if(product.request.status == 200){
        return product.data;
    }
}

async function addBranchToProduct(productKey, branchKey){
    productUrl = '../../Backend/api/productsApi.php';

    const added = await axios({
        method:'PUT',
        url: productUrl, 
        responsetype:'json',
        data:{
            "branchKey":branchKey,
            "productKey":productKey
        }
    });

    if(added.request.status == 200){
        return added.data;
    }
}

async function removeBranchToProduct(productKey, branchProductKey){
    productUrl = '../../Backend/api/productsApi.php';

    const deleted = await axios({
        method:'DELETE',
        url: productUrl, 
        responsetype:'json',
        params:{
            "branchProductKey":branchProductKey,
            "productKey":productKey
        }
    });

    if(deleted.request.status == 200){
        return deleted.data;
    }
}

async function addBranchOfficeBusiness(lat,lon){
    branchOfficeUrl = '../../Backend/api/branchOfficeApi.php';

    const createBranchOffice = await axios({
        method:'POST',
        url: branchOfficeUrl, 
        responsetype:'json',
        data:{
            "lat":lat,
            "lon":lon
        }
    });

    if(createBranchOffice.request.status == 200){
        return createBranchOffice.data;
    }
}

async function removeBranchOfficeBusiness(branchOfficeKey){
    branchOfficeUrl = '../../Backend/api/branchOfficeApi.php';

    const deleteBranch = await axios({
        method:'DELETE',
        url: branchOfficeUrl, 
        responsetype:'json',
        params:{
            "branchOfficeKey":branchOfficeKey
        }
    });

    if(deleteBranch.request.status == 200){
        return deleteBranch.data;
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
        if(quantValue){
            for (keyProduct in product.data){

                product.data[keyProduct]["quant"] = quantValue;
            }

        }

        return product.data;
    }
}

async function getBusiness(businessName){
    businessURL = `../../Backend/api/businessesApi.php?businessName=${businessName}`;

    const businessInfo = await axios({
        method:'GET',
        url: businessURL, 
        responsetype:'json',
    });

    if(businessInfo.request.status == 200){
        return businessInfo.data;
    }
}


async function getproductsLiked(){
    let userOnline = await getUserOnline();
    if(userOnline){
        let products = userOnline.productsLiked;
        if(products){
            let productsJson = {};
            for(productLikedKey in products){
                let product = products[productLikedKey];
                productliked =  await getProductByIndex(product.businessName, product.productIndex);
                
                for (keyProduct in productliked){
                    let product = productliked[keyProduct];
                    product["key"] = productLikedKey;
                    productsJson[keyProduct] = product;
                }
            }
            
            return productsJson;
        }
    }
}

async function getfollowBusinesses(){
    userOnline = await getUserOnline();
    if(userOnline){
        followBusinesses = userOnline.followBusinesses;
        if(followBusinesses){
            businessesJson = [];
    
            for(followBusiness of followBusinesses){
                businessFollowed = await getBusiness(followBusiness);
                businessesJson.push(businessFollowed);
            }
        
            return businessesJson;
        }
    }
}



async function getCartProducts(){
    userOnline = await getUserOnline();
    if(userOnline){
        let products= userOnline.cart;
        if(products){

            productsJson = {};
        
            for(cartproductKey in products){
                product = products[cartproductKey];
                productCart =  await getProductByIndex(product.businessName, product.productIndex, product.quant);
              
                
                for (keyProduct in productCart){//Editar
                    product = productCart[keyProduct];
                    product["keyProduct"] = keyProduct;
                    productsJson[cartproductKey] = product;
                }
            }
            return productsJson;
        }
    }
}

async function removeCartProduct(cartProductIndex){
    cartUrl = '../../Backend/api/cartApi.php';

    const productAdded = await axios({
        method:'DELETE',
        url: cartUrl, 
        responsetype:'json',
        params:{
            "cartProcuctKey":cartProductIndex
        }
    });

    if(productAdded.request.status == 200){
        return productAdded.data;
    }
}

async function addProductLiked(businessName, productIndex){
    userUrl = '../../Backend/api/usersApi.php';

    const added = await axios({
        method:'PUT',
        url: userUrl, 
        responsetype:'json',
        data:{
            "businessName":businessName,
            "productIndex":productIndex,
            "productLiked":true
        }
    });

    if(added.request.status == 200){
        return added.data;
    }
}

async function removeProductLiked(productLikedKey){
    userUrl = '../../Backend/api/usersApi.php';

    const deleted = await axios({
        method:'DELETE',
        url: userUrl, 
        responsetype:'json',
        params:{
            "productLikedKey":productLikedKey
        }
    });

    if(deleted.request.status == 200){
        return deleted.data;
    }
}

async function isLiked(productId){
    userUrl = '../../Backend/api/usersApi.php';

    const liked = await axios({
        method:'GET',
        url: userUrl, 
        responsetype:'json',
        params:{
            "productId":productId
        }
    });

    if(liked.request.status == 200){
        return liked.data;
    }
}

/*BusinessProfile */

async function getBusinessByName(businessName){
    
    businessesURL = `../../Backend/api/businessesApi.php?businessName=${businessName}`;

    const business = await axios({
        method:'GET',
        url: businessesURL,
        responsetype:'json'
    });

    if(business.request.status == 200)
        return business.data;

}
