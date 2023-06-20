
<template>
    <div>
        <v-container class="bg-surface-variant">
            <v-row no-gutters>
                <v-col order="12" style="border-style: solid; height: 60%;">
                    <v-sheet class="pa-2 ma-2">
                        <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details
                            style="margin-left: 50%;margin-bottom: 5%;"></v-text-field>
                        <v-data-table @click:row="selectRow" item-key="name" single-select :headers="headers" :items="data"  :search="search"
                            >
                            <template v-slot:top>
                    
                            </template>
                            
                           <!--  <template v-slot:item="{ item }">
                                <tr  @click="passData">
                                    <td>
                                        <v-checkbox v-model="selectedItems" :value="item" ></v-checkbox>
                                    </td>
                                    <td @click="passData">{{ item.name }}</td>
                                    <td @click="passData">{{ item.contact }}</td>

                                </tr>
                            </template> -->

                            <template slot="item.switch1" slot-scope="{ item }">
                        <v-checkbox v-model="item.switch1" color="black" dense></v-checkbox>
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
                                    <v-text-field v-model="Text_EthnicGroup" label="Ethnic Group:" readonly></v-text-field>
                                    <v-text-field v-model="Text_Address"  label="Address:" readonly></v-text-field>
                                    <v-text-field v-model="Text_ContactNo" label="Contact No.:" readonly></v-text-field>
                                    <v-text-field v-model="Text_Email" label="Email:" readonly></v-text-field>
                                    <v-text-field v-model="Text_TypeofID" label="Type of ID:" readonly></v-text-field>
                                    <v-text-field v-model="Text_SSS" label="SSS:" readonly></v-text-field>
                                    <v-text-field  v-model="Text_TIN" label="Tin:" readonly></v-text-field>
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
                                        <v-text-field v-model="Text_EmployementStatus" label="Employment Status:" readonly></v-text-field>
                                        <v-text-field v-model="Text_EmployementType" label="Employment Type:" readonly></v-text-field>
                                        <v-text-field v-model="Text_peslaattendance" label="PESLA Attendance:" readonly></v-text-field>
                                    </v-sheet>
                                </v-sheet>
                            </v-col>
                            <v-col order="12">
                                <v-sheet class="pa-2 ma-2" style="margin-top: 6%;">
                                    <v-text-field v-model="Text_formerofw" label="Former OFW:" readonly></v-text-field>
                                    <v-text-field v-model="Text_Four_pesbeneficiary" label="4ps Beneficiary:" readonly></v-text-field>
                                    <v-text-field v-model="Text_firsttimejobseekers" label="First Time Job Seeker:" readonly></v-text-field>
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
            selectedId: -1,
            search: '',

            Text_fullname:'',
            Text_dateofbirth:'',
            Text_age:'',    
            Text_CivilStatus:'',
            Text_Sex:'',
            Text_Religion:'',
            Text_Disability:'',

            Text_EthnicGroup:'',
            Text_Address:'',
            Text_ContactNo:'',
            Text_Email:'',
            Text_TypeofID:'',
            Text_SSS:'',
            Text_TIN:'',

            Text_EmployementStatus:'',   
            Text_EmployementType:'',
            Text_peslaattendance:'',
            Text_formerofw:'',
            Text_Four_pesbeneficiary:'',
            Text_firsttimejobseekers:'',

            headers: [
                { text: "Select", value: "switch1", sortable: false },
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
Tin:'2242-2211-552',

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
SSS: '4452-552-7786',
Disability:'None',
Tin:'7754-7743-7783',

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
name: "Jograd Mahusay", 
Ethnicgroup: 'BIsaya',
Dateofbirth: 'April 5,1995',
Address:'Santol Tagum City',
Age:'33',
contact: '0954566',
CivilStatus: 'Marrie',    
Email: 'mahusay123@gmail.com',
Sex:'Male',
TypeofID:'Drivers License',
Religion:'Roman Chatolic',
SSS: '4451-33341-55536',
Disability:'memory loss',
Tin:'7742-8865-9986',

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

    rowClick: function (item, row) {      
      row.select(true);
      this.selectedId=item.name
    },

        selectRow: function (item,row) {

            row.select(true);
      this.selectedId=item.name


      this.Text_fullname = item.name; // Assign the clicked row's name to selectedRowData
      this.Text_dateofbirth = item.Dateofbirth;
      this.Text_age = item.Age;
      this.Text_CivilStatus = item.CivilStatus;
      this.Text_Sex = item.Sex;
      this.Text_Religion = item.Religion;
      this.Text_Disability = item.Disability;

      this.Text_EthnicGroup = item.Ethnicgroup; 
      this.Text_Address = item.Address;
      this.Text_ContactNo = item.contact;
      this.Text_Email = item.Email;
      this.Text_TypeofID = item.TypeofID;
      this.Text_SSS = item.SSS;   
      this.Text_TIN = item.Tin;   

      this.Text_EmployementStatus = item.EmployementStatus;
      this.Text_EmployementType = item.EmployementType;
      this.Text_peslaattendance = item.peslaattendance;
      this.Text_formerofw = item.formerofw;
      this.Text_Four_pesbeneficiary = item.Four_pesbeneficiary;
      this.Text_firsttimejobseekers = item.firsttimejobseekers;



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
  
<style>

tr.v-data-table__selected {
  background: #4960d6c0 !important;
}
</style>

