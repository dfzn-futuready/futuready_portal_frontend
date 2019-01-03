<template>
  <nav>
    <v-toolbar app clipped-left absolute class="white">
      <v-toolbar-title v-if="showLogo" class="text-uppercase grey--text mr-2">
        <span class="font-weight-light">Futu</span>
        <span class="font-weight-bold">Ready</span>
      </v-toolbar-title>
      <v-toolbar-side-icon
      class="hidden-md-and-down menu-desktop"
      @click="navDrawerDesktop"></v-toolbar-side-icon>
      <v-toolbar-side-icon
      class="hidden-lg-and-up menu-mobile"
      @click="navDrawerSmall"></v-toolbar-side-icon>

      <v-spacer></v-spacer>

      <v-avatar
        :size="40"
        color="deep-purple darken-2 white--text">
        <span class="headline">D</span>
      </v-avatar>
    </v-toolbar>
    <v-navigation-drawer
      v-model="drawer"
      app
      width="240"
      mobile-break-point="960"
      :mini-variant.sync="mini"
      class="white darken-4 nav-drawer">
      <v-list @mouseover="openDrawer" class="pt-0" dense>
        <v-list-tile to="/">
          <v-list-tile-action class="v-list__single">
            <v-icon color="blue-grey lighten-2">home</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title class="grey--text text--darken-2">Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-group
          v-for="item in items"
          :key="item.title"
          :prepend-icon="item.icon"
          active-class="grey--text text--darken-2">
          <v-list-tile slot="activator" active-class="grey--text text--darken-2">
            <v-list-tile-title class="grey--text text--darken-2">
              {{ item.title }}
            </v-list-tile-title>
          </v-list-tile>

          <template v-if="item.subNav">
            <v-list-tile
              v-for="(catChild, i) in item.subNav"
              :key="i"
              :to="catChild.url"
              active-class="grey--text text--darken-2"
            >
              <v-list-tile-title>{{ catChild.title }}</v-list-tile-title>
            </v-list-tile>
          </template>

        </v-list-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      mini: false,
      showLogo: true,
      items: [
        {
          title: 'Configuration',
          icon: 'flaticon-cogwheel',
          url: '/about',
          subNav: [
            {
              title: 'Settings',
              url: '/',
            },
            {
              title: 'API Key Management',
              url: '/',
            },
          ],
        },
        { title: 'Data', icon: 'flaticon-layers', url: '/about' },
        { title: 'Import Transaction', icon: 'flaticon-download', url: '/about' },
        { title: 'Page', icon: 'find_in_page', url: '/about' },
        { title: 'Engagement Services', icon: 'flaticon-network', url: '/about' },
        { title: 'Operation', icon: 'flaticon-graphic', url: '/about' },
        { title: 'Legal & Risk', icon: 'flaticon-light', url: '/about' },
        { title: 'Finance', icon: 'flaticon-line-graph', url: '/about' },
        { title: 'Profile', icon: 'flaticon-users', url: '/about' },
        { title: 'Channel', icon: 'flaticon-computer', url: '/about' },
        { title: 'Engagement Approach', icon: 'flaticon-interface-7', url: '/about' },
        { title: 'Others', icon: 'flaticon-signs-2', url: '/about' },
        { title: 'Human Resource', icon: 'flaticon-list-3', url: '/about' },
        { title: 'Core', icon: 'storage', url: '/about' },
      ],
    };
  },
  methods: {
    navDrawerSmall() {
      this.mini = false;
      this.drawer = !this.drawer;
    },
    openDrawer() {
      this.mini = true;
    },
    navDrawerDesktop() {
      this.showLogo = !this.showLogo;
      this.mini = !this.mini;
    },
  },
};
</script>

<style lang="scss">
  .v-toolbar {
    z-index: 4;
  }
  .nav-drawer {
    padding-top: 72px;
    padding-bottom: 25px;

    .v-list__single + div {
      margin-left: -16px;
    }
    .v-list__group {
      .v-list__tile {
        padding: 0;
      }
      .v-list__group__items {
        .v-list__tile {
          padding-left: 56px;
        }
      }
      .v-list__group__header__append-icon {
        padding: 0 8px 0 0;
      }
    }
  }
  .menu-mobile, .menu-desktop {
    margin-left: -2px !important;
  }
</style>
