<script setup>
import {ref, onMounted} from 'vue'
import _ from 'lodash'
import {useStore} from '@/stores/index.js'

const {updateProduct, fetchAllProducts} = useStore()
// Product

const productVModel = ref('')
const product = ref({})
const productsList = ref([])
const productsListName = ref([])
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
const productAvailable = ref(null)
const productStandard = ref('')
const productManufacturer = ref('')
const productField = ref('')


//

const selectedFile = ref(null)

//

// Func

// Photo
// const pushPhotoInArray = () => {
//   productPhotoArray.value.push(productPhoto.value)
//   console.log('array, add ', productPhotoArray.value);
//   productPhoto.value = ''
// }
const pushPhotoInArray = async () => {
  await postImgProduct(selectedFile.value)
    .then(() => {
    })
    .catch((e) => {
      console.log(e);
    })

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
  if (productTitle.value === '') {} else {product.value.title = productTitle.value}
  if (productMainPhoto.value === '') {} else {product.value.mainPhoto = productMainPhoto.value}
  if (productPhotoArray.value.length === 0) {} else {product.value.photo = productPhotoArray.value}
  if (productDescriptionSmallText.value === '') {} else {product.value.text = productDescriptionSmallText.value}
  if (productDescriptionText.value === '') {} else {product.value.textDescription = productDescriptionText.value}
  if (productDescriptionLiArrayMain.value.length === 0) {} else {product.value.textDescripitonLi = productDescriptionLiArrayMain.value}
  if (productDescriptionPArray.value.length === 0) {} else {product.value.textDescriptionP = productDescriptionPArray.value}
  if (productDescriptionFeatureArray.value.length === 0) {} else {product.value.feature = productDescriptionFeatureArray.value}
  if (productDescriptionOrderArray.value.length === 0) {} else {product.value.order = productDescriptionOrderArray.value}
  if (productAvailable.value === null) {} else {product.value.available = productAvailable.value}
  if (productStandard.value === '') {} else {product.value.standard = productStandard.value}
  if (productManufacturer.value === '') {} else {product.value.manufacturer = productManufacturer.value}
  if (productField.value === '') {} else {product.value.field = productField.value}


  console.log(product.value);
  await updateProduct(productVModel.value, product.value)
}
onMounted(async () => {
  await fetchAllProducts()
    .then(() => {
      console.log('fetching')
    })
    .catch((error) => {
      console.log(error)
    })
  productsList.value = JSON.parse(localStorage.getItem('products'))
  productsListName.value = _.map(productsList.value, 'title')
})
</script>


<template>
  <div class="wrap-add-product">
    <v-form class="v-form-wrap" type="submitForm()">

      <div class="block-id-name">
        Сделать фильтр какой продукт менять
        <v-autocomplete :items="productsListName"
                        label="Product Name"
                        v-model="productVModel">

        </v-autocomplete>
      </div>

      <div class="block-title">
        <v-text-field v-model="productTitle"
                      clearable
                      label="Enter the name product"
                      type="text"
                      variant="underlined"/>
      </div>
      <div class="block-photo">
        <!--        <v-text-field v-model="productMainPhoto"-->
        <!--                      clearable-->
        <!--                      label="Enter the main photo"-->
        <!--                      variant="underlined"/>-->

        <div class="block-photo-action">
          <!--          <v-text-field v-model="productPhoto"-->
          <!--                        clearable-->
          <!--                        label="Enter the photo"-->
          <!--                        variant="underlined"/>-->
          <v-file-input
            v-model="selectedFile"
            label="Select a photo"
            accept="image/jpeg"
          ></v-file-input>
          <v-btn class="v-btn-description-li" @click="pushPhotoInArray()" elevation="0">Add photo in server</v-btn>

          <!--          <v-btn class="v-btn-photo" @click="pushPhotoInArray()">Add</v-btn>-->
          <!--          <v-btn class="v-btn-photo" @click="deletePhotoInArray()">Delete</v-btn>-->
          <!--          <v-btn class="v-btn-photo" @click="showPhotoInArray()">Show</v-btn>-->
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

          <div class="block-description-li-first">
            <v-text-field v-model="productDescriptionUl"
                          clearable
                          label="Enter a description title"
                          variant="underlined"/>
            <div class="block-description-li-actions">
              <v-btn class="v-btn-description-li" elevation="0"
                     @click="pushDescriptionLiArray">Push title and text
              </v-btn>
              <v-btn class="v-btn-description-li" elevation="0"
                     @click="deleteDescriptionLiArray">Delete title and text
              </v-btn>
            </div>
          </div>
          <div class="block-description-li-second">
            <v-text-field v-model="productDescriptionLi"
                          clearable
                          label="Enter a description text"
                          variant="underlined"/>
            <div class="block-description-li-second-actions">
              <v-btn class="v-btn-description" elevation="0"
                     @click="pushDescriptionLiValue">Push text
              </v-btn>
              <v-btn class="v-btn-description" elevation="0"
                     @click="deleteDescriptionLiValue">Delete text
              </v-btn>
            </div>
          </div>

        </div>
        <div class="block-description-p">
          <v-text-field v-model="productDescriptionP"
                        clearable
                        label="Enter a description text"
                        variant="underlined"/>

          <div class="block-description-p-actions">
            <v-btn class="v-btn-description-p" elevation="0"
                   @click="pushDescriptionPValue">Push text
            </v-btn>
            <v-btn class="v-btn-description-p" elevation="0"
                   @click="deleteDescriptionPValue">Delete text
            </v-btn>
          </div>
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

        <div class="block-feature-actions">
          <v-btn class="v-btn-description-feature" elevation="0"
                 @click="pushDescriptionFeature">Push feature
          </v-btn>
          <v-btn class="v-btn-description-feature" elevation="0"
                 @click="deleteDescriptionFeature">Delete feature
          </v-btn>
        </div>

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
        <div class="block-order-actions">
          <v-btn class="v-btn-description-order" elevation="0"
                 @click="pushDescriptionOrder">Push order
          </v-btn>
          <v-btn class="v-btn-description-order" elevation="0"
                 @click="deleteDescriptionOrder">Delete order
          </v-btn>
        </div>
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

      <v-btn class="v-btn-form-submit" @click="submitForm">Submit</v-btn>

    </v-form>

  </div>
</template>

<style scoped lang="scss">
@import '@/assets/mixins.scss';

@media screen and (max-width: 376px) {
  .wrap-add-product {
    width: 100%;
    min-height: 100vh;
  }

  .v-form-wrap {
    width: 376px;
    height: 100%;
    padding: 15px;
    margin: 0 auto;
    //background-color: grey;
  }

  .v-text-field, .v-textarea, .v-file-input {
    color: grey;
  }

  .v-checkbox {
    color: $primary;
  }

  //.block-title {
  //}

  //.block-photo {
  //}

  //.block-photo-action {
  //}

  //.v-btn-photo {
  //}

  //.block-description {
  //}

  .block-description-li {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .block-description-li-first {
    width: 100%;
  }

  .block-description-li-second {
    width: 100%;
  }

  .block-description-li-second-actions {
    display: flex;
    justify-content: space-between;
  }

  .v-btn-description {
    width: 160px;
    height: 40px;
    font-size: 0.6rem;
    transition: all 0.3s ease-in-out;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-btn-description:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }


  .v-btn-description-li {
    width: 160px;
    height: 40px;
    transition: all 0.3s ease-in-out;
    font-size: 0.6rem;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-btn-description-li:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }

  .block-description-li-actions {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .block-description-p {
    width: 100%;
    margin-top: 20px;
  }

  .block-description-p-actions {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .v-btn-description-p {
    width: 160px;
    height: 40px;
    transition: all 0.3s ease-in-out;
    font-size: 0.6rem;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-btn-description-p:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }

  .block-feature {
    width: 100%;
    margin-top: 30px;
  }

  .block-feature-actions {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .v-btn-description-feature {
    width: 160px;
    height: 40px;
    transition: all 0.3s ease-in-out;
    font-size: 0.6rem;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-btn-description-feature:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }

  .block-order {
    width: 100%;
    margin-top: 30px;
  }

  .block-order-actions {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .v-btn-description-order {
    width: 160px;
    height: 40px;
    transition: all 0.3s ease-in-out;
    font-size: 0.6rem;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-btn-description-order:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }

  .block-info {
    margin-top: 30px;
  }

  .v-btn-form-submit {
    width: 200px;
    height: 40px;
    transition: all 0.3s ease-in-out;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-btn-form-submit:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }
}

@media screen and (min-width: 376px) and (max-width: 600px) {
  .wrap-add-product {
    width: 100%;
    min-height: 100vh;
  }

  .v-form-wrap {
    width: 376px;
    height: 100%;
    padding: 15px;
    margin: 0 auto;
    //background-color: grey;
  }

  .v-text-field, .v-textarea, .v-file-input {
    color: grey;
  }

  .v-checkbox {
    color: $primary;
  }

  //.block-title {
  //}

  //.block-photo {
  //}

  //.block-photo-action {
  //}

  //.v-btn-photo {
  //}

  //.block-description {
  //}

  .block-description-li {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .block-description-li-first {
    width: 100%;
  }

  .block-description-li-second {
    width: 100%;
  }

  .block-description-li-second-actions {
    display: flex;
    justify-content: space-between;
  }

  .v-btn-description {
    width: 160px;
    height: 40px;
    font-size: 0.6rem;
    transition: all 0.3s ease-in-out;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-btn-description:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }


  .v-btn-description-li {
    width: 160px;
    height: 40px;
    transition: all 0.3s ease-in-out;
    font-size: 0.6rem;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-btn-description-li:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }

  .block-description-li-actions {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .block-description-p {
    width: 100%;
    margin-top: 20px;
  }

  .block-description-p-actions {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .v-btn-description-p {
    width: 160px;
    height: 40px;
    transition: all 0.3s ease-in-out;
    font-size: 0.6rem;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-btn-description-p:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }

  .block-feature {
    width: 100%;
    margin-top: 30px;
  }

  .block-feature-actions {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .v-btn-description-feature {
    width: 160px;
    height: 40px;
    transition: all 0.3s ease-in-out;
    font-size: 0.6rem;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-btn-description-feature:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }

  .block-order {
    width: 100%;
    margin-top: 30px;
  }

  .block-order-actions {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .v-btn-description-order {
    width: 160px;
    height: 40px;
    transition: all 0.3s ease-in-out;
    font-size: 0.6rem;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-btn-description-order:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }

  .block-info {
    margin-top: 30px;
  }

  .v-btn-form-submit {
    width: 200px;
    height: 40px;
    transition: all 0.3s ease-in-out;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-btn-form-submit:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }
}

@media screen and (min-width: 600px) and (max-width: 960px) {
  .wrap-add-product {
    width: 100%;
    min-height: 100vh;
  }

  .v-form-wrap {
    width: 600px;
    height: 100%;
    padding: 25px;
    margin: 0 auto;
    //background-color: grey;
  }

  .v-text-field, .v-textarea, .v-file-input {
    color: grey;
  }

  .v-checkbox {
    color: $primary;
  }

  //.block-title {
  //}

  //.block-photo {
  //}

  //.block-photo-action {
  //}

  //.v-btn-photo {
  //}

  //.block-description {
  //}

  .block-description-li {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .block-description-li-first {
    width: 100%;
  }

  .block-description-li-second {
    width: 100%;
  }

  .block-description-li-second-actions {
    display: flex;
    justify-content: space-between;
  }

  .v-btn-description {
    width: 180px;
    height: 40px;
    font-size: 0.7rem;
    transition: all 0.3s ease-in-out;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-btn-description:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }


  .v-btn-description-li {
    width: 180px;
    height: 40px;
    transition: all 0.3s ease-in-out;
    font-size: 0.7rem;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-btn-description-li:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }

  .block-description-li-actions {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .block-description-p {
    width: 100%;
    margin-top: 20px;
  }

  .block-description-p-actions {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .v-btn-description-p {
    width: 180px;
    height: 40px;
    font-size: 0.7rem;
    transition: all 0.3s ease-in-out;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-btn-description-p:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }

  .block-feature {
    width: 100%;
    margin-top: 30px;
  }

  .block-feature-actions {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .v-btn-description-feature {
    width: 180px;
    height: 40px;
    font-size: 0.7rem;
    transition: all 0.3s ease-in-out;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-btn-description-feature:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }

  .block-order {
    width: 100%;
    margin-top: 30px;
  }

  .block-order-actions {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .v-btn-description-order {
    width: 180px;
    height: 40px;
    font-size: 0.7rem;
    transition: all 0.3s ease-in-out;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-btn-description-order:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }

  .block-info {
    margin-top: 30px;
  }

  .v-btn-form-submit {
    width: 200px;
    height: 40px;
    transition: all 0.3s ease-in-out;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-btn-form-submit:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }
}

@media screen and (min-width: 960px) and (max-width: 1280px) {
  .wrap-add-product {
    width: 100%;
    min-height: 100vh;
  }

  .v-form-wrap {
    width: 960px;
    height: 100%;
    padding: 25px;
    margin: 0 auto;
    //background-color: grey;
  }

  .v-text-field, .v-textarea, .v-file-input {
    color: grey;
  }

  .v-checkbox {
    color: $primary;
  }

  //.block-title {
  //}

  //.block-photo {
  //}

  //.block-photo-action {
  //}

  //.v-btn-photo {
  //}

  //.block-description {
  //}

  .block-description-li {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .block-description-li-first {
    width: 45%;
  }

  .block-description-li-second {
    width: 45%;
  }

  .block-description-li-second-actions {
    display: flex;
    justify-content: space-between;
  }

  .v-btn-description {
    width: 160px;
    height: 40px;
    font-size: 0.7rem;
    transition: all 0.3s ease-in-out;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-btn-description:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }


  .v-btn-description-li {
    width: 180px;
    height: 40px;
    transition: all 0.3s ease-in-out;
    font-size: 0.7rem;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-btn-description-li:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }

  .block-description-li-actions {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .block-description-p {
    width: 100%;
    margin-top: 20px;
  }

  .block-description-p-actions {
    width: 40%;
    display: flex;
    justify-content: space-between;
  }

  .v-btn-description-p {
    width: 160px;
    height: 40px;
    font-size: 0.7rem;
    transition: all 0.3s ease-in-out;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-btn-description-p:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }

  .block-feature {
    width: 100%;
    margin-top: 30px;
  }

  .block-feature-actions {
    width: 40%;
    display: flex;
    justify-content: space-between;
  }

  .v-btn-description-feature {
    width: 160px;
    height: 40px;
    font-size: 0.7rem;
    transition: all 0.3s ease-in-out;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-btn-description-feature:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }

  .block-order {
    width: 100%;
    margin-top: 30px;
  }

  .block-order-actions {
    width: 40%;
    display: flex;
    justify-content: space-between;
  }

  .v-btn-description-order {
    width: 160px;
    height: 40px;
    font-size: 0.7rem;
    transition: all 0.3s ease-in-out;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-btn-description-order:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }

  .block-info {
    margin-top: 30px;
  }

  .v-btn-form-submit {
    width: 200px;
    height: 40px;
    transition: all 0.3s ease-in-out;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-btn-form-submit:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }
}

@media screen and (min-width: 1280px) and (max-width: 1440px) {
  .wrap-add-product {
    width: 100%;
    min-height: 100vh;
  }

  .v-form-wrap {
    width: 1100px;
    height: 100%;
    margin: 0 auto;
    //background-color: grey;
  }

  .v-text-field, .v-textarea, .v-file-input {
    color: grey;
  }

  .v-checkbox {
    color: $primary;
  }

  //.block-title {
  //}

  //.block-photo {
  //}

  //.block-photo-action {
  //}

  //.v-btn-photo {
  //}

  //.block-description {
  //}

  .block-description-li {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .block-description-li-first {
    width: 45%;
  }

  .block-description-li-second {
    width: 45%;
  }

  .block-description-li-second-actions {
    display: flex;
    justify-content: space-between;
  }

  .v-btn-description {
    width: 200px;
    height: 40px;
    transition: all 0.3s ease-in-out;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-btn-description:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }


  .v-btn-description-li {
    width: 250px;
    height: 40px;
    transition: all 0.3s ease-in-out;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-btn-description-li:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }

  .block-description-li-actions {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .block-description-p {
    width: 100%;
    margin-top: 20px;
  }

  .block-description-p-actions {
    width: 40%;
    display: flex;
    justify-content: space-between;
  }

  .v-btn-description-p {
    width: 200px;
    height: 40px;
    transition: all 0.3s ease-in-out;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-btn-description-p:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }

  .block-feature {
    width: 100%;
    margin-top: 30px;
  }

  .block-feature-actions {
    width: 40%;
    display: flex;
    justify-content: space-between;
  }

  .v-btn-description-feature {
    width: 200px;
    height: 40px;
    transition: all 0.3s ease-in-out;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-btn-description-feature:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }

  .block-order {
    width: 100%;
    margin-top: 30px;
  }

  .block-order-actions {
    width: 40%;
    display: flex;
    justify-content: space-between;
  }

  .v-btn-description-order {
    width: 200px;
    height: 40px;
    transition: all 0.3s ease-in-out;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-btn-description-order:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }

  .block-info {
    margin-top: 30px;
  }

  .v-btn-form-submit {
    width: 200px;
    height: 40px;
    transition: all 0.3s ease-in-out;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-btn-form-submit:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }
}

@media screen and (min-width: 1440px) and (max-width: 1920px) {
  .wrap-add-product {
    width: 100%;
    min-height: 100vh;
  }

  .v-form-wrap {
    width: 1300px;
    height: 100%;
    margin: 0 auto;
    //background-color: grey;
  }

  .v-text-field, .v-textarea, .v-file-input {
    color: grey;
  }

  .v-checkbox {
    color: $primary;
  }

  //.block-title {
  //}

  //.block-photo {
  //}

  //.block-photo-action {
  //}

  //.v-btn-photo {
  //}

  //.block-description {
  //}

  .block-description-li {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .block-description-li-first {
    width: 45%;
  }

  .block-description-li-second {
    width: 45%;
  }

  .block-description-li-second-actions {
    display: flex;
    justify-content: space-between;
  }

  .v-btn-description {
    width: 200px;
    height: 40px;
    transition: all 0.3s ease-in-out;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-btn-description:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }


  .v-btn-description-li {
    width: 250px;
    height: 40px;
    transition: all 0.3s ease-in-out;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-btn-description-li:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }

  .block-description-li-actions {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .block-description-p {
    width: 100%;
    margin-top: 20px;
  }

  .block-description-p-actions {
    width: 40%;
    display: flex;
    justify-content: space-between;
  }

  .v-btn-description-p {
    width: 200px;
    height: 40px;
    transition: all 0.3s ease-in-out;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-btn-description-p:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }

  .block-feature {
    width: 100%;
    margin-top: 30px;
  }

  .block-feature-actions {
    width: 40%;
    display: flex;
    justify-content: space-between;
  }

  .v-btn-description-feature {
    width: 200px;
    height: 40px;
    transition: all 0.3s ease-in-out;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-btn-description-feature:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }

  .block-order {
    width: 100%;
    margin-top: 30px;
  }

  .block-order-actions {
    width: 40%;
    display: flex;
    justify-content: space-between;
  }

  .v-btn-description-order {
    width: 200px;
    height: 40px;
    transition: all 0.3s ease-in-out;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-btn-description-order:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }

  .block-info {
    margin-top: 30px;
  }

  .v-btn-form-submit {
    width: 200px;
    height: 40px;
    transition: all 0.3s ease-in-out;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-btn-form-submit:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }
}

@media screen and (min-width: 1920px) and (max-width: 2560px) {
  .wrap-add-product {
    width: 100%;
    min-height: 100vh;
  }

  .v-form-wrap {
    width: 1600px;
    height: 100%;
    margin: 0 auto;
    //background-color: grey;
  }

  .v-text-field, .v-textarea, .v-file-input {
    color: grey;
  }

  .v-checkbox {
    color: $primary;
  }

  //.block-title {
  //}

  //.block-photo {
  //}

  //.block-photo-action {
  //}

  //.v-btn-photo {
  //}

  //.block-description {
  //}

  .block-description-li {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .block-description-li-first {
    width: 40%;
  }

  .block-description-li-second {
    width: 40%;
  }

  .block-description-li-second-actions {
    display: flex;
    justify-content: space-between;
  }

  .v-btn-description {
    width: 200px;
    height: 40px;
    transition: all 0.3s ease-in-out;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-btn-description:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }

  .v-btn-description-li {
    width: 250px;
    height: 40px;
    transition: all 0.3s ease-in-out;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-btn-description-li:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }

  .block-description-li-actions {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .block-description-p {
    width: 100%;
    margin-top: 20px;
  }

  .block-description-p-actions {
    width: 30%;
    display: flex;
    justify-content: space-between;
  }

  .v-btn-description-p {
    width: 200px;
    height: 40px;
    transition: all 0.3s ease-in-out;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-btn-description-p:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }

  .block-feature {
    width: 100%;
    margin-top: 30px;
  }

  .block-feature-actions {
    width: 30%;
    display: flex;
    justify-content: space-between;
  }

  .v-btn-description-feature {
    width: 200px;
    height: 40px;
    transition: all 0.3s ease-in-out;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-btn-description-feature:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }

  .block-order {
    width: 100%;
    margin-top: 30px;
  }

  .block-order-actions {
    width: 30%;
    display: flex;
    justify-content: space-between;
  }

  .v-btn-description-order {
    width: 200px;
    height: 40px;
    transition: all 0.3s ease-in-out;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-btn-description-order:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }

  .block-info {
    margin-top: 30px;
  }

  .v-btn-form-submit {
    width: 200px;
    height: 40px;
    transition: all 0.3s ease-in-out;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-btn-form-submit:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }
}

@media screen and (min-width: 2560px) {
  .wrap-add-product {
    width: 100%;
    min-height: 100vh;
  }

  .v-form-wrap {
    width: 1920px;
    height: 100%;
    margin: 0 auto;
    //background-color: grey;
  }

  .v-text-field, .v-textarea, .v-file-input {
    color: grey;
  }

  .v-checkbox {
    color: $primary;
  }

  //.block-title {
  //}

  //.block-photo {
  //}

  //.block-photo-action {
  //}

  //.v-btn-photo {
  //}

  //.block-description {
  //}

  .block-description-li {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .block-description-li-first {
    width: 40%;
  }

  .block-description-li-second {
    width: 40%;
  }

  .block-description-li-second-actions {
    display: flex;
    justify-content: space-between;
  }

  .v-btn-description {
    width: 200px;
    height: 40px;
    transition: all 0.3s ease-in-out;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-btn-description:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }

  .v-btn-description-li {
    width: 250px;
    height: 40px;
    transition: all 0.3s ease-in-out;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-btn-description-li:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }

  .block-description-li-actions {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .block-description-p {
    width: 100%;
    margin-top: 20px;
  }

  .block-description-p-actions {
    width: 30%;
    display: flex;
    justify-content: space-between;
  }

  .v-btn-description-p {
    width: 240px;
    height: 40px;
    transition: all 0.3s ease-in-out;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-btn-description-p:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }

  .block-feature {
    width: 100%;
    margin-top: 30px;
  }

  .block-feature-actions {
    width: 30%;
    display: flex;
    justify-content: space-between;
  }

  .v-btn-description-feature {
    width: 240px;
    height: 40px;
    transition: all 0.3s ease-in-out;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-btn-description-feature:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }

  .block-order {
    width: 100%;
    margin-top: 30px;
  }

  .block-order-actions {
    width: 30%;
    display: flex;
    justify-content: space-between;
  }

  .v-btn-description-order {
    width: 240px;
    height: 40px;
    transition: all 0.3s ease-in-out;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-btn-description-order:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }

  .block-info {
    margin-top: 30px;
  }

  .v-btn-form-submit {
    width: 200px;
    height: 40px;
    transition: all 0.3s ease-in-out;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    background-color: $primary;
  }

  .v-btn-form-submit:hover {
    transition: all 0.3s ease-in-out;
    color: $primary;
    background-color: #FFFFFF;
    border: 1px solid $primary;
  }
}


</style>
