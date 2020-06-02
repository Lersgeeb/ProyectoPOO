
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
var userOnline;
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

    userOnline = await getUserOnline();
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

    for(keyProduct in products){
        product = products[keyProduct];
        if(value == 'Mejores Promociones' || value == null || value==product.category){
            productRows.innerHTML += `  <div class="col-md-6 col-lg-3">
                                            <div class="card mb-4 box-shadow">
                                                <img class="card-img-top imageProducts" style="max-height:15em;" src="${product.urlImg}?${Math.random()}" alt="Card image cap">
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
                                                    <p class="text-muted companyName" onclick="goBusinessProfile('${product.from}')">${product.from}</p>
                                                    <p class="productDate">Quedan ${product.inSale.duration}</p>
                                                    <div class="d-flex justify-content-between align-items-center mt-3">
                                                        <div class="btn-group">
                                                            <button type="button" class="btn btn-sm btn-warning" onclick="showDetail('${keyProduct}','${product.from}',this)">Detalles</button>
                                                            ${ userOnline ? `<button type="button" onClick="showCartForm('${product.from}','${keyProduct}')" class="btn btn-sm btn-warning"><i class="fas fa-cart-plus"></i></button>` : ''}
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

async function showDetail(idProduct,businessName,input){
    
    setLoading(true,input,' ');
    productJson = await getProductByIdForModal(idProduct,businessName);
    
    detailProduct = document.getElementById('detailProduct')
    
    detailProduct.innerHTML = '';
    for(productKey in productJson){
        product = productJson[productKey];
        
        detailProduct.innerHTML = ` <div class="headerDetail">
                                        <img class="modalImg" src="${product.urlImg}?${Math.random()}" alt="">
                                        <div class="descProduct">
                                            <h3 class="modal-title" id="categoryDetail">${product.category}</h3>
                                            <small class="text-muted" id="fromDetail" onclick="goBusinessProfile('${product.from}')">${product.from}</small>
                                            <p id="descDetail">${product.description}</p>
                                        </div>
                                    </div>

                                    <div class="rateModalDiv">
                                    <div class="modalstars">
                                        ${renderRate(product.inSale.rate)} 
                                    </div>
                                    <div id="userQuantRate">
                                        ${product.inSale.rateQuant} <i class="fas fa-user"></i>
                                    </div>
                                    </div>
                                    
                                    <div class="buyProductModal">  
                                        <div class="saleProduct saleProductModal"> 
                                            <div class="sale saleModal"><h2>${product.inSale.sale * 100}%</h2></div>
                                            <div class="prices">
                                                <div class="price beforePrice">Antes: L.${product.price}</div> 
                                                <div class="price nowPrice">Ahora: L.${product.price * (1-product.inSale.sale)}</div>
                                            </div>
                                        </div>
                                        ${userOnline ? `
                                        <div class="quantModal ">
                                            <button type="button" class="btn btn-warning" id="buyButtonModal" onclick="addToCartModal('${businessName}', '${productKey}', this)" > <i class="fas fa-cart-plus"></i> </button>
                                            <div class="form-group">
                                                <label for="quantProductModal">Cantidad</label>
                                                <input class="form-control" type="number" id="quantProductModal" value="0">
                                            </div>
                                        </div>`:`
                                        <div class="SignInPls ">
                                            <a type="button" class="btn btn-warning" href="../SignUp/" id="signButton" > Iniciar Sesión</a>
                                            <small class="text-muted">Para compras directas</small>
                                        </div>`}                
                                    </div>`;
        renderMap(6,product.country,product.branchesOffices);    
    } 

    
    
    
    setLoading(false,input,'Detalles');
    $('#detailModal').modal('show');

}

function renderMap(zoom,country,branches){
   
    lat = country.lat;
    lon = country.lon;
    

    /*if(!(lat && lon)){
        country = businessOnline.country
        lat = country.lat
        lon = country.lon
    }*/
    
    document.getElementById('mapDiv').innerHTML = `<div id="map"></div>
                                                    <p><a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a></p>`;
    
    var mymap = L.map('map').setView([lat, lon], zoom );
    
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'your.mapbox.access.token'
    }).addTo(mymap);

    var popup = L.popup();
    mymap.on('click', onMapClick = (e) => {popup.setLatLng(e.latlng)
                                            .setContent( e.latlng.toString())
                                            .openOn(mymap);})

    if(branches){
        for(branch of branches){
            var marker = L.marker([branch[0], branch[1]]).addTo(mymap);
        }
    }

    setTimeout(function(){ mymap.invalidateSize()}, 400);
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

function showCartForm(businessName,productKey){
    
    $('#cartModal').modal('show');
    buyOptionDiv = document.getElementById('buyOption');
    buyOptionDiv.innerHTML = `  <button type="button" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
                                <button type="button" class="btn btn-warning" onclick="addToCart('${businessName}','${productKey}',this)">Comprar</button>`
    
}


async function addToCart(businessName, productKey,input){
    
    quant = document.getElementById('quantInput').value
    if(quant && quant!='0'){
        setLoading(true,input," ");
        productAdded = await addProductToCart(businessName,productKey, quant);
        console.log('Producto Añadido');
        setLoading(false,input,"Producto Añadido");
        document.getElementById('quantInput').value = '';
        $('#cartModal').modal('hide');
    }
}

async function addToCartModal(businessName,  productKey, input){
    
    quant = document.getElementById('quantProductModal').value
    if(quant && quant>0){    
        let checkIcon = '<i class="fas fa-check"></i>';
        setLoading(true,input," ");
        productAdded = await addProductToCart(businessName, productKey, quant);
        console.log('Producto Añadido');
        setLoading(false,input, checkIcon);
        input.disabled = true;
        document.getElementById('quantProductModal').value = '0';
    }
}

function goBusinessProfile(businessName){
    window.location.href = `../BusinessProfile/?business=${businessName}`;
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