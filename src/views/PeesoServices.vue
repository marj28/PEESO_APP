<template>
  <v-app>
    <div class="backgruond"></div>
    <v-main class="d-flex justify-center align-center">
      <v-row style="margin-top: 150px">
        <v-col cols="12" md="12" class="mx-auto">
          <v-card class="pa-4 elevation-6">
            <v-form ref="form">
              <v-card-text>
                <v-row>
                  <v-col cols="12">
                    <h2>CPEESO Services Offered</h2>
                  </v-col>

                  <v-col cols="12">
                    <p >
                      The Public Employment Service Office or PESO is a
                      multi-service facility established to provide employment
                      information and assistance to the Department of Labor and
                      Employment (DOLE) clients and constituents of Local
                      Government Units (LGU)
                    </p>
                  </v-col>

                  <v-col class="mt-n5" cols="12" >
                    <p>
                      It makes available in one roof the various employment
                      promotion, manpower programs, and services of the DOLE and
                      other government agencies to enable all types of clientele
                      to know more about them and seek specific assistance they
                      require.
                    </p>
                  </v-col>
                </v-row>

                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Education</v-list-item-title>
                    <v-list-item-subtitle>Scholarship</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item two-line>
                  <v-list-item-content>
                    <v-list-item-title>Trainings</v-list-item-title>
                    <v-list-item-subtitle
                      >Slaughter House (Butchering)</v-list-item-subtitle
                    >
                    <v-list-item-subtitle>Beekeeping</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item three-line>
                  <v-list-item-content>
                    <v-list-item-title>Employment</v-list-item-title>
                    <v-list-item-subtitle> Job Fair </v-list-item-subtitle>
                    <v-list-item-subtitle> Internship </v-list-item-subtitle>
                    <v-list-item-subtitle>PESLA</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-card-text>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>
  
  <style scoped>
.backgruond {
  background-image: url(../assets/kontak.jpg) !important;
  height: 350px;
  width: 100%;
  display: block;
  position: absolute;
  top: 0;
  background-size: cover;
}

.modification {
  font-size: 12px;
  font-weight: bold;
}

h2{
  margin-bottom: 10px;
}
.modification1 {
  font-size: 11px;
}

.textboxborderradius {
  border-radius: 15px;
}

.borderradiuscard {
  border-radius: 10px;
}
p {
  font-size: 16px;
  text-align: justify;
}

@media screen and (max-width: 600px)  {
  p{
    font-size: 13px;
    padding: 2%;
    margin-top: -6%;
  }
  h2{
    font-size: 16px;
  }
  .backgruond {
  background-image: url(../assets/kontak.jpg) !important;
  height: 150px;
  width: 100%;
  display: block;
  position: absolute;
  top: 0;
  background-size: cover;
}
}
</style>