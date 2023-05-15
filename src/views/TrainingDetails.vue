<!-- <template>
    <div>
        this is training!
    </div>
</template>

<script>
export default{
    name:'TrainingDetails',
}
</script> -->

<template>
    <!-- eslint-disable -->
    <v-data-table :headers="headers" :search="search" :items="desserts" sort-by="calories" class="elevation-1">
        <template v-slot:top>
            <v-card flat color="#FFFFFF">
                <v-card-title class="white--black">TRAINING OFFERING
                    <v-spacer></v-spacer>
                    <v-spacer></v-spacer>
                    <v-spacer></v-spacer>
                    <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details
                        outlined rounded dense dark></v-text-field>
                    <v-divider class="mx-4" inset vertical dark></v-divider>
                    <v-dialog v-model="dialog" max-width="550px">
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn color="success" dark class="mt-1" v-bind="attrs" v-on="on">
                                <v-icon> mdi-plus </v-icon> NEW TRAINING
                            </v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                                <span class="text-h5">{{ formTitle }}</span>
                            </v-card-title>
                            <v-divider color="success"></v-divider>
                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" sm="12" md="12">
                                            <v-text-field v-model="editedItem.training_title" label="Training Title"
                                                color="success" outlined dense></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="6">
                                            <v-text-field v-model="editedItem.nature_training" label="Nature of Training"
                                                color="success" outlined dense class="mt-n8"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="6">
                                            <v-text-field v-model="editedItem.place_training" label="Place of Training"
                                                color="success" outlined dense class="mt-n8"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="6">
                                            <v-text-field v-model="editedItem.date_training" label="Date" color="success"
                                                outlined dense class="mt-n8" type="date"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="6">
                                            <v-text-field v-model="editedItem.time_training" label="Time" color="success"
                                                outlined dense class="mt-n8" type="time"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="12">
                                            <v-text-field v-model="editedItem.participant_count" label="Participant Count"
                                                color="success" outlined dense class="mt-n8" type="number"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="12">
                                            <v-textarea v-model="editedItem.training_description"
                                                label="Training Description" color="success" outlined dense auto-grow
                                                clearable class="mt-n8 mb-n12"></v-textarea>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card-text>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="orange darken-1" text @click="close">
                                    Cancel
                                </v-btn>
                                <v-btn color="green darken-1" dark @click="save">
                                    Save
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-card-title>


                <v-dialog v-model="dialog1" max-width="550px">
                    <v-card>
                        <v-card-title>
                            <span class="text-h5">VIEW TRAINING</span>
                            <v-spacer></v-spacer>
                            <v-btn @click="(dialog = true), (dialog1 = false)" color="warning" icon small class="mt-2">
                                <v-icon>mdi-pencil</v-icon> </v-btn>
                        </v-card-title>
                        <v-divider color="success"></v-divider>
                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col cols="12" sm="12" md="12">
                                        <b class="green--text">Training Title:</b> {{ editedItem.training_title }}
                                    </v-col>
                                    <v-col cols="12" sm="12" md="12">
                                        <b class="green--text">Nature of Training:</b> {{ editedItem.nature_training }}
                                    </v-col>
                                    <v-col cols="12" sm="12" md="12">
                                        <b class="green--text">Place of Training:</b> {{ editedItem.place_training }}
                                    </v-col>
                                    <v-col cols="12" sm="12" md="12">
                                        <b class="green--text">Date of Training:</b> {{ editedItem.date_training }}
                                    </v-col>
                                    <v-col cols="12" sm="12" md="12">
                                        <b class="green--text">Time of Training:</b> {{ editedItem.time_training }}
                                    </v-col>
                                    <v-col cols="12" sm="12" md="12">
                                        <b class="green--text">Participant Count:</b> {{ editedItem.participant_count }}
                                    </v-col>
                                    <v-col cols="12" sm="12" md="12" class="mb-n6">
                                        <b class="green--text">Training Description:</b> {{ editedItem.training_description
                                        }}
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card-text>

                        <v-card-actions class="mt-n6">
                            <v-spacer></v-spacer>
                            <v-btn color="green darken-1" dark @click="dialog1 = false">
                                Exit
                            </v-btn>

                        </v-card-actions>
                    </v-card>
                </v-dialog>
                <v-dialog v-model="dialogDelete" max-width="500px">
                    <v-card>
                        <v-card-title class="">Are you sure you want to delete this Training?</v-card-title>
                        <v-divider color="success"></v-divider>
                        <v-card-actions>
                            <v-spacer></v-spacer>

                            <v-btn color="orange darken-1" text @click="closeDelete">Cancel</v-btn>
                            <v-btn color="green darken-1" text @click="deleteItemConfirm">OK</v-btn>
                            <v-spacer></v-spacer>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-card>
        </template>
        <template v-slot:item.actions="{ item }">
            <v-icon small class="mr-2" @click="viewItem(item)" color="success">
                mdi-eye
            </v-icon>
            <!-- <v-icon small class="mr-2" @click="editItem(item)" color="orange">
        mdi-pencil
      </v-icon> -->
            <v-icon small @click="deleteItem(item)" color="red"> mdi-delete </v-icon>
        </template>
        <!-- <template v-slot:no-data>
            <v-btn color="primary" @click="initialize"> Reset </v-btn>
        </template> -->
    </v-data-table>
</template>
<script>
export default {
    data: () => ({
        dialog: false,
        dialog1: false,
        dialogDelete: false,
        search: "",
        headers: [
            {
                text: "TRAINING TITLE",
                align: "start",
                sortable: false,
                value: "training_title",
            },
            {
                text: "NATURE OF TRAINING", value: "nature_training",
                sortable: false,
            },
            {
                text: "PLACE OF TRAINING", value: "place_training",
                sortable: false,
            },
            { text: "DATE", value: "date_training" },
            { text: "TIME", value: "time_training" },
            { text: "PARTICIPANT COUNT", value: "participant_count" },
            { text: "Actions", value: "actions", sortable: false },
        ],
        desserts: [],
        editedIndex: -1,
        editedItem: {
            training_title: "",
            nature_training: "",
            place_training: "",
            date_training: "",
            time_training: "",
            participant_count: 0,
        },
        defaultItem: {
            training_title: "",
            nature_training: "",
            place_training: "",
            date_training: "",
            time_training: "",
            participant_count: 0,
        },
    }),
    computed: {
        formTitle() {
            return this.editedIndex === -1 ? "New Training" : "Edit Training";
        },
    },

    watch: {
        dialog(val) {
            val || this.close();
        },
        dialogDelete(val) {
            val || this.closeDelete();
        },
    },

    created() {
        this.initialize();
    },

    methods: {
        initialize() {
            this.desserts = [
                // {
                //     training_title: "PESLA",
                //     nature_training: "Whole Day",
                //     place_training: "City Hall of Tagum - Atrium",
                //     date_training: "2023-12-25",
                //     time_training: "13:00",
                //     participant_count: 20,
                //     training_description:
                //         "Lorem ipsum dolor sit amet. Et internos libero non quos animi et eaque iste sed suscipit consequuntur et illum aliquid et quibusdam nostrum. Est quasi sint 33 aperiam quis eum aliquam quod rem quia repellendus.",
                // },
                // {
                //     training_title: "Computer Technicalities",
                //     nature_training: "Half Day",
                //     place_training: "City Hall of Tagum - Atrium",
                //     date_training: "2023-08-25",
                //     time_training: "01:00",
                //     participant_count: 25,
                //     training_description:
                //         "Lorem ipsum dolor sit amet. Et internos libero non quos animi et eaque iste sed suscipit consequuntur et illum aliquid et quibusdam nostrum. Est quasi sint 33 aperiam quis eum aliquam quod rem quia repellendus. asasdasdfasdfj jhasgddebfuygsd kjdshf uiawyegfyuawef ahysdgfhgsdf asjdhgfugdsf ",
                // },
            ];
        },
        viewItem(item) {
            this.editedIndex = this.desserts.indexOf(item);
            this.editedItem = Object.assign({}, item);
            this.dialog1 = true;
        },
        editItem(item) {
            this.editedIndex = this.desserts.indexOf(item);
            this.editedItem = Object.assign({}, item);
            this.dialog = true;
        },

        deleteItem(item) {
            this.editedIndex = this.desserts.indexOf(item);
            this.editedItem = Object.assign({}, item);
            this.dialogDelete = true;
        },

        deleteItemConfirm() {
            this.desserts.splice(this.editedIndex, 1);
            this.closeDelete();
        },

        close() {
            this.dialog = false;
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem);
                this.editedIndex = -1;
            });
        },

        closeDelete() {
            this.dialogDelete = false;
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem);
                this.editedIndex = -1;
            });
        },

        save() {
            if (this.editedIndex > -1) {
                Object.assign(this.desserts[this.editedIndex], this.editedItem);
            } else {
                this.desserts.push(this.editedItem);
            }
            this.close();
        },
    },
};
</script>