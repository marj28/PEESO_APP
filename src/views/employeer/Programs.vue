<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        PROGRAM LIST
      </v-col>
    </v-row>
    <v-row class="program-button">
      <v-col>
        <v-card color="accent" dark style="height: 100px;">
          <v-card-text class="text-center" @click="popupform = true, state = 'new', post = {}" style="height: 100px;">
            <div style="margin-top: 20px;"><v-icon large left>mdi-plus-circle</v-icon> <span
                style="font-size: 20px;color: black;">POST PROGRAM</span></div>
          </v-card-text>
        </v-card>
      </v-col>



      <!-- <template v-for="(item, index) in posts">
        <v-col cols="4" :key="index + 'post'">
          <v-card>
            <v-card-text class="text-center">
              <span class="font-weight-bold text-h6">{{ item.title }}</span>

            </v-card-text>
            <v-card-actions dense>
              <span class="text-caption text-info">{{ item.status }}</span>
              <v-spacer></v-spacer>
              <v-btn text x-small color="warning" @click="popupform = true, state = 'update', post = item"><v-icon left
                  small>mdi-pencil</v-icon> Edit</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </template> -->
      <!-- eslint-disable -->

    </v-row>
    <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line
      style="width: 40%; margin-left: 60%;" hide-details outlined></v-text-field>
    <v-data-table :headers="headers" :search="search" :items="desserts" sort-by="calories" class="elevation-1 m-9 w-90">
      <template v-slot:top>
        <v-card flat color="#FFFFFFF">
          <v-card-title class="white--black">STUDENT PROGRAMS
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details outlined
              rounded dark dense cols="6"></v-text-field>
            <v-divider class="mx-4" vertical inset dark></v-divider>
            <v-dialog v-model="dialog" max-width="500px">
              <!-- <template v-slot:activator="{ on, attrs }">
                <v-btn color="success" dark class="mt-1" v-bind="attrs" v-on="on">
                  <v-icon> mdi-plus </v-icon> NEW PROGRAM
                </v-btn>
              </template> -->
              <v-card>
                <v-card-title>
                  <span class="text-h5">{{ formTitle }}</span>
                </v-card-title>
                <v-divider color="success"></v-divider>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="12" md="12">
                        <v-text-field v-model="editedItem.program_name" label="Program Name" color="success" outlined
                          required dense></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="12" md="12">
                        <v-text-field v-model="editedItem.offering_company" label="Offering Company" color="success"
                          outlined dense class="mt-n8"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field v-model="editedItem.dateoffiling" label="Date of Filing" color="success" outlined
                          dense class="mt-n8" type="date"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field v-model="editedItem.endoffiling" label="End of Filing" color="success" outlined
                          dense class="mt-n8" type="date"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="12" md="12">
                        <v-text-field v-model="editedItem.applicant_count" label="Applicant Count" color="success"
                          outlined dense class="mt-n8" type="number"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="12" md="12">
                        <v-textarea v-model="editedItem.program_description" label="Program Description" color="success"
                          outlined dense auto-grow clearable class="mt-n8 mb-n12"></v-textarea>
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
          </v-card-title>


          <v-dialog v-model="dialog1" max-width="500px">
            <v-card>
              <v-card-title>
                <span class="text-h5">VIEW PROGRAM</span>
                <v-spacer></v-spacer>
                <v-btn @click="(dialog = true), (dialog1 = false)" color="warning" icon small
                  class="mt-2"><v-icon>mdi-pencil</v-icon> </v-btn>
              </v-card-title>
              <v-divider color="success"></v-divider>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="12" md="12">
                      <b class="green--text">Program Name:</b> {{ editedItem.program_name }}
                    </v-col>
                    <v-col cols="12" sm="12" md="12">
                      <b class="green--text">Offering Company:</b> {{ editedItem.offering_company }}
                    </v-col>
                    <v-col cols="12" sm="12" md="12">
                      <b class="green--text">Date of Filing:</b> {{ editedItem.dateoffiling }}
                    </v-col>
                    <v-col cols="12" sm="12" md="12">
                      <b class="green--text">End of Filing:</b> {{ editedItem.endoffiling }}
                    </v-col>
                    <v-col cols="12" sm="12" md="12">
                      <b class="green--text">Applicant Count:</b> {{ editedItem.applicant_count }}
                    </v-col>
                    <v-col cols="12" sm="12" md="12" class="mb-n6">
                      <b class="green--text">Program Description:</b> {{ editedItem.program_description }}
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions class="mt-n6">
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" medium dark @click="dialog1 = false">
                  Exit
                </v-btn>

              </v-card-actions>
            </v-card>
          </v-dialog>


          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="">Are you sure you want to delete this Program?</v-card-title>
              <v-divider color="success"></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn color="orange darken-1" text @click="closeDelete">Cancel</v-btn>
                <v-btn color="green darken-1" text @click="deleteItemConfirm">OK</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-card>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="viewItem(item)" color="success">
          mdi-eye
        </v-icon>

        <v-icon small @click="deleteItem(item)" color="error"> mdi-delete </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize"> Reset </v-btn>
      </template>
    </v-data-table>
    <va-program-form :show="popupform" :data="post" :post_state="state" @DialogEvent="formEv" />
  </v-container>
</template>
<script>
import {
  mapMutations
} from 'vuex'
export default {
  name: 'EmployeerPage',
  data: () => ({
    state: "new",
    post: {},
    posts: [],
    popupform: false,
    dialog: false,
    dialog1: false,
    dialogDelete: false,
    search: "",
    headers: [
      {
        text: "PROGRAM NAME",
        align: "start",
        sortable: false,
        value: "program_name",
      },
      { text: "OFFERING COMPANY", value: "offering_company", sortable: false, },
      { text: "DATE OF FILING", value: "dateoffiling" },
      { text: "END OF FILING", value: "endoffiling" },
      { text: "APPLICANT COUNT", value: "applicant_count" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      program_name: "",
      offering_company: "",
      dateoffiling: "",
      endoffiling: "",
      applicant_count: "",
      program_description: "",
    },
    defaultItem: {
      program_name: "",
      offering_company: "",
      dateoffiling: "",
      endoffiling: "",
      applicant_count: "",
      program_description: "",
    },
  }),
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Program" : "Edit Program";
    },
  },



  created() {
    if (this.$session.exists()) {
      this.$http.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
      this.setLoggedIn(true)
      this.setAppBar(true)
      this.myJobs()
    }

  },




  methods: {

    initialize() {
      this.desserts = [
        {
          program_name: "DOST Scholarship",
          offering_company: "Department of Science and Technology",
          dateoffiling: "February 21, 2023",
          endoffiling: "March 6, 2023",
          applicant_count: "50",
          program_description:
            "Lorem ipsum dolor sit amet. Et internos libero non quos animi et eaque iste sed suscipit consequuntur et illum aliquid et quibusdam nostrum. Est quasi sint 33 aperiam quis eum aliquam quod rem quia repellendus.",
        },
        {
          program_name: "TESDA Scholarship",
          offering_company: "Technical Education and Skills Development Authority",
          dateoffiling: "February 15, 2023",
          endoffiling: "March 5, 2023",
          applicant_count: "250",
          program_description:
            "Lorem ipsum dolor sit amet. Et internos libero non quos animi et eaque iste sed suscipit consequuntur et illum aliquid et quibusdam nostrum. Est quasi sint 33 aperiam quis eum aliquam quod rem quia repellendus.",
        },
      ];
    },
    viewItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog1 = true;
    },
    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    },
  },


  ...mapMutations(['setLoggedIn', 'setAppBar', 'setMonthDailySales']),
  imageUrl(data) {
    this.company.medias.logo = data
  },
  formEv() {
    this.popupform = false
    this.myJobs()
  },

  myJobs() {
    this.$http.post('post/my_post', { type: 'program' }).then(response => {
      response.data.status ? this.posts = response.data.posts : this.posts = []
    }).catch(e => {
      console.log(e)
    })

  },
}
</script>
<style>
.program-button {
  display: block;
  width: 20%;
  height: 100px;
  margin-bottom: 40px;
  cursor: pointer;
}

.program-button:hover {
  opacity: .5;
}

.program-button:active {
  opacity: 100%;
}
</style>