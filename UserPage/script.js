function render(){
    renderNav(userOnline);
}

function renderNav(user){
    navBarPage = document.getElementById('navBarPage');
    if(userOnline){
        navBarPage.innerHTML = `<a href="../LandingPageV2/index.html" class="home button mr-md-auto">Wachalo</a>
        <nav class="my-2 my-md-0 mr-md-3">
    
        </nav>
        <div class="dropdown mr-1">
        <button type="button" class="btn  btn-outline-warning dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,20">
        <span>${user.userName} &nbsp</span> <img src="../img/profile.jpg" class="rounded-circle" style="width: 1.8em;">
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

render();