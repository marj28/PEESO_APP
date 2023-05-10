<template>
  <v-main class="font-weight-light">
    <v-container fluid>
      <v-row no-gutters>
        <v-col
          md="8"
          offset-md="2"
        >
          <router-view />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
<script>
export default {
  metaInfo () {
    return {
      title: 'Tagum City - ' + this.$route.name
    }
  }
}
</script>