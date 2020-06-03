/*---------------------------------------Render---------------------------------------*/

async function render(){
    const userOnline = await getUserOnline();
    if(userOnline){
        renderNav(userOnline);
        renderProfileHeader(userOnline);
        renderProductsLiked();
        renderFollowBusinesses();
        renderProfile(userOnline);
        renderCart()
    }
    

}

function renderNav(user){
    navBarPage = document.getElementById('navBarPage');
    if(user){
        navBarPage.innerHTML = `<a href="../LandingPageV2/" class="home button mr-md-auto">Wachalo</a>
        <nav class="my-2 my-md-0 mr-md-3">
    
        </nav>
        <div class="dropdown mr-1">
        <span class="fa-1x loading" id="loadingNavBar"">
          <i class="fas fa-circle-notch fa-spin"></i>
        </span> 
        <button type="button" class="btn  btn-outline-warning dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,20">
        <span>${user.userName} &nbsp</span> <img src="${user.imageProfile}?${Math.random()}" class="rounded-circle" style="width: 1.8em;">
        </button>
        <div class="dropdown-menu dropdown-menu-right" style="width: 6em;" aria-labelledby="dropdownMenuOffset">
        <div class="px-4 accountInfo">
        <small class="userName">${user.firstname.split(" ")[0]} ${user.lastName.split(" ")[0]}</small>
            <small class="userEmail" >${user.email}</small>
        </div>
        
        <a class="dropdown-item" href="../Principal/"><i class="fas fa-shopping-bag"></i> Ofertas</a>
        <a class="dropdown-item" style="cursor: pointer;" onclick="logOut()"><i class="fas fa-sign-out-alt"></i> Cerrar Sesión</a>
        </div>
        </div>`
    }
    else{
        window.location.href = "../LandingPageV2";
    }
}

function renderProfileHeader(user){
    profileHeaderInfo = document.getElementById('profileHeaderInfo');
    profileHeaderInfo.innerHTML = ` <img src="${user.imageProfile}?${Math.random()}" class="rounded-circle" style="width: 9em; height: 9em;" alt="">
                                    <h3 class="jumbotron-heading mt-3">${user.firstname.split(" ")[0]} ${user.lastName}</h3>`;
}

async function renderProductsLiked(){
    productsLikedDiv = document.getElementById('productsLikedDiv');
    
    let products = await getproductsLiked()
    console.log(JSON.stringify(products));
    console.log(products);
    productsLikedDiv.innerHTML = '';
    if(products){
        for(keyProduct in products){
            let product = products[keyProduct];

            productsLikedDiv.innerHTML += `  <div class="col-md-6 col-lg-3">
                                                <div class="card mb-4 box-shadow">
                                                <img style="height: 5em;" class="card-img-top imageProducts" src="${product.urlImg}" alt="Card image cap">
                                                    <div class="card-body">
                                                        <div class="productInfo">
                                                            <p class="text-muted companyName">${product.from}</p>
                                                            <div class="icon">
                                                                <span class="cart">
                                                                    <i class="fas fa-cart-plus"></i>
                                                                </span>
                                                                <span class="like ml-2" id="like">
                                                                    <i onclick="removeProductfromLiked('${product.key}',this)" class="fas fa-heart"></i>  
                                                                </span>   
                                                            </div>      
                                                        </div>                                                                                           
                                                    </div>                                              
                                                </div>
                                            </div>`;
                                               
        }
    }
    else{
        productsLikedDiv.innerHTML = `  <div class="col-12 emptySection">
                                            <i class="fas fa-box-open"></i> Ningún producto en la lista.
                                        </div>`;
    }
    
    
}

function renderRate(rate){
    return `${'<i class="fas fa-star"></i>'.repeat(rate)}${'<i class="far fa-star"></i>'.repeat(5-rate)}`
}


async function renderFollowBusinesses(){
    followBusinessesDiv = document.getElementById('followBusinessesDiv');
    followBusinesses =  await getfollowBusinesses();
    followBusinessesDiv.innerHTML = '';
    
    if(followBusinesses){
        for(followBusiness of followBusinesses){
            followBusinessesDiv.innerHTML += `   <div class="col-md-6 col-lg-3">
                                                    <div class="card mb-4 box-shadow">
                                                    <img style="height: 5em;" class="card-img-top imageProducts" src="${followBusiness.profileImg}" alt="Card image cap">
                                                        <div class="card-body">
                                                            <div class="productInfo">
                                                                <p class="text-muted companyName">${followBusiness.businessName}</p>
                                                                <div class="icon">
                                                                    <span class="eye">
                                                                        <i class="far fa-eye"></i>
                                                                    </span>
                                                                    <span class="like ml-2">
                                                                        <i class="fas fa-heart"></i>  
                                                                    </span>   
                                                                </div>      
                                                            </div>                                                                                           
                                                        </div>                                              
                                                    </div>
                                                </div>`;
        }
    }
    else{
        followBusinessesDiv.innerHTML = `   <div class="col-12 emptySection">
                                                <i class="fas fa-building"></i> No sigues ninguna Empresa.
                                            </div>`;
    }

}

function renderProfile(user){
    profileFormDiv = document.getElementById('profileFormDiv');
    profileFormDiv.innerHTML = ''

    profileFormDiv.innerHTML = `<div class="col-12 col-md-6">
                                    <label for="">Foto de perfil</label>
                                    <div class="imgDiv">
                                        <div class="rounded-circle profileUserImg" style="background-image: url('${user.imageProfile}?${Math.random()}'); width: 8em; height: 8em;">
                                            <div class="rounded-circle" id="changeUserImgDiv" onclick="showFormImgProfile('${user.userName}')">
                                                <h3 class="changeImgTxt">
                                                    <i class="fas fa-edit"></i>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-12 col-md-6">
                                    <div class="form-group">
                                        <label for="nameInput">Nombre</label>
                                        <input type="name"  value="${user.firstname}" class="form-control" id="nameInput" placeholder="Nombre"  autocomplete="off">
                                    </div>
                                    <div class="form-group">
                                        <label for="lastnameInput">Apellidos</label>
                                        <input type="email" value="${user.lastName}" class="form-control" id="lastnameInput" aria-describedby="emailHelp"  autocomplete="on">
                                    </div>
                                    
                                </div>

                                <div class="col-12 col-md-6">
                                    <div class="form-group">
                                        <label for="emailSignInput">Email</label>
                                        <input type="email" value="${user.email}" class="form-control" id="emailSignInput" aria-describedby="emailHelp"   autocomplete="on">
                                    </div>
                                    <div class="form-group">
                                        <label for="passwordInput">Contraseña</label>
                                        <input type="password" value="${user.password}" class="form-control" id="passwordInput" placeholder="Contraseña"  autocomplete="off" >
                                    </div>
                                </div>

                                <div class="col-12 col-md-6">
                                    <div class="form-group">
                                        <label for="usernameInput">Nombre de Usuario</label>
                                        <input type="email" value="${user.userName}" class="form-control" id="usernameInput" aria-describedby="emailHelp" placeholder="Email"   autocomplete="on">
                                    </div>
                                    <div class="form-group">
                                        <label for="saveInput">Guardar</label>
                                        <button  class="form-control btn btn-outline-warning" id="saveInput">Guardar</button>
                                    </div>
                                </div>`
    
}

function showFormImgProfile(username){
    
    $('#changeImgProfileModal').modal('show');

    changeProfileOption = document.getElementById('changeProfileOption');
    changeProfileOption.innerHTML = `   <button type="button" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
                                        <button type="button" class="btn btn-warning" onClick="changeProfileImgUser('${username}',this)">Cambiar</button>`
}


async function removeProductfromLiked(productLikedKey,input){
    setLoading(true, input.parentNode, " ");
    await removeProductLiked(productLikedKey);
    renderProductsLiked();
}

/*AXIOS PROFILE*/

async function changeProfileImgUser(username,input){
    profileImgUrl = '../../Backend/api/uploadProfileUser.php';
    form = document.getElementById('formImageProfile');
    let formdata = new FormData(form);
    formdata.append('nameFile', username)

    setLoading(true,input,'Subiendo...')
    const pathImgProfile = await axios.post(profileImgUrl, formdata)

    if(pathImgProfile.request.status == 200){
        userOnline = await getUserOnline();
        renderNav(userOnline);
        renderProfileHeader(userOnline);
        renderProfile(userOnline);
        $('#changeImgProfileModal').modal('hide');
    }
}

async function renderCart(){
    productRow= document.getElementById('productRow');
    productRow.innerHTML = '';

    products = await getCartProducts();
    total = 0;

    if(products){
        cartProductIndex = 0;
    
        for(cartKeyProduct in products){
            product = products[cartKeyProduct];
            
            priceWithSale = product.price * (1 - product.inSale.sale);
            totalProduct = priceWithSale * product.quant;
            total += totalProduct;
    
            productRow.innerHTML += ` <tr class="text-center"  >
                                        <th scope="row" style="padding:0 !important;"><img src="${product.urlImg}"   style="width: 6em; height: 5em;" alt=""></th>
                                        <td>L. ${priceWithSale}</td>
                                        <td> x${product.quant}</td>
                                        <td>L. ${totalProduct}</td>
                                        <td><i onclick="removeProduct('${cartKeyProduct}',this)" class="far fa-trash-alt"></i></td>
                                    </tr>`
    
        }
    }

    totalRow = document.getElementById('totalRow');
    totalRow.innerHTML =    `<tr class="text-center"  >
                                <th scope="row">Total a pagar</th>
                                <td>-</td>
                                <td>-</td>
                                <td id="totalTD">L. ${total}</td>
                                <td></td>
                            </tr>`
}

/*---------------------------------------Funcionalidades UserPage---------------------------------------*/

async function logOut(){
    visualLoadingNavbar(true);
    logoutSession = await userLogOut();
    visualLoadingNavbar(false);
    window.location.href = "../LandingPageV2";
}

async function removeProduct(cartProductIndex,input){
    setLoading(true,input.parentNode," ")
    document.getElementById('totalTD').innerHTML = 'L. ...'
    productRemoved = await removeCartProduct(cartProductIndex);
    renderCart();
}


/*loading */

function visualLoadingNavbar(loading){
    dropdownNavbar = document.getElementById('dropdownMenuOffset');
    loadingNavBar = document.getElementById('loadingNavBar');

    if(loading){
        loadingNavBar.style.display = "inline-block";
        dropdownNavbar.disabled = true;
    }
    else{
        loadingNavBar.style.display = "none";
        dropdownNavbar.disabled = false;
    }
}

function setLoading(status, input, changeText){
    if(status){  
        input.innerHTML = ` <span class="fa-1x loadingVisible">
                                <i class="fas fa-circle-notch fa-spin"></i>
                            </span>
                            ${changeText}`;
        input.disabled = true;
    }
    else{
        input.innerHTML = `${changeText}`;
        input.disabled = false;
      
    }
}

render();