google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Effort', 'Amount given'],
    ['My all',     78],
  ]);

  var options = {
    pieHole: 0.7,
    pieSliceTextStyle: {
      color: 'black',
    },
    legend: 'none',
  

  };

  var chart = new google.visualization.PieChart(document.getElementById('donut_single'));
 
  chart.draw(data, options);
}