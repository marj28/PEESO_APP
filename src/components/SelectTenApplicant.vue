<template>
    <div>
        <v-text-field v-model="search" label="Search" @input="filterData" style="margin-left: 50%;"></v-text-field>
        <v-data-table :headers="headers" :items="filteredItems" class="elevation-1">
            <template v-slot:items="props">
                <!-- <td>{{ props.item.name }}</td>
                <td>{{ props.item.email }}</td>
                <td>{{ props.item.age }}</td> -->
                <td>{{ props.item.name }}</td>

                <td>{{ props.item.date }}</td>
                <td>{{ props.item.timef }}</td>
                <td>{{ props.item.timet }}</td>
                <td>{{ props.item.location }}</td>
            </template>
        </v-data-table>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            search: '',
            items: [
                { name: 'Rey', date: '01/01/2023', timef: '1:00pm', timet: '5:00pm', location: 'City hall' },
                { name: 'Shesh', date: '01/01/2023', timef: '1:00pm', timet: '5:00pm', location: 'City hall' },
                { name: 'Ray', date: '01/01/2023', timef: '1:00pm', timet: '5:00pm', location: 'City hall' },
                { name: 'Ree', date: '01/01/2023', timef: '1:00pm', timet: '5:00pm', location: 'City hall' },

                // Add more data items here
            ]
        };
    },
    computed: {
        filteredItems() {
            return this.items.filter(item => {
                return (item.name.toLowerCase().includes(this.search.toLowerCase()) ||
                    item.date.toLowerCase().includes(this.search.toLowerCase()) ||
                    item.timef.toLowerCase().includes(this.search.toLowerCase()) ||
                    item.timet.toString().includes(this.search) || item.location.toString().includes(this.search)
                );
            });
        },
        headers() {
            return [
                // { text: 'Date', value: 'name' },
                // { text: 'Contact No.', value: 'email' },
                // { text: 'Age', value: 'age' }
                { text: 'Name', value: 'name' },
                { text: 'Date', value: 'date' },
                { text: 'From', value: 'timef' },
                { text: 'To', value: 'timet' },
                { text: 'Location', value: 'location' },
            ];
        }
    },
    methods: {
        filterData() {
            // You can perform additional filtering or sorting logic here if needed
        }
    }
};
</script>