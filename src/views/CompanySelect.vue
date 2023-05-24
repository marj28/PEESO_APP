<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-text>
            <div style="float: left" class="mr-8">
              <img :src="$store.state.systemlogo" width="110px" />
            </div>
            <div style="min-height: 100px">
              <div class="text-h5 font-weight-bold text-primary">Welcome</div>
              <div>Welcome to Tagum City - PEESO Program</div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card>
          <div >
            <CompanyPrivate />
          </div>
          <div  >
            <CompanyPublic />
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
  
 

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      private_company: false,
      public_company: false,
    };
  },
  created() {if (this.$session.exists()) {
      this.$http.defaults.headers.common["Authorization"] =
        "Bearer " + this.$session.get("jwt");
      this.setLoggedIn(true);
      this.setAppBar(true);
      this.myCompany();
      
    }
    
    console.log (this.company);
  },
  methods: {
    ...mapMutations(["setLoggedIn", "setAppBar", "setMonthDailySales"]),
    private_compay_button() {
      this.private_company = true;
      this.public_company = false;
    },
    public_company_button() {
      this.public_company = true;
      this.private_company = false;
    },

    myCompany() {
      this.$http.get('company/my_company').then(response => {
        if (response.data.status) {
          this.company = response.data.company
          this.state = 'exist'
          console.log(this.company)
        }
      }).catch(e => {
        console.log(e)
      })
      
    }
  },
};
</script>
 