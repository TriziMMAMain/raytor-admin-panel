<script setup>
import {ref, onMounted} from "vue"
import {useStore} from "@/stores/index.js";

const {fetchAddress,deletePostAddress} = useStore()

const address = ref(null)

// Delete

const idClick = ref(null)
const clickToConfirm = ref(false)
const deletePostNoConfirm = () => {
  clickToConfirm.value = false
}
const deletePostConfirm = async () => {
  await deletePostAddress(idClick.value)
}
const deleteAddress = async (id) => {
  clickToConfirm.value = true
  idClick.value = id
}


onMounted(async () => {
  await fetchAddress()
  address.value = JSON.parse(localStorage.getItem('address'))
  console.log(address.value);
})
</script>

<template>
  <v-banner v-if="clickToConfirm"
            class="h-100"
            color="warning"
            icon="mdi-wifi-strength-alert-outline"
            lines="one"
  >
    <template v-slot:text>
      No Internet connection
    </template>

    <template v-slot:actions>
      <v-btn @click="deletePostNoConfirm()">
        No
      </v-btn>

      <v-btn @click="deletePostConfirm()">
        Yes
      </v-btn>
    </template>
  </v-banner>
  <div class="wrap-address">
    <div class="address" v-for="item in address">
      <h1 class="address-id">{{ item.id }}</h1>
      <h1 class="address-title">{{ item.address }}</h1>
      <h1 class="address-phone">{{ item.phone }}</h1>
      <h1 class="address-email">{{ item.email }}</h1>
      <div class="actions-block">
        <v-btn @click="deleteAddress(item.id)">Delete</v-btn>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.wrap-address {
  width: 100%;
  min-height: 100vh;
  background-color: grey;
}

</style>
