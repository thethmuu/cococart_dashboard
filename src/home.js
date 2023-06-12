// import chart.js libary
import Chart from 'chart.js/auto';

(async function () {
  const data = [
    { product: 'Polo Shirt', amount: 200000 },
    { product: 'Shoe', amount: 100000 },
    { product: 'Jean', amount: 300000 },
    { product: 'Polo Shirt', amount: 200000 },
    { product: 'Shoe', amount: 100000 },
    { product: 'Jean', amount: 300000 },
  ];

  new Chart(document.querySelector('#product-chart'), {
    type: 'bar',
    data: {
      labels: data.map((row) => row.product),
      datasets: [
        {
          label: 'Product sales all time',
          data: data.map((row) => row.amount),
        },
      ],
    },
  });
})();
