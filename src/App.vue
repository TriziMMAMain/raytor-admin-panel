<script setup="">
import HomePage from './views/HomePageView.vue'
import {onMounted} from "vue";
import {useStore} from '@/stores/index.js'
import {storeToRefs} from 'pinia'
import router from "@/routes";


const {checkLoginInHomePage, fetchAllProducts} = useStore()
const {hrefToLoginPage} = storeToRefs(useStore())


onMounted(async () => {
  await checkLoginInHomePage()
  if (hrefToLoginPage.value) {
    router.push('/login/')
  } else {
    router.push('/')
  }
  await fetchAllProducts()
    .then(() => {
      console.log('fetching')
    })
    .catch((error) => {
      console.log(error)
    })

})
</script>

<template>
  <v-app full-height theme="myCustomTheme">
    <v-main>

      <router-view name="HomePageComponent"></router-view>
      <router-view name="LoginPageView" ></router-view>

      <router-view></router-view>

    </v-main>
  </v-app>
</template>

<style scoped lang="scss">

</style>
