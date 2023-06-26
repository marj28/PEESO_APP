
<template>
  <!--  eslint-disable  -->
  <div>

    <v-dialog max-width="920" persistent v-model="show">
      <v-card>
        <v-toolbar dense>{{data.subject}}<v-spacer></v-spacer>  
          <v-icon  @click="emitToParent('close')">
              mdi-close-box
            </v-icon>
          </v-toolbar>
          <v-card-text>
            <div class="mt-4 mb-4">
              <div v-html="data.body"></div>
            </div>
            <div class="text-warning"><em>You received this message from employer. For the job "<strong>{{post.title}}</strong>" </em></div>
          </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
/*    eslint-disable */
import {
  mapMutations
} from 'vuex'
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Object,
      default: () => { }
    },
  },
  data: () => ({
    e1: 1,
    loading: false,
    valid: true,
    // show: false,


    company: {},
    post: { post_meta: { salary: "" } },
    state: 'new',
    nameRules: [
      v => !!v || 'Field is required'
    ],
  }),
  watch: {
    show(v) {
      v ? this.show = true : this.show = false
      if (v) {
        this.readMessage()
        this.getJob()
      } 
    }
  },
  created() {
  },
  methods: {
    emitToParent(action) {
      this.$emit('DialogEvent', { action: action })
    },
    getJob() {
      if(this.data.type == 'job_message') {
              this.$http.post('post/get', {id:this.data.ref_no}).then(response => {  
                      response.data.status?this.post = response.data.post:this.post={}
                      response.data.status?this.company = response.data.company:this.company={}
                    }).catch(e => {
                    console.log(e)
                    })
        }
    },
    readMessage(){
      this.$http.post('mesage/read',{id:this.data.id}).then(response => {  
            console.log(response.data.status)
          }).catch(e => {
            console.log(e)
          }).catch((error) => {
            console.error(error);
        });
    }
  },
}

</script> 

