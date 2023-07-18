<template>
  <div>
    <v-card class="mx-auto" max-width="100%" style="height: 100%">
      <v-card-title>
        <v-row>
          <v-col cols="12">
            <h2 class="text-primary">APPLICANT</h2>
          </v-col>
          <div class="text-end">
            <v-btn
              style="margin-left:320%; margin-top: -60%;"
              class="item-right"
              color="green"
              text
              large
              @click="$router.push({ path: 'matching-and-refferal-division' })"
            >
              
              See All
            </v-btn>
          </div>

          
        </v-row>
      </v-card-title>
      <v-card
        class="mx-auto"
        max-width="100%"
        style="margin-top: -5%;"
        tile
        @click="$router.push({ path: 'matching-and-refferal-division' })"
      >
        <v-list dense>
          <!-- <v-subheader>REPORTS</v-subheader> -->
          <v-list-item-group v-model="selectedItem" >
            <v-list-item v-for="(item, i) in items" :key="i">
              <!-- <v-list-item-icon>
                                <v-icon v-text="item.icon"></v-icon>
                            </v-list-item-icon> -->
              <v-list-item-content>
                <v-list-item-title
                  v-text="item.text"
                  style="font-size: 116%"
                ></v-list-item-title>
                <p v-text="item.subtilte" style="margin-top: 2%"></p>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-card>
  </div>
</template>
<script>
export default {
  data: () => ({
    // selectedItem: 1,
    items: [
      {
        text: "Government Internship Program",
        subtilte: "Is a component of KABATAAN 2000 under....",
      },
      {
        text: "Tulong Panghanapbuhay Para sa Ating Displaced and Disadvantaged Workers",
        subtilte: "Is a community-based package of assistance....",
      },
      {
        text: "Tulong Panghanapbuhay Para sa Ating Displaced and Disadvantaged Workers",
        subtilte: "Is a community-based package of assistance....",
      },
    ],
  }),
};
</script>
<style>
.item-right {
  position: right;
}
</style>