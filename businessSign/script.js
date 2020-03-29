plans = [
    {
        name:"Plan Gratis",
        price:"0",
        description:"El Plan Gratis te otorga una posibilidad de probar nuestro servicio en una manera rapida y sin costes",
        productQuant:"3",
        buttonDesc:"Únete Sin coste"
    },
    {
        name:"Plan Profesional",
        price:"300",
        description:"El Plan profesional te brinda una forma barata de disfrutar nuestros servicios y con mas beneficios que el gratis",
        productQuant:"20",
        buttonDesc:"Únete"
        
    },
    {
        name:"Plan Empresarial",
        price:"1000",
        description:"El Plan Empresarial te otorga la posibilidad de agregar una cantidad ilimitadas de tus productos en ofertas",
        productQuant:"Ilimitadas",
        buttonDesc:"Únete Como Empresa"
    }
]

users = {
    'gabriel@gmail.com':{
        password:1234,
        userName:'Gabriel',
        firstname:'Gabriel Enrique',
        lastName:'Escobar Banegas'


    }
}

function render(){
    renderNav();
    renderPlan();
}

function renderPlan(){
    plansDiv = document.getElementById("plansDiv");
    
    plansDiv.innerHTML = " ";
    var count = 0;
    for(plan of plans){
        plansDiv.innerHTML += `  <div class="card mb-4 box-shadow">
                                    <div class="card-header">
                                    <h4 class="my-0 font-weight-normal">${plan.name}</h4>
                                    </div>
                                    <div class="card-body">
                                    <h1 class="card-title pricing-card-title">L.${plan.price} <small class="text-muted">/ mes</small></h1>
                                    <p>${plan.description}</p>
                                    <ul class="list-unstyled mt-3 mb-4">
                                        <li>Publica hasta ${plan.productQuant} ofertas</li>
                                    </ul>
                                    <button type="button" class="btn btn-lg btn-block btn-outline-primary" onclick="showForm(${count})">${plan.buttonDesc}</button>
                                    </div>
                                </div>`
        count++;
    }
}

function renderNav(email){
    navBarPage = document.getElementById('navBarPage');
    if(email==null){
        navBarPage.innerHTML = `    <a class="my-0 mr-md-auto" href="../LandingPageV2/index.html"><h5 class="my-0 mr-md-auto font-weight-normal brandName">Wachalo</h5></a>
                                    <nav class="my-2 my-md-0 mr-md-3">
                                    </nav>
                                    <button class="btn btn-outline-primary" onclick="showLogin()" >Iniciar Sesion</button>`
    }
    else{
        navBarPage.innerHTML = `    <a class="my-0 mr-md-auto" href="../LandingPageV2/index.html"><h5 class="my-0 mr-md-auto font-weight-normal brandName">Wachalo</h5></a>
                                    <nav class="my-2 my-md-0 mr-md-3">
                                    </nav>
                                    <div class="dropdown mr-1">
                                        <button type="button" class="btn  btn-outline-primary dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,20">
                                        <span>${users[email].userName} &nbsp</span> <img src="../img/profile.jpg" class="rounded-circle" style="width: 1.8em;">
                                        </button>
                                        <div class="dropdown-menu dropdown-menu-right" style="width: 6em;" aria-labelledby="dropdownMenuOffset">
                                        <div class="px-4 accountInfo">
                                            <small class="userName">${users[email].firstname.split(" ")[0]} ${users[email].lastName.split(" ")[0]}</small>
                                            <small class="userEmail" >${email}</small>
                                        </div>
                                        
                                        <a class="dropdown-item" href="../businessPage/index.html">Mi empresa</a>
                                        <a class="dropdown-item" onclick="logout()">Cerrar Sesion</a>
                                        </div>
                                    </div>`
    }
}

function showForm(planIndex){
    document.getElementById("planInput").value = `${plans[planIndex].name}`;
    $('#modalSignUp').modal('show');
    renderMap();
    


}
function showLogin(){
    $('#modalLogin').modal('show');
}

function login(){
    email = document.getElementById('inputEmailLogin').value;
    password = document.getElementById('passwordLogin').value;


    if(users[email]){
        if(users[email].password==password){
            renderNav(email);
            $('#modalLogin').modal('hide');
        }
            
        else
            console.log('Contraseña Incorrecta');
    }
    else
        console.log('Este Usuario no Existe');

        
}

function logout(){
    renderNav();
}

function renderMap(){
    lon =parseFloat(document.getElementById('lon').value) 
    lat =parseFloat(document.getElementById('lat').value) 
    console.log(lat)
    console.log(lon)
    
    document.getElementById('mapDiv').innerHTML = `<div id="map"></div>
                                                    <p><a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a></p>`;

    var mymap = L.map('map').setView([lat, lon], 6 );
    
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'your.mapbox.access.token'
    }).addTo(mymap);
    var marker = L.marker([14.087338, -87.183140]).addTo(mymap);
    setTimeout(function(){ mymap.invalidateSize()}, 400);
}




render();