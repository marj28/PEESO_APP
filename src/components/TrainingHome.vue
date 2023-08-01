<template>
  <div>
    <v-card class="mx-auto" max-width="100%" style="height: 100%">
      <v-card-title>
        <v-row>
          <v-col cols="12">
            <h3 class="text-primary">TRAINING</h3>
          </v-col>

          <v-col class="text-right">
            <v-btn
              style="margin-top: -20%;"
              class="item-right"
              color="green"
              text
              large
              @click="$router.push({ path: 'labor-market' })"
            >              
              See All
            </v-btn>
          </v-col>
        </v-row>
      </v-card-title>
      <v-card
        class="mx-auto"
        max-width="100%"
        tile
        style="margin-top: -10%;"
        @click="$router.push({ path: 'labor-market' })"
      >
        <v-list dense>
          <!-- <v-subheader>REPORTS</v-subheader> -->
          <v-list-item-group v-model="selectedItem">
            <v-list-item v-for="(item, i) in items" :key="i">
              <!-- <v-list-item-icon>
                                <v-icon v-text="item.icon"></v-icon>
                            </v-list-item-icon> -->
              <v-list-item-content>
                <v-list-item-title
                  v-text="item.text"
                  
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
        text: "OFW Referral and Counselling",
        subtilte: "This is a program of DOLE that caters the....",
      },
      {
        text: "Special Recruitment Activity",
        subtilte: "A program intended to prepare the family....",
      },
      {
        text: "Local Recruitment Activity",
        subtilte: "Local employment facilitation with local ....",
      },
    ],
  }),
};
</script>
<style>
/* .btn{
    margin-top: ;
} */
</style>