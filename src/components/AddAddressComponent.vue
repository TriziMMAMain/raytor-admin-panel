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

      <v-btn @click="submitForm" :disabled="!isValidEmail || !isValidPhoneNumber">Click</v-btn>
    </v-form>
  </div>
</template>

<style scoped lang="scss">

.wrap-address {
  width: 100%;
  height: 100vh;
  background-color: grey;
}

</style>
