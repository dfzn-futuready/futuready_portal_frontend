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
      <v-list @mouseover="openDrawer" class="pt-0">
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
              class="v-list__tile--link"
              active-class="grey--text text--darken-2"
            >
              <template v-if="catChild.internalUrl">
                <router-link :to="catChild.internalUrl">
                  <v-list-tile-title class="grey--text text--darken-2">
                    {{ catChild.title }}
                  </v-list-tile-title>
                </router-link>
              </template>
              <template v-else>
                <a class="grey--text text--darken-2" :href="catChild.url">
                  <v-list-tile-title>{{ catChild.title }}</v-list-tile-title>
                </a>
              </template>
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
              url: 'https://stg-portal.futuready.com/portal/userlist',
            },
            {
              title: 'API Key Management',
              url: 'https://stg-portal.futuready.com/portal/apikeylist',
            },
          ],
        },
        {
          title: 'Data',
          icon: 'flaticon-layers',
          url: '/about',
          subNav: [
            {
              title: 'Transaction Data',
              url: 'https://stg-portal.futuready.com/portal/transactiondata',
            },
            {
              title: 'Leads Data',
              url: 'https://stg-portal.futuready.com/portal/dataleads',
            },
            {
              title: 'Transaction Log',
              url: 'https://stg-portal.futuready.com/portal/csdashboarddatalog',
            },
            {
              title: 'Operation Transaction Report',
              url: 'https://stg-portal.futuready.com/portal/operationTransactionReport',
            },
          ],
        },
        {
          title: 'Import Transaction',
          icon: 'flaticon-download',
          url: '/about',
          subNav: [
            {
              title: 'Import Travel',
              url: 'https://stg-portal.futuready.com/portal/importtravel',
            },
            {
              title: 'Import Vehicle',
              url: 'https://stg-portal.futuready.com/portal/importvehicle',
            },
          ],
        },
        {
          title: 'Page',
          icon: 'find_in_page',
          url: '/about',
          subNav: [
            {
              title: 'Product',
              url: 'https://stg-portal.futuready.com/portal/pageproduct',
            },
            {
              title: 'Product Plan',
              url: 'https://stg-portal.futuready.com/portal/pageproductplan',
            },
            {
              title: 'Insurance',
              url: 'https://stg-portal.futuready.com/portal/pageinsurance',
            },
            {
              title: 'Product Category',
              url: 'https://stg-portal.futuready.com/portal/pageproductcategory',
            },
            {
              title: 'Travel',
              url: 'https://stg-portal.futuready.com/portal/pagetravel',
            },
            {
              title: 'Term Life',
              url: 'https://stg-portal.futuready.com/portal/pagetermlife',
            },
            {
              title: 'Vehicle',
              url: 'https://stg-portal.futuready.com/portal/pagevehicle',
            },
          ],
        },
        {
          title: 'Engagement Services',
          icon: 'flaticon-network',
          url: '/about',
          subNav: [
            {
              title: 'Marketing',
              url: 'https://stg-marketing.futuready.com/dashboard/index',
            },
            {
              title: 'Entry Page',
              url: 'https://stg-entrypage.futuready.com/entrypage/index',
            },
            {
              title: 'Promo',
              url: 'https://stg-promo.futuready.com/promo/promolist',
            },
            {
              title: 'Voucher',
              url: 'https://stg-voucher.futuready.com/voucher/voucherlist',
            },
            {
              title: 'SEO',
              url: '/',
            },
            {
              title: 'Url Builder',
              url: 'https://stg-urlbuilder.futuready.com/log_url/index',
            },
          ],
        },
        {
          title: 'Operation',
          icon: 'flaticon-graphic',
          url: '/about',
          subNav: [
            {
              title: 'Customer Service',
              url: 'https://stg-csdashboard.futuready.com/list_transaksi',
            },
            {
              title: 'Sales Process Monitoring',
              url: 'https://stg-portal.futuready.com/portal/salesprocessmonitoring',
            },
          ],
        },
        {
          title: 'Legal & Risk',
          icon: 'flaticon-light',
          url: '/about',
          subNav: [
            {
              title: 'Sanction List',
              url: 'https://stg-sanction.futuready.com/sanction/index',
            },
          ],
        },
        {
          title: 'Finance',
          icon: 'flaticon-line-graph',
          url: '/about',
          subNav: [
            {
              title: 'Finance Dashboard',
              internalUrl: '/finance/dashboard/index',
            },
            {
              title: 'Incentive & Commission',
              url: 'https://stg-portal.futuready.com/portal/masterincentive',
            },
            {
              title: 'Payment Channel',
              url: 'https://stg-portal.futuready.com/payment_channel',
            },
          ],
        },
        {
          title: 'Profile',
          icon: 'flaticon-users',
          url: '/about',
          subNav: [
            {
              title: 'Profile List',
              url: 'https://stg-portal.futuready.com/profile/profile',
            },
          ],
        },
        {
          title: 'Channel',
          icon: 'flaticon-computer',
          url: '/about',
          subNav: [
            {
              title: 'Referral',
              url: 'https://stg-referral.futuready.com/referral/referrallist',
            },
          ],
        },
        {
          title: 'Engagement Approach',
          icon: 'flaticon-interface-7',
          url: '/about',
          subNav: [
            {
              title: 'VFS Dashboard',
              url: 'https://stg-vfsdashboard.futuready.com/',
            },
            {
              title: 'Event Dashboard',
              url: 'https://eventdashboard.futuready.com/',
            },
          ],
        },
        {
          title: 'Others',
          icon: 'flaticon-signs-2',
          url: '/about',
          subNav: [
            {
              title: 'Autoworkshop',
              url: 'https://stg-autoworkshop.futuready.com/autoworkshop/workshopList',
            },
            {
              title: 'Automatic Workflow',
              url: 'https://stg-workflow.futuready.com/workflow',
            },
          ],
        },
        {
          title: 'Human Resource',
          icon: 'flaticon-list-3',
          url: '/about',
          subNav: [
            {
              title: 'Attendance List',
              url: 'https://stg-portal.futuready.com/attendance/attendance/index',
            },
          ],
        },
        {
          title: 'Core',
          icon: 'storage',
          url: '/about',
          subNav: [
            {
              title: 'Product Catalog',
              url: 'https://stg-portal.futuready.com/core/master_insurer',
            },
          ],
        },
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

    &.v-navigation-drawer--mini-variant {
      .v-list__group:before, .v-list__group:after {
        display: none
      }
      .v-list__group__items {
        display: none;
      }
    }

    .v-list__tile {
      height: auto;
      min-height: 48px;

      .v-list__tile__title {
        height: auto;
        white-space: normal;
        max-width: 125px;
        font-size: 13px;
        line-height: 20px;
        padding-top: 8px;
        padding-bottom: 8px;
      }
    }

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
