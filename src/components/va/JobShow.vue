
<template>
  <!--  eslint-disable  -->
    <div>
    
    <v-dialog fullscreen persistent v-model="show" max-width="200px" >

      <v-card>
  
        <v-card-title class="green darken-4 white--text">
                    <v-icon small class="mr-2" @click="$router.push({ name: 'job-post' })" color="white">
                        mdi-arrow-left
                    </v-icon>JOB POSTING DETAILS
                    <v-spacer></v-spacer>
                    <v-icon small class="mr-2" @click="editItem(items)" :key="id" color="white">
                        mdi-pencil
                    </v-icon>
                </v-card-title>

<!-- <h1>
  {{item.title}}
</h1>

 -->

<!--  <h1>
  {{data.post_meta.salary}}
</h1>
 -->


                      <v-row>
                    <v-col cols="12" md="12" lg="12">
                        <v-list-item three-line>
                            <v-list-item-content>
                                <div class="text-overline mb-4">
                                    PHP {{ data.post_meta.salary }} // {{ data.post_meta.classificationofwork }}
                                </div>
                                
                                <v-list-item-title class="text-h5 mb-12 green--text">
                                    {{ post.title }}
                                </v-list-item-title>
                             <!--    <p class="pl-12 pr-12 pt-5" justify="center">{{ post.content }}</p> -->

                                <p class="mt-n8">
               <v-icon  left color="success">mdi-account-hard-hat</v-icon> Job Description
              </p> 
                <div  class="mb-2">
                  <v-tiptap readonly v-model="post.content"/>
                </div>


                                <v-list-item-title class="text-h8 mb-1 mt-4">
                                    <b color="#1B5E20">Purpose of Vacancy:</b> {{ data.post_meta.purposeofvacancy }}
                                </v-list-item-title>
                                <v-list-item-title class="text-h8 mb-1">
                                    <b>Classification of Vacancy:</b> {{ data.post_meta.classificationofvacancy }}
                                </v-list-item-title>
                                <v-list-item-title class="text-h8 mb-2">
                                    <b>Place of Work:</b> {{ data.post_meta.placeofwork }}
                                </v-list-item-title>
                                <v-divider></v-divider>
                                <h3 class="mt-2 green--text">PREFERENCES:</h3>
                                <v-row>


                                      <v-col cols="12" md="6" lg="6" sm="12">
                                        <v-list-item-title class="text-h8 mb-1 mt-2">
                                            <b>Educational Level:</b> {{ data.post_meta.educationallevel }}
                                        </v-list-item-title>
                                        <v-list-item-title class="text-h8 mb-1">
                                            <b>Course Requirement:</b> {{ data.post_meta.courserequirements }}
                                        </v-list-item-title>
                                        <v-list-item-title class="text-h8 mb-1">
                                            <b>Sex Preference:</b> {{ data.post_meta.sexpreference }}
                                        </v-list-item-title>
                                        <v-list-item-title class="text-h8 mb-1">
                                            <b>Work Experience:</b> {{ data.post_meta.workexperience }} months
                                        </v-list-item-title>
                                        <v-list-item-title class="text-h8 mb-1">
                                            <b>Required License:</b> {{ data.post_meta.requiredlicense }}
                                        </v-list-item-title>
                                        <v-list-item-title class="text-h8 mb-1">
                                            <b>Other Qualifications:</b> {{ data.post_meta.otherqualification }}
                                        </v-list-item-title>
                                        <v-list-item-title class="text-h8 mb-1">
                                            <b>Employability Skills:</b> {{ data.post_meta.employabilityskills }}
                                        </v-list-item-title>
                                    </v-col>
                                    <v-col cols="12" md="6" lg="6">
                                        <v-list-item-title class="text-h8 mb-1">
                                            <b>Posting Date:</b> {{ data.post_meta.postingdate }}
                                        </v-list-item-title>
                                        <v-list-item-title class="text-h8 mb-1">
                                            <b>Valid Until:</b> {{ data.post_meta.validuntil }}
                                        </v-list-item-title>
                                    </v-col> 


                                </v-row>

                            </v-list-item-content>
                        </v-list-item>
                    </v-col>
                </v-row>
       







</v-card>
  

</v-dialog> 




</div>
</template>

<!-- <script>
// eslint-disable 
export default {
    
  
    components: {
  
    },
  props:{
    show: {
      type: Boolean,
      default: false
    },
  },
    data () {
      return {
        

      
      }
  
    }
    
  
      };
  
</script> -->
  
   
 -  <script>
/*    eslint-disable */
  import {
  mapMutations
} from 'vuex'
  export default {
    props: {
      show: {
      type: Boolean,
      default: false
    },
    post_state: {
      type: String,
      default: 'New'
    },
    data: {
      type: Object,
      default: ()=>{}
    },
    },
    data: () => ({
      e1: 1,
      loading: false,
      valid: true,
      show: false,
    

      company: {},
      post: {post_meta: {salary:""}},
      state: 'new',
      nameRules: [
        v => !!v || 'Field is required'
      ],
    }),
    watch: {
        show(v) {
          v?this.show=true:this.show=false
          if(v){
            this.state = this.post_state
            this.myCompany()
            if(this.state == 'update') {
              this.post = this.data
            }
          } else {
            this.post = {post_meta: {salary:""}}
          }
        }
    },
    created() {
    },
    methods: {
      emitToParent (action) {
        this.$emit('DialogEvent', {action: action})
      },
      myCompany() {
      this.$http.get('company/my_company').then(response => {  
        console.log(response.data)
           if(response.data.status) {
              this.company = response.data.companies[0]
              this.post.company_id = this.company.id
              this.post.post_meta.company = this.company.name
              this.post.post_meta.company_address = this.company.address
           }
       }).catch(e => {
       console.log(e)
       })
    },
      SavePost() {
        if (this.$refs.form.validate()) {
          this.loading = true
            this.Post()
       }
      },
      Post(){
        console.log(this.post)
      let method = 'post/new'
      if(this.state == 'update') {
         method = 'post/update'
      }
      this.post.type= "job"
        console.log(this.post)

        this.$http.post(method, this.post).then(response => {  
              console.log(response.data)
              this.loading = false
            response.data.status? this.VA_ALERT('success', response.data.message): this.VA_ALERT('error', response.data.message)
            this.  emitToParent ("close")
        }).catch(e => {
        console.log(e)
        })
        }
      
    },
  }
  
  </script> 
