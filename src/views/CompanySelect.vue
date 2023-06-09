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
        <!-- Master supposedly dria unta nato makita if ang company type is public or
        private -->
        <v-card>
          <!-- <div>
            <CompanyPrivate />
          </div> -->
          <div>
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
  created() {
    if (this.$session.exists()) {
      this.$http.defaults.headers.common["Authorization"] =
        "Bearer " + this.$session.get("jwt");
      this.setLoggedIn(true);
      this.setAppBar(true);
    }

  },
  methods: {
    ...mapMutations(["setLoggedIn", "setAppBar", "setMonthDailySales"]),

  },
};
</script>
 