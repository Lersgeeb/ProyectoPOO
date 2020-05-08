
/*Variaibles*/
var images = [], x = -1;
images[0] = "../img/Principal/image1.jpg";
images[1] = "../img/Principal/image2.jpg";
images[2] = "../img/Principal/image3.jpg";

categories = [
    'Mejores Promociones',
    'Autos, Motos y Otros',
    'Salud y Fitness',
    'Belleza',
    'Educación y Cursos',
    'Hogar y Jardín',
    'Infantiles',
    'Joyería',
    'Mascotas',
    'Moda',
    'Tecnología'
];

var products = null;

/*-------------------------------------------------------HEADER-------------------------------------------------------*/

//Cambia la imagen del encabezado de la Pagina 
function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementsByClassName("jumbotron")[0].style.backgroundImage = `url(${images[x]})`;
}

function displayPreviousImage() {
    x = (x <= 0) ? images.length - 1 : x - 1;
    document.getElementById("img").src = images[x];
}

function startTimer() {
    setInterval(displayNextImage, 3000);
}


/*-------------------------------------------------------RENDERS------------------------------------------------------- */
async function render(){

    const userOnline = await getUserOnline();
    renderNav(userOnline);
    renderCategoriesBar();
    products = await getAllProducts();
    renderProducts(null,userOnline);
}

function renderNav(user){
    user;
    navBarPage = document.getElementById('navBarPage');
    if(!user){
        navBarPage.innerHTML = `    <a href="../LandingPageV2/" class="home button mr-md-auto">Wachalo</a>
                                    <nav class="my-2 my-md-0 mr-md-3">
                                    </nav>
                                    <a class="btn btn-outline-primary" href="../SignUp/">Iniciar Sesion</a>`;
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
                                <span>${user.userName} &nbsp</span> <img src="${user.imageProfile}" class="rounded-circle" style="width: 1.8em;">
                                </button>
                                <div class="dropdown-menu dropdown-menu-right" style="width: 6em;" aria-labelledby="dropdownMenuOffset">
                                <div class="px-4 accountInfo">
                                <small class="userName">${user.firstname.split(" ")[0]} ${user.lastName.split(" ")[0]}</small>
                                    <small class="userEmail" >${user.email}</small>
                                </div>
                                
                                <a class="dropdown-item" href="../UserPage/"><i class="fas fa-user-circle"></i> Mi perfil</a>
                                <a style="cursor:pointer;" class="dropdown-item" onclick="logOut()"><i class="fas fa-sign-out-alt"></i> Cerrar Sesión</a>
                                </div>
                                </div>`;
    }
}


/*<img class="card-img-top imageProducts" src="${product.urlImg}" alt="Card image cap">*/ 
/*<div class="card-img-top imageProducts" style="background-image:url(${product.urlImg}); background-position: 30% 50%; " ></div> */
function renderProducts(value, userOnline){
    productRows = document.getElementById('productRows');
    productRows.innerHTML = '';
    
    if(value){
        titleCategories = document.getElementById('titleCategories')
        titleCategories.innerHTML = value;
    }

    for(product of products){
        if(value == 'Mejores Promociones' || value == null || value==product.category){
            productRows.innerHTML += `  <div class="col-md-6 col-lg-3">
                                            <div class="card mb-4 box-shadow">
                                            <img class="card-img-top imageProducts" style="max-height:15em;" src="${product.urlImg}" alt="Card image cap">
                                            <div class="card-body">
                                                <p class="rateProduct mb-0">
                                                ${renderRate(product.inSale.rate)}
                                                </p>
                                                <div class="quantUser" style="text-align: center;">
                                                ${product.inSale.rateQuant}<i class="fas fa-user"></i>
                                                </div>

                                                <div class="saleProduct"> 
                                                <div class="sale"><h2>${product.inSale.sale * 100}%</h2></div>
                                                <div class="prices">
                                                    <div class="price beforePrice">Antes: L.${product.price}</div> 
                                                    <div class="price nowPrice">Ahora: L.${product.price * (1-product.inSale.sale)}</div>
                                                </div>                      
                                            </div>
                                                <p class="card-text descProducts mb-0">${product.description}</p>
                                                <p class="text-muted companyName">${product.from}</p>
                                                <p class="productDate">Quedan ${product.inSale.duration}</p>
                                                <div class="d-flex justify-content-between align-items-center mt-3">
                                                <div class="btn-group">
                                                    <button type="button" class="btn btn-sm btn-warning">+ Detalles</button>
                                                    ${ userOnline ? `<button type="button" onClick="addToCart('${product.from}',${product.id})" class="btn btn-sm btn-warning"><i class="fas fa-cart-plus"></i> Comprar</button>` : ''}
                                                </div>
                                                </div>                                              
                                            </div>
                                            </div>
                                        </div>`;
        }
    }

    
}

function renderRate(rate){
    return `${'<i class="fas fa-star"></i>'.repeat(rate)}${'<i class="far fa-star"></i>'.repeat(5-rate)}`
}

function renderCategoriesBar(){
    dropdownCategories = document.getElementById('dropdownCategories');
    dropdownCategories.innerHTML = '';
    for(category of categories){
        dropdownCategories.innerHTML += `<button class="dropdown-item" onclick="renderProducts('${category}')">${category}</button>` 
    }
}


/*-------------------------------------------------------Funcionalidades-------------------------------------------------------*/
async function logOut(){
    visualLoadingNavbar(true);
    logoutSession = await userLogOut();
    visualLoadingNavbar(false);
    if(logoutSession){
        renderNav();
        renderProducts();
    }
}

function addToCart(businessName, productIndex){
    addProductToCart(businessName,productIndex);
    console.log('Producto Añadido');
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
render();