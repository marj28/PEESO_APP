<template>
  <div> 
    <v-row 
      no-gutters
      class="mt-10 mb-2"
    >
      <span style="width: 290px;">
        <v-text-field
          type="password"
          hide-details
          outlined
          dense
          append-icon="mdi-account-search"
          label="Search"
        />
      </span>
      <v-spacer />
      <v-btn
        small
        color="primary"
        @click="userform = true"
      >
        <v-icon
          small
          left
        >
          mdi-account-plus
        </v-icon> Add
      </v-btn>
    </v-row>
    <v-data-table
      :headers="headers"
      :items="[]"
      :items-per-page="5"
      class="elevation-1"
    />
    <popup-user-form
      :show="userform"
      @DialogEvent="fromEv"
    />
  </div>
</template>
<script>
import {
  mapMutations
} from 'vuex'
  export default {
    data: () => ({
      userform: false,
      headers: [{
            text: 'Username',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Full Name', value: 'calories' },
          { text: 'Role', value: 'fat' },
          { text: 'Created Dt', value: 'carbs' },
          { text: 'Last Login', value: 'protein' },
          { text: 'Status', align: 'end'},]
    }),
    created() {
      this.setLoggedIn(true)
       this.setAppBar(true)
    },
    methods: {
      ...mapMutations(['setLoggedIn', 'setAppBar']),
      fromEv(e){
        this.userform = false
      }
    },
  }
</script>