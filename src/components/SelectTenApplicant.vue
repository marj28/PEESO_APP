<!-- <template>
    <div>
        <v-text-field v-model="search" label="Search" @input="filterData" style="margin-left: 50%;"></v-text-field>
        <v-data-table :headers="headers" :items="filteredItems" class="elevation-1">
            <template v-slot:items="props">
                <tr @click="listdialog = true">
                    <td>{{ props.item.name }}</td>
                    <td @click="listdialog = true">{{ props.item.date }}</td>
                    <td @click="listdialog = true">{{ props.item.timef }}</td>
                    <td @click="listdialog = true">{{ props.item.timet }}</td>
                    <td @click="listdialog = true">{{ props.item.location }}</td>
                    <td @click="listdialog = true">{{ props.item.number }}</td>
                    <td>{{ props.item.actions }} </td>
                </tr>
            </template>
            <v-dialog v-model="listdialog" persistent max-width="60%">
                <v-card style="padding: 3%;">
                    asdasd
                    <v-spacer></v-spacer>
                    <v-btn color="warning darken-1" text @click="dialogschedule = false">
                        Cancel
                    </v-btn>
                    <v-btn color="primary" dark @click="dialogschedule = false">
                        Save
                    </v-btn>
                </v-card></v-dialog>
        </v-data-table>
        <div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            search: '',
            listdialog: false,
            items: [
                { name: 'Rey', date: '01/01/2023', timef: '1:00pm', timet: '5:00pm', location: 'City hall', number: '1234' },
                { name: 'Shesh', date: '01/01/2023', timef: '1:00pm', timet: '5:00pm', location: 'City hall', number: '123' },
                { name: 'Ray', date: '01/01/2023', timef: '1:00pm', timet: '5:00pm', location: 'City hall', number: '123' },
                { name: 'Ree', date: '01/01/2023', timef: '1:00pm', timet: '5:00pm', location: 'City hall', number: '123' },
                { name: 'Ree', date: '01/01/2023', timef: '1:00pm', timet: '5:00pm', location: 'City hall', number: '123' },
            ]
        };
    },
    computed: {
        filteredItems() {
            return this.items.filter(item => {
                return (item.name.toLowerCase().includes(this.search.toLowerCase()) ||
                    item.date.toLowerCase().includes(this.search.toLowerCase()) ||
                    item.timef.toLowerCase().includes(this.search.toLowerCase()) ||
                    item.timet.toString().includes(this.search) ||
                    item.location.toString().includes(this.search) ||
                    item.number.toString().includes(this.search)
                );
            });
        },
        headers() {
            return [
                { text: 'Date', value: 'date' },
                { text: 'From', value: 'timef' },
                { text: 'To', value: 'timet' },
                { text: 'Location', value: 'location' },
                { text: 'Number of applicants', value: 'number' },
                { text: 'Actions', value: 'actions', sortable: false },
            ];
        }
    },
    methods: {
        filterData() {
        }
    }
};
</script> -->

<template>
    <div>
        <v-data-table :headers="headers" :items="items" :item-key="itemKey" :rows-per-page-items="[5, 10, 15]"
            @click:row="redirecttoformattendance" style="cursor: pointer;">
            <!-- <template v-slot:item.actions="{ item }"> -->
            <template v-slot:[`item.actions`]>
                <v-btn small color="primary" @click="
                    $router.push('/table-passing')
                    ">
                    <v-icon>mdi-account-multiple-plus</v-icon> Add Applicant
                </v-btn>


            </template>
        </v-data-table>
<!--  <v-dialog v-model="dialogVisible" max-width="60%">
            <v-form v-model="valid">
                <v-card style="padding:2%"> <v-container>
                        <v-row>
                            <v-col cols="12" md="6">
                                <v-text-field v-model="date" label="Date" readonly=""></v-text-field>
                            </v-col>
                            <v-col cols="12" md="3">
                                <v-text-field v-model="time" label="Time from" readonly></v-text-field>
                            </v-col>
                            <v-col cols="12" md="3">
                                <v-text-field v-model="time" label="Time too" readonly></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-text-field v-model="location" label="Localtion" readonly=""></v-text-field>
                            </v-col><v-col cols="12" md="6">
                                <v-text-field v-model="location" label="Number of applicant" readonly=""></v-text-field>
                            </v-col>
                        </v-row>
                        <row>
                            <v-textarea solo name="input-7-4" label="Remarks"></v-textarea>
                        </row>
                    </v-container> <v-card-actions>
                        <v-btn color="primary" text @click="dialogVisible = false">
                            Close
                        </v-btn>
                    </v-card-actions></v-card>
            </v-form>
        </v-dialog>  -->
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            headers: [
                { text: 'Date', value: 'date' },
                { text: 'From', value: 'timef' },
                { text: 'To', value: 'timet' },
                { text: 'Location', value: 'location' },
                { text: 'Invites', value: 'invite' },
                { text: 'Confirmed', value: 'confirmed' },

                { text: 'Actions', value: 'actions', sortable: false },
            ],
            items: [
                { id: 1, name: 'Invoker', date: '01/02/2021', timef: '1:11pm', timet: '5:11pm', location: 'City Hall of Asuncion', number: '111', invite: '347', confirmed: '423' },
                { id: 2, name: 'Minara', date: '01/03/2022', timef: '1:22pm', timet: '5:22pm', location: 'City Mall of You', number: '222', invite: '987', confirmed: '542' },
                { id: 3, name: 'War Lord', date: '01/04/2023', timef: '1:22pm', timet: '5:33pm', location: 'City Davao', number: '333', invite: '907', confirmed: '542' },
                { id: 4, name: 'Jamica', date: '01/05/2024', timef: '1:33pm', timet: '5:44pm', location: 'City Hall of Manila', number: '123', invite: '222', confirmed: '245' },
                { id: 5, name: 'Red Bull', date: '01/06/2025', timef: '1:44pm', timet: '5:55pm', location: 'City Hall', number: '444', invite: '765', confirmed: '875' },
            ],
            itemKey: 'name',
            dialogVisible: false,
        };
    },
    methods: {

        navigateTo(path) {
            this.$router.push({ 'path': path });
        },

        redirecttoformattendance(item) {
            /*   this.navigateTo('/SelectYouth');  */
            this.$router.push({ name: 'DisplaySchedView', params: { id: item.id } })
        },

        performAction(item) {
            // Perform some action on the item 
            console.log('Performing action on item:', item);
        },
        openDialog(item) {
            // Set the dialogVisible flag to true when a row is clicked
            console.log('Opening dialog for item:', item);
            this.dialogVisible = true;
        },
        closeDialog() {
            // Set the dialogVisible flag to false when the dialog is closed
            this.dialogVisible = false;
        },
    },
};
</script>
  