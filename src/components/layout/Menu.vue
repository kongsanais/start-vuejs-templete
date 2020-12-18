<template>
    <v-navigation-drawer permanent app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            <!-- subtext -->
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
    </v-list>

    </v-navigation-drawer>
</template>
<script>
  export default {
    mounted(){
     
    },
    data () {
      return {
        items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Task List', icon: 'mdi-arrange-bring-forward' },
          { title: 'Register Task', icon:'mdi-meteor'},
          { title: 'Grup User',icon:'mdi-account-group'},
          { title: 'About', icon: 'mdi-help-box' },
        ],
        right: null,
      }
    },
    methods(){

    }
  }
</script>