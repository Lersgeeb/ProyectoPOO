/*Temporary js script until backend be implemented  */

/*

    Cosas Por Hacer
    
    
    -BusinessSign 
        solo permitir enviar el formulario de registro una vez que las validaciones para todos los inputs esten correctos 

    -GlobalScript & BusinessSign
        Enviar un mensaje de retorno por algun dato invalido(usuario,email,numero de tarjeta existente) en el formulario 
        de registro (CreateBusinessUser => signUpBusiness). De estar todo correcto cerrar la ventana modal y borrar los valores puestos

    -BusineesSign
        Una vez que el usuario haya iniciado sesion quitar los planes en la landingpage de las empresas (y agregar mas caracteristicas y funcionalidades
        de la pagina)

    
        
    





*/

var localstorage = window.localStorage

if(localstorage.getItem('businessOnline')){
    var businessOnline = JSON.parse(localstorage.getItem('businessOnline'));
}
else{
    var businessOnline = false;
}


var businesses = [
    {
        email:'gabriel@gmail.com',
        password:1234,
        businessName:'Jetstereo',
        plan:'Plan Empresarial',
        cardNumber:'1234567891234567',
        expiration: '12/2020',
        cvv: '190',
        branchOffices:[
            [14.087338,-87.183140],
        ],
        country:{
            name:'Honduras',
            lat:15,
            lon:-86.5,
        },
        products:[
            {
                id:'2131231',
                category:"Tecnología",
                price:15000,
                description:'HP Pavilion 27" PC, Intel Core i5+8400T & UHD Graphics 630, 8GB RAM, 16 GB Optane, 2 TB HD, Windows 10 (27-xa0050, Black) (4NM62AA#ABA)',
                from:"Jetstereo Co.",
                urlImg:"../img/Principal/products/pcHP.jpg",
                inSale:{
                    sale:0.35,
                    rate:5,
                    rateQuant:200,
                    duration:"10 Días",
                },
            },
            {
                id:'4121232',
                category:"Tecnología",
                price:15000,
                description:'ASUS 27" PC, Intel Core i5+8400T & UHD Graphics 630, 8GB RAM, 16 GB Optane, 2 TB HD, Windows 10 (27-xa0050, Black) (4NM62AA#ABA)',
                from:"Jetstereo Co.",
                urlImg:"../img/Principal/products/pc2.jpg",
                inSale:null,
            },
        ]
    },
    
]

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

function authentication(emailValue,passwordValue){

    business = businesses.find(businesses => businesses.email==emailValue);
    if(business){
        if(business.password==passwordValue){
            businessOnline = business;
            localstorage.setItem('businessOnline', JSON.stringify(businessOnline));
            return businessOnline;
        }
    }
}

function createBusinessUser(newBusiness){
    hasBusiness = businesses.find(businesses => businesses.email==newBusiness.email);
    if(!hasBusiness){
        businesses.push(newBusiness);
    }
    else{
        console.log("Usuario existente")
    }    
}

function logOut(){
    businessOnline = null;
    localstorage.setItem('businessOnline', JSON.stringify(businessOnline));
}




/*------------------------------Validaciones-------------------------*/    
function emailValidation(input) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(input.value)){
        input.classList.remove('wrong');
        input.classList.add('correct');
    } else {
        input.classList.remove('correct');
        input.classList.add('wrong');
    }
}

function businessNameValidation(input) {
    if (/^(?!\s)(?!.*\s$)(?=.*[a-zA-Z0-9])[a-zA-Z0-9 '~?!]{2,}$/.test(input.value)){
        input.classList.remove('wrong');
        input.classList.add('correct');
    } else {
        input.classList.remove('correct');
        input.classList.add('wrong');
    }
}

function passwordValidation(input) {
    if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(input.value)){
        input.classList.remove('wrong');
        input.classList.add('correct');
    } else {
        input.classList.remove('correct');
        input.classList.add('wrong');
    }
}

function passwordConfirmValidation(same) {
    if (same){
        input.classList.remove('wrong');
        input.classList.add('correct');
    } else {
        input.classList.remove('correct');
        input.classList.add('wrong');
    }
}

function creditNumberValidation(input) {
    if (/^[0-9]{16}$/.test(input.value)){
        input.classList.remove('wrong');
        input.classList.add('correct');
    } else {
        input.classList.remove('correct');
        input.classList.add('wrong');
    }
}

function expirationValidation(input) {
    if (/^[\d]{2}\/[\d]{4}$/.test(input.value)){
        input.classList.remove('wrong');
        input.classList.add('correct');
    } else {
        input.classList.remove('correct');
        input.classList.add('wrong');
    }
}

function cvvValidation(input) {
    if (/^[0-9]{3,4}$/.test(input.value)){
        input.classList.remove('wrong');
        input.classList.add('correct');
    } else {
        input.classList.remove('correct');
        input.classList.add('wrong');
    }
}

/*BusinessPage */

function getProductsOfBusiness(){
    return businessOnline.products
}

function addSaleOnlinebusiness(newSale, productIndex){
    businessOnline.products[productIndex].inSale =  newSale;
}

function removeSaleOnlinebusiness(productIndex){
    businessOnline.products[productIndex].inSale =  null;
}

function addProductOnBusiness(newProduct){
    businessOnline.products.push(newProduct);
}

function removeProductOfBusiness(productIndex){
    businessOnline.products.splice(productIndex,1);
}

function addBranchOfficeBusiness(lat,lon){
    businessOnline.branchOffices.push([lat,lon])
}
function removeBranchOfficeBusiness(branchIndex){
    businessOnline.branchOffices.splice(branchIndex,1)
}

/* Principal */

var users = {
        email:'gee@gmail.com',
        password:1234,
        userName:'Gee',
}

var localstorage = window.localStorage

if(localstorage.getItem('userOnline')){
    var userOnline = JSON.parse(localstorage.getItem('userOnline'));
}
else{
    var userOnline = false;
}
