google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Effort', 'Amount given'],
    ['My all',   59 ],
    ['others',     41],
  ]);

  var options = {
    pieHole: 0.8,
    height:150,
    width:150,
    title:'Me',

    pieSliceTextStyle: {
      color: 'black',
    },

    legend: 'none',
    slices:{
        0:{color:'#00CC99'},
        1:{color:'#7FFFD4'}
      }

  };

  var chart = new google.visualization.PieChart(document.getElementById('donut_single3'));
 
  chart.draw(data, options);
}