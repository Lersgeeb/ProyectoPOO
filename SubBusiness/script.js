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


function showForm(planIndex){
    document.getElementById("planInput").value = `${plans[planIndex].name}`;
    $('#modalSignUp').modal('show');
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

renderPlan();