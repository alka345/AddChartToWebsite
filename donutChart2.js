google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Effort', 'Amount given'],
    ['My all',   95],
    ['others',     5],
  ]);

  var options = {
    pieHole: 0.8,
    height:150,
    width:150,
    title:'Top',

    pieSliceTextStyle: {
      color: 'black',
    },

    legend: 'none',
    slices:{
        0:{color:'#00CC99'},
        1:{color:'#7FFFD4'}
      }

  };

  var chart = new google.visualization.PieChart(document.getElementById('donut_single2'));
 
  chart.draw(data, options);
}