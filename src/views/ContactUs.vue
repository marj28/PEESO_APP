<template>
    <v-app>
      <div class="backgruond"></div>
      <v-main class="d-flex justify-center align-center">
        <v-row class="row1">
          <v-col cols="10" lg="8" class="mx-auto">
            <v-card class="pa-4 elevation-6">
              <v-form ref="form">
                <v-card-text>
                  <v-row>
                    <v-col cols="12">
                      <h2>Get in Touch</h2>
                    </v-col>
  
                    <v-col cols="12">
                      <p >
                        Use our contact form for all information requests or
                        contact us directly using the contact information below.
                      </p>
                    </v-col>
  
                    <v-col class="mt-n8" cols="12" >
                      <p>Feel free to get in touch with us via email or phone</p>
                    </v-col>
  
                    <v-col cols="12">
                      <v-row class="mt-2">
                        <v-col cols="12" lg="3" md="6" sm="6">
                          <v-card  class="elevation-10 rounded-xl mb-6">
                            <div class="text-center">
                              <v-avatar
                                class="mt-n10"
                                size="80"
                                color="indigo lighten-4"
                              >
                                <img
                                  class="class_sa_avatar"
                                  src="/greenfb.jpg"
                                  alt=""
                                />
                              </v-avatar>
  
                              <p class="mt-3 modification">Chat Us</p>
                              <p class="mx-4">
                                Our friendly team is here to help.
                              </p>
                              <p class="modification">PEESOTagumOfficial</p>
                            </div>
                          </v-card>
                        </v-col>
  
                        <v-col cols="12" lg="3" md="6" sm="6">
                          <v-card  class="elevation-10 rounded-xl mb-6">
                            <div class="text-center">
                              <v-avatar
                                class="mt-n10"
                                size="80"
                                color="indigo lighten-4"
                              >
                                <img
                                  class="class_sa_avatar"
                                  src="/greenmessage.jpg"
                                  alt=""
                                />
                              </v-avatar>
                              <p class="mt-3 modification">Message Us</p>
                              <p class="mx-4">
                                Our friendly team is here to help.
                              </p>
                              <p class="modification">tagumpeso@gmail.com</p>
                            </div>
                          </v-card>
                        </v-col>
  
                        <v-col cols="12" lg="3" md="6" sm="6">
                          <v-card  class="elevation-10 rounded-xl mb-6">
                            <div class="text-center">
                              <v-avatar
                                class="mt-n10"
                                size="80"
                                color="indigo lighten-4"
                              >
                                <img
                                  class="class_sa_avatar"
                                  src="/callgreen.jpg"
                                  alt=""
                                />
                              </v-avatar>
                              <p class="mt-3 modification">Call Us</p>
                              <p class="modification">0967 325 9484</p>
                              <p class="mt-n4 mx-2" style="font-size: 15px">
                                (084) 645-3300 
                              </p>
                              <p>local 233</p>
                            </div>
                          </v-card>
                        </v-col>
  
                        <v-col cols="12" lg="3" md="6" sm="6">
                          <v-card  class="elevation-10 rounded-xl mb-6">
                            <div class="text-center">
                              <v-avatar
                                class="mt-n10"
                                size="80"
                                color="indigo lighten-4"
                              >
                                <img
                                  class="class_sa_avatar"
                                  src="/greenlocation.jpg"
                                  alt=""
                                />
                              </v-avatar>
                              <p class="mt-3 modification">Location</p>
                              <p class="pa-2">
                                2nd Floor (Right Wing), Tagum City Hall, Tagum City, Philippines
                              </p>
                            </div>
                          </v-card>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-form>
            </v-card>
          </v-col>
  
          <v-col cols="10" lg="4" class="mx-auto">
            <v-card class="pa-4 elevation-6">
              <div class="text-center">
                <!-- <v-avatar size="100" color="indigo lighten-4">
                  <img class="class_sa_avatar" src="/contactuslogo.jpg" alt="">
                </v-avatar> -->
                <h2>Contact Us</h2>
              </div>
              <v-form ref="form">
                <v-card-text>
                  <h3 class="mt-n3">Name:</h3>
                  <v-text-field
                    class="mt-2 textboxborderradius"
                    dense
                    outlined
                    rounded
                    type="name"
                    placeholder="Name"
                    prepend-inner-icon="mdi-account"
                    required
                  />
  
                  <h3 class="mt-n3">Email:</h3>
                  <v-text-field
                    class="mt-2 textboxborderradius"
                    dense
                    outlined
                    type="Email"
                    placeholder="Email"
                    prepend-inner-icon="mdi-account"
                    required
                  />
  
                  <h3 class="mt-n3">Message:</h3>
                  <v-textarea
                    class="mt-2 textboxborderradius"
                    dense
                    outlined
                    type="message"
                    placeholder="Message"
                    prepend-inner-icon="mdi-account"
                    required
                  />
                </v-card-text>
                <v-card-actions class="justify-center">
                  <v-btn class="mt-n9" type="submit" color="green darken-2" small> 
                    <v-icon left dark>mdi-light mdi-rotate-45 mdi-send</v-icon>
                    <span class="white--text">Submit Request</span>
                  </v-btn>
                </v-card-actions>
              </v-form>
            </v-card>
          </v-col>
        </v-row>
      </v-main>
    </v-app>
  </template>
  
  <style>
  .row1{
    margin-top: 160px
  }
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
    padding: 1% 1% 1% 1% ;
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

  @media screen and (max-width: 600px)  {
  p{
    font-size: 13px;
    padding: 2%;
  }
  h2.ma-1{
    font-size: 13px;
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