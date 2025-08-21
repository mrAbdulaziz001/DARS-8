const labels = ['Nexia', 'Cobalt', 'Malibu', 'Tracker', 'Spark', 'Lacetti'];
const dataValues = [15, 25, 10, 7, 20, 12];
const colors = [
  'rgba(255, 99, 132, 0.6)',
  'rgba(54, 162, 235, 0.6)',
  'rgba(255, 206, 86, 0.6)',
  'rgba(75, 192, 192, 0.6)',
  'rgba(153, 102, 255, 0.6)',
  'rgba(255, 159, 64, 0.6)'
];


new Chart(document.getElementById('barChart'), {
  type: 'bar',
  data: { labels, datasets: [{ label: 'Mashinalar soni', data: dataValues, backgroundColor: colors }] },
  options: { responsive: true }
});


new Chart(document.getElementById('hBarChart'), {
  type: 'bar',
  data: { labels, datasets: [{ label: 'Mashinalar soni', data: dataValues, backgroundColor: colors }] },
  options: { indexAxis: 'y', responsive: true }
});


new Chart(document.getElementById('lineChart'), {
  type: 'line',
  data: { labels, datasets: [{ label: 'Mashinalar soni', data: dataValues, borderColor: 'blue', backgroundColor: 'rgba(0,0,255,0.2)', fill: true, tension: 0.4 }] }
});


new Chart(document.getElementById('pieChart'), {
  type: 'pie',
  data: { labels, datasets: [{ data: dataValues, backgroundColor: colors }] }
});


new Chart(document.getElementById('doughnutChart'), {
  type: 'doughnut',
  data: { labels, datasets: [{ data: dataValues, backgroundColor: colors }] }
});

new Chart(document.getElementById('radarChart'), {
  type: 'radar',
  data: { labels, datasets: [{ label: 'Mashinalar soni', data: dataValues, backgroundColor: 'rgba(54,162,235,0.4)', borderColor: 'blue', pointBackgroundColor: 'blue' }] }
});


new Chart(document.getElementById('polarChart'), {
  type: 'polarArea',
  data: { labels, datasets: [{ data: dataValues, backgroundColor: colors }] }
});


new Chart(document.getElementById('bubbleChart'), {
  type: 'bubble',
  data: {
    datasets: [
      { label: 'Nexia', data: [{x: 10, y: 15, r: 15}], backgroundColor: colors[0] },
      { label: 'Cobalt', data: [{x: 20, y: 25, r: 20}], backgroundColor: colors[1] },
      { label: 'Malibu', data: [{x: 30, y: 10, r: 10}], backgroundColor: colors[2] },
      { label: 'Tracker', data: [{x: 15, y: 30, r: 12}], backgroundColor: colors[3] }
    ]
  }
});
