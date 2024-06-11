<script setup>
import {ref} from 'vue'

// Component

import GetProductsComponent from "@/components/GetProductsComponent.vue";
import AddProductComponent from "@/components/AddProductComponent.vue";
import UpdateProductIdComponent from "@/components/UpdateProductIdComponent.vue";

//

const tab = ref('getProducts')
</script>

<template>
  <v-app full-height theme="myCustomTheme">
      <v-tabs
        v-model="tab"
        bg-color="primary"
      >
        <div class="v-tabs-wrap">
          <v-tab value="getProducts">Get</v-tab>
          <v-tab value="addProduct">Add</v-tab>
          <v-tab value="updateProductId">Update by ID</v-tab>
        </div>
      </v-tabs>

    <v-main>
      <v-window v-model="tab">
        <v-window-item value="getProducts">
            <GetProductsComponent></GetProductsComponent>
        </v-window-item>
        <v-window-item value="addProduct">
            <AddProductComponent></AddProductComponent>
        </v-window-item>
        <v-window-item value="updateProductId">
            <UpdateProductIdComponent></UpdateProductIdComponent>
        </v-window-item>
      </v-window>
    </v-main>
  </v-app>
</template>

<style scoped>

.v-tabs-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}

.v-window {
  width: 100%;
  height: 100%;
  transition: none !important;
  background-color: #ffffff;
}

.v-window-item, .v-window-item--active {
  transition: none !important;
}

</style>
