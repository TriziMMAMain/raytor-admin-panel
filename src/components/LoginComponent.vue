<script setup>
import {ref} from 'vue'
import {useStore} from '@/stores/index.js'
import router from "@/routes";


const {checkLogin} = useStore()
const loginVText = ref('')
const passwordVText = ref('')

const submitForm = async () => {
  const accountObject = ref({
    username: loginVText.value,
    password: passwordVText.value
  })
  await checkLogin(accountObject.value)
}
</script>

<template>
  <v-form class="v-form-main" type="submitForm()">
    <v-text-field v-model="loginVText"
                  label="Login"
                  clearable></v-text-field>
    <v-text-field v-model="passwordVText"
                  label="Password"
                  type="number"
                  clearable></v-text-field>

    <v-btn color="primary" @click="submitForm">Submit</v-btn>
  </v-form>
</template>

<style scoped lang="scss">

.v-form-main {
  width: 80%;
}
</style>
