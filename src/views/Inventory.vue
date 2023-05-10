<template>
  <p>Inventory Page</p>
</template>
<script>
import {
  mapMutations
} from 'vuex'
  export default {
    data: () => ({
      
    }),
    created() {
      this.setLoggedIn(true)
       this.setAppBar(true)
    },
    methods: {
      ...mapMutations(['setLoggedIn', 'setAppBar']),
      
    },
  }
</script>