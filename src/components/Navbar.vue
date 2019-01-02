<template>
  <nav>
    <v-toolbar app class="white">
      <v-toolbar-side-icon class="hidden-md-and-down" @click="mini = !mini"></v-toolbar-side-icon>
      <v-toolbar-side-icon class="hidden-lg-and-up" @click="navDrawerSmall"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Futu</span>
        <span class="font-weight-bold">Ready</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-avatar
        :size="40"
        color="deep-purple darken-2 white--text"
      >
        <span class="headline">D</span>
      </v-avatar>
    </v-toolbar>


    <v-navigation-drawer v-model="drawer" 
      app
      width="240"
      mobile-break-point="960" 
      :mini-variant.sync="mini"
      class="white darken-4">
      
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="https://randomuser.me/api/portraits/men/85.jpg">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>John Leider</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-list class="pt-0" dense>
        <v-divider class="pt-2"></v-divider>

        <v-list-tile v-for="item in items" :key="item.title">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <router-link :to="item.url">
              <v-list-tile-title class="grey--text text--darken-2">
                {{ item.title }}
              </v-list-tile-title>
            </router-link>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>


      
    </v-navigation-drawer>
  </nav>

  
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      mini: true,
      items: [
        { title: 'Home', icon: 'home', url: '/' },
        { title: 'Search', icon: 'translate', url: '/about'},
        { title: 'About', icon: 'question_answer', url: '/about'}
      ]
    }
  },
  methods: {
    navDrawerSmall() {
      this.mini = false;
      this.drawer = !this.drawer;
    },
  }
}
</script>

<style>

</style>
