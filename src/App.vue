<template>
  <v-app>
    <app-navbar></app-navbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  data() {
    return {
      //
    };
  },
  components: {
    appNavbar: Navbar,
  },
};
</script>

<style lang="scss">
  @import "./styles/global.scss";
</style>
