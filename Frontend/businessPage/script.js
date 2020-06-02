
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
                                        <span>${user.businessName} &nbsp</span> <img src="${user.profileImg}?${Math.random()}" class="rounded-circle" style="width: 1.8em;">
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
    bannerProfile.innerHTML = ` <div  class="bannerImg"  style = "background-image: url(${business.bannerImg}?${Math.random()});">
                                    <div id="bannerOverlay" onclick="showFormImgBanner('${business.businessName}')">
                                        <h3 class="changeImgTxt">
                                            <i class="fas fa-edit"></i>
                                        </h3>
                                    </div>
                                </div>`

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
                                <div class="rounded-circle profileImg" style="background-image:url('${business.profileImg}?${Math.random()}')">
                                    <div id="changeImgDiv" class="rounded-circle" onclick="showFormImgProfile('${business.businessName}')">
                                        <div class="changeImgTxt">
                                            <i class="fas fa-edit"></i>
                                        </div>
                                    </div>
                                </div>`

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

function showFormImgProfile(businessName){
    
    $('#changeImgProfileModal').modal('show');

    changeProfileOption = document.getElementById('changeProfileOption');
    changeProfileOption.innerHTML = `  <button type="button" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
                                <button type="button" class="btn btn-warning" onClick="changeProfileImgBusiness('${businessName}',this)">Cambiar</button>`
    
}

function showFormImgBanner(businessName){
    
    $('#changeImgBannerModal').modal('show');

    changeBannerOption = document.getElementById('changeBannerOption');
    changeBannerOption.innerHTML = `   <button type="button" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
                                        <button type="button" class="btn btn-warning" onClick="changeBannerImgBusiness('${businessName}',this)">Cambiar</button>`
    
}

/*AXIOS PROFILE */

async function changeProfileImgBusiness(businessName,input){
    profileImgUrl = '../../Backend/api/uploadProfileBusiness.php';
    form = document.getElementById('formImageProfile');
    let formdata = new FormData(form);
    formdata.append('nameFile', businessName)

    setLoading(true,input,'Subiendo...')
    const pathImgProfile = await axios.post(profileImgUrl, formdata)

    if(pathImgProfile.request.status == 200){
        businessOnline = await getBusinessOnline();
        renderNav(businessOnline);
        renderProfile(businessOnline);
        $('#changeImgProfileModal').modal('hide');
    }
}

async function changeBannerImgBusiness(businessName,input){
    bannerImgUrl = '../../Backend/api/uploadBannerBusiness.php';
    form = document.getElementById('formImageBanner');
    let formdata = new FormData(form);
    formdata.append('nameFile', businessName)

    setLoading(true,input,'Subiendo...')
    const pathImgBenner = await axios.post(bannerImgUrl, formdata)

    if(pathImgBenner.request.status == 200){
        businessOnline = await getBusinessOnline();
        renderProfile(businessOnline);
        $('#changeImgBannerModal').modal('hide');
    }
}

/*--------------------------------------ProductForm --------------------------------------------*/

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
                                                    <img style="height: 1em;" class="card-img-top imageProducts" src="${product.urlImg}?${Math.random()}" alt="Card image cap">
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
                                                    <img style="height: 1em;" class="card-img-top imageProducts" src="${product.urlImg}?${Math.random()}" alt="Card image cap">
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
                                                            <button type="button" class="btn btn-sm btn-outline-warning" onclick="showBranchOffConfProduct('${productId}')" ><i class="fas fa-map-marker-alt"></i></button>
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

async function renderModalMap(zoom,productId){
   
    LatLonRow = document.getElementById('LatLonRowModal');
    LatLonRow.innerHTML =  `   <tr class="text-center"  >
                                    <td>...</td>
                                    <td>...</td>
                                    <td>...</td>
                                </tr>`

    product = await getProductByKey(productId);
    businessOnline = await getBusinessOnline();

    renderBranchOfficeTableModal(business, product, productId);

    country = businessOnline.country
    lat = country.lat
    lon = country.lon

    var container = L.DomUtil.get('mapModal');
    if(container != null){
    container._leaflet_id = null;
    }
    
    document.getElementById('mapDivModal').innerHTML = `<div id="mapModal"></div>
                                                             <p><a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a></p>`;
    var mymapModal = L.map('mapModal').setView([lat, lon], zoom );
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'your.mapbox.access.token'
    }).addTo(mymapModal);

    var popup = L.popup();
    mymapModal.on('click', onMapClick = (e) => {popup.setLatLng(e.latlng)
                                            .setContent( e.latlng.toString())
                                            .openOn(mymapModal);})

    let totalbranches = businessOnline.branchOffices;
    let productBranches = product.branchesOffices;

    if(productBranches){
        for(productBranchesKey in productBranches){
            productBranch = productBranches[productBranchesKey];

            if(totalbranches[productBranch]){
                branch = totalbranches[productBranch];
                var marker = L.marker([branch[0], branch[1]]).addTo(mymapModal);
            }
        }
    }
    setTimeout(function(){ mymapModal.invalidateSize()}, 400);
    
   
}


function renderRate(rate){
    return `${'<i class="fas fa-star"></i>'.repeat(rate)}${'<i class="far fa-star"></i>'.repeat(5-rate)}`
}

function renderBranchOfficeTableModal(business,product,productKey){
    LatLonRow = document.getElementById('LatLonRowModal')
    LatLonRow.innerHTML = ''

    let branchOffices = business.branchOffices;
    let productBranches = product.branchesOffices;

    if(productBranches){
        for(productBranchesKey in productBranches){
            productBranch = productBranches[productBranchesKey];

            if(branchOffices[productBranch]){
                branchOffices[productBranch][2] = productBranchesKey;
            }
        }
    }

    if(branchOffices){
        for (branchOfficekey in branchOffices){
            branchOffice = branchOffices[branchOfficekey];
            LatLonRow.innerHTML +=  `   <tr class="text-center"  >
                                        <td>${branchOffice[0]}</td>
                                        <td>${branchOffice[1]}</td>
                                        <td>${branchOffice[2]?
                                            `<i onclick="removeBranchOnProduct('${productKey}','${branchOffice[2]}',this)" class="far fa-trash-alt" style="cursor:pointer"></i>`:
                                            `<i onclick="addBranchOnProduct('${productKey}','${branchOfficekey}',this)" class="fas fa-plus" style="cursor:pointer"></i>`}</td>
                                        </tr>`
            branchOffice[2] = null;
        }
    }
    
}

//Funcionalidades ProductForm

async function newProduct(input){
    categoryInput = document.getElementById('categoryInput');
    imageUrlInput = document.getElementById('imageUrlInput');
    productPriceInput = document.getElementById('productPriceInput');
    productDescInput = document.getElementById('productDescInput');

    if(imageUrlInput.files, productPriceInput.value, productDescInput.value){
        product = {
            category: categoryInput.value,
            price: productPriceInput.value,
            description: productDescInput.value,
            from: businessOnline.businessName,
            urlImg: '../img/businessPage/defaultProduct.png',
            inSale:null,
        }
        
        setLoading(true, input,'Creando...')
        added = await addProductOnBusiness(product);
        if(added)
            await createProductImg(businessOnline.businessName, added)
            await renderProduts();
            setLoading(false, input,'Crear')
    }
}

async function showBranchOffConfProduct(productId){
    $('#branchOfficeProductModal').modal('show');
    await renderModalMap(6,productId);
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

async function addBranchOnProduct(productKey, branchKey, input){
    setLoading(true, input.parentNode, " ");
    await addBranchToProduct(productKey, branchKey);
    await renderModalMap(6,productKey);
}

async function removeBranchOnProduct(productKey, branchProductKey, input){
    setLoading(true, input.parentNode, " ");
    await removeBranchToProduct(productKey, branchProductKey);
    await renderModalMap(6,productKey);
}

/*AXIOS ProductForm */
async function createProductImg(businessName,productKey){
    productImgUrl = '../../Backend/api/uploadProductImg.php';
    form = document.getElementById('formImageProduct');
    let formdata = new FormData(form);
    formdata.append('filename', productKey);
    formdata.append('productKey', productKey);
    formdata.append('businessName', businessName);
    
    const pathImgProduct = await axios.post(productImgUrl, formdata)

    if(pathImgProduct.request.status == 200){
        return true;
    }
}

/*------------------------------------------Branch Offices------------------------------------------*/

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
    setLoading(true,input.parentNode,"");
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