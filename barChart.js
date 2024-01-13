
  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
           
      labels: ['20', '', '25', '', '30', '','40','','60','','65'],
      datasets: [
       
      {
        label: 'Employee: K 73,500',
        data: [15,18,20,23,27,30,35,40,45,50],
        backgroundColor:['rgba(0,0,255,1)'],
        borderWidth: 1,
      barPercentage:1,
      categoryPercentage:0.5

      },
      {
        label: 'Employee: K 52,500',
        data: [15,18,20,23,27,30,35,40,45,50],
        backgroundColor:['rgba(106,90,205,1)'],
        borderWidth: 1,
        barPercentage:1,
        categoryPercentage:0.5
      },
      {
        label: 'Total Interest: K 244,313',
        data: [15,18,20,23,27,30,35,40,45,50],
        backgroundColor:['rgba(135,206,223,1)'],
        borderWidth: 1,
        barPercentage:1,
        categoryPercentage:0.5
      }]
    },
    options: {
      scales: {
        x:{
            stacked:true,
        },
        y: {
            stacked:true,
          beginAtZero: true
        }
      }
    }
  });
