<template>
  <v-dialog
    v-model="dailog"
    width="870"
    persistent
  >
    <v-card>
      <v-card-title
        class="text-h6"
        dense
      >
        <v-icon left>
          mdi-account-edit
        </v-icon> User Profile
        <v-spacer />
        <v-btn
          color="success"
          text
          dense
          @click="registerAccount()"
        >
          Save
        </v-btn>
      </v-card-title>
      <v-divider />
      <v-card-text class="mt-4">
        <v-form>
          <v-row>
            <v-col
              cols="6"
              class="text-center"
            >
              <v-img
                lazy-src="https://picsum.photos/id/11/10/6"
                max-height="350"
                max-width="350"
                src="https://picsum.photos/id/11/500/300"
              />
            </v-col>
            <v-col cols="6">
              <table class="va-table">
                <tr>
                  <td class="text-right">
                    Full Name:
                  </td>
                  <td>
                    <v-text-field
                      v-model="account.fullname"
                      dense
                      hide-details
                    />
                  </td>
                </tr>
                <tr>
                  <td class="text-right">
                    Email Address:
                  </td>
                  <td>
                    <v-text-field
                      v-model="credintial.email"
                      dense
                      hide-details
                    />
                  </td>
                </tr>
                <tr>
                  <td class="text-right">
                    Password:
                  </td>
                  <td>
                    <v-text-field
                      v-model="credintial.password"
                      dense
                      hide-details
                    />
                  </td>
                </tr>
                <tr>
                  <td class="text-right">
                    Account Type:
                  </td>
                  <td>
                    <v-select
                      v-model="account.account_type"
                      dense
                      :items="types"
                      hide-details
                    />
                  </td>
                </tr>
                <tr>
                  <td class="text-right">
                    Contact Number:
                  </td>
                  <td>
                    <v-text-field
                      v-model="account.contact_number"
                      dense
                      hide-details
                    />
                  </td>
                </tr>
              </table>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
import {
  mapMutations
} from 'vuex'
  export default {
    props: {
    show: {
      type: Boolean,
      default: false
    }
    
    },
    data: () => ({
        dailog: false,
        credintial: {  email: "", password: ""},
        account: {  fullname: "", contact_number: "", account_type: ""},
        types: ['Administrator','Branch Manager','Cashier', 'Waiter']
    }),
    watch: {
        show(v) {
          v?this.dailog=true:this.dailog=false
        }
    },
    created() {
    },
    methods: {
      emitToParent (action) {
        this.$emit('DialogEvent', {action: action})
      },
      registerAccount() {
        console.log(this.credintial)
        this.$createUserWithEmailAndPassword(this.$FBAUTH, this.credintial.email, this.credintial.password)
          .then((res) => {
             console.log(res)
             this.saveAccount()
          })
          .catch(error => {
            alert(error);
          });
      },
      saveAccount() {
        try {
            const docRef =  this.$FBDB_addDoc(this.$FBDB_collection(this.$FBDB, "accounts"), {
              first: "Alan",
              middle: "Mathison",
              last: "Turing",
              born: 1912
            });

            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
      }
    },
  }
</script>
