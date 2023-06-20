<template>
    <v-app>
 <v-card v-for="items in selecteddata" :key="items.id" >
   <div class="text-center ">
  <v-alert dense dark color="green darken-3">
    Schedule Details<strong> </strong>

   </v-alert> 
   </div>

   <v-row>
        <v-col cols="12" lg="7">

   <div class="mt-5 font-weight-bold">
  <p  class="font-weight-bold  ml-5">Date: <span class="font-weight-regular"> {{ items.date }} </span> </p>                     
   <p class="font-weight-bold ml-5 mt-n3">Time From: <span class="font-weight-regular">   {{ items.timef }}  </span> </p>
   <p class="font-weight-bold ml-5 mt-n3">Time From: <span class="font-weight-regular"> {{ items.timet }} </span> </p>
   <p class="font-weight-bold ml-5 mt-n3">Location: <span class="font-weight-regular"> {{ items.location }} </span> </p>
   <p class="font-weight-bold ml-5 mt-n3">Invites: <span class="font-weight-regular"> {{ items.invite }} </span> </p>
   <p class="font-weight-bold ml-5 mt-n3">Confirmed: <span class="font-weight-regular"> {{ items.confirmed }} </span> </p>
</div>
</v-col>


<v-col cols="12" lg="5" class="mt-5">
<div class="font-weight-bold">
    <p  class="font-weight-bold  ml-5">Position Title:<span class="font-weight-regular"> {{ title }} </span> </p>   
    <p  class="font-weight-bold mt-n3 ml-5">Company:<span class="font-weight-regular"> {{ company }} </span> </p>   
    <p  class="font-weight-bold mt-n3 ml-5">Salary:<span class="font-weight-regular"> {{ salary }}</span> </p> 
    <p  class="font-weight-bold mt-n3 ml-5">POSTED ON:<span class="font-weight-regular"> {{ $moment(post.created_td).format('MMM DD, YYYY') }} </span> </p>                               
   </div>
</v-col>

</v-row>


  </v-card>

  <div>

    <v-card color="white" >
      <v-card-title class="subtitle-3 mt-2">
       Invited Applicants
        <v-divider inset vertical color="white" class="ml-2 mr-2"></v-divider>
      
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
     <!--    <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details outlined rounded
          dark dense></v-text-field> -->
      </v-card-title>
      <v-card-text>
        <v-data-table :headers="headerinvite" :items="invitelist" :items-per-page="5" :search="search" class="mt-n3 btn-hover elevation-1 pa-4"  @click:row="editItem">         
          
     
        </v-data-table>
        <v-btn color="green" class=" ml-1 mt-2"
         dark @click="goBack">
        BACK
    </v-btn>
      </v-card-text>
    

    </v-card>
</div>

    </v-app>
</template>


<script>
import { relativeTimeThreshold } from 'moment';
import {
    mapMutations
} from 'vuex'
export default {
    data() {
        
        return {
            dialog: false,
        post: { post_meta: {}, type: "" },
        loading: false,
        can_apply: true,
        company: { medias: {} },
        applicants: [],
        dialogschedule: false,
        timePicker: false,
        selectedTime: null,
        timePicker1: false,
        selectedTime1: null,

            headers: [
                { text: 'Date', value: 'date' },
                { text: 'From', value: 'timef' },
                { text: 'To', value: 'timet' },
                { text: 'Location', value: 'location' },
                { text: 'Invites', value: 'invite' },
                { text: 'Confirmed', value: 'confirmed' },

                { text: 'Actions', value: 'actions', sortable: false },
            ],

            headerinvite: [
                { text: 'Name', value: 'Name' },
                { text: 'Number', value: 'Number' },
                { text: 'Status', value: 'Status' },
                { text: 'Remarks', value: 'Remarks' },
               
            ],


            invitelist: [
           { Name: 'Joemarie Rendon' ,Number: '09451687848' ,Status: 'Accepted' ,Remarks: 'Good' },
           { Name: 'Jograd Mahusay' ,Number: '09451687848' ,Status: 'Accepted' ,Remarks: 'Nice One' },
           { Name: 'Neil Roble' ,Number: '09451687848' ,Status: 'Denied' ,Remarks: 'Goods Kaayu' },
           { Name: 'Lebron James' ,Number: '09451687848' ,Status: 'Accepted' ,Remarks: 'Good Game' },
           { Name: 'Pablo Escobar' ,Number: '09451687848' ,Status: 'Denied' ,Remarks: 'Well Played' }
            ],

            items: [
                {  id:1,  name: 'Invoker', date: '01/02/2021', timef: '1:11pm', timet: '5:11pm', location: 'City Hall of Asuncion', number: '111', invite: '347', confirmed: '423' },
                {  id:2,  name: 'Minara', date: '01/03/2022', timef: '1:22pm', timet: '5:22pm', location: 'City Mall of You', number: '222', invite: '987', confirmed: '542' },
                {  id:3, name: 'War Lord', date: '01/04/2023', timef: '1:22pm', timet: '5:33pm', location: 'City Davao', number: '333', invite: '907', confirmed: '542' },
                {  id:4, name: 'Jamica', date: '01/05/2024', timef: '1:33pm', timet: '5:44pm', location: 'City Hall of Manila', number: '123', invite: '222', confirmed: '245' },
                {  id:5, name: 'Red Bull', date: '01/06/2025', timef: '1:44pm', timet: '5:55pm', location: 'City Hall', number: '444', invite: '765', confirmed: '875' },
            ],
            


            itemKey: 'name',
            dialogVisible: false,

            selecteddata:[],

        };
    },


    computed: {
        HEADERTEXT() {
            return this.post.type.toUpperCase()
        },
        user() {
            if (this.$session.exists()) {
                return this.$session.get("user");
            }
            return null;
        },
    },

    created() {
       
      this.selecteddata.push(this.items.find(e => e.id == this.$route.params.id));
      this.populateForm();
      // console.log("selected=>", this.selected);
      // console.log("selected=>", this.$route.params.id);
     
        },


    methods: {

        goBack() {
      this.$router.go(-1); // Navigates back to the previous page
    },

        populateForm() {
      this.title = this.$route.params.title || '';
      this.company = this.$route.params.company || '';
      this.salary = this.$route.params.salary || '';
      this.created_td = this.$route.params.created_td || '';
        }
            /// Start 

    },
};
</script>