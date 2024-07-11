<script setup>
import {ref, onMounted} from 'vue'
import {useRouter} from 'vue-router'

const router = useRouter()

// Component

import GetProductsComponent from "@/components/GetProductsComponent.vue";
import AddProductComponent from "@/components/AddProductComponent.vue";
import UpdateProductIdComponent from "@/components/UpdateProductIdComponent.vue";
import AddAddressComponent from "@/components/AddAddressComponent.vue";
import GetAddressComponent from "@/components/GetAddressComponent.vue";
//

const tab = ref('getProducts')
const asd = ref(false)


</script>

<template>
  <v-tabs
    v-model="tab"
    bg-color="primary"
  >
    <div class="v-tabs-wrap">
      <v-tab value="getProducts">Get</v-tab>
      <v-tab value="addProduct">Add</v-tab>
      <v-tab value="updateProductId">Update by ID</v-tab>
      <v-tab value="getAddress">Get address</v-tab>
      <v-tab value="addAddress">Add address</v-tab>
    </div>
  </v-tabs>

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
    <v-window-item value="getAddress">
      <GetAddressComponent></GetAddressComponent>
    </v-window-item>
    <v-window-item value="addAddress">
      <AddAddressComponent></AddAddressComponent>
    </v-window-item>
  </v-window>

</template>

<style scoped>

.v-tabs-wrap {
  width: 100%;
  height: 100%;
  position: fixed;
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
