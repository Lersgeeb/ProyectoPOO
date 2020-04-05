function render(){
    renderNav(userOnline);
    renderProductsLiked();
    renderFollowBusinesses();
}

function renderNav(user){
    navBarPage = document.getElementById('navBarPage');
    if(userOnline){
        navBarPage.innerHTML = `<a href="../LandingPageV2/index.html" class="home button mr-md-auto">Wachalo</a>
        <nav class="my-2 my-md-0 mr-md-3">
    
        </nav>
        <div class="dropdown mr-1">
        <button type="button" class="btn  btn-outline-warning dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,20">
        <span>${user.userName} &nbsp</span> <img src="${user.imageProfile}" class="rounded-circle" style="width: 1.8em;">
        </button>
        <div class="dropdown-menu dropdown-menu-right" style="width: 6em;" aria-labelledby="dropdownMenuOffset">
        <div class="px-4 accountInfo">
        <small class="userName">${userOnline.firstname.split(" ")[0]} ${userOnline.lastName.split(" ")[0]}</small>
            <small class="userEmail" >${user.email}</small>
        </div>
        
        <a class="dropdown-item" href="../Principal/index.html">Ofertas </a>
        <a class="dropdown-item" onclick="logOut()">Cerrar Sesion</a>
        </div>
        </div>`
    }
}

function logOut(){
    userLogOut();
    window.location.href = "../LandingPageV2";
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

render();