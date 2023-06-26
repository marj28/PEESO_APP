<template>
  <v-dialog v-model="dailog" persistent fullscreen>
    <v-card>
      <v-card-title class="text-h6" dense>

            <v-icon left color="primary">
              mdi-account-multiple
            </v-icon> Applicants for {{job.title}}

            <v-spacer />
              <v-icon  @click="emitToParent('close')">
              mdi-close-box
            </v-icon>
    </v-card-title>
      <v-card-text>
        <div v-if="applicants.length == 0" class="text-center mt-4"><em class="text-warning ">No applicants yet!</em></div>
        <v-row v-else>
          <v-col cols="4">
          
            <v-list two-line>
                <template v-for="(item, index) in applicants">
                  <template v-if="item.applicant!=null">
                  <v-list-item
                    :key="index"
                  >
                    <!-- <v-list-item-avatar>
                      <v-img :src="item.avatar"></v-img>
                    </v-list-item-avatar> -->

                    <v-list-item-content>
                      <v-list-item-title>{{ item.applicant!=null?item.applicant.lastname:"" }},  {{ item.applicant!=null?item.applicant.firstname:"" }}</v-list-item-title>
                      <v-list-item-subtitle><span><v-icon small left>mdi-cellphone-basic</v-icon>{{ item.applicant.contactno?item.applicant.contactno:"N/A" }}</span></v-list-item-subtitle>
                      <v-list-item-subtitle><span><v-icon small left>mdi-email</v-icon>{{ item.applicant.email?item.applicant.email:"N/A" }}</span></v-list-item-subtitle>
                      <v-list-item-subtitle>Applied: <em class="text-warning">{{ $moment(item.applied_dt).fromNow()}}</em></v-list-item-subtitle>
                     
                    </v-list-item-content>
                    <v-list-item-action>
                        <v-checkbox
                          :id="index+'-c'"
                          v-model="recipients"
                          :value="{name:item.applicant.lastname + ',' + item.applicant.firstname, id: item.user_id }"
                        />
                        </v-list-item-action>
                  </v-list-item>
                  <v-divider  :key="index + 'div'"></v-divider>
                  </template>
                </template>
              </v-list>
          </v-col>
          <v-col cols="8">
            <div class="pa-4">
              <v-text-field 
                v-model="message.subject"
                label="Subject"
                outlined
                dense
              />
              <div class="mb-2">
                Recipients:
                <template  v-for="(item, index) in recipients">
                     <v-chip
                          :key="index"
                          close
                          color="primary"
                          @click:close="removeRecipient(index)"
                          class="ma-1"
                          label
                          outlined
                        >
                        {{ item.name}}
                        </v-chip>
                </template>
                <v-divider/>
              </div>
               <v-tiptap v-model="message.body" />
              </div>
              <div>
                  <v-toolbar dense flat>
                      <v-spacer></v-spacer>
                      <em v-if="alert" class="mr-2 text-success"><v-icon color="success">mdi-check</v-icon>Message sent</em>
                      <v-btn :loading="loading" @click="sendMessage()">Send Message</v-btn>
                  </v-toolbar>
              </div>
      
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
import {
  mapMutations
} from 'vuex'
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    job: {
      type: Object,
      default: () => { }
    }
  },
  data: () => ({
    loading: false,
    valid: true,
    alert: false,
    message: {subject:"", body:""},
    applicants:[],
    recipients:[],
    dailog: false,
    company: {},
    post: { post_meta: { salary: "" } },
    state: 'new',
    user:{},
    nameRules: [
      v => !!v || 'Field is required'
    ],
  }),
  watch: {
    show(v) {
      v ? this.dailog = true : this.dailog = false
      if(v) {
        if (this.$session.get("user")) {
         this.user = this.$session.get("user");
        } else {
          this.user = null
        }
        this.applicants = []
          this.getJobApplications()
      } else {
          this.applicants = []
          this.recipients = []
      }
    }
  },
  created() {
  },
  methods: {
    emitToParent(action) {
      this.$emit('DialogEvent', { action: action })
    },
    removeRecipient(index){
      if(this.recipients.length>0) {
        this.recipients.splice(index,1)
      }
    },
    sendMessage(){
    
      this.loading = true
      var params={
        type:"job_message",
        ref_no: this.job.id,
        sender: this.user.id,
        receiver: this.recipients,
        subject: this.message.subject,
        body: this.message.body
      }
      console.log(params)
      this.$http.post('message/send',params).then(response => {  
             if(response.data.status) {
              this.alert = true
              setTimeout(()=>{
                this.clearMessage()
                this.alert = false
              },1500)
             }
              this.loading = false
            }).catch(e => {
              this.loading = false
            });
    },
    clearMessage(){
      this.recipients = []
      this.message =  {subject:"", body:""}
    },
   getJobApplications(){
      this.recipients = []
      this.$http.post('get_job_applicants', {id:this.job.id}).then(response => {  
              response.data.status?this.applicants = response.data.applicants:this.applicants=[]
              console.log(this.applicants )
            }).catch(e => {
              console.log(e)
            }).catch((error) => {
              console.error(error);
          });
   }
  },
}
</script>
  