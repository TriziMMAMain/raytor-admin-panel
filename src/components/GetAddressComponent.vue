<script setup>
import {ref, onMounted} from "vue"
import {useStore} from "@/stores/index.js";

const {fetchAddress, deletePostAddress} = useStore()

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
            class="v-banner-wrap"
            lines="one"
  >
    <template v-slot:default>
      <div class="v-slot-default">
        <div class="v-slot-text">
          <h1 class="v-slot-title">Are you sure?</h1>
          <div class="v-slot-actions">
            <v-btn class="v-slot-actions-v-btn" @click="deletePostNoConfirm()">
              No
            </v-btn>

            <v-btn class="v-slot-actions-v-btn" @click="deletePostConfirm()">
              Yes
            </v-btn>
          </div>
        </div>
      </div>
    </template>

  </v-banner>

  <div class="wrap-address">
    <div class="address" v-for="item in address">
      <h1 class="address-id">ID: {{ item.id }}</h1>
      <h1 class="address-title">Address: {{ item.address }}</h1>
      <h1 class="address-phone">Phone: {{ item.phone }}</h1>
      <h1 class="address-email">Email: {{ item.email }}</h1>
      <div class="actions-block">
        <v-btn class="v-btn-address" @click="deleteAddress(item.id)" elevation="0">Delete</v-btn>
      </div>
      <br>
      <v-divider
        :thickness="4"
        class="border-opacity-100"
        color="primary"
      ></v-divider>
      <br>
    </div>
  </div>
</template>

<style scoped lang="scss">


@import '../assets/mixins.scss';

@media screen and (max-width: 376px) {
  .v-banner-wrap {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 5;
  }

  .v-slot-default {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .v-slot-text {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .v-slot-title {
    color: #FFFFFF;
    font-size: 2rem;

  }

  .v-slot-actions {
    width: 100%;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    //background-color: red;
  }

  .v-slot-actions-v-btn {
    width: 100px;
    height: 50px;
    margin: 0 50px 0 50px;
    font-size: 1.2rem;
    transition: all 0.3s ease-in-out;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-slot-actions-v-btn:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }

  // Wrap

  .wrap-address {
    width: 376px;
    min-height: 100vh;
    padding: 10px;
    margin: 0 auto;
  }

  .address {
    width: 100%;

  }

  .address-id, .address-title, .address-phone, .address-email {
    font-size: 1.2rem;
    font-weight: 500;
    color: $textSpan;
  }

  //.address-id {}

  //.address-title {}

  //.address-phone {}

  //.address-email {}

  .actions-block {
    width: 100%;
    margin-top: 30px;
  }

  .v-btn-address {
    width: 160px;
    height: 40px;
    font-size: 1rem;
    transition: all 0.3s ease-in-out;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-btn-address:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }

}

@media screen and (min-width: 376px) and (max-width: 600px) {

  .v-banner-wrap {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 5;
  }

  .v-slot-default {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .v-slot-text {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .v-slot-title {
    color: #FFFFFF;
    font-size: 2rem;

  }

  .v-slot-actions {
    width: 100%;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    //background-color: red;
  }

  .v-slot-actions-v-btn {
    width: 100px;
    height: 50px;
    margin: 0 50px 0 50px;
    font-size: 1.2rem;
    transition: all 0.3s ease-in-out;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-slot-actions-v-btn:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }

  // Wrap

  .wrap-address {
    width: 376px;
    min-height: 100vh;
    padding: 10px;
    margin: 0 auto;
  }

  .address {
    width: 100%;

  }

  .address-id, .address-title, .address-phone, .address-email {
    font-size: 1.2rem;
    font-weight: 500;
    color: $textSpan;
  }

  //.address-id {}

  //.address-title {}

  //.address-phone {}

  //.address-email {}

  .actions-block {
    width: 100%;
    margin-top: 30px;
  }

  .v-btn-address {
    width: 160px;
    height: 40px;
    font-size: 1rem;
    transition: all 0.3s ease-in-out;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-btn-address:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }


}

@media screen and (min-width: 600px) and (max-width: 960px) {

  .v-banner-wrap {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 5;
  }

  .v-slot-default {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .v-slot-text {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .v-slot-title {
    color: #FFFFFF;
    font-size: 2rem;

  }

  .v-slot-actions {
    width: 100%;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    //background-color: red;
  }

  .v-slot-actions-v-btn {
    width: 200px;
    height: 50px;
    margin: 0 50px 0 50px;
    font-size: 1.2rem;
    transition: all 0.3s ease-in-out;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-slot-actions-v-btn:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }

  // Wrap

  .wrap-address {
    width: 600px;
    min-height: 100vh;
    padding: 15px;
  }

  .address {
    width: 100%;

  }

  .address-id, .address-title, .address-phone, .address-email {
    font-size: 1.5rem;
    font-weight: 500;
    color: $textSpan;
  }

  //.address-id {}

  //.address-title {}

  //.address-phone {}

  //.address-email {}

  .actions-block {
    width: 100%;
    margin-top: 30px;
  }

  .v-btn-address {
    width: 200px;
    height: 45px;
    font-size: 1.2rem;
    transition: all 0.3s ease-in-out;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-btn-address:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }

}

@media screen and (min-width: 960px) and (max-width: 1280px) {

  .v-banner-wrap {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 5;
  }

  .v-slot-default {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .v-slot-text {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .v-slot-title {
    color: #FFFFFF;
    font-size: 2.5rem;

  }

  .v-slot-actions {
    width: 100%;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    //background-color: red;
  }

  .v-slot-actions-v-btn {
    width: 200px;
    height: 60px;
    margin: 0 50px 0 50px;
    font-size: 1.3rem;
    transition: all 0.3s ease-in-out;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-slot-actions-v-btn:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }

  // Wrap

  .wrap-address {
    width: 960px;
    min-height: 100vh;
    padding: 25px;
  }

  .address {
    width: 100%;

  }

  .address-id, .address-title, .address-phone, .address-email {
    font-size: 1.5rem;
    font-weight: 500;
    color: $textSpan;
  }

  //.address-id {}

  //.address-title {}

  //.address-phone {}

  //.address-email {}

  .actions-block {
    width: 100%;
    margin-top: 30px;
  }

  .v-btn-address {
    width: 200px;
    height: 45px;
    font-size: 1.2rem;
    transition: all 0.3s ease-in-out;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-btn-address:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }

}

@media screen and (min-width: 1280px) and (max-width: 1440px) {

  .v-banner-wrap {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 5;
  }

  .v-slot-default {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .v-slot-text {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .v-slot-title {
    color: #FFFFFF;
    font-size: 2.5rem;

  }

  .v-slot-actions {
    width: 100%;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    //background-color: red;
  }

  .v-slot-actions-v-btn {
    width: 200px;
    height: 60px;
    margin: 0 50px 0 50px;
    font-size: 1.3rem;
    transition: all 0.3s ease-in-out;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-slot-actions-v-btn:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }

  // Wrap

  .wrap-address {
    width: 1100px;
    min-height: 100vh;
    margin: 50px auto;
  }

  .address {
    width: 100%;

  }

  .address-id, .address-title, .address-phone, .address-email {
    font-size: 1.5rem;
    font-weight: 500;
    color: $textSpan;
  }

  //.address-id {}

  //.address-title {}

  //.address-phone {}

  //.address-email {}

  .actions-block {
    width: 100%;
    margin-top: 30px;
  }

  .v-btn-address {
    width: 200px;
    height: 45px;
    font-size: 1.2rem;
    transition: all 0.3s ease-in-out;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-btn-address:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }

}

@media screen and (min-width: 1440px) and (max-width: 1920px) {

  .v-banner-wrap {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 5;
  }

  .v-slot-default {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .v-slot-text {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .v-slot-title {
    color: #FFFFFF;
    font-size: 2.5rem;

  }

  .v-slot-actions {
    width: 100%;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    //background-color: red;
  }

  .v-slot-actions-v-btn {
    width: 200px;
    height: 60px;
    margin: 0 50px 0 50px;
    font-size: 1.3rem;
    transition: all 0.3s ease-in-out;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-slot-actions-v-btn:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }

  // Wrap

  .wrap-address {
    width: 1300px;
    min-height: 100vh;
    margin: 50px auto;
  }

  .address {
    width: 100%;

  }

  .address-id, .address-title, .address-phone, .address-email {
    font-size: 1.5rem;
    font-weight: 500;
    color: $textSpan;
  }

  //.address-id {}

  //.address-title {}

  //.address-phone {}

  //.address-email {}

  .actions-block {
    width: 100%;
    margin-top: 30px;
  }

  .v-btn-address {
    width: 200px;
    height: 45px;
    font-size: 1.2rem;
    transition: all 0.3s ease-in-out;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-btn-address:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }

}

@media screen and (min-width: 1920px) and (max-width: 2560px) {

  .v-banner-wrap {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 5;
  }

  .v-slot-default {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .v-slot-text {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .v-slot-title {
    color: #FFFFFF;
    font-size: 2.5rem;

  }

  .v-slot-actions {
    width: 100%;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    //background-color: red;
  }

  .v-slot-actions-v-btn {
    width: 200px;
    height: 60px;
    margin: 0 50px 0 50px;
    font-size: 1.3rem;
    transition: all 0.3s ease-in-out;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-slot-actions-v-btn:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }

  // Wrap

  .wrap-address {
    width: 1600px;
    min-height: 100vh;
    margin: 50px auto;
  }

  .address {
    width: 100%;

  }

  .address-id, .address-title, .address-phone, .address-email {
    font-size: 2rem;
    font-weight: 500;
    color: $textSpan;
  }

  //.address-id {}

  //.address-title {}

  //.address-phone {}

  //.address-email {}

  .actions-block {
    width: 100%;
    margin-top: 30px;
  }

  .v-btn-address {
    width: 250px;
    height: 50px;
    font-size: 1.5rem;
    transition: all 0.3s ease-in-out;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-btn-address:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }

}

@media screen and (min-width: 2560px) {

  .v-banner-wrap {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 5;
  }

  .v-slot-default {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .v-slot-text {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .v-slot-title {
    color: #FFFFFF;
    font-size: 2.5rem;

  }

  .v-slot-actions {
    width: 100%;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    //background-color: red;
  }

  .v-slot-actions-v-btn {
    width: 200px;
    height: 60px;
    margin: 0 50px 0 50px;
    font-size: 1.3rem;
    transition: all 0.3s ease-in-out;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-slot-actions-v-btn:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }

  // Wrap

  .wrap-address {
    width: 1920px;
    min-height: 100vh;
    margin: 50px auto;
  }

  .address {
    width: 100%;

  }

  .address-id, .address-title, .address-phone, .address-email {
    font-size: 2rem;
    font-weight: 500;
    color: $textSpan;
  }

  //.address-id {}

  //.address-title {}

  //.address-phone {}

  //.address-email {}

  .actions-block {
    width: 100%;
    margin-top: 30px;
  }

  .v-btn-address {
    width: 250px;
    height: 50px;
    font-size: 1.5rem;
    transition: all 0.3s ease-in-out;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-btn-address:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }

}

</style>
