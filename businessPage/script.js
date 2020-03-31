
function render(){
    if(userOnline){
        renderNav(userOnline);
        renderChart();
    }
}

function renderNav(user){
    navBarPage = document.getElementById('navBarPage');
    navBarPage.innerHTML = `    <a class="my-0 mr-md-auto" href="../LandingPageV2/index.html"><h5 class="my-0 mr-md-auto font-weight-normal brandName">Wachalo</h5></a>
                                    <nav class="my-2 my-md-0 mr-md-3">
                                    </nav>
                                    <div class="dropdown mr-1">
                                        <button type="button" class="btn  btn-outline-primary dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,20">
                                        <span>${user.userName} &nbsp</span> <img src="../img/profile.jpg" class="rounded-circle" style="width: 1.8em;">
                                        </button>
                                        <div class="dropdown-menu dropdown-menu-right" style="width: 6em;" aria-labelledby="dropdownMenuOffset">
                                        <div class="px-4 accountInfo">
                                            <small class="userName">${user.firstname.split(" ")[0]} ${user.lastName.split(" ")[0]}</small>
                                            <small class="userEmail" >${user.email}</small>
                                        </div>
                                        
                                        <a class="dropdown-item" href="../businessPage/index.html">Mi empresa</a>
                                        <a class="dropdown-item" onclick="logoutBusinessPage()">Cerrar Sesion</a>
                                        </div>
                                    </div>`
}

function logoutBusinessPage(){
    logOut()
    window.location.href = "../businessSign";

}

/*------------------Chart-------------------- */
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
                text:"Numero de Ventas de tu empresa en los ultimos Meses"
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
                        labelString: 'Numero de ventas'
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


render();