
var currentUser = userOnline;

function render(){
    renderNav();
}

function renderNav(){
    user = currentUser;
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
                                <button type="button" class="btn  btn-outline-warning dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,20">
                                <span>${user.userName} &nbsp</span> <img src="${user.imageProfile}" class="rounded-circle" style="width: 1.8em;">
                                </button>
                                <div class="dropdown-menu dropdown-menu-right" style="width: 6em;" aria-labelledby="dropdownMenuOffset">
                                <div class="px-4 accountInfo">
                                <small class="userName">${userOnline.firstname.split(" ")[0]} ${userOnline.lastName.split(" ")[0]}</small>
                                    <small class="userEmail" >${user.email}</small>
                                </div>
                                <a class="dropdown-item" href="../UserPage/"><i class="fas fa-user-circle"></i> Mi perfil</a>
                                <a class="dropdown-item" href="../Principal/"><i class="fas fa-shopping-bag"></i> Ofertas</a>
                                <a style="cursor:pointer;" class="dropdown-item" onclick="logOut()"><i class="fas fa-sign-out-alt"></i> Cerrar Sesión</a>
                                </div>
                                </div>`;
    }
}

function logOut(){
    currentUser = null;
    userLogOut();
    renderNav();
}

render();