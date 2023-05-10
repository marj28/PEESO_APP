<template>
  <v-navigation-drawer
    v-if="$store.state.is_logged"
    v-model="$store.state.drawer"
  
    app
    permanent
    :mini-variant.sync="mini"
  >
    <v-list-item>
      <v-list-item-avatar>
        <v-img :src="$store.state.app_icon" />
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>CPANEL</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-divider />
    <v-list class="grow">
      <template v-for="(link,i) in links">
        <template v-if="!link.child">
          <v-list-item
            :key="i"
            @click="$router.push(link.route).catch(err => {})"
          >
            <v-list-item-title>
              <v-icon
                left
                color="primary"
              >
                {{ link.icon }}
              </v-icon> {{ link.label }}
            </v-list-item-title>
          </v-list-item>
        </template>
        <template v-else>
          <v-menu
            :key="i"
            transition="slide-x-transition"
            bottom
            right
            :offset-x="offset"
            rounded="0"
          >
            <template #activator="{ on, attrs }">
              <v-list-item
                :key="i"
                v-bind="attrs"
                v-on="on"
              >
                <v-list-item-title>
                  <v-icon
                    left
                    color="primary"
                  >
                    {{ link.icon }}
                  </v-icon> 
                  <span>{{ link.label }}</span>
                </v-list-item-title>
              </v-list-item>
            </template>
            <v-list
              color="primary"
              dark
            >
              <v-list-item
                v-for="(item, index) in link.childs"
                :key="index"
                @click="$router.push(item.route).catch(err => {})"
              > 
                <v-list-item-title>
                  <v-icon left>
                    {{ item.icon }}
                  </v-icon> {{ item.label }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
  export default {
    data () {
      return {
          offset: true,
          mini: true,
        links: [
          {
            label: 'Main', icon: 'mdi-home', route: '/main', child: false,
          },
          // {
          //   label: 'Reports', icon: 'mdi-chart-line', route: '/inventory', child: true,
          //   childs: [
          //     {
          //       label: 'Tourist', icon: 'mdi-account-cowboy-hat', route: '/inventory',
          //     },
          //     {
          //       label: 'Issued Receipt', icon: 'mdi-receipt-text-check-outline', route: '/inventory',
          //     },
          //     {
          //       label: 'Analytics', icon: 'mdi-chart-pie', route: '/inventory',
          //     },
          //   ],
          // },
          //  {
          //   label: 'Branches', icon: 'mdi-store', route: '/accounts', child: false,
          // },
        
          {
            label: 'Jobs', icon: 'mdi-bulletin-board', route: '/accounts', child: false,
          },
          {
            label: 'Programs', icon: 'mdi-account-supervisor', route: '/accounts', child: false,
          },
          {
            label: 'Trainings', icon: 'mdi-account-details', route: '/accounts', child: false,
          },
          {
            label: 'My Profile', icon: 'mdi-account-circle', route: '/accounts', child: false,
          },
          
        ],
      }
    },
  }
</script>