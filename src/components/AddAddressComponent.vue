<script setup="">
import {ref, computed} from 'vue'
import {useStore} from "@/stores/index.js";
const {postAddress} = useStore()

// Address

const addressValue = ref('')

// Phone

const phoneValue = ref('')
const phoneRule = (value) => {
  if (!value) return 'Phone number is required';

  if (!/^\d+$/.test(value)) {
    return 'Phone number must contain only digits';
  }

  if (value.length < 10) {
    return 'Phone number is too short';
  }
  if (value.length > 15) {
    return 'Phone number is too long';
  }
  return true;
};
const isValidPhoneNumber = computed(() => {
  return phoneRule(phoneValue.value) === true;
});

// Email

const emailValue = ref('')
const emailRule = (value) => {
  if (!value) return 'Email is required';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Invalid email format';
  return true;
}
const isValidEmail = computed(() => {
  return emailRule(emailValue.value) === true;
});

const submitForm = async () => {
  const newObj = ref({
    address: addressValue.value,
    phone: phoneValue.value,
    email: emailValue.value
  })
  await postAddress(newObj.value)
}
</script>

<template>
  <div class="wrap-address">
    <v-form type="submitForm()">
      <v-text-field v-model="addressValue"
                    clearable
                    label="Enter the address"
                    type="text"
                    variant="underlined"/>

      <v-text-field v-model="phoneValue"
                    clearable
                    label="Enter the phone"
                    :rules="[phoneRule]"
                    type="number"
                    variant="underlined"/>

      <v-text-field v-model="emailValue"
                    clearable
                    label="Enter the email"
                    type="text"
                    :rules="[emailRule]"
                    variant="underlined"/>

      <v-btn @click="submitForm" elevation="0"
             :disabled="!isValidEmail || !isValidPhoneNumber">Add address</v-btn>
    </v-form>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/mixins.scss';

@media screen and (max-width: 376px) {
  .wrap-address {
    width: 100%;
    height: 100vh;
  }

  .v-form {
    width: 376px;
    min-height: 100vh;
    padding: 10px;
    margin: 0 auto;
  }

  .v-text-field {
    color: grey;
  }

  .v-btn {
    width: 200px;
    height: 40px;
    margin-top: 30px;
    font-size: 1rem;
    transition: all 0.3s ease-in-out;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-btn:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }
}

@media screen and (min-width: 376px) and (max-width: 600px) {
  .wrap-address {
    width: 100%;
    height: 100vh;
  }

  .v-form {
    width: 376px;
    min-height: 100vh;
    padding: 10px;
    margin: 0 auto;
  }

  .v-text-field {
    color: grey;
  }

  .v-btn {
    width: 200px;
    height: 40px;
    margin-top: 30px;
    font-size: 1rem;
    transition: all 0.3s ease-in-out;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-btn:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }
}

@media screen and (min-width: 600px) and (max-width: 960px) {
  .wrap-address {
    width: 100%;
    height: 100vh;
  }

  .v-form {
    width: 600px;
    min-height: 100vh;
    padding: 15px;
    margin: 0 auto;
  }

  .v-text-field {
    color: grey;
  }

  .v-btn {
    width: 200px;
    height: 40px;
    margin-top: 30px;
    font-size: 1rem;
    transition: all 0.3s ease-in-out;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-btn:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }
}

@media screen and (min-width: 960px) and (max-width: 1280px) {
  .wrap-address {
    width: 100%;
    height: 100vh;
  }

  .v-form {
    width: 900px;
    min-height: 100vh;
    padding: 25px;
    margin: 0 auto;
  }

  .v-text-field {
    color: grey;
  }

  .v-btn {
    width: 200px;
    height: 40px;
    margin-top: 30px;
    font-size: 1rem;
    transition: all 0.3s ease-in-out;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-btn:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }
}

@media screen and (min-width: 1280px) and (max-width: 1440px) {
  .wrap-address {
    width: 100%;
    height: 100vh;
  }

  .v-form {
    width: 1100px;
    min-height: 100vh;
    margin: 50px auto;
  }

  .v-text-field {
    color: grey;
  }

  .v-btn {
    width: 250px;
    height: 50px;
    margin-top: 30px;
    font-size: 1.2rem;
    transition: all 0.3s ease-in-out;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-btn:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }
}

@media screen and (min-width: 1440px) and (max-width: 1920px) {
  .wrap-address {
    width: 100%;
    height: 100vh;
  }

  .v-form {
    width: 1300px;
    min-height: 100vh;
    margin: 50px auto;
  }

  .v-text-field {
    color: grey;
  }

  .v-btn {
    width: 250px;
    height: 50px;
    margin-top: 30px;
    font-size: 1.2rem;
    transition: all 0.3s ease-in-out;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-btn:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }
}

@media screen and (min-width: 1920px) and (max-width: 2560px) {
  .wrap-address {
    width: 100%;
    height: 100vh;
  }

  .v-form {
    width: 1600px;
    min-height: 100vh;
    margin: 50px auto;
  }

  .v-text-field {
    color: grey;
  }

  .v-btn {
    width: 250px;
    height: 50px;
    margin-top: 30px;
    font-size: 1.2rem;
    transition: all 0.3s ease-in-out;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-btn:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }
}

@media screen and (min-width: 2560px) {
  .wrap-address {
    width: 100%;
    height: 100vh;
  }

  .v-form {
    width: 1920px;
    min-height: 100vh;
    margin: 50px auto;
  }

  .v-text-field {
    color: grey;
  }

  .v-btn {
    width: 250px;
    height: 50px;
    margin-top: 30px;
    font-size: 1.2rem;
    transition: all 0.3s ease-in-out;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-btn:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }
}

</style>
