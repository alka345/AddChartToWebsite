google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Effort', 'Amount given'],
    ['My all',     78],
    [' all',     22],
  ]);

  var options = {
    pieHole: 0.8,
    height:150,
    width:150,
    title:'Average',
   
    pieSliceTextStyle: {
      color: 'black',
    },

    legend: 'none',
  
slices:{
  0:{color:'#00CC99'},
  1:{color:'#7FFFD4'}
}

  };

  var chart = new google.visualization.PieChart(document.getElementById('donut_single'));
 
  chart.draw(data, options);
}