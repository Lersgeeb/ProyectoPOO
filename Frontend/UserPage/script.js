/*---------------------------------------Render---------------------------------------*/

async function render(){
    const userOnline = await getUserOnline();
    if(userOnline){
        renderNav(userOnline);
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
        <button type="button" class="btn  btn-outline-warning dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,20">
        <span>${user.userName} &nbsp</span> <img src="${user.imageProfile}" class="rounded-circle" style="width: 1.8em;">
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

function renderProductsLiked(){
    productsLikedDiv = document.getElementById('productsLikedDiv');
    productsLikedDiv.innerHTML = '';

    products = getproductsLiked()

    for(product of products){
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

function renderRate(rate){
    return `${'<i class="fas fa-star"></i>'.repeat(rate)}${'<i class="far fa-star"></i>'.repeat(5-rate)}`
}


function renderFollowBusinesses(){
    followBusinessesDiv = document.getElementById('followBusinessesDiv');
    followBusinessesDiv.innerHTML = '';
    
    followBusinesses =  getfollowBusinesses();
    
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

function renderProfile(user){
    profileFormDiv = document.getElementById('profileFormDiv');
    profileFormDiv.innerHTML = ''

    profileFormDiv.innerHTML = `<div class="col-12 col-md-6">
                                    <label for="">Foto de perfil</label>
                                    <div class="imgDiv">
                                        <img src="${user.imageProfile}" class="rounded-circle" style="width: 8em; height: 8em;" alt="">
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

function renderCart(){
    productRow= document.getElementById('productRow');
    productRow.innerHTML = '';

    products = getCartProducts();
    total = 0;
    cartProductIndex = 0;

    for(product of products){

        priceWithSale = product.price * (1 - product.inSale.sale);
        totalProduct = priceWithSale * product.quant;
        total += totalProduct;

        productRow.innerHTML += ` <tr class="text-center"  >
                                    <th scope="row" style="padding:0 !important;"><img src="${product.urlImg}"   style="width: 6em; height: 5em;" alt=""></th>
                                    <td >${product.id}</td>
                                    <td>L. ${priceWithSale}</td>
                                    <td> x${product.quant}</td>
                                    <td>L. ${totalProduct}</td>
                                    <td><i onclick="removeProduct(${cartProductIndex++})" class="far fa-trash-alt"></i></td>
                                </tr>`

    }

    totalRow = document.getElementById('totalRow');
    totalRow.innerHTML =    `<tr class="text-center"  >
                                <th scope="row">Total a pagar</th>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>L. ${total}</td>
                                <td></td>
                            </tr>`
}

/*---------------------------------------Funcionalidades UserPage---------------------------------------*/

function logOut(){
    userLogOut();
    window.location.href = "../LandingPageV2";
}

function removeProduct(cartProductIndex){
    removeCartProduct(cartProductIndex);
    renderCart();
}

render();