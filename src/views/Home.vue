<template>
  <v-container fluid>
    <v-layout>
      <v-flex>
        <h1>This is home page</h1>
        <h3>{{ testUrl }}</h3>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        testUrl: process.env.VUE_APP_API,
      };
    },
  }
</script>
