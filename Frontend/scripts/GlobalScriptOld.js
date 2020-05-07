/*Temporary js script until backend be implemented  */

/*

    Cosas Por Hacer

    -GlobalScript & BusinessSign
        Enviar un mensaje de retorno por algun dato invalido(usuario,email,numero de tarjeta existente) en el formulario 
        de registro (CreateBusinessUser => signUpBusiness). De estar todo correcto cerrar la ventana modal y borrar los valores puestos

    -BusineesSign
        Una vez que el usuario haya iniciado sesion quitar los planes en la landingpage de las empresas (y agregar mas caracteristicas y funcionalidades
        de la pagina)

*/


/*-----------------------------Business-------------------------------- */
var localstorage = window.localStorage

if(localstorage.getItem('businessOnline')){
    var businessOnline = JSON.parse(localstorage.getItem('businessOnline'));
}
else{
    var businessOnline = false;
}



var businesses = [
    {
        businessName:'Jetstereo',
        profileImg:"../img/businessPage/logo1.png",
        bannerImg:"../img/businessPage/banner1.jpg",
        email:'jet@gmail.com',
        password:1234,
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
                id:0,
                category:"Tecnología",
                price:15000,
                description:'HP Pavilion 27" PC, Intel Core i5+8400T & UHD Graphics 630, 8GB RAM, 16 GB Optane, 2 TB HD, Windows 10 (27-xa0050, Black) (4NM62AA#ABA)',
                from:"Jetstereo",
                urlImg:"../img/Principal/products/pcHP.jpg",
                inSale:{
                    sale:0.35,
                    rate:5,
                    rateQuant:200,
                    duration:"10 Días",
                },
            },
            {
                id:1,
                category:"Tecnología",
                price:15000,
                description:'ASUS 27" PC, Intel Core i5+8400T & UHD Graphics 630, 8GB RAM, 16 GB Optane, 2 TB HD, Windows 10 (27-xa0050, Black) (4NM62AA#ABA)',
                from:"Jetstereo",
                urlImg:"../img/Principal/products/pc2.jpg",
                inSale:null,
            },
        ]
    },
    {
        businessName:'Diunsa',
        profileImg:"../img/businessPage/logoDiunsa.jpg",
        bannerImg:"../img/businessPage/diunsaBanner.jpg",
        email:'diunsa@gmail.com',
        password:'123Asd',
        plan:'Plan Empresarial',
        cardNumber:'1234266851234567',
        expiration: '12/2020',
        cvv: '193',

        branchOffices:[
            [14.078325,-87.185813],
        ],
        country:{
            name:'Honduras',
            lat:15,
            lon:-86.5,
        },
        products:[
            {
                id:0,
                category:"Hogar y Jardín",
                price:1000,
                description:'Juego de piscina redonda fácil de instalar de Intex, Juego de pool, Azul',
                from:"Diunsa",
                urlImg:"../img/Principal/products/piscina.jpg",
                inSale:{
                    sale:0.25,
                    rate:5,
                    rateQuant:113,
                    duration:"1 mes",
                },
            },
            {
                id:1,
                category:"Educación y Cursos",
                price:800,
                description:'Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow: Concepts, Tools, and Techniques to Build Intelligent Systems',
                from:"Diunsa",
                urlImg:"../img/Principal/products/book.jpg",
                inSale:{
                    sale:0.25,
                    rate:5,
                    duration:"2 meses",
                    rateQuant:420,
                },
            },
            {
                id:2,
                category:"Infantiles",
                price:500,
                description:'Monopoly: Juego de mesa de Star Wars Saga Edition completo para niños a partir de 8 años',
                from:"Diunsa",
                urlImg:"../img/Principal/products/juego.jpg",
                inSale:{
                    sale:0.20,
                    rate:4,
                    rateQuant:521,
                    duration:"20 días",
                },
            },
            {
                id:3,
                category:"Joyería",
                description:'Jude Jewelers - Anillo de boda apilable de acero inoxidable de 0.059 in',
                price:300,
                from:"Diunsa",
                urlImg:"../img/Principal/products/anillo.jpg",
                inSale:{
                    sale:0.15,
                    rate:5,
                    rateQuant:840,
                    duration:"15 días",
                },
            },
            {
                id:4,
                category:"Mascotas",
                description:'Pedigree High Protein Adult Dry & Wet Canned Dog Food',
                price:400,
                from:"Diunsa",
                urlImg:"../img/Principal/products/pedigree.jpg",
                inSale:{
                    sale:0.20,
                    rate:5,
                    rateQuant:370,
                    duration:"15 días",
                },
            },
            {
                id:5,
                category:"Moda",
                description:'Minecraft para niños/niños oficial de manga corta Sprites carácter',
                price:500,
                from:"Diunsa",
                urlImg:"../img/Principal/products/camisa.jpg",
                inSale:{
                    sale:0.25,
                    rate:5,
                    rateQuant:1080,
                    duration:"1 mes",
                },
            },
            {
                id:6,
                category:"Belleza",
                price:800,
                description:'3pcs 15 ml botella de vidrio pulverizador spray, Split Botella de carga cosméticos contenedor ideal para Emoliente Toner Florida Agua Perfume Almacenamiento',
                from:"Diunsa",
                urlImg:"../img/Principal/products/perfume.jpg",
                inSale:{
                    sale:0.20,
                    rate:4,
                    rateQuant:89,
                    duration:"20 Días",
                },
            },
            {
                id:7,
                category:"Salud y Fitness",
                price:300,
                description:'Amoxitex( Antibiotic Formula, Powder Form)',
                from:"Diunsa",
                urlImg:"../img/Principal/products/antibiotico.jpg",
                inSale:{
                    sale:0.20,
                    rate:4,
                    rateQuant:29,
                    duration:"2 meses",
                },
            },
            {
                id:8,
                category:"Autos, Motos y Otros",
                price:300000,
                description:'Elegancia y fuerza dentro y fuera de la ciudad',
                from:"Diunsa",
                urlImg:"../img/Principal/products/auto.jpg",
                inSale:{
                    sale:0.15,
                    rate:4,
                    duration:"4 meses",
                    rateQuant:27,
                },
            },
        ]
    },
    
]

var businessesDataDirection = {
    countBusinesses:2,
    directionByEmail:{
        "jet@gmail.com":0,
        "diunsa@gmail.com":1,
    },
    directionByName:{
        "Jetstereo":0,
        "Diunsa":1,
    }
}

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

    business = businesses[ businessesDataDirection.directionByEmail[emailValue] ];
    if(business){
        if(business.password==passwordValue){
            businessOnline = business;
            localstorage.setItem('businessOnline', JSON.stringify(businessOnline));
            return businessOnline;
        }
    }
}

function createBusinessUser(newBusiness){
    hasEmail = businessesDataDirection.directionByEmail[newBusiness.email];
    hasName = businessesDataDirection.directionByName[newBusiness.businessName];
    if(!hasEmail && !hasName){
        businesses.push(newBusiness);
        businessesDataDirection.directionByEmail[newBusiness.email] = businessesDataDirection.countBusinesses;
        businessesDataDirection.directionByName[newBusiness.businessName] = businessesDataDirection.countBusinesses;
        businessesDataDirection.countBusinesses += 1;
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


/*--------------------BusinessPage ------------------*/

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
    newProduct["id"]= ( businessOnline.products.length )
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

/* ---------------------------Normal User--------------------------- */

var localstorage = window.localStorage

if(localstorage.getItem('userOnline')){
    var userOnline = JSON.parse(localstorage.getItem('userOnline'));
}
else{
    var userOnline = false;
}


var users = [
    {
        firstname:'Gabriel Enrique',
        lastName:'Escobar Banegas',
        email:'gee@gmail.com',
        userName:'Lersgeeb',
        password:1234,
        imageProfile:'../img/profile1.jpg',
        followBusinesses:['Jetstereo',],
        productsLiked:[
            {
                businessName:'Jetstereo',
                productIndex: 0,
            },
        ],
        cart:[
            {
                businessName:'Jetstereo',
                productIndex: 0,  
                quant:2,
            },
        ],
    },
]

var userDataDirection = {
    countUser:1,
    directionByEmail:{
        "gee@gmail.com":0,
    }
}


function userAuthentication(emailValue,passwordValue){

    user  = users[userDataDirection.directionByEmail[emailValue]]
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
    hasUser = userDataDirection.directionByEmail[user.email];
    if(!hasUser){
        users.push(user);
        userDataDirection.directionByEmail[user.email] = userDataDirection.countUser;
        userDataDirection.countUser += 1;
        return(user)
    }
    else{
        console.log("Usuario existente")
    }    
}

/*-----------------------------UserPage------------------------------ */

function getProductByIndex(businessName,productIndex, quantValue){
    business =  businesses[ businessesDataDirection.directionByName[businessName] ];
    product = business.products[productIndex];
    if(quantValue)
        product["quant"] = quantValue

    return product;
}

function getBusiness(businessName){
    business =  businesses[ businessesDataDirection.directionByName[businessName] ];
    businessForUser = {
        businessName:business.businessName,
        profileImg:business.profileImg,
        bannerImg:business.bannerImg,
        branchOffices:business.branchOffices,
        products:business.products, /*quitar productos que no testen en ofertas */
    }

    return businessForUser;
}

function getproductsLiked(){
    products = userOnline.productsLiked;
    productsJson = [];

    for(product of products){
        productsJson.push( getProductByIndex(product.businessName, product.productIndex) );
    }

    return productsJson;

}

function getfollowBusinesses(){
    followBusinesses = userOnline.followBusinesses;
    businessesJson = [];

    for(followBusiness of followBusinesses){
        businessesJson.push( getBusiness(followBusiness));
    }

    return businessesJson;

}

function getCartProducts(){
    products= userOnline.cart;
    productsJson = [];

    for(product of products){
        productsJson.push( getProductByIndex(product.businessName, product.productIndex, product.quant) );
    }

    return productsJson;
}


function removeCartProduct(cartProductIndex){
    userOnline.cart.splice(cartProductIndex, 1);
    localstorage.setItem('userOnline',JSON.stringify(userOnline) );
}

/*Principal */

function getAllProducts(){
    products = []
    for (business of businesses){
        for(product of business.products){
            if(product.inSale)
                products.push(product);
        }
    }

    return products
}

function addProductToCart(businessName, productIndex){
    cartNewProduct = {
        businessName: businessName,
        productIndex: productIndex,  /*cambiar a codigoDeProducto*/
        quant:1,
    }

    userOnline.cart.push(cartNewProduct)
    localstorage.setItem('userOnline',JSON.stringify(userOnline) );
}