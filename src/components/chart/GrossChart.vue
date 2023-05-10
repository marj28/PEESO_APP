<template>
  <div class="small">
    <line-chart
      :height="300"
      :chart-data="CHARTDATA"
      style=" padding: 7px; color: #666666;"
      dark
    />
  </div>
</template>

<script>
  import LineChart from '@/plugins/LineChart.js'

  export default {
      components: {
        LineChart
      },
      props: {
        rawdata: {
          type: Array,
          default: function(){ }
        }
      },
        data: () => ({
          labels: [],
          data:[],
          datacollection:{},
          gradient: null,
      }),
    computed: {
      CHARTDATA() {
        console.log(2323)
        return this.datacollection
      },
      BGCOLOR() {
        var canvas = document.getElementById('line-chart')
         var gradient = canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
        gradient.addColorStop(0, "rgba(128, 182, 244, 0)");
        gradient.addColorStop(1, "rgba(255, 255, 255, 0.24)");
        return gradient
      }
    },
    watch: {
      rawdata() {
        this.exportData()
        this.fillData(this.data,this.labels)
        
      }
    },
    methods: {
      exportData() {
        
        this.labels = []
        this.data = []
        console.log(this.rawdata)
        for (const item of this.rawdata) {
              this.labels.push(item.log_date)
              this.data.push(item.tourist)
          }
      
      },
      fillData (_data, _labels) {
        
        this.datacollection = {
          labels:_labels,
          datasets: [
            {
              label:  "DAILY TOURIST",
              backgroundColor: this.BGCOLOR,
              borderColor: "#0C8533",
              pointBorderColor: "#0C8533",
              pointBackgroundColor: "#0C8533",
              pointBorderWidth: 2,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 1,
              pointRadius: 4,
              borderWidth: 0.5,
              fill: true,
              data: _data
            }
          ]
        }
        // setTimeout(()=>{
        //   this.datacollection.datasets[0].backgroundColor = this.BGCOLOR
        //   console.log(this.datacollection.datasets[0].backgroundColor)
        // }, 1000)
        

      
      }
    }
  }
</script>

<style>
  .small {
    height: 300px;
  }
</style>