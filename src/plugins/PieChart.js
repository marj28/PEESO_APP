
import { Pie, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins
 
export default {
  extends: Pie,
  mixins: [reactiveProp],
  
  data: () => ({
    gradient: null,
    options: {
          responsive: true, 
          maintainAspectRatio: false,
          legend: {
            labels: {
                fontColor: "#19365A",
                fontSize: 11,
                fontFamily: 'Montserrat'
            }
       } 
    }
  }),
  mounted () {
    
    // Overwriting base render method with actual data.
    //this.chartData.datasets[0].backgroundColor = this.gradient
     this.renderChart(this.chartData, this.options)
  }
}
