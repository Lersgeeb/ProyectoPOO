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
        return newBusiness
    }
    else{
        console.log("Usuario existente")
    }    
}

function logOut(){
    businessOnline = null;
    localstorage.setItem('businessOnline', JSON.stringify(businessOnline));
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

var users = [
    {
        firstname:'Gabriel Enrique',
        lastName:'Escobar Banegas',
        email:'gee@gmail.com',
        userName:'Lersgeeb',
        password:1234,
        imageProfile:'../img/profile.jpg',
    },
]

var localstorage = window.localStorage

if(localstorage.getItem('userOnline')){
    var userOnline = JSON.parse(localstorage.getItem('userOnline'));
}
else{
    var userOnline = false;
}


function userAuthentication(emailValue,passwordValue){

    user = users.find(users => users.email==emailValue);
    if(user){
        if(user.password==passwordValue){
            userOnline = user;
            localstorage.setItem('userOnline', JSON.stringify(userOnline));
            return userOnline;
        }
    }
}

function userLogOut(){
    userOnline = null;
    localstorage.setItem('userOnline', JSON.stringify(userOnline));
}

function createUser(user){
    hasUser = users.find(users => (users.email==user.email || users.userName==user.userName) );
    if(!hasUser){
        users.push(user);
        return(user)
    }
    else{
        console.log("Usuario existente")
    }    
}