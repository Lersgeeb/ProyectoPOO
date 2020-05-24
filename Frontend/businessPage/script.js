
var businessOnline = null;
var categories = [
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
]
/*-----------------------NAV------------------------------*/ 
function renderNav(user){
    navBarPage = document.getElementById('navBarPage');
    navBarPage.innerHTML = `    <a class="my-0 mr-md-auto" href="../LandingPageV2/"><h5 class="my-0 mr-md-auto font-weight-normal brandName">Wachalo</h5></a>
                                    <nav class="my-2 my-md-0 mr-md-3">
                                    </nav>
                                    <div class="dropdown mr-1">
                                        <span class="fa-1x loading" id="loadingNavBar"">
                                            <i class="fas fa-circle-notch fa-spin"></i>
                                        </span> 
                                        <button type="button" class="btn  btn-outline-primary dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,20">
                                        <span>${user.businessName} &nbsp</span> <img src="${user.profileImg}" class="rounded-circle" style="width: 1.8em;">
                                        </button>
                                        <div class="dropdown-menu dropdown-menu-right" style="width: 6em;" aria-labelledby="dropdownMenuOffset">
                                        <div class="px-4 accountInfo">
                                            <small class="userEmail" >${user.email}</small>
                                        </div>
                                        
                                        <a class="dropdown-item" href="../businessSign/"><i class="fas fa-building"></i> Principal</a>
                                        <a class="dropdown-item" style="cursor: pointer;" onclick="logoutBusinessPage()"><i class="fas fa-sign-out-alt"></i> Cerrar Sesión</a>
                                        </div>
                                    </div>`
}

async function logoutBusinessPage(){
    visualLoadingNavbar(true)
    logoutSession = await logOut();
    visualLoadingNavbar(false);
    window.location.href = "../businessSign";

}

/*---------------------------------------HOME---------------------------------------*/

sells = {
    'Octubre 2019':300,
    'Noviembre 2019':200,
    'Diciembre 2019':700,
    'Enero 2020':300,
    'febrero 2020':300
}

function renderChart(){
    var myChart = document.getElementById('myChart').getContext('2d');

    var massPopChart = new Chart(myChart, {
        type:'line',
        data:{
            labels:getlabels(sells),
            datasets:[{
                label:'# de Ventas',
                data:getData(sells),
                fill:null,
                borderColor:'rgb(255, 99, 132)'
            }]
        },
        options:{
            title:{
                display:true,
                text:"Número de Ventas de tu empresa en los últimos Meses"
            },
            spanGaps: false,
            elements: {
                line: {
                    tension: 0.000001
                }
            },
            scales:{
                yAxes: [{
                    ticks: {
                        min: 0,
                        stepSize: 100,
                        suggestedMax: 1000
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Número de ventas'
                    }
                }], 
            }
        }
    });
}


function getlabels(sells){
    labels = []
    for(const month in sells){
        labels.push(month);
    }
    return labels
}

function getData(sells){
    data = []
    for(const month in sells){
        data.push(sells[month]);
    }
    return data;
}


/*--------------------------------------------PROFILE--------------------------------------------*/
function renderProfile(businessOnline){
    business = businessOnline;
    bannerProfile = document.getElementById('bannerProfile');
    bannerProfile.innerHTML = `<div  class="bannerImg"  style = "background-image: url(${business.bannerImg});"></div>`

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
                                <img class="rounded-circle profileImg" src="${business.profileImg}" alt="">`

    productInSaleProfile = document.getElementById('productInSaleProfile');
    productInSaleProfile.innerHTML = '';
    
    if(business.products){
        for(productId in business.products){
            product = business.products[productId];
            if(product.inSale){
                productInSaleProfile.innerHTML += `  <div class="col-md-6 col-lg-3">
                                                        <div class="card mb-4 box-shadow">
                                                        <img style="max-height: 10em;" class="card-img-top imageProducts" src="${product.urlImg}" alt="Card image cap">
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



/*---------------------------------ProductForm ---------------------------------------*/

//Render ProductForm
function renderCategories(){
    options = [];
    for(category of categories){
        options.push( `<option value="${category}">${category}</option>`);
    }
    categoryInputDiv = document.getElementById('categoryInputDiv')
    categoryInputDiv.innerHTML = `  <label for="categoryInput">Categoría del producto</label>
                                    <select class="form-control" name="categoryInput" id="categoryInput" >
                                        ${options.join("")}
                                    </select>
                                `;
}

async function renderProduts(){
    products = await getProductsOfBusiness();
    registeredProducts = document.getElementById('registeredProducts');
    registeredProducts.innerHTML = '';

    onSaleProducts = document.getElementById('onSaleProducts');
    onSaleProducts.innerHTML = '';

    if(products){
        for(productId in products){
            product = products[productId];
            registeredProducts.innerHTML += `    <div class="col-md-6 col-lg-3">
                                                    <div class="card mb-4 box-shadow">
                                                    <img style="height: 1em;" class="card-img-top imageProducts" src="${product.urlImg}" alt="Card image cap">
                                                    <div class="card-body">
                                                        <div class="price nowPrice">Precio: L.${product.price}</div>
                                                        <small class="text-muted">${product.category}</small>
                                                        <p class="card-text descProducts mb-0">${product.description}</p>                        
                                                        <div class="d-flex justify-content-between align-items-center mt-3">
                                                        <div class="btn-group">
                                                            <button type="button" class="btn btn-sm btn-outline-warning">Editar</button>                          
                                                            ${product.inSale? '':`<button type="button" onClick="showSaleForm('${productId}')" class="btn btn-sm btn-outline-warning"><i class="fas fa-tag"></i></button>`}
                                                            <button type="button" onClick="removeProduct('${productId}',this)" class="btn btn-sm btn-outline-warning"><i class="far fa-trash-alt"></i></button>                          
                                                        </div>
                                                        </div>                                              
                                                    </div>
                                                    </div>
                                                </div>`;
            
            if(product.inSale){
                onSaleProducts.innerHTML += `   <div class="col-md-6 col-lg-3">
                                                    <div class="card mb-4 box-shadow">
                                                    <img style="height: 1em;" class="card-img-top imageProducts" src="${product.urlImg}" alt="Card image cap">
                                                    <div class="card-body">
                                                        <p class="rateProduct mb-0">
                                                            ${renderRate(product.inSale.rate)}                  
                                                        </p>
                                                        <div class="quantUser" style="text-align: center;">
                                                        ${product.inSale.rateQuant}  <i class="fas fa-user"></i>
                                                        </div>
        
                                                        <div class="saleProduct"> 
                                                        <div class="sale"><h3 class="mb-0">${parseInt(product.inSale.sale * 100) }%</h3></div>
                                                        <div class="prices">
                                                            <div class="price beforePrice">Antes: L.${product.price}</div> 
                                                            <div class="price nowPrice">Ahora: L.${product.price * (1 - product.inSale.sale)}</div>
                                                        </div>                      
                                                        </div>
                                                        <div class="d-flex justify-content-between align-items-center mt-3">
                                                        <div class="btn-group">
                                                            <button type="button" class="btn btn-sm btn-outline-warning">Editar</button>
                                                            <button type="button" onClick="removeSale('${productId}',this)" class="btn btn-sm btn-outline-warning"><i class="far fa-trash-alt"></i></button>
                                                        </div>
                                                        </div>                                              
                                                    </div>
                                                    </div>
                                                </div>`;
            }
        }
    }
}

function renderRate(rate){
    return `${'<i class="fas fa-star"></i>'.repeat(rate)}${'<i class="far fa-star"></i>'.repeat(5-rate)}`
}

//Funcionalidades ProductForm

async function newProduct(input){
    productIdInput = document.getElementById('productIdInput');
    categoryInput = document.getElementById('categoryInput');
    imageUrlInput = document.getElementById('imageUrlInput');
    productPriceInput = document.getElementById('productPriceInput');
    productDescInput = document.getElementById('productDescInput');

    if(productIdInput.value ,imageUrlInput.value, productPriceInput.value, productDescInput.value){
        product = {
            category: categoryInput.value,
            price: productPriceInput.value,
            description: productDescInput.value,
            from: businessOnline.businessName,
            urlImg: imageUrlInput.value,
            inSale:null,
        }
        
        setLoading(true, input,'Creando...')
        added = await addProductOnBusiness(product);
        if(added)
            await renderProduts();
            setLoading(false, input,'Crear')
    }
}

function showSaleForm(productId){
    $('#modalSaleOnProduct').modal('show');
    saleOnProductButtons = document.getElementById('saleOnProductButtons');
    saleOnProductButtons.innerHTML = `  <button type="button" onclick="addSaleOnProduct('${productId}',this)" class="btn btn-outline-warning">Nueva Oferta</button>
                                        <button type="button" class="btn btn-outline-danger" data-dismiss="modal">X</button>`
    
}

async function addSaleOnProduct(productId,input){
    saleOnProductInput = document.getElementById('saleOnProductInput');
    saleDurationInput = document.getElementById('saleDurationInput');

    if( saleOnProductInput.value && saleDurationInput.value){
        inSale = {
            sale:parseFloat(saleOnProductInput.value),
            rate:0,
            rateQuant:0,
            duration:saleDurationInput.value,
        }

        setLoading(true,input,'Creando Oferta');
        inSale = await addSaleOnlinebusiness(inSale, productId);
        if(inSale){
            await renderProduts();
            setLoading(false,input,'Crear Oferta');
            businessOnline = await getBusinessOnline();
            renderProfile(businessOnline);
            
        }
        
    }
    $('#modalSaleOnProduct').modal('hide');

}

async function removeSale(productId,input){
    trashIcon = `<i class="far fa-trash-alt"></i>`;
    setLoading(true, input, "");

    deleted = await removeSaleOnlinebusiness(productId);
    if(deleted){
        await renderProduts();
        setLoading(false, input, trashIcon);
        businessOnline = await getBusinessOnline();
        renderProfile(businessOnline);
    }
}

async function removeProduct(productId,input){
    trashIcon = `<i class="far fa-trash-alt"></i>`;
    setLoading(true, input, "");

    deleted = await removeProductOfBusiness(productId);
    if(deleted){
        await renderProduts();
        setLoading(false, input, trashIcon);
        businessOnline = await getBusinessOnline();
        renderProfile(businessOnline);
    }
}

/*---------------------------------------Branch Offices---------------------------------------*/

//Render BranchOffices
function renderMap(zoom,lat,lon,withMarker){
   
    if(!(lat && lon)){
        country = businessOnline.country
        lat = country.lat
        lon = country.lon
    }
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

    if(withMarker){
        var marker = L.marker([lat, lon]).addTo(mymap);
    }

    setTimeout(function(){ mymap.invalidateSize()}, 400);

    renderBranchOfficeTableRows();
}

function renderBranchOfficeTableRows(){
    LatLonRow = document.getElementById('LatLonRow')
    LatLonRow.innerHTML = ''
    branchOffices = businessOnline.branchOffices;
    
    count=1;
    if(branchOffices){
        for (branchOfficekey in branchOffices){
            branchOffice = branchOffices[branchOfficekey];
            LatLonRow.innerHTML +=  ` <tr class="text-center"  >
                            <th scope="row">${count}</th>
                            <td>${branchOffice[0]}</td>
                            <td>${branchOffice[1]}</td>
                            <td><i onclick="renderMap(15,${branchOffice[0]},${branchOffice[1]},1)" class="fas fa-map-marker-alt"></i></td>
                            <td><i onclick="removeBranchOffice('${branchOfficekey}',this)" class="far fa-trash-alt"></i></td>
                            </tr>`
    
            count++;                   
        }
    }
    
}

//funcionalidades BranchOffices
async function addBranchOffice(input){
    lat = document.getElementById('lat');
    lon = document.getElementById('lon');
    
    if(lat.value && lon.value){

        markerIcon = '<i class="fas fa-map-marker-alt"></i>'

        setLoading(true,input,"")
        branchAdded = await addBranchOfficeBusiness(lat.value,lon.value);
        if(branchAdded){
            businessOnline = await getBusinessOnline();
            renderBranchOfficeTableRows();    
            setLoading(false,input,markerIcon);
        }

    }
    

}

async function removeBranchOffice(branchIndex,input){
    setLoading(true,input,"");
    branchrRemoved =  await removeBranchOfficeBusiness(branchIndex);
    
    if(branchrRemoved){
        businessOnline = await getBusinessOnline();   
        renderBranchOfficeTableRows();      
    }
    
    
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

/*----------------------------------------Render Main----------------------------------------*/

async function render(){
    
    businessOnline = await getBusinessOnline();
    if(businessOnline){
        renderNav(businessOnline);
        
        //Home
        renderChart(businessOnline);

        //Profile
        renderProfile(businessOnline);

        ///PoductForm 
        renderCategories();
        renderProduts();
    }
}


render();