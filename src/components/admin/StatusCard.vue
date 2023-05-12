<template>
  
    <v-row cols="12" class="pa-4"> 
      <v-col cols="6" md="3">
        <v-card height="100" dark class="pa-2 rounded-lg" 
        style="background: linear-gradient(75.7deg, rgb(34, 126, 34) 3.8%, rgb(99, 162, 17) 87.1%);"
        @click="$router.push({path: '/DailyApplicants'})">
        
        <h2 class="ma-1"> 
          <v-icon
            dark
            right
            size="30"
          >
            mdi-account-supervisor-circle-outline
          </v-icon> 
          224 </h2>
          <p class="ma-4" style="font-size:vw;"> Total Applicants</p>
        </v-card>
      </v-col>
      <v-col cols="6" md="3">
        <v-card height="100" dark class="pa-2 rounded-lg" 
        style="background: linear-gradient(75.7deg, rgb(34, 126, 34) 3.8%, rgb(99, 162, 17) 87.1%);" 
        @click="$router.push({path: '/HiredApplicants'})">
          <h2 class="ma-1"> <v-icon
            dark
            right
            size="30"
          >
            mdi-account-multiple-check-outline
          </v-icon> 
          224 </h2>
          <p class="ma-4">Hired Applicants</p>
          
        </v-card>
      </v-col>
      <v-col cols="6" md="3">
        <v-card height="100" dark class="pa-2 rounded-lg" 
        style="background: linear-gradient(75.7deg, rgb(34, 126, 34) 3.8%, rgb(99, 162, 17) 87.1%);"
        @click="$router.push({path: 'AdminJobPost'})">
        <h2 class="ma-1"> <v-icon
            dark
            right
            size="30"
          >
            mdi-book-open
          </v-icon> 
          224 </h2>
          <p class="ma-4">Open Jobs As of</p>
        </v-card>
      </v-col>
      <v-col cols="6" md="3">
        <v-card height="100" dark class="pa-2 rounded-lg" 
        style="background: linear-gradient(75.7deg, rgb(34, 126, 34) 3.8%, rgb(99, 162, 17) 87.1%);"
        @click="$router.push({path: 'TrainingOffer'})">
          <h2 class="ma-1"> <v-icon
            dark
            right
            size="30"
          >
            mdi-library
          </v-icon> 
          224 </h2>
          <p class="ma-4">Trainings Offered</p>
        </v-card>
      </v-col>
     
    </v-row>
</template>
<script>
export default {
  components: {
  },
};
</script>
<style scoped>
/* .text p {
  font-size: clamp(1.5rem, 0.875rem + 2vw, 2rem);
  -webkit-background-clip: text;
} */
@media screen and (max-width: 600px)  {
  p.ma-4 {
    font-size: 13px;
  }
  h2.ma-1{
    font-size: 13px;
  }
}

</style>
