var images = [], x = -1;
images[0] = "../img/Principal/image1.jpg";
images[1] = "../img/Principal/image2.jpg";
images[2] = "../img/Principal/image3.jpg";

categories = [
    'Mejores Promociones',
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

products = [
    {
        category:"Tecnología",
        sale:0.35,
        price:15000,
        rate:5,
        rateQuant:200,
        duration:"10 Días",
        description:'HP Pavilion 27" PC, Intel Core i5+8400T & UHD Graphics 630, 8GB RAM, 16 GB Optane, 2 TB HD, Windows 10 (27-xa0050, Black) (4NM62AA#ABA)',
        from:"Jetstereo Co.",
        urlImg:"../img/Principal/products/pcHP.jpg"
    },
    {
        category:"Belleza",
        sale:0.20,
        price:800,
        rate:4,
        rateQuant:89,
        duration:"20 Días",
        description:'3pcs 15 ml botella de vidrio pulverizador spray, Split Botella de carga cosméticos contenedor ideal para Emoliente Toner Florida Agua Perfume Almacenamiento',
        from:"Chanel",
        urlImg:"../img/Principal/products/perfume.jpg"
    },
    {
        category:"Hogar y Jardín",
        sale:0.25,
        price:1000,
        rate:5,
        rateQuant:113,
        duration:"1 mes",
        description:'Juego de piscina redonda fácil de instalar de Intex, Juego de pool, Azul',
        from:"INTEX",
        urlImg:"../img/Principal/products/piscina.jpg"
    },
    {
        category:"Salud y Fitness",
        sale:0.20,
        price:300,
        rate:4,
        rateQuant:29,
        duration:"2 meses",
        description:'Amoxitex( Antibiotic Formula, Powder Form)',
        from:"Med Pride",
        urlImg:"../img/Principal/products/antibiotico.jpg"
    },
    {
            category:"Autos, Motos y Otros",
            sale:0.15,
            price:300000,
            rate:4,
            rateQuant:27,
            duration:"4 meses",
            description:'Elegancia y fuerza dentro y fuera de la ciudad',
            from:"Toyota",
            urlImg:"../img/Principal/products/auto.jpg"
    },
    {
            category:"Educación y Cursos",
            sale:0.25,
            price:800,
            rate:5,
            rateQuant:420,
            duration:"2 meses",
            description:'Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow: Concepts, Tools, and Techniques to Build Intelligent Systems',
            from:"Metromedia",
            urlImg:"../img/Principal/products/book.jpg"
    },
    {
            category:"Infantiles",
            sale:0.20,
            price:500,
            rate:4,
            rateQuant:521,
            duration:"20 días",
            description:'Monopoly: Juego de mesa de Star Wars Saga Edition completo para niños a partir de 8 años',
            from:"Diunsa",
            urlImg:"../img/Principal/products/juego.jpg"
    },
    {
            category:"Joyería",
            sale:0.15,
            price:300,
            rate:5,
            rateQuant:840,
            duration:"15 días",
            description:'Jude Jewelers - Anillo de boda apilable de acero inoxidable de 0.059 in',
            from:"Glamira",
            urlImg:"../img/Principal/products/anillo.jpg"
    },
    {
            category:"Mascotas",
            sale:0.20,
            price:400,
            rate:5,
            rateQuant:370,
            duration:"15 días",
            description:'Pedigree High Protein Adult Dry & Wet Canned Dog Food',
            from:"PriceSmart",
            urlImg:"../img/Principal/products/pedigree.jpg"
    },
    {
            category:"Moda",
            sale:0.25,
            price:500,
            rate:5,
            rateQuant:1080,
            duration:"1 mes",
            description:'Minecraft para niños/niños oficial de manga corta Sprites carácter',
            from:"Carrion",
            urlImg:"../img/Principal/products/camisa.jpg"
    },
]

function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementsByClassName("jumbotron")[0].style.backgroundImage = `url(${images[x]})`;
}

function displayPreviousImage() {
    x = (x <= 0) ? images.length - 1 : x - 1;
    document.getElementById("img").src = images[x];
}

function startTimer() {
    setInterval(displayNextImage, 3000);
}

function render(){
    renderCategoriesBar();
    renderProducts();
}

/*<img class="card-img-top imageProducts" src="${product.urlImg}" alt="Card image cap">*/ 
/*<div class="card-img-top imageProducts" style="background-image:url(${product.urlImg}); background-position: 30% 50%; " ></div> */
function renderProducts(value){
    productRows = document.getElementById('productRows');
    productRows.innerHTML = '';
    
    for(product of products){
        if(value == 'Mejores Promociones' || value == null || value==product.category){
            productRows.innerHTML += `  <div class="col-md-6 col-lg-3">
                                            <div class="card mb-4 box-shadow">
                                            <div class="card-img-top imageProducts" style="background-image:url(${product.urlImg}); background-position: 30% 50%; " ></div>
                                            <div class="card-body">
                                                <p class="rateProduct mb-0">
                                                ${renderRate(product.rate)}
                                                </p>
                                                <div class="quantUser" style="text-align: center;">
                                                ${product.rateQuant}<i class="fas fa-user"></i>
                                                </div>

                                                <div class="saleProduct"> 
                                                <div class="sale"><h2>${product.sale * 100}%</h2></div>
                                                <div class="prices">
                                                    <div class="price beforePrice">Antes: L.${product.price}</div> 
                                                    <div class="price nowPrice">Ahora: L.${product.price * (1-product.sale)}</div>
                                                </div>                      
                                            </div>
                                                <p class="card-text descProducts mb-0">${product.description}</p>
                                                <p class="text-muted companyName">${product.from}</p>
                                                <p class="productDate">Quedan ${product.duration}</p>
                                                <div class="d-flex justify-content-between align-items-center mt-3">
                                                <div class="btn-group">
                                                    <button type="button" class="btn btn-sm btn-outline-secondary">+ Detalles</button>
                                                    <button type="button" class="btn btn-sm btn-outline-secondary"><i class="fas fa-cart-plus"></i> Comprar</button>
                                                </div>
                                                </div>                                              
                                            </div>
                                            </div>
                                        </div>`;
        }
    }
}

function renderRate(rate){
    return `${'<i class="fas fa-star"></i>'.repeat(rate)}${'<i class="far fa-star"></i>'.repeat(5-rate)}`
}

function renderCategoriesBar(){
    dropdownCategories = document.getElementById('dropdownCategories');
    dropdownCategories.innerHTML = '';
    for(category of categories){
        dropdownCategories.innerHTML += `<button class="dropdown-item" onclick="renderProducts('${category}')">${category}</button>` 
    }
}

render();