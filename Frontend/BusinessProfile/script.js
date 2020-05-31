
async function render(){
    renderProfile();

    userOnline = await getUserOnline();
    renderNav(userOnline);
}

function renderNav(user){
    navBarPage = document.getElementById('navBarPage');
    if(!user){
        navBarPage.innerHTML = `    <a href="../LandingPageV2/" class="home button mr-md-auto">Wachalo</a>
                                    <nav class="my-2 my-md-0 mr-md-3">
                                    </nav>
                                    <a class="btn btn-outline-primary" href="../SignUp/">Iniciar Sesión</a>`;
    }
    else{
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
                                <a class="dropdown-item" href="../UserPage/"><i class="fas fa-user-circle"></i> Mi perfil</a>
                                <a class="dropdown-item" href="../Principal/"><i class="fas fa-shopping-bag"></i> Ofertas</a>
                                <a style="cursor:pointer;" class="dropdown-item" onclick="logOut()"><i class="fas fa-sign-out-alt"></i> Cerrar Sesión</a>
                                </div>
                                </div>`;
    }
}

async function logOut(){

    visualLoadingNavbar(true);
    logoutSession = await userLogOut();
    visualLoadingNavbar(false);
    renderNav();
}

/*loading*/
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

function renderRate(rate){
    return `${'<i class="fas fa-star"></i>'.repeat(rate)}${'<i class="far fa-star"></i>'.repeat(5-rate)}`
}

async function renderProfile(){
    businessName =  window.location.href.split("?business=");
    business = await getBusinessByName(businessName[1]);
    console.log(business)
    
    bannerProfile = document.getElementById('bannerProfile');
    bannerProfile.innerHTML = `<div class="bannerImg" style = "background-image: url(${business.bannerImg}?${Math.random()});"></div>`


    headerprofiles = document.getElementById('headerprofiles');
    headerprofiles.innerHTML = `<div class="businessInfo">
                                    <div class="businessName">${business.businessName}</div>
                                    <div class="businesDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi at ad voluptatibus, obcaecati id assumenda dolor consequatur? Earum ducimus maiores nulla, dignissimos ullam voluptatum quam, magni tempore velit, ad facere?</div>
                                    <div class="businessSocial mt-3">                      
                                            <ul class="pl-0">
                                                <li class="btn btn-outline-warning"><i class="fab fa-facebook"></i></li>
                                                <li class="btn btn-outline-warning"><i class="fab fa-instagram"></i></li>
                                                <li class="btn btn-outline-warning"><i class="fab fa-twitter"></i></li>
                                            </ul>
                                    </div>
                                </div>                
                                <img class="rounded-circle profileImg" src="${business.profileImg}?${Math.random()}" alt="">`;

    productInSaleProfile = document.getElementById('productInSaleProfile');
    productInSaleProfile.innerHTML = '';
    
    if(business.products){
        for(productId in business.products){
            product = business.products[productId];
            if(product.inSale){
                productInSaleProfile.innerHTML += `  <div class="col-md-6 col-lg-3">
                                                        <div class="card mb-4 box-shadow">
                                                        <img style="max-height: 10em;" class="card-img-top imageProducts" src="${product.urlImg}?${Math.random()}" alt="Card image cap">
                                                        <div class="card-body">
                                                            <p class="rateProduct mb-0">
                                                            ${renderRate(product.inSale.rate)}                
                                                            </p>
                                                            <div class="quantUser" style="text-align: center;">
                                                            ${product.inSale.rateQuant} <i class="fas fa-user"></i>
                                                            </div>
    
                                                            <div class="saleProduct"> 
                                                            <div class="sale"><h3 class="mb-0">${parseInt( product.inSale.sale * 100 )}%</h3></div>
                                                            <div class="prices">
                                                                <div class="price beforePrice">Antes: L. ${product.price}</div> 
                                                                <div class="price nowPrice">Ahora: L. ${product.price * (1 - product.inSale.sale)}</div>
                                                            </div>                      
                                                            </div>
                                                            <div class="d-flex justify-content-between align-items-center mt-3">
                                                            <div class="btn-group">
                                                                <button type="button" class="btn btn-sm btn-outline-warning">+ Detalles</button>
                                                            </div>
                                                            </div>                                              
                                                        </div>
                                                        </div>
                                                    </div>`;
            }
        }
    }
}
render();