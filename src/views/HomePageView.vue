<script setup>
import {ref} from 'vue'

// Component

import GetProductsComponent from "@/components/GetProductsComponent.vue";
import AddProductComponent from "@/components/AddProductComponent.vue";
import UpdateProductIdComponent from "@/components/UpdateProductIdComponent.vue";
import AddAddressComponent from "@/components/AddAddressComponent.vue";
import GetAddressComponent from "@/components/GetAddressComponent.vue";
//

const tab = ref('getProducts')

const logoutClick = () => {
  localStorage.removeItem("token")
  window.location.reload()
}

</script>

<template>
  <v-tabs
    v-model="tab"
    center-active
    mobile-breakpoint="xs"
    bg-color="primary"
  >
    <div class="v-tabs-wrap">
      <v-tab value="getProducts">Get product</v-tab>
      <v-tab value="addProduct">Add product</v-tab>
<!--      <v-tab value="updateProductId">Update by ID product</v-tab>-->
      <v-tab value="getAddress">Get address</v-tab>
      <v-tab value="addAddress">Add address</v-tab>
      <v-btn class="v-btn-click-logout" @click="logoutClick()">Logout</v-btn>
    </div>
  </v-tabs>

  <v-window v-model="tab">
    <v-window-item value="getProducts">
      <GetProductsComponent></GetProductsComponent>
    </v-window-item>
    <v-window-item value="addProduct">
      <AddProductComponent></AddProductComponent>
    </v-window-item>
<!--    <v-window-item value="updateProductId">-->
<!--      <UpdateProductIdComponent></UpdateProductIdComponent>-->
<!--    </v-window-item>-->
    <v-window-item value="getAddress">
      <GetAddressComponent></GetAddressComponent>
    </v-window-item>
    <v-window-item value="addAddress">
      <AddAddressComponent></AddAddressComponent>
    </v-window-item>
  </v-window>

</template>

<style scoped lang="scss">
@import '../assets/mixins.scss';

.v-tabs-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.v-window {
  width: 100%;
  min-height: 120vh;
  transition: none !important;
  background-color: #ffffff;
}

.v-window-item, .v-window-item--active {
  transition: none !important;
}

.v-btn-click-logout {
  margin-left: 50px;
  background-color: $success;
}

</style>
