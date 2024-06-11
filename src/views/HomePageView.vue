<script setup>
import {ref} from 'vue'

// Component

import GetProductsComponent from "@/components/GetProductsComponent.vue";
import GetProductIdComponent from "@/components/GetProductIdComponent.vue";
import AddProductComponent from "@/components/AddProductComponent.vue";
import UpdateProductIdComponent from "@/components/UpdateProductIdComponent.vue";
import DeleteProductComponent from "@/components/DeleteProductComponent.vue";
import HideProductComponentId from "@/components/HideProductComponentId.vue";

//

const tab = ref(null)
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
          <v-tab value="deleteProduct">Delete</v-tab>
          <v-tab value="hideProductId">Hide by ID or name</v-tab>
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
        <v-window-item value="deleteProduct">
          <DeleteProductComponent></DeleteProductComponent>
        </v-window-item>
        <v-window-item value="hideProductId">
            <HideProductComponentId></HideProductComponentId>
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
  background: rgba(197, 192, 192, 0.78);
}

.v-window-item, .v-window-item--active {
  transition: none !important;
}

</style>
