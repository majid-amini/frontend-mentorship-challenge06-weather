const context = document.getElementById('myChart').getContext('2d')
const myChart = new Chart(context, {
    type:'line',
    data: {
        labels: [
            '01am',
            '04am',
            '07am',
            '01pm',
            '04pm',
            '07pm',
            '10pm'
        ],
        datasets: [
            {   
            data: [13, 11, 14, 16, 15, 13, 12],
            backgroundColor: [
                'turquoise',
                 '#fff'
            ],
            borderColor: [
                '#000',
                '#000'
            ],
            borderWidth: 1,
            fill: true,
            responsive: true
        }],
        options: {
            maintainAspectRatio:false,
            scales: {
               y: {
                  beginAtZero: true,
               },
            },
         },
    }

})