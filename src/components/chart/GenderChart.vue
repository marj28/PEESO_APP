
<div>
    <canvas ref="verticalBarChart"></canvas>
  </div>

<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  mounted() {
    this.renderChart(
      {
        labels: ["Male", "Female", ],
        datasets: [
          {
            label: "Gender",
            backgroundColor: "#046001",
            data: [500, 1000],
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
        indexAxis: "y", // Set the index axis to 'y' for a vertical bar chart
      }
    );
  },
};
</script>
