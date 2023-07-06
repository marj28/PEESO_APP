<template>
    <div>
        <v-card class="mx-auto" max-width="100%" style="height: 100%;">
            <v-card-title>
                <v-row>
                    <v-col cols="4" class="text-center">
                        <img :src="$store.state.img_dir + 'job.png'" width="48" />
                    </v-col>
                    <v-col cols="8">
                        <div class="text-h4"> Trainings</div>
                    </v-col>
                </v-row>
            </v-card-title>
            <v-card-actions>
                <v-btn elevation="2" color="#0d5ad6" text @click="$router.push({ path: 'labor-market' })">
                    Explore
                </v-btn>

            </v-card-actions>

            <v-card class="mx-auto" max-width="100%" tile @click="$router.push({ path: 'labor-market' })">
                <v-list dense>
                    <!-- <v-subheader>REPORTS</v-subheader> -->
                    <v-list-item-group v-model="selectedItem">
                        <v-list-item v-for="(item, i) in items" :key="i">
                            <!-- <v-list-item-icon>
                                <v-icon v-text="item.icon"></v-icon>
                            </v-list-item-icon> -->
                            <v-list-item-content>
                                <v-list-item-title v-text="item.text" style="font-size: 116%;"></v-list-item-title>
                                <p v-text="item.subtilte" style="margin-top: 2%;"> </p>
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
            { text: 'OFW Referral and Counselling', subtilte:'This is a program of DOLE that caters the....'   },
            { text: 'Special Recruitment Activity', subtilte:'A program intended to prepare the family....'  },
            { text: 'Local Recruitment Activity', subtilte:'Local employment facilitation with local ....'  },
        ],
    }),
}
</script>