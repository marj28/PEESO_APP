
import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins
 
export default {
  extends: Line,
  mixins: [reactiveProp],
  
  data: () => ({
    gradient: null,
    options: {
        // title: {
        //     display: true,
        //     text: "INCOME SOURCE DATA",
        //     fontColor: '#FFF',
        // },
          responsive: true, 
          maintainAspectRatio: false,
          legend: {
            labels: {
                fontColor: "white",
                fontSize: 11,
                fontFamily: 'Montserrat'
            },
          },
          scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    fontColor: '#A7B2C0',
                    fontFamily: 'Montserrat',
                    callback: function(value) {
                      return  value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                  }
                },
            }],
          xAxes: [{
                ticks: {
                    fontColor: '#A7B2C0',
                    fontFamily: 'Montserrat',
                    display: true,
                    labelString: "Day",
                },
            }]
       } 
    }
  }),
  mounted () {
    
    // Overwriting base render method with actual data.
    //this.chartData.datasets[0].backgroundColor = this.gradient
     this.renderChart(this.chartData, this.options)
  }
}
