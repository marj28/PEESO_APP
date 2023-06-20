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
                        <v-data-table @click:row="selectRow" :headers="headers" :items="data"  :search="search"
                            >
                            <template v-slot:top>
                    
                            </template>
                            
                        <!--     <template v-slot:item="{ item }">
                                <tr  @click="passData">
                                    <td>
                                        <v-checkbox v-model="selectedItems" :value="item" @click="passData"></v-checkbox>
                                    </td>
                                    <td @click="passData">{{ item.name }}</td>
                                    <td @click="passData">{{ item.contact }}</td>

                                </tr>
                            </template>
 -->

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
                                        <v-text-field v-model="Text_fullname" label="Full Name:" readonly></v-text-field>
                                        <v-text-field v-model="Text_dateofbirth" label="Date of Birth:" readonly></v-text-field>
                                        <v-text-field v-model="Text_age"  label="Age:" readonly></v-text-field>
                                        <v-text-field  v-model="Text_CivilStatus" label="Civil Status:" readonly></v-text-field>
                                        <v-text-field  v-model="Text_Sex" label="Sex:" readonly></v-text-field>
                                        <v-text-field  v-model="Text_Religion" label="Religion:" readonly></v-text-field>
                                        <v-text-field  v-model="Text_Disability" label="Disabity:" readonly></v-text-field>

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

            Text_fullname:'',
            Text_dateofbirth:'',
            Text_age:'',    
            Text_CivilStatus:'',
            Text_Sex:'',
            Text_Religion:'',
            Text_Disability:'',

            headers: [
                { text: "Select", value: "select", sortable: false },
                { text: "Name", value: "name" },
                { text: "Contact", value: "contact" },

            ],
            data: [
                { 

                id: 1, 
                name: "Joemarie Rendon", 
                Ethnicgroup: 'Kamayo',
                Dateofbirth: 'July 27,1995',
                Address:'Magatos Asuncion DDN',
                Age:'27',
                contact: '09123456789',
                CivilStatus: 'Married',    
                Email: 'joemarierendon@gmail.com',
                Sex:'Male',
                TypeofID:'Drivers License',
                Religion:'Baptist',
                SSS: '2234-4213-5135',
                Disability:'None',
                Tin:'4421-4421-512',
                
                EmployementStatus:'Employed',
                formerofw:'Taiwan',
                EmployementType:'Full Time',
                Four_pesbeneficiary:'Yes',
                peslaattendance:'Yes',
                firsttimejobseekers:'Yes'
            
                },

    { 

id: 1, 
name: "Jason Place Holder", 
Ethnicgroup: 'Mandaya',
Dateofbirth: 'June 27,2000',
Address:'America Tagum City',
Age:'15',
contact: '09123456789',
CivilStatus: 'Single',    
Email: 'jason@gmail.com',
Sex:'Female',
TypeofID:'Drivers License',
Religion:'Chatolic',
SSS: '2234-4213-5135',
Disability:'None',
Tin:'4421-4421-512',

EmployementStatus:'Self-Employed',
formerofw:'India',
EmployementType:'Part Time',
Four_pesbeneficiary:'No',
peslaattendance:'No',
firsttimejobseekers:'No'

},

{ 

id: 1, 
name: "Pablo Escobar", 
Ethnicgroup: 'Bisaya',
Dateofbirth: 'December 15,1995',
Address:'Apokon Tagum City',
Age:'23',
contact: '094894651',
CivilStatus: 'Married',    
Email: 'Pablo123@gmail.com',
Sex:'Male',
TypeofID:'LET License',
Religion:'Jehovas withness',
SSS: '2234-4213-5135',
Disability:'None',
Tin:'4421-4421-512',

EmployementStatus:'Un-Employed',
formerofw:'Ameria',
EmployementType:'Full Time',
Four_pesbeneficiary:'Yes',
peslaattendance:'Yes',
firsttimejobseekers:'Yes'

},

{ 

id: 1, 
name: "Ned Armstrong", 
Ethnicgroup: 'Bozanian',
Dateofbirth: 'February 15,1885',
Address:'Capital City of Bozan',
Age:'53',
contact: '094894651',
CivilStatus: 'Married',    
Email: 'armstrong123@gmail.com',
Sex:'Male',
TypeofID:'Hunter License',
Religion:'Kulto',
SSS: '2234-4213-5135',
Disability:'loss of vision',
Tin:'4421-4421-512',

EmployementStatus:'Un-Employed',
formerofw:'Philippines',
EmployementType:'Full Time',
Four_pesbeneficiary:'Yes',
peslaattendance:'Yes',
firsttimejobseekers:'Yes'

},

{ 

id: 1, 
name: "Pablo Escobar", 
Ethnicgroup: 'Mexicano',
Dateofbirth: 'September 2,1995',
Address:'Capital City of Mexico',
Age:'45',
contact: '094894651',
CivilStatus: 'Single',    
Email: 'escobar123@gmail.com',
Sex:'Male',
TypeofID:'License To Kill',
Religion:'Kulto 45',
SSS: '22441-5531-3341',
Disability:'memory loss',
Tin:'6657-5553-7778',

EmployementStatus:'Self-Employed',
formerofw:'Manila ',
EmployementType:'Full Time',
Four_pesbeneficiary:'Yes',
peslaattendance:'Yes',
firsttimejobseekers:'Yes'

},


            ],
          /*   selectedItems: [],
            textField1: "",
            textField2: "",
            textField3: "", */
        };
    },
    methods: {
        selectRow(item) {
      this.Text_fullname = item.name; // Assign the clicked row's name to selectedRowData
      this.Text_dateofbirth = item.Dateofbirth;
      this.Text_age = item.Age;
      this.Text_CivilStatus = item.CivilStatus;
      this.Text_Sex = item.Sex;
      this.Text_Religion = item.Religion;
      this.Text_Disability = item.Disability;
    },

    
      /*   passData() {
            if (this.selectedItems.length > 0) {
                const selectedItem = this.selectedItems[0];
                this.textField1 = selectedItem.name;
                this.textField2 = selectedItem.contact;

            }
        }, */
    },
};
</script>
  