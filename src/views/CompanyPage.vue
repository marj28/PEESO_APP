<template>
  <v-app>
    <employer-navbar />
    <v-main>
      <v-row class="pa-3">
        <v-col>
          <v-card outlined color="#FFFFFF">
            <v-card-title class="d-flex flex-column justify-space-between align-center">
              <v-avatar size="150">
                <img src="@/assets/profileicon.png" />
              </v-avatar>
            </v-card-title>
            <v-card-text class="d-flex flex-column justify-space-between align-center"
              style="color: black; border-style: solid; border-width: 1px;border-color: green;">
              <p class="Employer-name">Employer Name</p>
              <p class="Employer-position">Employer Position</p>
              <p class="Company-name-address">Company Name and Address</p>
            </v-card-text>
            <v-col cols="12" sm="12" md="12" lg="12">
              <v-dialog v-model="dialog2" width="400" persistent>

                <v-card flat>
                  <v-card-title class="text-h6 green darken-2 white--text">
                    Establishment Type
                  </v-card-title>
                  <v-divider></v-divider>
                  <!-- adsas -->
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="success" text
                      @click="dialog2 = false, profilecard_private = true, profilecard_government = false">
                      PRIVATE
                    </v-btn>
                    <v-btn color="warning" text
                      @click="dialog2 = false, profilecard_private = false, profilecard_government = true">
                      PUBLIC
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-col>
          </v-card>
        </v-col>
      </v-row>
      <v-row v-show="profilecard_private">
        <v-col style="margin-top: -45px;">


          <ProfileCardPrivate />


        </v-col>
      </v-row>
      <v-row v-show="profilecard_government">
        <v-col style="margin-top: -45px;">

          <ProfileCardGovernment />


        </v-col>
      </v-row>

    </v-main>
  </v-app>
</template>

<script>
export default {
  components: {

  },
  data: () => ({
    profilecard_government: false,
    profilecard_private: true,
    dialog2: true,
  })
};
</script>
<style>
.Employer-name {
  margin-top: 5px;
  font-size: 20px;
  font-weight: 700;
}

.Employer-position {
  margin-top: -9px;
  font-size: 15px;
  font-weight: 500;
}

.Company-name-address {
  margin-top: -9px;
  font-size: 15px;
  font-weight: 500;
}
</style>