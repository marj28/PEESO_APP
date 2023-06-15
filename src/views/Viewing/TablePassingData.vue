<!--  
<template>
    <div>
        <v-container class="bg-surface-variant">
            <v-row no-gutters>
                <v-col order="12" style="border-style: solid;border-width: 2px; border-radius: 13px;"> <v-toolbar flat>
                        <v-spacer></v-spacer> <v-btn color="primary" @click="moveToDestination">
                            Give schedule
                        </v-btn>
                    </v-toolbar>
                    <v-sheet class="pa-2 ma-2">
                        <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details
                            style="margin-left: 50%;margin-bottom: 5%;"></v-text-field>
                        <v-data-table :headers="sourceHeaders" :items="sourceData" item-key="id" :selectable="true"
                            :search="search" v-model="selectedItems">

                            <template v-slot:top>

                            </template>
                            <template v-slot:item="{ item }">
                                <tr>
                                    <td>
                                        <v-checkbox v-model="selectedItems" :value="item"></v-checkbox>
                                    </td>
                                    <td>{{ item.name }}</td>
                                    <td>{{ item.email }}</td>
                                    <td>{{ item.age }}</td>
                                    <td>{{ item.address }}</td>

                                </tr>
                            </template>
                        </v-data-table>
                    </v-sheet>
                </v-col>
                <v-col order="12" class="mt-16"
                    style="border-style: solid;border-width: 2px; border-radius: 13px; margin-left: 1.6%;">
                    <v-sheet class="pa-2 ma-2">
                        <v-data-table :headers="destinationHeaders" :items="destinationData" item-key="id">
                            <template v-slot:item="{ item }">
                                <tr>
                                    <td>{{ item.name }}</td>
                                    <td>{{ item.email }}</td>
                                    <td>{{ item.age }}</td>
                                    <td>{{ item.address }}</td>

                                </tr>
                            </template>
                        </v-data-table>
                    </v-sheet>
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
            sourceHeaders: [
                { text: "Select", value: "select", sortable: false },
                { text: 'Name', value: 'name' },
                { text: 'Contact No.', value: 'email' },
                { text: 'Age', value: 'age' },
                { text: 'Address', value: 'address' },

            ],
            sourceData: [
                { name: 'John Doe', email: '09123456789', age: '23', address: 'address1' },
                { name: 'Jane Smith', email: '09123456789', age: '24', address: 'address1' },
                { name: '  Smith', email: '09123456789', age: '25', address: 'address1' },
                { name: 'Jane  ', email: '09123456789', age: '25', address: 'address1' },
                { name: 'Albert  ', email: '09123456789', age: '25', address: 'address1' },
                { name: 'Anne', email: '09123456789', age: '25', address: 'address1' },

            ],
            destinationHeaders: [
                { text: 'Name', value: 'name' },
                { text: 'Contact No.', value: 'email' },
                { text: 'Age', value: 'age' },
                { text: 'Address', value: 'address' },

            ],
            destinationData: [],
            selectedItems: [],
        };
    },
    methods: {
        moveToDestination() {
            this.destinationData = this.destinationData.concat(this.selectedItems);
            this.sourceData = this.sourceData.filter(
                (item) => !this.selectedItems.includes(item)
            );
            this.selectedItems = [];
        },
    },
};
</script> -->

<!-- 
<template>
    <div>
        <v-data-table :headers="tableHeaders" :items="tableData" item-key="id" @click:row="selectTableRow"></v-data-table>

        <v-text-field v-model="selectedItemValue" label="Selected Item"></v-text-field>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            tableHeaders: [
                { text: "ID", value: "id" },
                { text: "Name", value: "name" },
                // Add more headers as needed
            ],
            tableData: [
                { id: 1, name: "Item 1" },
                { id: 2, name: "Item 2" },
                // Add more data rows as needed
            ],
            selectedItemValue: "",
        };
    },
    methods: {
        selectTableRow(item) {
            this.selectedItemValue = item.name;
        },
    },
};
</script> -->
  


<template>
    <div>
        <v-container class="bg-surface-variant">
            <v-row no-gutters>
                <v-col order="12" style="border-style: solid; height: 60%;">
                    <v-sheet class="pa-2 ma-2">
                        <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details
                            style="margin-left: 50%;margin-bottom: 5%;"></v-text-field>
                        <v-data-table :headers="headers" :items="data" item-key="id" :selectable="true" :search="search"
                            v-model="selectedItems">
                            <template v-slot:top>
                                <!-- <v-toolbar flat>
                    <v-btn color="primary" @click="passData">Pass Data</v-btn>
                </v-toolbar> -->
                            </template>
                            <template v-slot:item="{ item }">
                                <tr>
                                    <td>
                                        <v-checkbox v-model="selectedItems" :value="item" @click="passData"></v-checkbox>
                                    </td>
                                    <td @click="passData">{{ item.name }}</td>
                                    <td @click="passData">{{ item.contact }}</td>

                                </tr>
                            </template>
                        </v-data-table>
                        <v-btn color="primary" @click="passData">Send invite</v-btn>
                    </v-sheet>
                </v-col>
                <v-col order="12" style="border-style: solid; margin-left: 2%;">
                    <!-- <v-sheet class="pa-2 ma-2">
                        <v-text-field v-model="textField1" label="Full Name" readonly></v-text-field>
                        <v-text-field v-model="textField2" label="Text Field 2" readonly></v-text-field>
                    </v-sheet> -->

                    <v-container class="bg-surface-variant"> <span
                            style="font-size: 35px;font-weight: 500; margin-left: 2%;">Personal Information</span>
                        <v-row no-gutters>

                            <v-col order="12">
                                <v-sheet class="pa-2 ma-2">
                                    <v-sheet class="pa-2 ma-2">
                                        <v-text-field v-model="textField1" label="Full Name:" readonly></v-text-field>
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
                                    <v-text-field v-model="textField2" label="Contact No.:" readonly></v-text-field>
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
            headers: [
                { text: "Select", value: "select", sortable: false },
                { text: "Name", value: "name" },
                { text: "Contact", value: "contact" },

            ],
            data: [
                { id: 1, name: "Allan", contact: '09123456789' },
                { id: 2, name: "Anne", contact: '09123456789' },
                { id: 3, name: "Berto", contact: '09123456789' },
                { id: 4, name: "Earl", contact: '09123456789' },
                { id: 5, name: "Charlotte", contact: '09123456789' },

            ],
            selectedItems: [],
            textField1: "",
            textField2: "",
            textField3: "",
        };
    },
    methods: {
        passData() {
            if (this.selectedItems.length > 0) {
                const selectedItem = this.selectedItems[0];
                this.textField1 = selectedItem.name;
                this.textField2 = selectedItem.contact;

            }
        },
    },
};
</script>
  