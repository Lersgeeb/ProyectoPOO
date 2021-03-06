recomendations = [
    
    {profileImageUrl:"../img/Landing/user1.png",
    name:'Alejandra García',
    rate:5,
    comment:'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.'},

    {profileImageUrl:"../img/Landing/user2.jpg",
    name:'Sandra Vega',
    rate:4,
    comment:'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.'},

    {profileImageUrl:"../img/Landing/user3.jpg",
    name:'Fernando Delgado',
    rate:5,
    comment:'Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.'}
];

/*---------------------------------------RENDERS---------------------------------------*/

async function render(){

    const userOnline = await getUserOnline();
    renderNav(userOnline);
    /*userLogOut()*/
    renderRecomendations(recomendations);
}

function renderNav(userOnline){
    navbarLanding = document.getElementById('navbarLanding');
    if(!userOnline){
        navbarLanding.innerHTML = ` <a class="navbar-brand" href="../LandingPageV2/">Wachalo</a>
                                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                    </button>
                                    <div class="collapse navbar-collapse  " id="navbarNav">
                                    <ul class="navbar-nav ml-auto ">
                                        <li class="nav-item">
                                        <a class="nav-link" href="../Principal/">Ofertas </a>
                                        </li>
                                        <li class="nav-item">
                                        <a class="nav-link" href="../SignUp/">Accede</a>
                                        </li>
                                        <li class="nav-item">
                                        <a class="nav-link" href="../businessSign/">Empresa</a>
                                        </li>
                                
                                    </ul>
                                    </div>`
    }
    else{
        navbarLanding.innerHTML = ` <a class="navbar-brand" href="../LandingPageV2/">Wachalo</a>
                                    <div class="dropdown ml-auto">
                                        <span class="fa-1x loading" id="loadingNavBar"">
                                            <i class="fas fa-circle-notch fa-spin"></i>
                                        </span> 
                                        <button type="button" class="btn  btn-outline-warning dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,20">
                                            <span>${userOnline.userName} &nbsp</span> <img src="${userOnline.imageProfile}" class="rounded-circle" style="width: 1.8em;">
                                        </button>
                                        <div class="dropdown-menu dropdown-menu-right" style="width: 6em;" aria-labelledby="dropdownMenuOffset">
                                            <div class="px-4 accountInfo">
                                                <small class="userName">${userOnline.firstname.split(" ")[0]} ${userOnline.lastName.split(" ")[0]}</small>
                                                <small class="userEmail" >${userOnline.email}</small>
                                            </div>
                                            
                                            <a class="dropdown-item" href="../UserPage/"><i class="fas fa-user-circle"></i> Mi perfil</a>
                                            <a class="dropdown-item" href="../Principal/"><i class="fas fa-shopping-bag"></i> Ofertas </a>
                                            <a class="dropdown-item" style="cursor: pointer;" onclick="logOut()"><i class="fas fa-sign-out-alt"></i> Cerrar Sesión</a>
                                        </div>
                                    </div>`
    }

}

function renderRecomendations(recomendations){
    recomendationDiv = document.getElementById('recomendationDiv');
    recomendationDiv.innerHTML = '';
    for(recomendation of recomendations){
        recomendationDiv.innerHTML += `  <div class="col-lg-4">
                                            <img class="rounded-circle" style="width: 9em; height: 9em;" src="${recomendation.profileImageUrl}" alt="">
                                            <h2>
                                            ${recomendation.name}
                                            </h2>
                                            <p>
                                            ${renderRate(recomendation.rate)}
                                            </p>
                                            <p>${recomendation.comment}</p>
                                            
                                        </div>`;
    }
}

function renderRate(rate){
    return `${'<i class="fas fa-star"></i>'.repeat(rate)}${'<i class="far fa-star"></i>'.repeat(5-rate)}`
}


/*Funcionalidades */

async function logOut(){
    visualLoadingNavbar(true);
    logoutSession = await userLogOut();

    if(logoutSession){
        visualLoadingNavbar(false);
        renderNav();
    }
    else{
        visualLoadingNavbar(false);
    }
}


/*Visual Loading*/
function visualLoadingNavbar(loading){
    dropdownNavbar = document.getElementById('dropdownMenuOffset');
    loadingNavBar = document.getElementById('loadingNavBar');
    
    

    if(loading){
        console.log("mostrar cargar")
        
        loadingNavBar.style.display = "inline-block";
        
        dropdownNavbar.disabled = true;
    }
    else{
        console.log("no mostrar cargar")
        
        loadingNavBar.style.display = "none";
        
        dropdownNavbar.disabled = false;
      
    }
}

render();