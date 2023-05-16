<template>
  <v-dialog v-model="dailog" persistent max-width="500px">
    <v-card>
      <v-card-title>
        <span class="text-h5">{{ formTitle }}</span>
      </v-card-title>
      <v-divider color="success"></v-divider>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="12" md="12">
              <v-text-field   label="Program Name" color="success" outlined required
                dense></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="12">
              <v-text-field   label="Offering Company" color="success" outlined dense
                class="mt-n8"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-text-field   label="Date of Filing" color="success" outlined dense
                class="mt-n8" type="date"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-text-field  label="End of Filing" color="success" outlined dense
                class="mt-n8" type="date"></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="12">
              <v-text-field   label="Applicant Count" color="success" outlined dense
                class="mt-n8" type="number"></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="12">
              <v-textarea   label="Program Description" color="success" outlined
                dense auto-grow clearable class="mt-n8 mb-n12"></v-textarea>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="orange darken-1" text @click="close">
          Cancel
        </v-btn>
        <v-btn color="green darken-1" dark @click="save">
          Save
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
      default: () => { }
    },
  },
  data: () => ({
    loading: false,
    valid: true,
    dailog: false,
    company: {},
    post: { post_meta: { salary: "" } },
    state: 'new',
    nameRules: [
      v => !!v || 'Field is required'
    ],
  }),
  watch: {
    show(v) {
      v ? this.dailog = true : this.dailog = false
      if (v) {
        this.state = this.post_state
        this.myCompany()
        if (this.state == 'update') {
          this.post = this.data
        }
      } else {
        this.post = { post_meta: { salary: "" } }
      }
    }
  },
  created() {
  },
  methods: {
    emitToParent(action) {
      this.$emit('DialogEvent', { action: action })
    },
    myCompany() {
      this.$http.get('company/my_company').then(response => {
        console.log(response.data)
        if (response.data.status) {
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
    Post() {
      console.log(this.post)
      let method = 'post/new'
      if (this.state == 'update') {
        method = 'post/update'
      }
      this.post.type = "program"
      this.$http.post(method, this.post).then(response => {
        console.log(response.data)
        this.loading = false
        response.data.status ? this.VA_ALERT('success', response.data.message) : this.VA_ALERT('error', response.data.message)
        this.emitToParent("close")
      }).catch(e => {
        console.log(e)
      })
    }

  },
}
</script>
  