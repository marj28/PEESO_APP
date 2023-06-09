
    <div>
      <canvas ref="pieChart"></canvas>
    </div>
  
  <script>
import { Pie } from "vue-chartjs";

export default {
  extends: Pie,
  mounted() {
    this.renderChart(
      {
        labels: ["Jobseeker", "Employer", "Student"],
        datasets: [
          {
            backgroundColor: ["#1f6200", "#389f0a", "#d3ffb3"],
            data: [500, 100, 300],
          },
        ],
      },
      {
        responsive: true,
        maintainAspectRatio: false,
      }
    );
  },
};
</script>
  