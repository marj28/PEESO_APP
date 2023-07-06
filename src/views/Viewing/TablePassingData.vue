
<template>
  <div>
    <v-container class="bg-surface-variant">
      <div class="pa-4 text-end">
        <v-btn
          class="text-none primary"
          min-width="92"
          rounded
          variant="outlined"
          @click="goBack"
        >
        <v-icon>
            mdi-arrow-left
        </v-icon>
          Back
        </v-btn>
      </div>
      <!-- <router-link to="JobDetails">
      <button>Back</button>
    </router-link> -->
      <v-row>
        <v-col cols="12" md="5">
          <v-card class="pa-2">
            <v-sheet class="pa-2 ma-2">
              <!-- <v-btn color="primary" @click="selectAllItems">Select All</v-btn> -->
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
                outlined
                rounded
                dense
                style="margin-left: 50%; margin-bottom: 5%"
              ></v-text-field>

            
              <v-data-table
                :headers="tableHeaders"
                :items="tableData"
                item-key="id"
                :search="search"
                :selectable="true"
                v-model="selectedItems"
                >.

                
                <template v-slot:item="{ item }">
                  <tr style="cursor: pointer">
                    <td>
                      <v-checkbox
                        v-model="selectedItems"
                        :value="item"
                      ></v-checkbox>
                    </td>

                    <td @click="passData(item)">{{ item.name }}</td>
                    <td @click="passData(item)">{{ item.contact }}</td>
                    <td></td>
                  </tr>
                </template>

                <template slot="item.switch1" slot-scope="{ item }">
                  <v-checkbox
                    v-model="item.switch1"
                    color="black"
                    dense
                  ></v-checkbox>
                </template>
              </v-data-table>
              <v-spacer></v-spacer>
              <v-btn color="primary">Send invite</v-btn>
            </v-sheet>
          </v-card>
        </v-col>
        <v-col cols="12" md="7">
          <v-card class="bg-surface-variant pa-2">
            <h2 class="ma-6 mb-n2 green--text">PERSONAL INFORMATION</h2>
            <v-divider
              class="ml-6 mr-6 mt-2 border-opacity-100"
              :thickness="20"
            ></v-divider>
            <v-row no-gutters>
              <v-col cols="12" md="6">
                <v-sheet class="pa-2 ma-2">
                  <v-sheet class="pa-2 ma-2 mb-n12">
                    <p>Name: {{ nameTextField }}</p>
                    <p>Date of Birth:</p>
                    <p>Age:</p>
                    <p>Civil Status:</p>
                    <p>Sex:</p>
                    <p>Religion:</p>
                    <p>Disabity:</p>
                  </v-sheet>
                </v-sheet>
              </v-col>
              <v-col cols="12" md="6">
                <v-sheet class="pa-2 ma-2">
                  <v-sheet class="pa-2 ma-2">
                    <p>Ethnic Group:</p>
                    <p>Address:</p>
                    <p>Contact No.: {{ contactTextField }}</p>
                    <p>Email:</p>
                    <p>Type of ID:</p>
                    <p>SSS:</p>
                    <p>TIN:</p>
                  </v-sheet>
                </v-sheet>
              </v-col>
            </v-row>

            <h2 class="ml-6 green--text">EMPLOYMENT STATUS</h2>
            <v-divider
              class="ml-6 mr-6 mt-2 border-opacity-100"
              :thickness="20"
            ></v-divider>
            <v-row no-gutters>
              <v-col cols="12" md="6">
                <v-sheet class="pa-2 ma-2">
                  <v-sheet class="pa-2 ma-2 mb-n12">
                    <p>Employment Status: {{ Text_EmployementStatus }}</p>
                    <p>Employment Type:</p>
                    <p>PESLA Attendance:</p>
                  </v-sheet>
                </v-sheet>
              </v-col>
              <v-col order="12">
                <v-sheet class="pa-2 ma-2">
                  <v-sheet class="pa-2 ma-2">
                    <p>Former OFW: {{ Text_formerofw }}</p>
                    <p>4ps Beneficiary:</p>
                    <p>First Time Job Seeker:</p>
                  </v-sheet>
                </v-sheet>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      selectedId: -1,
      search: "",
      tableHeaders: [
        { text: "Select", value: "select", sortable: false },
        { text: "Name", value: "name", sortable: false },
        { text: "Contact", value: "contact", sortable: false },
      ],
      tableData: [
        { id: 1, name: "Allan", contact: "09123456789" },
        { id: 2, name: "Anne", contact: "09123456789" },
        { id: 3, name: "Berto", contact: "09123456789" },
        { id: 4, name: "Earl", contact: "09123456789" },
        { id: 5, name: "Charlotte", contact: "09123456789" },

        // Add more items as needed
      ],
      selectedItems: [],
      nameTextField: "",
      contactTextField: "",
      emailTextField: "",
    };
  },
  methods: {
    goBack() {
    this.$router.go(-1);
  },
    passData(item) {
      this.nameTextField = item.name;
      this.contactTextField = item.contact;
    },
    selectAllItems() {
      if (this.selectedItems.length === this.tableData.length) {
        // If all items are already selected, clear the selection
        this.selectedItems = [];
      } else {
        // Select all items
        this.selectedItems = [...this.tableData];
      }
    },
  },
};
</script>
  
<!-- <style>
tr.v-data-table__selected {
  background: #4960d6c0 !important;
}
</style> -->

