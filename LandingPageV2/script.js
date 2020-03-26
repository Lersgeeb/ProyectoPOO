recomendations = [
    
    {profileImageUrl:"../img/Landing/user1.png",
    name:'Alejandra Garcia',
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

renderRecomendations(recomendations);