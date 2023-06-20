

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
                {  id:1,  name: 'Invoker', date: '01/02/2021', timef: '1:11pm', timet: '5:11pm', location: 'City Hall of Asuncion', number: '111', invite: '347', confirmed: '423' },
                {  id:2,  name: 'Minara', date: '01/03/2022', timef: '1:22pm', timet: '5:22pm', location: 'City Mall of You', number: '222', invite: '987', confirmed: '542' },
                {  id:3, name: 'War Lord', date: '01/04/2023', timef: '1:22pm', timet: '5:33pm', location: 'City Davao', number: '333', invite: '907', confirmed: '542' },
                {  id:4, name: 'Jamica', date: '01/05/2024', timef: '1:33pm', timet: '5:44pm', location: 'City Hall of Manila', number: '123', invite: '222', confirmed: '245' },
                {  id:5, name: 'Red Bull', date: '01/06/2025', timef: '1:44pm', timet: '5:55pm', location: 'City Hall', number: '444', invite: '765', confirmed: '875' },
            ],
            itemKey: 'name',
            dialogVisible: false,
        };
    },
    methods: {

        navigateTo(path) {
        this.$router.push({ 'path': path });
      },

        redirecttoformattendance (item) {    
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
  