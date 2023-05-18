<template>
    <div class="wrapper">
        <div class="one">
            <v-card class="mx-auto" max-width="100%" outlined>
                <v-list-item three-line>
                    <v-list-item-content>

                        <v-list-item-title class="text-h2 mb-1">
                            Private company
                        </v-list-item-title>
                        <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                    </v-list-item-content>
                    <!-- <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar> -->
                </v-list-item>
                <v-card-actions>
                    <v-btn outlined text @click="$router.push({ path: 'company-private' })" max-width="130px">
                        Button
                    </v-btn>
                </v-card-actions>
            </v-card>
        </div>
        <div class="two">
            <v-card class="mx-auto" max-width="100%" outlined>
                <v-list-item three-line>
                    <v-list-item-content>

                        <v-list-item-title class="text-h2 mb-1">
                            Government company
                        </v-list-item-title>
                        <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                    </v-list-item-content>
                    <!-- <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar> -->
                </v-list-item>
                <v-card-actions>
                    <v-btn outlined text @click="$router.push({ path: 'company-page' })" max-width="130px">
                        Button
                    </v-btn>
                </v-card-actions>
            </v-card>
        </div>

    </div>
</template>
<style>
.wrapper {
    /* background-color: lightblue; */
    display: grid;
    grid-template-columns: 50% 50%;
    /* height: 600px; */
    margin-top: 5%;
    padding: 5px;
}

.one {
    width: 95%;

}

.two {
    width: 95%;

}
</style>