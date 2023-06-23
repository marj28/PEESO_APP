<template>
    <div>
        <v-spacer></v-spacer>
        <v-text-field v-model="search" label="Search" @input="filterData" style="margin-left: 70%;" outlined dense prepend-icon=""></v-text-field>
        <v-data-table :headers="headers" :items="filteredItems" class="elevation-1">
            <template v-slot:items="props">
                <td>{{ props.item.name }}</td>
                <td>{{ props.item.email }}</td>
                <td>{{ props.item.age }}</td>
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
                { name: 'John Doe', email: '09123456789', age: 'N/A' },
                { name: 'Jane Smith', email: '09123456789', age: 'N/A' },
                // Add more data items here
            ]
        };
    },
    computed: {
        filteredItems() {
            return this.items.filter(item => {
                return (
                    item.name.toLowerCase().includes(this.search.toLowerCase()) ||
                    item.email.toLowerCase().includes(this.search.toLowerCase()) ||
                    item.age.toString().includes(this.search)
                );
            });
        },
        headers() {
            return [
                { text: 'Name', value: 'name' },
                { text: 'Contact No.', value: 'email' },
                { text: 'Status', value: 'age' }
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
  