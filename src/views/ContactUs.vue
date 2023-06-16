<template>
    <v-app>

      <div class="backgruond"></div>
      <v-main class="d-flex justify-center align-center">


        <v-row style="margin-top: 178px;">

        
            <v-col cols="10" lg="8" class="mx-auto">



<v-card class="pa-4 elevation-6" >   

  
  <v-form  ref="form">
    <v-card-text>

        <v-row>
            <v-col cols="12">
      <p class="font-weight-bold" style="font-size:23px">Get in touch</p>
    </v-col>


    <v-col cols="12">
      <p style="font-size:18px">Use our contact form for all information requests or
         contact us directly using the contact information below.</p>
    </v-col>

    <v-col  class="mt-n5" cols="12" style="font-size:18px">
      <p>Feel free to get in touch with us via email or phone</p>
    </v-col>


 
    <v-col cols="12">


       <!--  <v-row>
            <v-col cols="12" lg="1">
        <v-avatar size="55" color="indigo lighten-4">
                <img class="class_sa_avatar" src="/fblogo.jpg" alt=""> 
              </v-avatar>
            </v-col>

            <v-col cols="12" lg="6" class="mt-4">
             <p class="modification" >/PEESOTagumOfficial</p> 
            </v-col>

            </v-row>

    </v-col>

    <v-col cols="12">

<v-row class="mt-n8">

    <v-col cols="12" lg="1">
        <v-avatar size="55" color="indigo lighten-4">
        <img class="class_sa_avatar" src="/Message.jpg" alt=""> 
      </v-avatar>
    </v-col>

    <v-col cols="12" lg="6" class="mt-4">
     <p class="modification" >/tagumpeso@gmail.com</p> 
    </v-col>

    </v-row>



    <v-row class="mt-n5">

<v-col cols="12" lg="1">
    <v-avatar size="55" color="indigo lighten-4">
    <img class="class_sa_avatar" src="/call.jpg" alt=""> 
  </v-avatar>
</v-col>

<v-col cols="12" lg="6" class="mt-4">
 <p class="modification" >0967 325 9484</p> 
 <p class="mt-n4" style="font-size:15px" >(084) 645-3300 local 233</p> 
</v-col>

</v-row>


<v-row class="mt-n7">

<v-col cols="12" lg="1">
    <v-avatar size="55" color="indigo lighten-4">
    <img class="class_sa_avatar" src="/loc.jpg" alt=""> 
  </v-avatar>
</v-col>

<v-col cols="12" lg="6" class="mt-4">
 <p  style="font-size:15px">2nd Floor (Right Wing), Tagum City Hall</p> 
 <p style="font-size:15px" class="mt-n4" >Apokon, Tagum City</p> 
</v-col>

</v-row> -->

<v-row class="mt-2">

   <v-col cols="12" lg="3" md="6" sm="6">
    <v-card height="200px" class="elevation-10 rounded-xl"  >
    
        <div class="text-center" >
            
                <v-avatar class="mt-n10" size="80" color="indigo lighten-4">
                <img class="class_sa_avatar" src="/greenfb.jpg" alt=""> 
              </v-avatar>

              <p class="mt-3 modification" >Chat Us</p> 
            <p class="mx-4">Our friendly team is here to help.</p> 
            <p class="modification" >PEESOTagumOfficial</p> 
            </div>
          
    </v-card>
   </v-col>
       

   <v-col cols="12" lg="3" md="6" sm="6">
    <v-card height="200px" class="elevation-10 rounded-xl"  >
        <div class="text-center" >
                <v-avatar class="mt-n10" size="80" color="indigo lighten-4">
                <img class="class_sa_avatar" src="/greenmessage.jpg" alt=""> 
              </v-avatar>
              <p class="mt-3 modification" >Message Us</p> 
            <p class="mx-4">Our friendly team is here to help.</p> 
            <p class="modification" >tagumpeso@gmail.com</p> 
            </div>
         
    </v-card>
   </v-col>

   <v-col cols="12" lg="3" md="6" sm="6">
    <v-card height="200px" class="elevation-10 rounded-xl"  >
        <div class="text-center" >
                <v-avatar class="mt-n10" size="80" color="indigo lighten-4">
                <img class="class_sa_avatar" src="/callgreen.jpg" alt=""> 
              </v-avatar>
              <p class="mt-3 modification" >Call Us</p> 
            <p class="modification" >0967 325 9484</p> 
             <p class="mt-n4 mx-2" style="font-size:15px" >(084) 645-3300 local 233</p> 
            </div>
          
    </v-card>
   </v-col>

   <v-col cols="12" lg="3" md="6" sm="6">
    <v-card height="200px" class="elevation-10 rounded-xl"  >
        <div class="text-center" >
                <v-avatar class="mt-n10" size="80" color="indigo lighten-4">
                <img class="class_sa_avatar" src="/greenlocation.jpg" alt=""> 
              </v-avatar>
              <p class="mt-3 modification" >Location</p> 
            <p  style="font-size:15px">2nd Floor (Right Wing), Tagum City Hall</p> 
        <p style="font-size:15px" class="mt-n4" >Apokon, Tagum City</p> 
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



          <v-card class="pa-4 elevation-6 " >       
            <div class="text-center">
              <!-- <v-avatar size="100" color="indigo lighten-4">
                <img class="class_sa_avatar" src="/contactuslogo.jpg" alt="">
              </v-avatar> -->
              <h2 >Contact US</h2>
            </div>
            <v-form  ref="form">
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
              <v-card-actions  class="justify-center">
                <v-btn   class="mt-n9" type="submit" color="green darken-2">
                    <v-icon left dark>mdi-light mdi-rotate-45 mdi-send</v-icon>
                  <span class="white--text ">Submit Your Request</span>
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
.backgruond{
  background-image: url(../assets/Kontak.jpg) !important;
  height: 300px;
  width: 100%;
  display: block;
  position: absolute;
  top: 0;
  background-size: cover;
}

.modification{
    
    font-size: 12px;
    font-weight: bold;

}

.modification1{
    
    font-size: 11px;
   

}

.textboxborderradius
{
    border-radius: 15px;
}



.borderradiuscard
{
    border-radius: 10px;
}

</style>