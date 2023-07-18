<template>
  <div>
    <v-card class="mx-auto" max-width="100%" style="height: 100%">
      <v-card-title>
        <v-row>
          <!-- <v-col cols="4" class="text-center">
                        <img :src="$store.state.img_dir + 'job.png'" width="48" />
                    </v-col> -->
          <v-col cols="" class="">
            <h2 class="text-primary">EDUCATION</h2>
          </v-col>
          <div class="text-end">
            <v-btn
              style="margin-top: 30%;"
              class="item-right"
              color="green"
              text
              large
              @click="$router.push({ path: 'coaching-and-education-facilitation' })"
            >
              
              See All
            </v-btn>
          </div>
        </v-row>
      </v-card-title>
      

      <v-card
        class="mx-auto"
        max-width="100%"
        style="margin-top: -1%;"
        tile
        @click="$router.push({ path: 'coaching-and-education-facilitation' })"
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
        text: "Career Guidance and Employment Coaching",
        subtilte: "It is a conduct of assessment and seminar to ....",
      },
      {
        text: "Labor Education for Graduating Students (LEGS)",
        subtilte: "Intended for college graduating students where....",
      },
      {
        text: "One-on-one coaching",
        subtilte: "Employment coaching intended for daily clients....",
      },
    ],
  }),
};
</script>