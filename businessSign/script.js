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

/*users = {
    'gabriel@gmail.com':{
        password:1234,
        userName:'Gabriel',
        firstname:'Gabriel Enrique',
        lastName:'Escobar Banegas'


    }
}*/

function render(){
    renderNav(businessOnline);
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

function renderNav(businessUser){
    navBarPage = document.getElementById('navBarPage');
    if(businessUser==null){
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
                                        <span>${businessUser.businessName} &nbsp</span> <img src="../img/profile.jpg" class="rounded-circle" style="width: 1.8em;">
                                        </button>
                                        <div class="dropdown-menu dropdown-menu-right" style="width: 6em;" aria-labelledby="dropdownMenuOffset">
                                        <div class="px-4 accountInfo">
                                            <small class="userEmail" >${businessUser.email}</small>
                                        </div>
                                        
                                        <a class="dropdown-item" href="../businessPage/index.html">Mi empresa</a>
                                        <a class="dropdown-item" onclick="logoutBusinessSign()">Cerrar Sesion</a>
                                        </div>
                                    </div>`
    }
}

function showForm(planIndex){
    document.getElementById("planInput").value = `${plans[planIndex].name}`;

    options = [];
    for(country of countries){
        options.push( `<option value="${country.name}">${country.name}</option>`);
    }
    countryInputDiv = document.getElementById('countryInputDiv')
    countryInputDiv.innerHTML = `   <label for="countryInput">Pais</label>
                                    <select class="form-control" name="countryInput" id="countryInput" >
                                        ${options.join("")}
                                    </select>
                                `
    

    $('#modalSignUp').modal('show');
    
}
function showLogin(){
    $('#modalLogin').modal('show');
}






function signUpBusiness(){   
    planInput = document.getElementById('planInput');
    emailInput = document.getElementById('emailInput');
    nameInput = document.getElementById('nameInput');
    countryInput = document.getElementById('countryInput');
    passwordInput = document.getElementById('passwordInput');

    c = countries.find(country => country.name == countryInput.value);
    latValue = c.latlng[0]
    lngValue = c.latlng[1]


    cardNumberInput = document.getElementById('cardNumberInput');
    expirationInput = document.getElementById('expirationInput');
    cvvInput = document.getElementById('cvvInput');

    if(emailInput.value && nameInput.value && countryInput.value && passwordInput.value && cardNumberInput.value && expirationInput.value && cvvInput.value ){
        
        businessUser = {
            email: emailInput.value,
            password: passwordInput.value,
            businessName: nameInput.value,
            plan:planInput.value,
            country:{ 
                name:countryInput.value,
                lat:latValue,
                lon:lngValue
            },
            cardNumber: cardNumberInput.value,
            expiration: expirationInput.value,
            cvv: cvvInput.value,
        }
       

        createBusinessUser(businessUser);
        console.log(businessUser);
        
    }


}



function login(){
    emailValue = document.getElementById('inputEmailLogin').value;
    passwordValue = document.getElementById('passwordLogin').value;

    user =  authentication(emailValue,passwordValue)
    if(user){
        renderNav(user);
        $('#modalLogin').modal('hide');
    }
    else
        console.log('Usuario o Contraseña incorrecta');
        
}

function logoutBusinessSign(){
    logOut();
    renderNav();
}




render();
