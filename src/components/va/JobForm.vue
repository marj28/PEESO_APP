<template>
    <v-dialog
      v-model="dailog"
     fullscreen
      persistent
    >
      <v-card>
        <v-card-title
          class="text-h6"
          dense
        >
          <v-icon left>
            mdi-file-document-edit
          </v-icon> JOB DETAILS
          <v-spacer />
         
        </v-card-title>
        <v-divider />
        <v-card-text class="mt-4">
          <p class="font-weight-bold">
            Company: {{ company.name }} 
          </p>
          <p class="font-weight-bold">
            Address: {{ company.address }} 
          </p>
          <v-form  
            ref="form"
            v-model="valid"
            lazy-validation
          >
                     <v-text-field 
                       v-model="post.title"
                        outlined
                        class="mb-2"
                        prepend-inner-icon="mdi-office-building-marker-outline"
                        dense 
                        :rules="nameRules"
                        required
                        label="Job Title"/>
                        <v-text-field 
                        v-model="post.post_meta"
                        outlined
                        class="mb-2"
                        :rules="nameRules"
                        required
                        prepend-inner-icon="mdi-account-cash"
                        dense 
                        label="Expected Salary"/>
                        <p>
                 <v-icon left color="success">mdi-account-hard-hat</v-icon> Job Description
                </p> 
                  <div  class="mb-2">
                    <v-tiptap v-model="post.content"/>
                  </div>
                  <v-text-field 
                        v-model="post.tags"
                        outlined
                        class="mb-2"
                        prepend-inner-icon="mdi-tag-search"
                        dense 
                        hint="Separated by comma"
                        label="Add Tags"/>
            </v-form>   
        </v-card-text>
        <v-card-actions>
            <v-btn
            color="warning"
            dense
            @click="emitToParent('close')"
          >
            close
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            color="success"
            :loading="loading"
            dense
            @click="SavePost()"
          >
          {{state == 'update'?"Save":'Post'}}
          </v-btn>
        </v-card-actions>
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
        loading: false,
        valid: true,
        dailog: false,
        company: {},
        post: {post_meta: {salary:""}},
        state: 'new',
        nameRules: [
          v => !!v || 'Field is required'
        ],
      }),
      watch: {
          show(v) {
            v?this.dailog=true:this.dailog=false
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
  