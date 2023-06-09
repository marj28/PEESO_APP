
    <div>
      <canvas ref="lineChart"></canvas>
    </div>
  
  <script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  mounted() {
    this.renderChart(
      {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            label: "Hired",
            borderColor: "#1f6200",
            data: [40, 20, 30, 50, 35, 55],
          },
          {
            label: "Searching",
            borderColor: "#389f0a",
            data: [10, 25, 15, 30, 45, 20],
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
      }
    );
  },
};
</script>
  