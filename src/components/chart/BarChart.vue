
    <div>
      <canvas ref="verticalBarChart"></canvas>
    </div>
  
  <script>
  import { Bar } from 'vue-chartjs';
  
  export default {
    extends: Bar,
    mounted() {
      this.renderChart(
        {
          labels: ['Single', 'Married', 'Divorced', 'Widowed'],
          datasets: [
            {
              label: 'Civil Status',
              backgroundColor: '#046001',
              data: [40, 20, 180, 150],
            },
          ],
        },
        {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              beginAtZero: true,
            },
            y: {
              beginAtZero: true,
            },
          },
          indexAxis: 'y', // Set the index axis to 'y' for a vertical bar chart
        }
      );
    },
  };
  </script>
  