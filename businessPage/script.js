sells = {
    'Octubre 2019':300,
    'Noviembre 2019':200,
    'Diciembre 2019':700,
    'Enero 2020':300,
    'febrero 2020':300
}





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
