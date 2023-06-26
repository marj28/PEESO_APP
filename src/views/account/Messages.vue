<template>
  <!--  eslint-disable  -->
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card-title class="green--text">
         <v-icon left>mdi-message-reply-text-outline</v-icon> Messages
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <!-- <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            dense
            outlined
            hide-details
          ></v-text-field> -->
        </v-card-title>
      
        <v-card> 
          <v-list line>
      <v-list-item-group
        v-model="selected"
        active-class="text-success"
        multiple
      >
        <template v-for="(item, index) in messages">
          <v-list-item :key="index" @click="selectedMessage = item,showMessage=true">
            <template v-slot:default="{ active }">
              <v-list-item-content>
                <v-list-item-title><span :class="setClass(item.status)">{{item.subject}}</span></v-list-item-title>
                <!-- <v-list-item-subtitle v-text="item.status"></v-list-item-subtitle> -->
              </v-list-item-content>

              <v-list-item-action>
                <v-list-item-action-text><small><em class="text-warning">{{ $moment(item.created).fromNow()}}</em></small></v-list-item-action-text>
              </v-list-item-action>
            </template>
          </v-list-item>

          <v-divider
            v-if="index < messages.length - 1"
            :key="index"
          ></v-divider>
        </template>
      </v-list-item-group>
    </v-list>
        </v-card>
      </v-col>
    </v-row>
    <va-read-message :show="showMessage" :data="selectedMessage" @DialogEvent="readEv"/>
  </v-container>
</template>
  <script>
import { mapMutations } from "vuex";
export default {
  name: "EmployeerPage",
  data: () => ({
    selectedMessage: {},
    state: "new",
    showMessage: false,
    search: "",
    messages:[],
    popupform: false,
  }),
  computed: {},
  created() {
    if (this.$session.exists()) {
      this.$http.defaults.headers.common["Authorization"] =
        "Bearer " + this.$session.get("jwt");
      this.setLoggedIn(true);
      this.setAppBar(true);
      this.getMessages();
    }
  },
  methods: {
    ...mapMutations(["setLoggedIn", "setAppBar", "setMonthDailySales"]),
    readEv(){
      this.showMessage = false
      this.getMessages()
    },
    setClass(status){
      if(status == "Sent") {
          return "font-weight-bold"
      }
      return ""
    },
    getMessages(){
      this.messages = []
      this.$http.get('message/list').then(response => {  
              response.data.status?this.messages = response.data.messages:this.messages=[]
            }).catch(e => {
              console.log(e)
            }).catch((error) => {
              console.error(error);
          });
   }
  },
};
</script>