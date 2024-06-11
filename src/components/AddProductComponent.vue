<script setup>
import {ref} from 'vue'
import _ from 'lodash'

// Product

const product = ref({})

// Info

const productTitle = ref('')
// Photo
const productMainPhoto = ref('')
const productPhoto = ref('')
const productPhotoArray = ref([])
// Description
const productDescriptionSmallText = ref('')
const productDescriptionText = ref('')
// Descripiton Li
const productDescriptionLiArrayMain = ref([])
const productDescriptionUl = ref('')
const productDescriptionLiArray = ref([])
const productDescriptionLi = ref('')
// Description P
const productDescriptionPArray = ref([])
const productDescriptionP = ref('')
// Description feature
const productDescriptionFeatureArray = ref([])
const productDescriptionFeatureText = ref('')
const productDescriptionFeatureValue = ref('')
// Descripiton order
const productDescriptionOrderArray = ref([])
const productDescriptionOrderText = ref('')
const productDescriptionOrderValue = ref('')
// Description info
const productAvailable = ref(false)
const productStandard = ref('')
const productManufacturer = ref('')
const productField = ref('')

// Func

// Photo
const pushPhotoInArray = () => {
  productPhotoArray.value.push(productPhoto.value)
  console.log('array, add ', productPhotoArray.value);
  productPhoto.value = ''
}
const deletePhotoInArray = () => {
  productPhotoArray.value = _.dropRight(productPhotoArray.value)
  console.log('array delete ', productPhotoArray.value);
}
const showPhotoInArray = () => {
  console.log(productPhotoArray.value);
}
// Description li
const pushDescriptionLiValue = () => {
  productDescriptionLiArray.value.push(productDescriptionLi.value)
  productDescriptionLi.value = ''
  console.log(productDescriptionLiArray.value);
}
const deleteDescriptionLiValue = () => {
  productDescriptionLiArray.value = _.dropRight(productDescriptionLiArray.value)
  console.log(productDescriptionLiArray.value);
}

const pushDescriptionLiArray = () => {
  const newObject = ref({
    textUl: productDescriptionUl.value,
    textLi: productDescriptionLiArray.value
  })
  productDescriptionLiArrayMain.value.push(newObject.value)
  productDescriptionUl.value = ''
  productDescriptionLiArray.value = []
  console.log('productDescription', productDescriptionLiArrayMain.value);

}
const deleteDescriptionLiArray = () => {
  productDescriptionLiArrayMain.value = _.dropRight(productDescriptionLiArrayMain.value)
  productDescriptionUl.value = ''
  productDescriptionLiArray.value = []
  console.log('productDescription', productDescriptionLiArrayMain.value);
}
// Description P
const pushDescriptionPValue = () => {
  productDescriptionPArray.value.push(productDescriptionP.value)
  productDescriptionP.value = ''
  console.log('productDescriptionP', productDescriptionPArray.value);
}
const deleteDescriptionPValue = () => {
  productDescriptionPArray.value = _.dropRight(productDescriptionPArray.value)
  console.log('productDescriptionP', productDescriptionPArray.value);
}
// Description feature
const pushDescriptionFeature = () => {
  const newObject = ref({
    featureText: productDescriptionFeatureText.value,
    featureValue: productDescriptionFeatureValue.value
  })
  productDescriptionFeatureArray.value.push(newObject.value)
  productDescriptionFeatureText.value = ''
  productDescriptionFeatureValue.value = ''
  console.log('productDescriptionFeature', productDescriptionFeatureArray.value);
}
const deleteDescriptionFeature = () => {
  productDescriptionFeatureArray.value = _.dropRight(productDescriptionFeatureArray.value)
  console.log('productDescriptionFeature', productDescriptionFeatureArray.value);
}
// Description order
const pushDescriptionOrder = () => {
  const newObject = ref({
    orderText: productDescriptionOrderText.value,
    orderValue: productDescriptionOrderValue.value
  })
  productDescriptionOrderArray.value.push(newObject.value)
  productDescriptionOrderText.value = ''
  productDescriptionOrderValue.value = ''
  console.log('productDescriptionOrder', productDescriptionOrderArray.value);
}
const deleteDescriptionOrder = () => {
  productDescriptionOrderArray.value = _.dropRight(productDescriptionOrderArray.value)
  console.log('productDescriptionOrder', productDescriptionOrderArray.value);
}
//

const submitForm = async () => {
  const newIdMathInstrument = ref(Math.floor(Math.random() * 1000000))
  product.value.id = newIdMathInstrument.value
  product.value.title = productTitle.value
  product.value.mainPhoto = productMainPhoto.value
  product.value.photo = productPhotoArray.value
  product.value.text = productDescriptionSmallText.value
  product.value.textDescription = productDescriptionText.value
  product.value.textDescripitonLi = productDescriptionLiArrayMain.value
  product.value.textDescriptionP = productDescriptionPArray.value
  product.value.feature = productDescriptionFeatureArray.value
  product.value.order = productDescriptionOrderArray.value
  product.value.available = productAvailable.value
  product.value.standard = productStandard.value
  product.value.manufacturer = productManufacturer.value
  product.value.field = productField.value

  console.log(product.value);
  // await postInstrument(product.value)

}
</script>

<template>
  <v-form type="submitForm()">

    <div class="block-title">
      <v-text-field v-model="productTitle"
                    clearable
                    label="Enter the title"
                    type="text"
                    variant="underlined"/>
    </div>
    <div class="block-photo">
      <v-text-field v-model="productMainPhoto"
                    clearable
                    label="Enter the main photo"
                    variant="underlined"/>

      <div class="block-photo-action">
        <v-text-field v-model="productPhoto"
                      clearable
                      label="Enter the photo"
                      variant="underlined"/>
        <v-btn @click="pushPhotoInArray()">Add</v-btn>
        <v-btn @click="deletePhotoInArray()">Delete</v-btn>
        <v-btn @click="showPhotoInArray()">Show</v-btn>
      </div>

    </div>
    <div class="block-description">
      <v-textarea v-model="productDescriptionSmallText"
                  clearable
                  rows="2"
                  :counter="130"
                  :maxlength="130"
                  :auto-grow="true"
                  label="Enter a description, but no more than 130 characters"
                  variant="underlined"/>
      <v-textarea v-model="productDescriptionText"
                  clearable
                  rows="2"
                  :auto-grow="true"
                  label="Enter a description"
                  variant="underlined"/>

      <div class="block-description-li">
        <v-text-field v-model="productDescriptionUl"
                      clearable
                      label="Enter a description title"
                      variant="underlined"/>

        <div class="block-description-li-action">
          <v-text-field v-model="productDescriptionLi"
                        clearable
                        label="Enter a description text"
                        variant="underlined"/>
          <v-btn @click="pushDescriptionLiValue">Push text</v-btn>
          <v-btn @click="deleteDescriptionLiValue">Delete text</v-btn>
        </div>
        <v-btn @click="pushDescriptionLiArray">Push title and text</v-btn>
        <v-btn @click="deleteDescriptionLiArray">Delete title and text</v-btn>
      </div>
      <div class="block-description-p">
        <v-text-field v-model="productDescriptionP"
                      clearable
                      label="Enter a description text"
                      variant="underlined"/>
        <v-btn @click="pushDescriptionPValue">Push text</v-btn>
        <v-btn @click="deleteDescriptionPValue">Delete text</v-btn>
      </div>
    </div>
    <div class="block-feature">
      <v-text-field v-model="productDescriptionFeatureText"
                    clearable
                    label="Enter a description feature text"
                    variant="underlined"/>
      <v-text-field v-model="productDescriptionFeatureValue"
                    clearable
                    label="Enter a description feature value"
                    variant="underlined"/>
      <v-btn @click="pushDescriptionFeature">Push feature</v-btn>
      <v-btn @click="deleteDescriptionFeature">Delete feature</v-btn>
    </div>
    <div class="block-order">
      <v-text-field v-model="productDescriptionOrderText"
                    clearable
                    label="Enter a description order text"
                    variant="underlined"/>
      <v-text-field v-model="productDescriptionOrderValue"
                    clearable
                    label="Enter a description order value"
                    variant="underlined"/>
      <v-btn @click="pushDescriptionOrder">Push order</v-btn>
      <v-btn @click="deleteDescriptionOrder">Delete order</v-btn>
    </div>
    <div class="block-info">
      <v-checkbox
        v-model="productAvailable"
        clearable
        label="Click the available"
        variant="underlined"/>

      <v-text-field v-model="productStandard"
                    clearable
                    label="Enter the standard"
                    type="text"
                    variant="underlined"/>

      <v-text-field v-model="productManufacturer"
                    clearable
                    label="Enter the manufacturer"
                    type="text"
                    variant="underlined"/>

      <v-text-field v-model="productField"
                    clearable
                    label="Enter the field"
                    type="text"
                    variant="underlined"/>
    </div>

    <v-btn color="primary" @click="submitForm">Submit</v-btn>

  </v-form>

</template>

<style scoped lang="scss">

.v-form {
  width: 100%;
  height: 100%;
  background-color: grey;
}

</style>
