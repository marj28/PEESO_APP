
<template>
    <div>
        <v-container class="bg-surface-variant">
            <v-row no-gutters>
                <v-col order="12" style="border-style: solid; height: 60%; border-radius: 13px;">
                    <v-sheet class="pa-2 ma-2">
                        <!-- <v-btn color="primary" @click="selectAllItems">Select All</v-btn> -->
                        <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details
                            style="margin-left: 50%;margin-bottom: 5%;"></v-text-field>

                        <v-data-table :headers="tableHeaders" :items="tableData" item-key="id" :search="search"
                            :selectable="true" v-model="selectedItems">.

                            <template v-slot:item="{ item }" >
                                <tr style="cursor: pointer;">
                                    <td>
                                        <v-checkbox v-model="selectedItems" :value="item"></v-checkbox>
                                    </td>

                                    <td @click="passData(item)">{{ item.name }}</td>
                                    <td @click="passData(item)">{{ item.contact }}</td>
                                    <td>

                                    </td>
                                </tr>
                            </template>
                        </v-data-table>
                        <v-spacer></v-spacer>
                        <v-btn color="primary">Send invite</v-btn>
                    </v-sheet>
                </v-col>
                <v-col order="12" style="border-style: solid; margin-left: 2%; border-radius: 13px">


                    <v-container class="bg-surface-variant"> <span
                            style="font-size: 35px;font-weight: 500; margin-left: 2%;">Personal Information</span>
                        <v-row no-gutters>

                            <v-col order="12">
                                <v-sheet class="pa-2 ma-2">
                                    <v-sheet class="pa-2 ma-2">
                                        <v-text-field v-model="nameTextField" label="Name" readonly></v-text-field>
                                        <v-text-field label="Date of Birth:" readonly></v-text-field>
                                        <v-text-field label="Age:" readonly></v-text-field>
                                        <v-text-field label="Civil Status:" readonly></v-text-field>
                                        <v-text-field label="Sex:" readonly></v-text-field>
                                        <v-text-field label="Religion:" readonly></v-text-field>
                                        <v-text-field label="Disabity:" readonly></v-text-field>

                                    </v-sheet>
                                </v-sheet>
                            </v-col>
                            <v-col order="12">
                                <v-sheet class="pa-2 ma-2" style="margin-top: 6%;">
                                    <v-text-field label="Ethnic Group:" readonly></v-text-field>
                                    <v-text-field label="Address:" readonly></v-text-field>
                                    <v-text-field v-model="contactTextField" label="Contact No.:" readonly></v-text-field>
                                    <v-text-field label="Email:" readonly></v-text-field>
                                    <v-text-field label="Type of ID:" readonly></v-text-field>
                                    <v-text-field label="SSS:" readonly></v-text-field>
                                    <v-text-field label="Tin:" readonly></v-text-field>
                                </v-sheet>
                            </v-col>
                        </v-row>
                    </v-container>
                    <span style="font-size: 35px;font-weight: 500; margin-left: 2%;">Employment Status</span>
                    <v-container class="bg-surface-variant">
                        <v-row no-gutters>

                            <v-col order="12">
                                <v-sheet class="pa-2 ma-2">
                                    <v-sheet class="pa-2 ma-2">
                                        <v-text-field label="Employment Status:" readonly></v-text-field>
                                        <v-text-field label="Employment Type:" readonly></v-text-field>
                                        <v-text-field label="PESLA Attendance:" readonly></v-text-field>
                                    </v-sheet>
                                </v-sheet>
                            </v-col>
                            <v-col order="12">
                                <v-sheet class="pa-2 ma-2" style="margin-top: 6%;">
                                    <v-text-field label="Former OFW:" readonly></v-text-field>
                                    <v-text-field label="4ps Beneficiary:" readonly></v-text-field>
                                    <v-text-field label="First Time Job Seeker:" readonly></v-text-field>
                                </v-sheet>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-col>
            </v-row>
        </v-container>



    </div>
</template>
  
<script>
export default {
    data() {
        return {
            search: '',
            tableHeaders: [

                { text: "Select", value: "select", sortable: false },
                { text: "Name", value: "name" },
                { text: "Contact", value: "contact" },
            ],
            tableData: [
                { id: 1, name: "Allan", contact: '09123456789' },
                { id: 2, name: "Anne", contact: '09123456789' },
                { id: 3, name: "Berto", contact: '09123456789' },
                { id: 4, name: "Earl", contact: '09123456789' },
                { id: 5, name: "Charlotte", contact: '09123456789' },

                // Add more items as needed
            ],
            selectedItems: [],
            nameTextField: "",
            contactTextField: "",
            emailTextField: "",
        };
    },
    methods: {
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
  