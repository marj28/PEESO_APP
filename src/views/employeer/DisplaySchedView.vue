<template>
    <v-app>

           <v-card v-for="items in selecteddata" :key="items.id" >
   <div class="text-center ">
  <v-alert dense dark color="green darken-3">
    Schedule Details<strong> </strong>

   </v-alert> 
   </div>
   <div class="font-weight-bold">

    <p  class="font-weight-bold  ml-5">Position Title:<span class="font-weight-regular"> Drug Store Operator </span> </p>   
    <p  class="font-weight-bold mt-n3 ml-5">Company:<span class="font-weight-regular"> Tagum City </span> </p>   
    <p  class="font-weight-bold mt-n3 ml-5">Salary:<span class="font-weight-regular"> 100,00 </span> </p> 
    <p  class="font-weight-bold mt-n3 ml-5">POSTED ON:<span class="font-weight-regular"> Jun 16, 2023 </span> </p>                               
   </div>


   <div class="mt-5 font-weight-bold">
  <p  class="font-weight-bold  ml-5">Date: <span class="font-weight-regular"> {{ items.date }} </span> </p>                     
   <p class="font-weight-bold ml-5 mt-n3">Time From: <span class="font-weight-regular">   {{ items.timef }}  </span> </p>
   <p class="font-weight-bold ml-5 mt-n3">Time From: <span class="font-weight-regular"> {{ items.timet }} </span> </p>
   <p class="font-weight-bold ml-5 mt-n3">Location: <span class="font-weight-regular"> {{ items.location }} </span> </p>
   <p class="font-weight-bold ml-5 mt-n3">Invites: <span class="font-weight-regular"> {{ items.invite }} </span> </p>
   <p class="font-weight-bold ml-5 mt-n3">Confirmed: <span class="font-weight-regular"> {{ items.confirmed }} </span> </p>
</div>




  </v-card>

  <div>
    <v-data-table :headers="headerinvite" :items="filteredItems" class="elevation-1">
          
        </v-data-table>

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

      // console.log("selected=>", this.selected);
      // console.log("selected=>", this.$route.params.id);
     
        },


    methods: {
            /// Start 

    },
};
</script>