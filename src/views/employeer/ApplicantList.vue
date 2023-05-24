<template>
  <div>
    <widget-employer-card />
    <v-row class="pa-2">
      <v-col lg="12" cols="12" md="12">
        <v-card color="primary" class="white--text">
          <v-card-title class="subtitle-2">
            APPLICANT LIST
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
              outlined
              rounded
              dark
              dense
            ></v-text-field>
          </v-card-title>
          <v-card-text>
            <v-data-table
              :headers="headers"
              :items="desserts"
              :search="search"
              @click:row="editItem"
              class="btn-hover elevation-1 pa-4"
            >
              <template v-slot:top>
                <v-dialog v-model="dialog" max-width="550px" tile>
                  <v-card>
                    <v-card-title>
                      <span class="text-h5">View Applicant</span>
                    </v-card-title>
                    <v-divider color="success"></v-divider>

                    <v-card-text>
                      <v-row>
                        <v-col cols="12" sm="12" md="12">
                          <h4 class="green--text">Applicant Details</h4>
                          <p>
                            {{ editedItem.firstname }} {{ editedItem.lastname }}
                          </p>
                          <p>{{ editedItem.contact_number }}</p>
                        </v-col>
                        <v-col cols="12" sm="12" md="12">
                          <h4 class="green--text mt-n3">Job Application</h4>
                          <p class="mb-12">
                            {{ editedItem.jobpostingapplied }}
                          </p>
                        </v-col>
                        <v-col cols="12" sm="12" md="12">
                          <h4 class="green--text mt-n12">Additional Details</h4>
                          <p class="mb-12">{{ editedItem.details }}</p>
                        </v-col>
                      </v-row>
                    </v-card-text>

                    <v-card-actions class="mt-n12">
                      <v-spacer></v-spacer>
                      <v-btn color="orange darken-1" text @click="close">
                        Back
                      </v-btn>
                      <v-btn
                        color="green darken-1"
                        dark
                        @click="hiredApplicants(editedItem)"
                        v-if="editedItem.remark !== 'Canceled'"
                      >
                        Hire
                      </v-btn>
                      <v-btn
                        color="green darken-1"
                        dark
                        @click="deleteItem(editedItem)"
                        v-if="editedItem.remark == 'Canceled'"
                      >
                        Remove
                      </v-btn>
                      <!-- <template slot="item.actions" slot-scope="props">
                          <v-btn color="green" dark @click="() => sinagmembro(props.item)">
                            Hire
                          </v-btn>
                        </template> -->
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <v-dialog v-model="dialogDelete" max-width="500px">
                  <v-card>
                    <v-card-title class=""
                      >Removing the Application of {{ editedItem.firstname }}
                      {{ editedItem.lastname }}?</v-card-title
                    >
                    <v-divider color="success"></v-divider>
                    <v-card-actions>
                      <v-spacer></v-spacer>

                      <v-btn color="orange darken-1" text @click="closeDelete"
                        >Cancel</v-btn
                      >
                      <v-btn
                        color="green darken-1"
                        text
                        @click="deleteItemConfirm"
                        >OK</v-btn
                      >
                      <v-spacer></v-spacer>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
      <!-- <v-col md="6" cols="12">
        <v-card class="wrapper" color="#1B5E20">
          <v-card-title class="subtitle-2">
            HIRED APPLICANTS LIST
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="hiredsearch"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
              outlined
              dark
              rounded
              dense
            ></v-text-field>
          </v-card-title>
          <v-card-text>
            <v-data-table
              :headers="hireheaders"
              :items="hired"
              :items-per-page="20"
              :search="hiredsearch"
              class="btn-hover elevation-1 pa-4"
            >
              <template slot="item.remove" slot-scope="remove">
                <v-btn
                  text
                  color="red"
                  dark
                  @click="() => removeHired(remove.item)"
                >
                  <v-icon> mdi-close-circle-outline </v-icon>
                </v-btn>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col> -->
    </v-row>
  </div>
</template>
  <script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      editedIndex: 0,
      dialog_for_input_hours: false,
      applicantlist: false,
      dialog: false,
      dialog1: false,
      dialogDelete: false,
      dialog_sample: false,
      hireheaders: [
        {
          text: "First Name",
          align: "left",
          sortable: false,
          value: "firstname",
        },
        {
          text: "Last Name",
          align: "left",
          sortable: false,
          value: "lastname",
        },
        {
          text: "Contact Number",
          align: "center",
          sortable: false,
          value: "contact_number",
        },
        {
          text: "Action",
          align: "center",
          sortable: false,
          value: "remove",
        },
      ],
      hired: [],
      editedItem: [],
      applicants: [],
      selected: [],
      search: "",
      hiredsearch: "",
      headers: [
        {
          text: "First Name",
          align: "left",
          sortable: false,
          value: "firstname",
        },
        {
          text: "Last Name",
          align: "left",
          sortable: false,
          value: "lastname",
        },
        {
          text: "Job Posting Applied",
          align: "left",
          sortable: false,
          value: "jobpostingapplied",
        },
        {
          text: "Contact Number",
          align: "left",
          sortable: false,
          value: "contact_number",
        },
        {
          text: "Remarks",
          align: "left",
          sortable: false,
          value: "remark",
        },
      ],

      desserts: [
        {
          firstname: "Joemarie",
          lastname: "Rendon",
          jobpostingapplied: "Computer Programmer",
          contact_number: "09123456789",
          remark: "Canceled",
          details:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo eget magna fermentum. Eu feugiat pretium nibh ipsum consequat. Commodo sed egestas egestas fringilla. Aliquet bibendum enim facilisis gravida neque convallis. Sem integer vitae justo eget magna fermentum. Orci ac auctor augue mauris. Erat nam at lectus urna duis. Imperdiet massa tincidunt nunc pulvinar sapien. Sed sed risus pretium quam vulputate dignissim suspendisse in. Lectus arcu bibendum at varius vel. Cursus sit amet dictum sit. Sagittis purus sit amet volutpat consequat mauris nunc congue.",
        },
        {
          firstname: "Rey",
          lastname: "Alcala",
          jobpostingapplied: "Computer Programmer",
          contact_number: "09123456789",
          remark: "",
          details:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo eget magna fermentum. Eu feugiat pretium nibh ipsum consequat. Commodo sed egestas egestas fringilla. Aliquet bibendum enim facilisis gravida neque convallis. Sem integer vitae justo eget magna fermentum. Orci ac auctor augue mauris. Erat nam at lectus urna duis. Imperdiet massa tincidunt nunc pulvinar sapien. Sed sed risus pretium quam vulputate dignissim suspendisse in. Lectus arcu bibendum at varius vel. Cursus sit amet dictum sit. Sagittis purus sit amet volutpat consequat mauris nunc congue.",
        },
        {
          firstname: "Honey",
          lastname: "Curay",
          jobpostingapplied: "Computer Programmer",
          contact_number: "09123456789",
          remark: "",
          details:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo eget magna fermentum. Eu feugiat pretium nibh ipsum consequat. Commodo sed egestas egestas fringilla. Aliquet bibendum enim facilisis gravida neque convallis. Sem integer vitae justo eget magna fermentum. Orci ac auctor augue mauris. Erat nam at lectus urna duis. Imperdiet massa tincidunt nunc pulvinar sapien. Sed sed risus pretium quam vulputate dignissim suspendisse in. Lectus arcu bibendum at varius vel. Cursus sit amet dictum sit. Sagittis purus sit amet volutpat consequat mauris nunc congue.",
        },

        {
          firstname: "Neil",
          lastname: "Roble",
          jobpostingapplied: "Computer Programmer",
          contact_number: "09123456789",
          remark: "Canceled",
          details:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut eu sem integer vitae justo eget magna fermentum. Eu feugiat pretium nibh ipsum consequat. Commodo sed egestas egestas fringilla. Aliquet bibendum enim facilisis gravida neque convallis. Sem integer vitae justo eget magna fermentum. Orci ac auctor augue mauris. Erat nam at lectus urna duis. Imperdiet massa tincidunt nunc pulvinar sapien. Sed sed risus pretium quam vulputate dignissim suspendisse in. Lectus arcu bibendum at varius vel. Cursus sit amet dictum sit. Sagittis purus sit amet volutpat consequat mauris nunc congue.",
        },
      ],
    };
  },

  // computed: {
  //   formTitle() {
  //     return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
  //   },
  // },
  methods: {
    // viewApplicant(editItem){

    // },
    hiredApplicants(item) {
      this.hired.push({
        firstname: item.firstname,
        lastname: item.lastname,
        contact_number: item.contact_number,
        jobpostingapplied: item.jobpostingapplied,
        remark: item.remark,
      });
      this.desserts = this.desserts.filter(
        (nem) => nem.firstname !== item.firstname
      );
      this.dialog = false;
      console.log(item.firstname); // eslint-disable-line no-console
      console.log(this.selected); // eslint-disable-line no-console
      console.log("Na Hire Nani bai"); // eslint-disable-line no-console
    },
    removeHired(item) {
      this.desserts.push({
        firstname: item.firstname,
        lastname: item.lastname,
        contact_number: item.contact_number,
        jobpostingapplied: item.jobpostingapplied,
        remark: item.remark,
        hired: item.hired,
      });
      this.hired = this.hired.filter((nem) => nem.firstname !== item.firstname);
    },
    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
      console.log(this.editedItem); // eslint-disable-line no-console
    },
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.applicants[this.editedIndex], this.editedItem);
      } else {
        this.applicants.push(this.editedItem);
      }
      this.close();
    },
    deleteItem(item) {
      console.log(item.firstname);
      this.editedIndex = this.desserts.indexOf(item);
      console.log(this.editedIndex);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
      this.dialog = false;
    },

    deleteItemConfirm() {
      // this.desserts;
      this.desserts = this.desserts.filter(
        (e) => e.firstname !== this.editedItem.firstname
      );
      this.closeDelete();
    },
    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
  },
};
</script>
  
  
  <style scoped>
.v-text-field .v-input__control .v-input__slot .v-input__append-inner {
  margin-top: 5px !important;
}

.theme--light.v-icon {
  color: blue !important;
}

.v-input--selection-controls__ripple.green--text {
  color: blue !important;
}

.wrapper {
  box-shadow: 0 0 8px rgb(0, 0, 0);
}

.brgy-hover {
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin: 20px;
  text-align: center;
  border: none;
  background-size: 300% 100%;
  border-radius: 50px;
  moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
}

.brgy-hover:focus {
  outline: none;
}

.btn-hover.color-1 {
  /*  background-image: linear-gradient(to right, #186f94, #0e7e48,  #0c8a4d,  #078045);
   box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.644); */
}
</style>