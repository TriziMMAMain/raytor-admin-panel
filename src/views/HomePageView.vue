<script setup>
import {ref} from 'vue'

const tab = ref(null)
</script>

<template>
  <v-app full-height theme="myCustomTheme">
    <v-app-bar>
      <v-tabs
        v-model="tab"
        bg-color="primary"
      >
        <v-tab value="getProducts"></v-tab>
        <v-tab value="getProductId"></v-tab>
        <v-tab value="updateProductId"></v-tab>
        <v-tab value=""></v-tab>
        <v-tab value=""></v-tab>
        <v-tab value=""></v-tab>
        <v-tab value=""></v-tab>
      </v-tabs>
    </v-app-bar>

    <v-main></v-main>
  </v-app>
</template>

<style scoped>


</style>
