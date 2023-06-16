<template>
    <v-app>

        <div class="font-weight-bold">Company:{{ post.post_meta.company }}</div>
    <v-card v-for="items in selecteddata" :key="items.id" >
   <div class="text-center ">
  <v-alert dense dark color="green darken-3">
    Schedule Details<strong> </strong>

   </v-alert> 
   </div>



  <p  class="font-weight-bold ml-5">Date: <span class="font-weight-regular"> {{ items.date }} </span> </p>                     
   <p class="font-weight-bold ml-5 mt-n2">Time From: <span class="font-weight-regular">   {{ items.timef }}  </span> </p>
   <p class="font-weight-bold ml-5 mt-n2">Time From: <span class="font-weight-regular"> {{ items.timet }} </span> </p>
   <p class="font-weight-bold ml-5 mt-n2">Location: <span class="font-weight-regular"> {{ items.location }} </span> </p>
   <p class="font-weight-bold ml-5 mt-n2">Invites: <span class="font-weight-regular"> {{ items.invite }} </span> </p>
   <p class="font-weight-bold ml-5 mt-n2">Confirmed: <span class="font-weight-regular"> {{ items.confirmed }} </span> </p>
  </v-card>


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
      if (this.$session.exists()) {
            this.$http.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
        }
        this.setLoggedIn(true)
        this.setAppBar(true)
        this.getpost(this.$route.params.id)
        this.checkAppplied(this.$route.params.id)
        },


    methods: {
            /// Start 
            ...mapMutations(['setLoggedIn', 'setAppBar', 'setMonthDailySales']),
        applyJob() {
            var params = {
                post_id: this.post.id,
                posted_by: this.post.created_by,
                post_type: this.post.type
            }

            console.log(params)
            this.$http.post('new/application', params).then(response => {
                this.loading = false
                this.dialog = true
                // response.data.status ? this.VA_ALERT('success', response.data.message) : this.VA_ALERT('error', response.data.message)
                this.checkAppplied(this.$route.params.id)
            }).catch(e => {
                console.log(e)
            })
        },
        getApplicants() {
            this.$http.get('get_applicants').then(response => {
                response.data.status ? this.applicants = response.data.applicants : this.applicants = []
            }).catch(e => {
                console.log(e)
            })
        },

        checkAppplied() {
            var params = {
                post_id: this.$IsNum(this.$route.params.id),
            }

            console.log(params)
            this.$http.post('chech_applied', params).then(response => {
                this.can_apply = response.data.status
            }).catch(e => {
                console.log(e)
            })
        },

        getpost(id) {
            this.$http.post('post/get', { id: this.$IsNum(id) }).then(response => {
                console.log(response.data)
                response.data.status ? this.post = response.data.post : this.post = {}
                response.data.status ? this.company = response.data.company : this.company = {}
            }).catch(e => {
                console.log(e)
            })
        }
        // END




      /*   performAction(item) {
            // Perform some action on the item 
            console.log('Performing action on item:', item);
        }, */

     /*    openDialog(item) {
            // Set the dialogVisible flag to true when a row is clicked
            console.log('Opening dialog for item:', item);
            this.dialogVisible = true;
        }, */
       /*  closeDialog() {
            // Set the dialogVisible flag to false when the dialog is closed
            this.dialogVisible = false;
        }, */
    },
};
</script>