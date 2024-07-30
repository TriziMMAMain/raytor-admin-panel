<script setup>
import {ref, onMounted} from 'vue'
import _ from 'lodash'
import {useStore} from '@/stores/index.js'

const {postImgProduct, postProduct} = useStore()

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
const productHide = ref(false)
const productStandard = ref('')
const productManufacturer = ref('')
const productField = ref('')

// Func

// Photo
// const pushPhotoInArray = () => {
//   productPhotoArray.value.push(productPhoto.value)
//   console.log('array, add ', productPhotoArray.value);
//   productPhoto.value = ''
// }
//
const selectedFile = ref(null)
const selectedFile2 = ref(null)
const selectedFile3 = ref(null)

//
const photoValid = ref(true)
const pushPhotoInArray = async () => {
  await postImgProduct(selectedFile.value, selectedFile2.value, selectedFile3.value)
    .then(() => {
      photoValid.value = false
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

const productStandardArray = ref([
  'En', 'DSTU', 'IS', 'SANS', 'Others'
])
const productManufacturerArray = ref([
  'DEZEGA SP', 'DONSORB'
])
const productFieldArray = ref([
  'SCSR', 'Closed-circuit SCBA', 'Emergency escape hoode', 'Auxiliary equipment'
])

const isValidA = ref(true)
const requiredRule = (value) => {
  if (value) {
    return true;
  } else {
    return 'Fill in the field';
  }
}
const requiredRule2 = (value) => {
  if (value) {
    isValidA.value = false
    return true;
  } else {
    isValidA.value = true
    return 'Fill in the field';
  }
}

const checkingCardInfo = ref(false)
const checkCardAbsolute = () => {
  checkingCardInfo.value = !checkingCardInfo.value
}

const descriptionLi = (text) => {
  if (text.length === 0) {
    return false
  } else {
    return true
  }
}

const descriptionTitleSecond = (order) => {
  if (order === undefined) {
    return false
  } else {
    return true
  }

}

const heightFuncInCarousel = () => {
  if (name.value === 'xs') {
    return '350'
  } else if (name.value === 'sm') {
    return '350'
  } else if (name.value === 'md') {
    return '350'
  } else if (name.value === 'lg') {
    return '400'
  } else if (name.value === 'xl') {
    return '550'
  } else if (name.value === 'xxl') {
    return '550'
  }
}

const checkingCardInfo2 = ref(true)

const checkingCardInfoBtn = () => {
  checkingCardInfo2.value = !checkingCardInfo2.value
}

const tab = ref('one')
//

const submitForm = async () => {
  product.value.title = productTitle.value
  product.value.text = productDescriptionSmallText.value
  product.value.photo = []
  product.value.textDescription = productDescriptionText.value
  product.value.textDescriptionLi = productDescriptionLiArrayMain.value
  product.value.textDescriptionP = productDescriptionPArray.value
  product.value.feature = productDescriptionFeatureArray.value
  product.value.order = productDescriptionOrderArray.value
  product.value.hide = productHide.value
  product.value.standard = productStandard.value
  product.value.manufacturer = productManufacturer.value
  product.value.field = productField.value

  // product.value.title = productTitle.value
  // product.value.description = productDescriptionText.value


  console.log(product.value);
  await postProduct(product.value)

}

</script>

<template>
  <div class="wrap-add-product">
    <v-btn @click="checkCardAbsolute()" class="v-btn-absolute">Check card</v-btn>

    <v-form class="v-form-wrap" type="submitForm()">

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
            accept="image/*"
          ></v-file-input>
          <v-file-input
            v-model="selectedFile2"
            label="Select a photo"
            accept="image/*"
          ></v-file-input>
          <v-file-input
            v-model="selectedFile3"
            label="Select a photo"
            accept="image/*"
          ></v-file-input>
          <v-btn class="v-btn-description-li" @click="pushPhotoInArray()" elevation="0">Add photo in server</v-btn>
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
                    rows="6"
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
          <v-textarea v-model="productDescriptionP"
                      clearable
                      rows="5"
                      :auto-grow="true"
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
          v-model="productHide"
          clearable
          label="Click the hide"
          variant="underlined"/>

        <v-autocomplete v-model="productStandard"
                        :items="productStandardArray"
                        :rules="[requiredRule]"
                        clearable
                        label="Enter the standard"
                        type="text"
                        variant="underlined"/>

        <v-autocomplete v-model="productManufacturer"
                        :items="productManufacturerArray"
                        :rules="[requiredRule]"
                        clearable
                        label="Enter the manufacturer"
                        type="text"
                        variant="underlined"/>

        <v-autocomplete v-model="productField"
                        :items="productFieldArray"
                        :rules="[requiredRule2]"
                        clearable
                        label="Enter the field"
                        type="text"
                        variant="underlined"/>
      </div>

      <v-btn class="v-btn-form-submit" :disabled="isValidA || photoValid" @click="submitForm">Submit</v-btn>

    </v-form>

    <div class="absolute-card" v-if="checkingCardInfo">
      <v-btn class="v-btn-info-card" @click="checkingCardInfoBtn()">SHOW</v-btn>
      <div class="card_block" v-if="checkingCardInfo2">
        <div class="photo_block">
          <img class="block_img" alt="" src="https://kalix.club/uploads/posts/2023-12/1702369213_kalix-club-p-kruglii-belii-fon-vkontakte-45.jpg">
        </div>
        <div class="card_content">
          <div class="content_title">
            <h1 class="card_title">{{ productTitle }}</h1>
          </div>
          <div class="content_text">
            <p class="card_text">{{ productDescriptionSmallText }}</p>
          </div>

        </div>
        <div class="card_actions">
          <v-btn tag="a" class="v-btn-disabled" disabled>MORE
          </v-btn>
        </div>
      </div>
      <div class="wrapProductId" v-else>

        <div class="topContent">
          <div class="topPhotoContent">
            <v-carousel
              class="topPhotoContentVCarousel"
              :height="heightFuncInCarousel()"
              progress="primary"
              show-arrows="hover"
              hide-delimiters
            >
              <v-carousel-item
                class="topPhotoContentVCarouselItem"
                v-for="(slide, i) in ['https://kalix.club/uploads/posts/2023-12/1702369213_kalix-club-p-kruglii-belii-fon-vkontakte-45.jpg', 'https://kalix.club/uploads/posts/2023-12/1702369213_kalix-club-p-kruglii-belii-fon-vkontakte-45.jpg']"
                :key="i"
              >
                <div class="imgCarouselDiv">
                  <img class="imgCarousel" :src="slide" alt="">
                </div>
              </v-carousel-item>
            </v-carousel>
          </div>
          <div class="topTextContent">
            <div class="topTextContentTitleDiv">
              <h1 class="topTextContentTitle">{{ productTitle }}</h1>
            </div>
            <div class="topTextContentSubtitleDiv">
              <p class="topTextContentSubtitle">{{ productDescriptionText }}</p>
            </div>
          </div>
        </div>

        <div class="middleContent">
          <div class="middleContentVTab">
            <v-tabs
              v-model="tab"
              color="primary"
            >
              <v-tab hide-slider
                     class="middleContentVTabDescription" value="description">Description
              </v-tab>
              <v-tab hide-slider class="middleContentVTabFeature" value="feature">Feature</v-tab>
            </v-tabs>

            <v-window v-model="tab">
              <v-window-item value="description">

                <div class="descriptionDiv">
                  <h1 class="descriptionTitle">CHARACTERISTICS AND ADVANTAGES</h1>
                  <div class="descriptionUlLiDiv" v-for="text in productDescriptionLiArrayMain">
                    <div class="descriptionLi" v-if="descriptionLi(text.textUl)">
                      <h1 class="descriptionUl">{{ text.textUl }}</h1>
                      <p class="descriptionLiText" v-for="textLi in text.textLi">
                        <v-icon class="descriptionIcon" icon="fa-regular fa-thumbs-up"></v-icon>
                        {{ textLi }}
                      </p>
                    </div>
                  </div>
                  <div class="descriptionMiddleInfoDiv">
                    <p class="descriptionMiddleInfoP" v-for="textInfo in productDescriptionPArray">{{ textInfo }}</p>
                  </div>
                </div>
                <h1 class="descriptionTitleSecond" v-if="descriptionTitleSecond(productDescriptionOrderArray)">Available for order</h1>
                <v-table class="descriptionComponentVTable" density="compact">
                  <tbody>
                  <tr
                    v-for="item in productDescriptionOrderArray"
                    :key="item"
                  >
                    <td class="descriptionVTableText">{{ item.orderText }}</td>
                    <td class="descriptionVTableValue">{{ item.orderValue }}</td>
                  </tr>
                  </tbody>
                </v-table>

              </v-window-item>
              <v-window-item value="feature">
                <div class="descriptionComponentVTableDiv">
                  <v-table class="descriptionComponentVTable" density="compact">
                    <tbody>
                    <tr
                      v-for="item in productDescriptionFeatureArray"
                      :key="item"
                    >
                      <td class="descriptionVTableText">{{ item.featureText }}</td>
                      <td class="descriptionVTableValue">{{ item.featureValue }}</td>
                    </tr>
                    </tbody>
                  </v-table>
                </div>
              </v-window-item>
              <!--          <v-window-item value="files">-->
              <!--            <h1>None</h1>-->
              <!--          </v-window-item>-->
            </v-window>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/mixins.scss';

@media screen and (max-width: 376px) {
  .wrap-add-product {
    width: 100%;
    position: relative;
    min-height: 100vh;
  }

  .v-btn-absolute {
    z-index: 5;
  }

  .absolute-card {
    width: 100%;
    min-height: 300vh;
    position: absolute;
    top: 0;
    //display: flex;
    padding-top: 50px;
    background-color: rgba(128, 128, 128, 0.76);
    backdrop-filter: blur(4px);
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

@media screen and (min-width: 376px) and (max-width: 599px) {
  .wrap-add-product {
    width: 100%;
    position: relative;
    min-height: 100vh;
  }

  .v-btn-absolute {
    z-index: 5;
  }

  .absolute-card {
    width: 100%;
    min-height: 300vh;
    position: absolute;
    top: 0;
    //display: flex;
    padding-top: 50px;
    background-color: rgba(128, 128, 128, 0.76);
    backdrop-filter: blur(4px);
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

@media screen and (min-width: 600px) and (max-width: 959px) {
  .wrap-add-product {
    width: 100%;
    position: relative;
    min-height: 100vh;
  }

  .v-btn-absolute {
    z-index: 5;
  }

  .absolute-card {
    width: 100%;
    min-height: 300vh;
    position: absolute;
    top: 0;
    //display: flex;
    padding-top: 50px;
    background-color: rgba(128, 128, 128, 0.76);
    backdrop-filter: blur(4px);
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

@media screen and (min-width: 960px) and (max-width: 1279px) {
  .wrap-add-product {
    width: 100%;
    position: relative;
    min-height: 100vh;
  }

  .v-btn-absolute {
    z-index: 5;
  }

  .absolute-card {
    width: 100%;
    min-height: 300vh;
    position: absolute;
    top: 0;
    //display: flex;
    padding-top: 50px;
    background-color: rgba(128, 128, 128, 0.76);
    backdrop-filter: blur(4px);
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

@media screen and (min-width: 1280px) and (max-width: 1439px) {
  .wrap-add-product {
    width: 100%;
    position: relative;
    min-height: 100vh;
  }

  .v-btn-absolute {
    z-index: 5;
  }

  .absolute-card {
    width: 100%;
    min-height: 300vh;
    position: absolute;
    top: 0;
    //display: flex;
    padding-top: 50px;
    background-color: rgba(128, 128, 128, 0.76);
    backdrop-filter: blur(4px);
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

@media screen and (min-width: 1440px) and (max-width: 1919px) {
  .wrap-add-product {
    width: 100%;
    position: relative;
    min-height: 100vh;
  }

  .v-btn-absolute {
    z-index: 5;
  }

  .absolute-card {
    width: 100%;
    min-height: 300vh;
    position: absolute;
    top: 0;
    //display: flex;
    padding-top: 50px;
    background-color: rgba(128, 128, 128, 0.76);
    backdrop-filter: blur(4px);
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

@media screen and (min-width: 1920px) and (max-width: 2559px) {
  .wrap-add-product {
    width: 100%;
    position: relative;
    min-height: 100vh;
  }

  .v-btn-absolute {
    z-index: 5;
  }

  .absolute-card {
    width: 100%;
    min-height: 300vh;
    position: absolute;
    top: 0;
    //display: flex;
    padding-top: 50px;
    background-color: rgba(128, 128, 128, 0.76);
    backdrop-filter: blur(4px);
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
    position: relative;
    min-height: 100vh;
  }


  .v-btn-absolute {
    z-index: 5;
  }

  .absolute-card {
    width: 100%;
    min-height: 300vh;
    position: absolute;
    top: 0;
    display: flex;
    padding-top: 50px;
    background-color: rgba(128, 128, 128, 0.76);
    backdrop-filter: blur(4px);
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


// Media Product

@media screen and (max-width: 376px) {
  .wrap_main {
    min-height: 100vh;
    margin-top: 100px;
    position: relative;
    background-color: #FFFFFF;
  }

  .title_absolute {
    width: 100vw;
    font-size: 3rem;
    font-weight: 500;
    display: flex;
    justify-content: center;
    text-align: center;
    letter-spacing: 7px;
    color: $primaryText;
  }

  // Filter

  .filter_menu {
    width: 100%;
    min-height: 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
  }

  .filter_menu_title {

    font-size: 3rem;
    font-weight: 500;
    text-align: center;
    letter-spacing: 7px;
    //color: $text;
    color: $primaryText;
  }

  .v-expansion-panels {
    margin-top: 50px;
  }

  .v-expansion-panel {

    //background-color: $text;
    background-color: #807f7f;
  }

  .v-expansion-panel-title {
    padding: 35px;
    height: 80px;
  }

  .v-expansion-panel-title-h1 {
    font-size: 1.1rem;
    font-weight: 600;
    letter-spacing: 4px;
    color: #ffffff;
  }

  .v-expansion-panel-text {
    background-color: #ECECEC;
  }

  .v-expansion-panel-text-div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  .v-expansion-panel-text-div-action {
    width: 100%;
  }

  .v-checkbox {
    width: 50%;
    font-size: 0.9rem;
    color: $primary;
  }

  .v_checkbox_label {
    font-size: 1rem;
    font-weight: 800;
    color: $primary;
  }


  // Matches

  .matches_block {
    width: 100%;
    height: 550px;
  }

  .matches_no {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .matches_title {
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 4px;
    color: $primary;
  }

  .customBtn {
    width: 170px !important;
    height: 40px !important;
    font-size: 1rem !important;
    margin-top: 50px;
  }


  // Card

  .card_catalog {
    width: 100%;
    min-height: 100vh;
    margin-top: 70px;
    margin-bottom: 70px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .card_block {
    width: 350px;
    min-height: 400px;
    margin: 40px 30px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease-in-out;
    -webkit-box-shadow: 0 5px 13px 4px rgba(136, 143, 148, 0.6);
    -moz-box-shadow: 0 5px 13px 4px rgba(136, 143, 148, 0.6);
    box-shadow: 0 0 5px 0 rgba(190, 192, 194, 0.6);
    background-color: #ffffff;
  }

  .photo_block {
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
  }

  .block_img {
    width: 60%;
    height: 100%;
  }

  .card_content {
    min-height: 200px;
    display: flex;
    flex-direction: column;
  }

  .content_title {
    width: 100%;
    min-height: 110px;
    margin-top: 20px;
  }

  .card_title {
    font-size: 1.3rem;
    font-weight: 700;
    //font-family: "Segoe UI", sans-serif;

    color: $primary;
  }

  .card_title:hover {
    cursor: pointer;
    //text-decoration: $background underline;
    text-underline-offset: 0.4rem;
  }

  .content_text {
    min-height: 170px;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .card_text {
    width: 95%;
    font-size: 0.9rem;
    font-weight: 700;
    font-family: "Segoe UI", sans-serif;

    color: $textSpan;
  }

  .card_actions {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: end;
    justify-content: left;
  }

  .v-btn-disabled {
    width: 150px;
    height: 100%;
    font-size: 1.2rem;
    font-weight: 700;
    border-radius: 0;
    letter-spacing: 7px;
    font-family: "Segoe UI", sans-serif;
    transition: all 0.3s ease-in-out;
    color: #ffffff;
    background-color: $primary;

  }

  .v-btn-disabled:hover {
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    border: 1px solid $primary;
    box-shadow: 0 0 0 0;
    color: $primary;
    background-color: #ffffff;
  }

  .card_block:hover {
    transition: all 0.3s ease-in-out;
    transform: translateY(-10px);
    -webkit-box-shadow: 0 5px 20px 10px rgba(136, 143, 148, 0.6);
    -moz-box-shadow: 0 5px 20px 10px rgba(136, 143, 148, 0.6);
    box-shadow: 0 8px 12px 0 rgba(136, 143, 148, 0.6);
  }

  // Paginator

  .paginator {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  }

  .v-pagination {
    //width: 100%;
    //font-size: 5rem;
    color: $primary;
    background-color: transparent;
  }
}

@media screen and (min-width: 376px) and (max-width: 599px) {
  .wrap_main {
    min-height: 100vh;
    margin-top: 100px;
    position: relative;
    background-color: #FFFFFF;
  }

  .title_absolute {
    width: 100vw;
    font-size: 3rem;
    font-weight: 500;
    display: flex;
    justify-content: center;
    text-align: center;
    letter-spacing: 7px;
    color: $primaryText;
  }

  // Filter

  .filter_menu {
    width: 100%;
    min-height: 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
  }

  .filter_menu_title {

    font-size: 3rem;
    font-weight: 500;
    text-align: center;
    letter-spacing: 7px;
    //color: $text;
    color: $primaryText;
  }

  .v-expansion-panels {
    margin-top: 50px;
  }

  .v-expansion-panel {

    //background-color: $text;
    background-color: #807f7f;
  }

  .v-expansion-panel-title {
    padding: 35px;
    height: 80px;
  }

  .v-expansion-panel-title-h1 {
    font-size: 1.1rem;
    font-weight: 600;
    letter-spacing: 4px;
    color: #ffffff;
  }

  .v-expansion-panel-text {
    background-color: #ECECEC;
  }

  .v-expansion-panel-text-div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  .v-expansion-panel-text-div-action {
    width: 100%;
  }

  .v-checkbox {
    width: 50%;
    font-size: 0.9rem;
    color: $primary;
  }

  .v_checkbox_label {
    font-size: 1rem;
    font-weight: 800;
    color: $primary;
  }


  // Matches

  .matches_block {
    width: 100%;
    height: 550px;
  }

  .matches_no {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .matches_title {
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 4px;
    color: $primary;
  }

  .customBtn {
    width: 170px !important;
    height: 40px !important;
    font-size: 1rem !important;
    margin-top: 50px;
  }


  // Card

  .card_catalog {
    width: 100%;
    min-height: 100vh;
    margin-top: 70px;
    margin-bottom: 70px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .card_block {
    width: 350px;
    min-height: 400px;
    margin: 40px 30px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease-in-out;
    -webkit-box-shadow: 0 5px 13px 4px rgba(136, 143, 148, 0.6);
    -moz-box-shadow: 0 5px 13px 4px rgba(136, 143, 148, 0.6);
    box-shadow: 0 0 5px 0 rgba(190, 192, 194, 0.6);
    background-color: #ffffff;
  }

  .photo_block {
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
  }

  .block_img {
    width: 60%;
    height: 100%;
  }

  .card_content {
    min-height: 200px;
    display: flex;
    flex-direction: column;
  }

  .content_title {
    width: 100%;
    min-height: 110px;
    margin-top: 20px;
  }

  .card_title {
    font-size: 1.3rem;
    font-weight: 700;
    //font-family: "Segoe UI", sans-serif;

    color: $primary;
  }

  .card_title:hover {
    cursor: pointer;
    //text-decoration: $background underline;
    text-underline-offset: 0.4rem;
  }

  .content_text {
    min-height: 170px;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .card_text {
    width: 95%;
    font-size: 0.9rem;
    font-weight: 700;
    font-family: "Segoe UI", sans-serif;

    color: $textSpan;
  }

  .card_actions {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: end;
    justify-content: left;
  }

  .v-btn-disabled {
    width: 150px;
    height: 100%;
    font-size: 1.2rem;
    font-weight: 700;
    border-radius: 0;
    letter-spacing: 7px;
    font-family: "Segoe UI", sans-serif;
    transition: all 0.3s ease-in-out;
    color: #ffffff;
    background-color: $primary;

  }

  .v-btn-disabled:hover {
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    border: 1px solid $primary;
    box-shadow: 0 0 0 0;
    color: $primary;
    background-color: #ffffff;
  }

  .card_block:hover {
    transition: all 0.3s ease-in-out;
    transform: translateY(-10px);
    -webkit-box-shadow: 0 5px 20px 10px rgba(136, 143, 148, 0.6);
    -moz-box-shadow: 0 5px 20px 10px rgba(136, 143, 148, 0.6);
    box-shadow: 0 8px 12px 0 rgba(136, 143, 148, 0.6);
  }

  // Paginator

  .paginator {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  }

  .v-pagination {
    //width: 100%;
    //font-size: 5rem;
    color: $primary;
    background-color: transparent;
  }
}

@media screen and (min-width: 600px) and (max-width: 959px) {
  .wrap_main {
    min-height: 100vh;
    margin-top: 100px;
    position: relative;
    background-color: #FFFFFF;
  }

  .title_absolute {
    width: 100vw;
    font-size: 3rem;
    font-weight: 500;
    display: flex;
    justify-content: center;
    text-align: center;
    letter-spacing: 7px;
    color: $primaryText;
  }

  // Filter

  .filter_menu {
    width: 100%;
    min-height: 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
  }

  .filter_menu_title {

    font-size: 3rem;
    font-weight: 500;
    text-align: center;
    letter-spacing: 7px;
    //color: $text;
    color: $primaryText;
  }

  .v-expansion-panels {
    margin-top: 50px;
  }

  .v-expansion-panel {

    //background-color: $text;
    background-color: #807f7f;
  }

  .v-expansion-panel-title {
    padding: 35px;
    height: 80px;
  }

  .v-expansion-panel-title-h1 {
    font-size: 1.3rem;
    font-weight: 600;
    letter-spacing: 4px;
    color: #ffffff;
  }

  .v-expansion-panel-text {
    background-color: #ECECEC;
  }

  .v-expansion-panel-text-div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  .v-expansion-panel-text-div-action {
    width: 100%;
  }

  .v-checkbox {
    width: 50%;
    font-size: 1.2rem;
    color: $primary;
  }

  .v_checkbox_label {
    font-size: 1.3rem;
    font-weight: 800;
    color: $primary;
  }


  // Matches

  .matches_block {
    width: 100%;
    height: 550px;
  }

  .matches_no {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .matches_title {
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: 4px;
    color: $primary;
  }

  .customBtn {
    width: 170px !important;
    height: 40px !important;
    font-size: 1rem !important;
    margin-top: 50px;
  }


  // Card

  .card_catalog {
    width: 100%;
    min-height: 100vh;
    margin-top: 70px;
    margin-bottom: 70px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .card_block {
    width: 400px;
    min-height: 350px;
    margin: 40px 30px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease-in-out;
    -webkit-box-shadow: 0 5px 13px 4px rgba(136, 143, 148, 0.6);
    -moz-box-shadow: 0 5px 13px 4px rgba(136, 143, 148, 0.6);
    box-shadow: 0 0 5px 0 rgba(190, 192, 194, 0.6);
    background-color: #ffffff;
  }

  .photo_block {
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
  }

  .block_img {
    width: 60%;
    height: 100%;
  }

  .card_content {
    min-height: 200px;
    display: flex;
    flex-direction: column;
  }

  .content_title {
    width: 100%;
    min-height: 110px;
    margin-top: 20px;
  }

  .card_title {
    font-size: 1.3rem;
    font-weight: 700;
    //font-family: "Segoe UI", sans-serif;

    color: $primary;
  }

  .card_title:hover {
    cursor: pointer;
    //text-decoration: $background underline;
    text-underline-offset: 0.4rem;
  }

  .content_text {
    min-height: 150px;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .card_text {
    width: 95%;
    font-size: 0.9rem;
    font-weight: 700;
    font-family: "Segoe UI", sans-serif;

    color: $textSpan;
  }

  .card_actions {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: end;
    justify-content: left;
  }

  .v-btn-disabled {
    width: 150px;
    height: 100%;
    font-size: 1.2rem;
    font-weight: 700;
    border-radius: 0;
    letter-spacing: 7px;
    font-family: "Segoe UI", sans-serif;
    transition: all 0.3s ease-in-out;
    color: #ffffff;
    background-color: $primary;

  }

  .v-btn-disabled:hover {
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    border: 1px solid $primary;
    box-shadow: 0 0 0 0;
    color: $primary;
    background-color: #ffffff;
  }

  .card_block:hover {
    transition: all 0.3s ease-in-out;
    transform: translateY(-10px);
    -webkit-box-shadow: 0 5px 20px 10px rgba(136, 143, 148, 0.6);
    -moz-box-shadow: 0 5px 20px 10px rgba(136, 143, 148, 0.6);
    box-shadow: 0 8px 12px 0 rgba(136, 143, 148, 0.6);
  }

  // Paginator

  .paginator {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  }

  .v-pagination {
    //width: 100%;
    //font-size: 5rem;
    color: $primary;
    background-color: transparent;
  }
}

@media screen and (min-width: 960px) and (max-width: 1279px) {
  .wrap_main {
    width: 80%;
    min-height: 100vh;
    margin-top: 100px;
    position: relative;
    background-color: #FFFFFF;
  }

  .title_absolute {
    width: 100vw;
    font-size: 3rem;
    font-weight: 500;
    display: flex;
    justify-content: center;
    text-align: center;
    letter-spacing: 7px;
    color: $primaryText;
  }

  // Filter

  .filter_menu {
    width: 100%;
    min-height: 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
  }

  .filter_menu_title {

    font-size: 3rem;
    font-weight: 500;
    text-align: center;
    letter-spacing: 7px;
    //color: $text;
    color: $primaryText;
  }

  .v-expansion-panels {
    margin-top: 50px;
  }

  .v-expansion-panel {

    //background-color: $text;
    background-color: #807f7f;
  }

  .v-expansion-panel-title {
    padding: 35px;
    height: 80px;
  }

  .v-expansion-panel-title-h1 {
    font-size: 1.3rem;
    font-weight: 600;
    letter-spacing: 4px;
    color: #ffffff;
  }

  .v-expansion-panel-text {
    background-color: #ECECEC;
  }

  .v-expansion-panel-text-div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  .v-expansion-panel-text-div-action {
    width: 100%;
  }

  .v-checkbox {
    width: 50%;
    font-size: 1.2rem;
    color: $primary;
  }

  .v_checkbox_label {
    font-size: 1.3rem;
    font-weight: 800;
    color: $primary;
  }


  // Matches

  .matches_block {
    width: 100%;
    height: 550px;
  }

  .matches_no {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .matches_title {
    font-size: 1.7rem;
    font-weight: 600;
    letter-spacing: 4px;
    color: $primary;
  }

  .customBtn {
    width: 170px !important;
    height: 40px !important;
    font-size: 1rem !important;
    margin-top: 50px;
  }


  // Card

  .card_catalog {
    width: 100%;
    min-height: 100vh;
    margin-top: 70px;
    margin-bottom: 70px;
    display: flex;
    justify-content: center;

    flex-wrap: wrap;
  }

  .card_block {
    width: 350px;
    min-height: 500px;
    margin: 40px 15px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease-in-out;
    -webkit-box-shadow: 0 5px 13px 4px rgba(136, 143, 148, 0.6);
    -moz-box-shadow: 0 5px 13px 4px rgba(136, 143, 148, 0.6);
    box-shadow: 0 0 5px 0 rgba(190, 192, 194, 0.6);
    background-color: #ffffff;
  }

  .photo_block {
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
  }

  .block_img {
    width: 60%;
    height: 100%;
  }

  .card_content {
    min-height: 200px;
    display: flex;
    flex-direction: column;
  }

  .content_title {
    width: 100%;
    min-height: 110px;
    margin-top: 20px;
  }

  .card_title {
    font-size: 1.3rem;
    font-weight: 700;
    //font-family: "Segoe UI", sans-serif;

    color: $primary;
  }

  .card_title:hover {
    cursor: pointer;
    //text-decoration: $background underline;
    text-underline-offset: 0.4rem;
  }

  .content_text {
    min-height: 150px;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .card_text {
    width: 95%;
    font-size: 0.9rem;
    font-weight: 700;
    font-family: "Segoe UI", sans-serif;

    color: $textSpan;
  }

  .card_actions {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: end;
    justify-content: left;
  }

  .v-btn-disabled {
    width: 150px;
    height: 100%;
    font-size: 1.2rem;
    font-weight: 700;
    border-radius: 0;
    letter-spacing: 7px;
    font-family: "Segoe UI", sans-serif;
    transition: all 0.3s ease-in-out;
    color: #ffffff;
    background-color: $primary;

  }

  .v-btn-disabled:hover {
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    border: 1px solid $primary;
    box-shadow: 0 0 0 0;
    color: $primary;
    background-color: #ffffff;
  }

  .card_block:hover {
    transition: all 0.3s ease-in-out;
    transform: translateY(-10px);
    -webkit-box-shadow: 0 5px 20px 10px rgba(136, 143, 148, 0.6);
    -moz-box-shadow: 0 5px 20px 10px rgba(136, 143, 148, 0.6);
    box-shadow: 0 8px 12px 0 rgba(136, 143, 148, 0.6);
  }

  // Paginator

  .paginator {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  }

  .v-pagination {
    //width: 100%;
    //font-size: 5rem;
    color: $primary;
    background-color: transparent;
  }
}

@media screen and (min-width: 1280px) and (max-width: 1919px) {
  .wrap_main {
    width: 80%;
    min-height: 100vh;
    margin-top: 100px;
    position: relative;
    background-color: #FFFFFF;
  }

  .title_absolute {
    width: 100vw;
    font-size: 3rem;
    font-weight: 500;
    display: flex;
    justify-content: center;
    text-align: center;
    letter-spacing: 7px;
    color: $primaryText;
  }

  // Filter

  .filter_menu {
    width: 100%;
    min-height: 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
  }

  .filter_menu_title {

    font-size: 3rem;
    font-weight: 500;
    text-align: center;
    letter-spacing: 7px;
    //color: $text;
    color: $primaryText;
  }

  .v-expansion-panels {
    margin-top: 50px;
  }

  .v-expansion-panel {

    //background-color: $text;
    background-color: #807f7f;
  }

  .v-expansion-panel-title {
    padding: 35px;
    height: 80px;
  }

  .v-expansion-panel-title-h1 {
    font-size: 1.3rem;
    font-weight: 600;
    letter-spacing: 4px;
    color: #ffffff;
  }

  .v-expansion-panel-text {
    background-color: #ECECEC;
  }

  .v-expansion-panel-text-div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  .v-expansion-panel-text-div-action {
    width: 100%;
  }

  .v-checkbox {
    width: 50%;
    font-size: 1.2rem;
    color: $primary;
  }

  .v_checkbox_label {
    font-size: 1.3rem;
    font-weight: 800;
    color: $primary;
  }

  // Matches

  .matches_block {
    width: 100%;
    height: 550px;
  }

  .matches_no {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .matches_title {
    font-size: 2.5rem;
    font-weight: 600;
    letter-spacing: 4px;
    color: $primary;
  }

  .customBtn {
    width: 170px !important;
    height: 50px !important;
    font-size: 1.3rem !important;
    margin-top: 50px;
  }


  // Card

  .card_catalog {
    width: 100%;
    min-height: 100vh;
    margin-top: 70px;
    margin-bottom: 70px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .card_block {
    width: 400px;
    min-height: 400px;
    margin: 50px 40px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease-in-out;
    -webkit-box-shadow: 0 5px 13px 4px rgba(136, 143, 148, 0.6);
    -moz-box-shadow: 0 5px 13px 4px rgba(136, 143, 148, 0.6);
    box-shadow: 0 0 5px 0 rgba(190, 192, 194, 0.6);
    background-color: #ffffff;
  }

  .photo_block {
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
  }

  .block_img {
    width: 60%;
    height: 100%;
  }

  .card_content {
    min-height: 200px;
    display: flex;
    flex-direction: column;
  }

  .content_title {
    width: 100%;
    min-height: 110px;
    margin-top: 20px;
  }

  .card_title {
    font-size: 1.3rem;
    font-weight: 700;
    //font-family: "Segoe UI", sans-serif;

    color: $primary;
  }

  .card_title:hover {
    cursor: pointer;
    //text-decoration: $background underline;
    text-underline-offset: 0.4rem;
  }

  .content_text {
    min-height: 150px;
    margin-top: 20px;
  }

  .card_text {
    width: 95%;
    font-size: 0.9rem;
    font-weight: 700;
    font-family: "Segoe UI", sans-serif;

    color: $textSpan;
  }

  .card_actions {
    width: 100%;
    height: 70px;
    display: flex;
    align-items: end;
    justify-content: left;
  }

  .v-btn-disabled {
    width: 175px;
    height: 100%;
    font-size: 1.1rem;
    font-weight: 700;
    border-radius: 0;
    letter-spacing: 7px;
    font-family: "Segoe UI", sans-serif;
    transition: all 0.3s ease-in-out;
    color: #ffffff;
    background-color: $primary;

  }

  .v-btn-disabled:hover {
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    border: 1px solid $primary;
    box-shadow: 0 0 0 0;
    color: $primary;
    background-color: #ffffff;
  }

  .card_block:hover {
    transition: all 0.3s ease-in-out;
    transform: translateY(-10px);
    -webkit-box-shadow: 0 5px 20px 10px rgba(136, 143, 148, 0.6);
    -moz-box-shadow: 0 5px 20px 10px rgba(136, 143, 148, 0.6);
    box-shadow: 0 8px 12px 0 rgba(136, 143, 148, 0.6);
  }

  // Paginator

  .paginator {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  }

  .v-pagination {
    //width: 100%;
    //font-size: 5rem;
    color: $primary;
    background-color: transparent;
  }
}

@media screen and (min-width: 1920px) and (max-width: 2559px) {

  // Card

  .card_catalog {
    width: 100%;
    min-height: 100vh;
    margin-top: 70px;
    margin-bottom: 70px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .card_block {
    width: 450px;
    height: 650px;
    margin: 70px 40px;
    padding: 35px;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease-in-out;
    -webkit-box-shadow: 0 5px 13px 4px rgba(136, 143, 148, 0.6);
    -moz-box-shadow: 0 5px 13px 4px rgba(136, 143, 148, 0.6);
    box-shadow: 0 0 5px 0 rgba(190, 192, 194, 0.6);
    background-color: #ffffff;
  }

  .photo_block {
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: center;
  }

  .block_img {
    width: 70%;
    height: 100%;
  }

  .card_content {
    min-height: 300px;
    display: flex;
    flex-direction: column;
  }

  .content_title {
    width: 100%;
    min-height: 200px;
    margin-top: 30px;
  }

  .card_title {
    font-size: 1.6rem;
    font-weight: 700;
    //font-family: "Segoe UI", sans-serif;

    color: $primary;
  }

  .card_title:hover {
    cursor: pointer;
    //text-decoration: $background underline;
    text-underline-offset: 0.4rem;
  }

  .content_text {
    min-height: 200px;
    margin-bottom: 30px;
  }

  .card_text {
    width: 95%;
    font-size: 1.1rem;
    font-weight: 700;
    font-family: "Segoe UI", sans-serif;

    color: $textSpan;
  }

  .card_actions {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: end;
    justify-content: left;
  }

  .v-btn-disabled {
    width: 150px;
    font-size: 1.5rem;
    font-weight: 700;
    border-radius: 0;
    font-family: "Segoe UI", sans-serif;
    transition: all 0.3s ease-in-out;
    color: #ffffff;
    background-color: $primary;

  }

  .v-btn-disabled:hover {
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    border: 1px solid $primary;
    box-shadow: 0 0 0 0;
    color: $primary;
    background-color: #ffffff;
  }

  .card_block:hover {
    transition: all 0.3s ease-in-out;
    transform: translateY(-10px);
    -webkit-box-shadow: 0 5px 20px 10px rgba(136, 143, 148, 0.6);
    -moz-box-shadow: 0 5px 20px 10px rgba(136, 143, 148, 0.6);
    box-shadow: 0 8px 12px 0 rgba(136, 143, 148, 0.6);

  }

  // Paginator

  .paginator {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  }

  .v-pagination {
    //width: 100%;
    //font-size: 5rem;
    color: $primary;
    background-color: transparent;
  }
}

@media screen and (min-width: 2560px) {
  // Card

  .card_catalog {
    width: 100%;
    min-height: 650px;
    margin-top: 70px;
    margin-bottom: 70px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .card_block {
    width: 450px;
    height: 650px;
    margin: 70px 80px;
    padding: 35px;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease-in-out;
    -webkit-box-shadow: 0 5px 13px 4px rgba(136, 143, 148, 0.6);
    -moz-box-shadow: 0 5px 13px 4px rgba(136, 143, 148, 0.6);
    box-shadow: 0 0 5px 0 rgba(190, 192, 194, 0.6);
    background-color: #ffffff;
  }

  .photo_block {
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: center;
  }

  .block_img {
    width: 70%;
    height: 100%;
  }

  .card_content {
    min-height: 130px;
    display: flex;
    flex-direction: column;
  }

  .content_title {
    width: 100%;
    min-height: 130px;
    margin-top: 30px;
  }

  .card_title {
    font-size: 1.6rem;
    font-weight: 700;
    //font-family: "Segoe UI", sans-serif;

    color: $primary;
  }

  .card_title:hover {
    cursor: pointer;
    //text-decoration: $background underline;
    text-underline-offset: 0.4rem;
  }

  .content_text {
    min-height: 200px;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .card_text {
    width: 95%;
    font-size: 1.1rem;
    font-weight: 700;
    font-family: "Segoe UI", sans-serif;

    color: $textSpan;
  }

  .card_actions {
    width: 100%;
    min-height: 50px;
    display: flex;
    align-items: end;
    justify-content: left;
  }

  .v-btn-disabled {
    width: 150px;
    font-size: 1.3rem;
    font-weight: 700;
    border-radius: 0;
    font-family: "Segoe UI", sans-serif;
    transition: all 0.3s ease-in-out;
    color: #ffffff;
    background-color: $primary;

  }

  .v-btn-disabled:hover {
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    border: 1px solid $primary;
    box-shadow: 0 0 0 0;
    color: $primary;
    background-color: #ffffff;
  }

  .card_block:hover {
    transition: all 0.3s ease-in-out;
    transform: translateY(-10px);
    -webkit-box-shadow: 0 5px 20px 10px rgba(136, 143, 148, 0.6);
    -moz-box-shadow: 0 5px 20px 10px rgba(136, 143, 148, 0.6);
    box-shadow: 0 8px 12px 0 rgba(136, 143, 148, 0.6);
  }

  // Paginator

  .paginator {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  }

  .v-pagination {
    //width: 100%;
    //font-size: 5rem;
    color: $primary;
    background-color: transparent;
  }
}


// Media Product ID


@media screen and (max-width: 376px) {

  .wrapProductId {
    width: 95%;
    min-height: 100vh;
    padding: 0;
    margin: 0 auto 50px;
  }

  // top

  .topContent {
    width: 100%;
    min-height: 50vh;
    margin-top: 10vh;
    display: flex;
    flex-direction: column;
    //background-color: rgba(182, 181, 181, 0.45);
    background: transparent;
  }


  .topPhotoContent {
    width: 100%;
    min-height: 450px;
    background-color: #FFFFFF;
  }

  .topPhotoContentVCarousel {
    width: 100%;
  }

  .topPhotoContentVCarouselItem {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .imgCarouselDiv {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .imgCarousel {
    width: 60%;
  }

  // Top

  .topTextContent {
    width: 100%;
    min-height: 350px;
    background-color: #FFFFFF;

  }

  .topTextContentTitleDiv {
    width: 100%;
    min-height: 15%;
    padding: 10px;
    text-align: center;
    //background-color: rgba(142, 142, 142, 0.47);
  }

  .topTextContentTitle {
    font-size: 1.3rem;
    font-weight: 580;
    line-height: 1.3;
    color: $primary;

  }

  .topTextContentSubtitleDiv {
    width: 100%;
    min-height: 45%;
    padding: 10px;
  }

  .topTextContentSubtitle {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.6;
    color: $primary;
  }

  // middle

  .middleContent {
    width: 100%;
    min-height: 50vh;
    margin-top: 35px;
    //background-color: red;
    background-color: rgba(236, 236, 236, 0.65);
  }

  .middleContentVTab {
    width: 100%;
  }

  .v-tabs--density-default {
    --v-tabs-height: 50px;
  }

  .middleContentVTabDescription, .middleContentVTabFeature, .middleContentVTabFiles {
    width: 50%;
    color: $surface;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 4px;
  }

  //.middleContentVTabDescription {
  //  width: 35%;
  //}
  //
  //.middleContentVTabFeature {
  //  width: 30%;
  //}
  //
  //.middleContentVTabFiles {
  //  width: 35%
  //}

  .v-window {
    transition: none !important;
    padding: 15px;
  }

  .v-window-item, .v-window-item--active {
    transition: none !important;
  }

  .descriptionDiv {
    width: 100%;
    min-height: 10vh;
    display: flex;
    flex-direction: column;
  }

  .descriptionTitle {
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 2px;
    text-align: center;
    color: $surface;
  }

  .descriptionUlLiDiv {
    width: 100%;
    margin-top: 10px;
  }

  .descriptionLi {
    width: 100%;
  }

  .descriptionUl {
    font-size: 1.3rem;
    font-weight: 550;
    letter-spacing: 1px;
    color: $primary;
  }

  .descriptionLiText {
    margin-top: 4px;
    font-size: 1rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    color: $background;
  }

  .descriptionIcon {
    font-size: 1rem;
    margin-right: 7px;
    color: $primary;
  }

  .descriptionMiddleInfoDiv {
    width: 100%;
    margin-top: 30px;
  }

  .descriptionMiddleInfoP {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5;
    color: $background;
  }

  //

  .descriptionTitleSecond {
    font-size: 1.3rem;
    font-weight: 600;
    letter-spacing: 2px;
    margin: 40px 0 40px 0;
    color: $surface;
  }

  .descriptionComponentVTableDiv {
    width: 100%;
    margin-top: 10px;
  }

  .descriptionComponentVTable {
    color: $primary;
    background-color: rgba(223, 222, 222, 0.68);
  }

  .v-table > .v-table__wrapper > table > tbody > tr > td, .v-table > .v-table__wrapper > table > thead > tr > td, .v-table > .v-table__wrapper > table > tfoot > tr > td {
    font-size: 1rem;
  }

  .v-table--density-compact > .v-table__wrapper > table > tbody > tr > td, .v-table--density-compact > .v-table__wrapper > table > thead > tr > td, .v-table--density-compact > .v-table__wrapper > table > tfoot > tr > td {
    height: 50px;
  }

}

@media screen and (min-width: 376px) and (max-width: 599px) {

  .wrapProductId {
    width: 95%;
    min-height: 100vh;
    padding: 0;
    margin: 0 auto 50px;
  }

  // top

  .topContent {
    width: 100%;
    min-height: 50vh;
    margin-top: 10vh;
    display: flex;
    flex-direction: column;
    //background-color: rgba(182, 181, 181, 0.45);
    background: transparent;
  }


  .topPhotoContent {
    width: 100%;
    min-height: 450px;
    background-color: #FFFFFF;
  }

  .topPhotoContentVCarousel {
    width: 100%;
  }

  .topPhotoContentVCarouselItem {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .imgCarouselDiv {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .imgCarousel {
    width: 60%;
  }

  // Top

  .topTextContent {
    width: 100%;
    min-height: 350px;
    background-color: #FFFFFF;

  }

  .topTextContentTitleDiv {
    width: 100%;
    min-height: 15%;
    padding: 10px;
    text-align: center;
    //background-color: rgba(142, 142, 142, 0.47);
  }

  .topTextContentTitle {
    font-size: 1.3rem;
    font-weight: 580;
    line-height: 1.3;
    color: $primary;

  }

  .topTextContentSubtitleDiv {
    width: 100%;
    min-height: 45%;
    padding: 10px;
  }

  .topTextContentSubtitle {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.6;
    color: $primary;
  }

  // middle

  .middleContent {
    width: 100%;
    min-height: 50vh;
    margin-top: 35px;
    //background-color: red;
    background-color: rgba(236, 236, 236, 0.65);
  }

  .middleContentVTab {
    width: 100%;
  }

  .v-tabs--density-default {
    --v-tabs-height: 50px;
  }

  .middleContentVTabDescription, .middleContentVTabFeature, .middleContentVTabFiles {
    width: 50%;
    color: $surface;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 4px;
  }

  //.middleContentVTabDescription {
  //  width: 35%;
  //}
  //
  //.middleContentVTabFeature {
  //  width: 30%;
  //}
  //
  //.middleContentVTabFiles {
  //  width: 35%
  //}

  .v-window {
    transition: none !important;
    padding: 15px;
  }

  .v-window-item, .v-window-item--active {
    transition: none !important;
  }

  .descriptionDiv {
    width: 100%;
    min-height: 10vh;
    display: flex;
    flex-direction: column;
  }

  .descriptionTitle {
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 2px;
    text-align: center;
    color: $surface;
  }

  .descriptionUlLiDiv {
    width: 100%;
    margin-top: 10px;
  }

  .descriptionLi {
    width: 100%;
  }

  .descriptionUl {
    font-size: 1.3rem;
    font-weight: 550;
    letter-spacing: 1px;
    color: $primary;
  }

  .descriptionLiText {
    margin-top: 4px;
    font-size: 1rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    color: $background;
  }

  .descriptionIcon {
    font-size: 1rem;
    margin-right: 7px;
    color: $primary;
  }

  .descriptionMiddleInfoDiv {
    width: 100%;
    margin-top: 30px;
  }

  .descriptionMiddleInfoP {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5;
    color: $background;
  }

  //

  .descriptionTitleSecond {
    font-size: 1.3rem;
    font-weight: 600;
    letter-spacing: 2px;
    margin: 40px 0 40px 0;
    color: $surface;
  }

  .descriptionComponentVTableDiv {
    width: 100%;
    margin-top: 10px;
  }

  .descriptionComponentVTable {
    color: $primary;
    background-color: rgba(223, 222, 222, 0.68);
  }

  .v-table > .v-table__wrapper > table > tbody > tr > td, .v-table > .v-table__wrapper > table > thead > tr > td, .v-table > .v-table__wrapper > table > tfoot > tr > td {
    font-size: 1rem;
  }

  .v-table--density-compact > .v-table__wrapper > table > tbody > tr > td, .v-table--density-compact > .v-table__wrapper > table > thead > tr > td, .v-table--density-compact > .v-table__wrapper > table > tfoot > tr > td {
    height: 50px;
  }

}

@media screen and (min-width: 600px) and (max-width: 959px) {

  .wrapProductId {
    width: 90%;
    min-height: 100vh;
    padding: 0;
    margin: 0 auto 50px;
  }

  // top

  .topContent {
    width: 100%;
    min-height: 50vh;
    margin-top: 10vh;
    display: flex;
    flex-direction: column;
    //background-color: rgba(182, 181, 181, 0.45);
    background: transparent;
  }


  .topPhotoContent {
    width: 100%;
    min-height: 450px;
    background-color: #FFFFFF;
  }

  .topPhotoContentVCarousel {
    width: 100%;
  }

  .topPhotoContentVCarouselItem {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .imgCarouselDiv {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .imgCarousel {
    width: 45%;
  }

  // Top

  .topTextContent {
    width: 100%;
    min-height: 350px;
    background-color: #FFFFFF;

  }

  .topTextContentTitleDiv {
    width: 100%;
    min-height: 15%;
    padding: 10px;
    text-align: center;
    //background-color: rgba(142, 142, 142, 0.47);
  }

  .topTextContentTitle {
    font-size: 1.5rem;
    font-weight: 580;
    line-height: 1.3;
    color: $primary;

  }

  .topTextContentSubtitleDiv {
    width: 100%;
    min-height: 45%;
    padding: 10px;
  }

  .topTextContentSubtitle {
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 1.6;
    color: $primary;
  }

  // middle

  .middleContent {
    width: 100%;
    min-height: 50vh;
    margin-top: 35px;
    //background-color: red;
    background-color: rgba(236, 236, 236, 0.65);
  }

  .middleContentVTab {
    width: 100%;
  }

  .v-tabs--density-default {
    --v-tabs-height: 50px;
  }

  .middleContentVTabDescription, .middleContentVTabFeature, .middleContentVTabFiles {
    width: 50%;
    color: $surface;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 4px;
  }

  //.middleContentVTabDescription {
  //  width: 35%;
  //}
  //
  //.middleContentVTabFeature {
  //  width: 30%;
  //}
  //
  //.middleContentVTabFiles {
  //  width: 35%
  //}

  .v-window {
    transition: none !important;
    padding: 30px;
  }

  .v-window-item, .v-window-item--active {
    transition: none !important;
  }

  .descriptionDiv {
    width: 100%;
    min-height: 10vh;
    display: flex;
    flex-direction: column;
  }

  .descriptionTitle {
    font-size: 1.1rem;
    font-weight: 500;
    letter-spacing: 4px;
    text-align: center;
    color: $surface;
  }

  .descriptionUlLiDiv {
    width: 100%;
    margin-top: 10px;
  }

  .descriptionLi {
    width: 100%;
  }

  .descriptionUl {
    font-size: 1.4rem;
    font-weight: 550;
    letter-spacing: 1px;
    color: $primary;
  }

  .descriptionLiText {
    margin-top: 4px;
    font-size: 1rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    color: $background;
  }

  .descriptionIcon {
    font-size: 1rem;
    margin-right: 7px;
    color: $primary;
  }

  .descriptionMiddleInfoDiv {
    width: 100%;
    margin-top: 30px;
  }

  .descriptionMiddleInfoP {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5;
    color: $background;
  }

  //

  .descriptionTitleSecond {
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 2px;
    margin: 40px 0 40px 0;
    color: $surface;
  }

  .descriptionComponentVTableDiv {
    width: 100%;
    margin-top: 10px;
  }

  .descriptionComponentVTable {
    color: $primary;
    background-color: rgba(223, 222, 222, 0.68);
  }

  .v-table > .v-table__wrapper > table > tbody > tr > td, .v-table > .v-table__wrapper > table > thead > tr > td, .v-table > .v-table__wrapper > table > tfoot > tr > td {
    font-size: 1rem;
  }

  .v-table--density-compact > .v-table__wrapper > table > tbody > tr > td, .v-table--density-compact > .v-table__wrapper > table > thead > tr > td, .v-table--density-compact > .v-table__wrapper > table > tfoot > tr > td {
    height: 50px;
  }

}

@media screen and (min-width: 960px) and (max-width: 1279px) {

  .wrapProductId {
    width: 90%;
    min-height: 100vh;
    padding: 0;
    margin: 0 auto 50px;
  }

  // top

  .topContent {
    width: 100%;
    min-height: 50vh;
    margin-top: 10vh;
    display: flex;
    align-items: center;

    justify-content: space-between;


    //background-color: rgba(182, 181, 181, 0.45);
    background: transparent;
  }


  .topPhotoContent {
    width: 50%;
    min-height: 450px;
    margin: 20px;
    background-color: #FFFFFF;
  }

  .topPhotoContentVCarousel {
    width: 100%;
  }

  .topPhotoContentVCarouselItem {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .imgCarouselDiv {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .imgCarousel {
    width: 60%;
  }

  // Top

  .topTextContent {
    width: 50%;
    margin: 20px;
    min-height: 350px;
    background-color: #FFFFFF;

  }

  .topTextContentTitleDiv {
    width: 100%;
    min-height: 15%;
    padding: 10px;
    text-align: center;
    //background-color: rgba(142, 142, 142, 0.47);
  }

  .topTextContentTitle {
    font-size: 1.5rem;
    font-weight: 580;
    line-height: 1.3;
    color: $primary;

  }

  .topTextContentSubtitleDiv {
    width: 100%;
    min-height: 45%;
    padding: 10px;
  }

  .topTextContentSubtitle {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.7;
    color: $primary;
  }

  // middle

  .middleContent {
    width: 100%;
    min-height: 50vh;
    margin-top: 35px;
    //background-color: red;
    background-color: rgba(236, 236, 236, 0.65);
  }

  .middleContentVTab {
    width: 100%;
  }

  .v-tabs--density-default {
    --v-tabs-height: 50px;
  }

  .middleContentVTabDescription, .middleContentVTabFeature, .middleContentVTabFiles {
    width: 50%;
    color: $surface;
    font-size: 1.1rem;
    font-weight: 600;
    letter-spacing: 4px;
  }

  //.middleContentVTabDescription {
  //  width: 30%;
  //}
  //
  //.middleContentVTabFeature {
  //  width: 40%;
  //}
  //
  //.middleContentVTabFiles {
  //  width: 30%
  //}

  .v-window {
    transition: none !important;
    padding: 30px;
  }

  .v-window-item, .v-window-item--active {
    transition: none !important;
  }

  .descriptionDiv {
    width: 100%;
    min-height: 10vh;
    display: flex;
    flex-direction: column;
  }

  .descriptionTitle {
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: 4px;
    text-align: center;
    color: $surface;
  }

  .descriptionUlLiDiv {
    width: 100%;
    margin-top: 10px;
  }

  .descriptionLi {
    width: 100%;
  }

  .descriptionUl {
    font-size: 1.5rem;
    font-weight: 550;
    letter-spacing: 1px;
    color: $primary;
  }

  .descriptionLiText {
    margin-top: 4px;
    font-size: 1rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    color: $background;
  }

  .descriptionIcon {
    font-size: 1rem;
    margin-right: 7px;
    color: $primary;
  }

  .descriptionMiddleInfoDiv {
    width: 100%;
    margin-top: 30px;
  }

  .descriptionMiddleInfoP {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5;
    color: $background;
  }

  //

  .descriptionTitleSecond {
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 2px;
    margin: 40px 0 40px 0;
    color: $surface;
  }

  .descriptionComponentVTableDiv {
    width: 100%;
    margin-top: 10px;
  }

  .descriptionComponentVTable {
    color: $primary;
    background-color: rgba(223, 222, 222, 0.68);
  }

  .v-table > .v-table__wrapper > table > tbody > tr > td, .v-table > .v-table__wrapper > table > thead > tr > td, .v-table > .v-table__wrapper > table > tfoot > tr > td {
    font-size: 1rem;
  }

  .v-table--density-compact > .v-table__wrapper > table > tbody > tr > td, .v-table--density-compact > .v-table__wrapper > table > thead > tr > td, .v-table--density-compact > .v-table__wrapper > table > tfoot > tr > td {
    height: 50px;
  }

}

@media screen and (min-width: 1280px) and (max-width: 1439px) {

  .wrapProductId {
    width: 90%;
    min-height: 100vh;
    padding: 0;
    margin: 0 auto 50px;
  }

  // top

  .topContent {
    width: 100%;
    min-height: 60vh;
    margin-top: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;


    //background-color: rgba(182, 181, 181, 0.45);
    background: transparent;
  }


  .topPhotoContent {
    width: 50%;
    min-height: 450px;
    margin: 20px;
    background-color: #FFFFFF;
  }

  .topPhotoContentVCarousel {
    width: 100%;
  }

  .topPhotoContentVCarouselItem {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .imgCarouselDiv {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .imgCarousel {
    width: 60%;
  }

  // Top

  .topTextContent {
    width: 50%;
    margin: 20px;
    min-height: 350px;
    background-color: #FFFFFF;

  }

  .topTextContentTitleDiv {
    width: 100%;
    min-height: 15%;
    padding: 10px;
    text-align: center;
    //background-color: rgba(142, 142, 142, 0.47);
  }

  .topTextContentTitle {
    font-size: 1.7rem;
    font-weight: 580;
    line-height: 1.3;
    color: $primary;

  }

  .topTextContentSubtitleDiv {
    width: 100%;
    min-height: 45%;
    padding: 10px;
  }

  .topTextContentSubtitle {
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1.5;
    color: $primary;
  }

  // middle

  .middleContent {
    width: 100%;
    min-height: 50vh;
    margin-top: 35px;
    //background-color: red;
    background-color: rgba(236, 236, 236, 0.65);
  }

  .middleContentVTab {
    width: 100%;
  }

  .v-tabs--density-default {
    --v-tabs-height: 50px;
  }

  .middleContentVTabDescription, .middleContentVTabFeature, .middleContentVTabFiles {
    width: 50%;
    color: $surface;
    font-size: 1.1rem;
    font-weight: 600;
    letter-spacing: 4px;
  }

  //.middleContentVTabDescription {
  //  width: 30%;
  //}
  //
  //.middleContentVTabFeature {
  //  width: 40%;
  //}
  //
  //.middleContentVTabFiles {
  //  width: 30%
  //}

  .v-window {
    transition: none !important;
    padding: 30px;
  }

  .v-window-item, .v-window-item--active {
    transition: none !important;
  }

  .descriptionDiv {
    width: 100%;
    min-height: 10vh;
    display: flex;
    flex-direction: column;
  }

  .descriptionTitle {
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: 4px;
    text-align: center;
    color: $surface;
  }

  .descriptionUlLiDiv {
    width: 100%;
    margin-top: 10px;
  }

  .descriptionLi {
    width: 100%;
  }

  .descriptionUl {
    font-size: 1.5rem;
    font-weight: 550;
    letter-spacing: 1px;
    color: $primary;
  }

  .descriptionLiText {
    margin-top: 4px;
    font-size: 1rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    color: $background;
  }

  .descriptionIcon {
    font-size: 1rem;
    margin-right: 7px;
    color: $primary;
  }

  .descriptionMiddleInfoDiv {
    width: 100%;
    margin-top: 30px;
  }

  .descriptionMiddleInfoP {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5;
    color: $background;
  }

  //

  .descriptionTitleSecond {
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 2px;
    margin: 40px 0 40px 0;
    color: $surface;
  }

  .descriptionComponentVTableDiv {
    width: 100%;
    margin-top: 10px;
  }

  .descriptionComponentVTable {
    color: $primary;
    background-color: rgba(223, 222, 222, 0.68);
  }

  .v-table > .v-table__wrapper > table > tbody > tr > td, .v-table > .v-table__wrapper > table > thead > tr > td, .v-table > .v-table__wrapper > table > tfoot > tr > td {
    font-size: 1rem;
  }

  .v-table--density-compact > .v-table__wrapper > table > tbody > tr > td, .v-table--density-compact > .v-table__wrapper > table > thead > tr > td, .v-table--density-compact > .v-table__wrapper > table > tfoot > tr > td {
    height: 50px;
  }

}

@media screen and (min-width: 1440px) and (max-width: 1919px) {

  .wrapProductId {
    width: 90%;
    min-height: 100vh;
    padding: 0;
    margin: 0 auto 50px;
  }

  // top

  .topContent {
    width: 100%;
    min-height: 60vh;
    margin-top: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;


    //background-color: rgba(182, 181, 181, 0.45);
    background: transparent;
  }


  .topPhotoContent {
    width: 50%;
    min-height: 450px;
    margin: 20px;
    background-color: #FFFFFF;
  }

  .topPhotoContentVCarousel {
    width: 100%;
  }

  .topPhotoContentVCarouselItem {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .imgCarouselDiv {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .imgCarousel {
    width: 60%;
  }

  // Top

  .topTextContent {
    width: 50%;
    margin: 20px;
    min-height: 350px;
    background-color: #FFFFFF;

  }

  .topTextContentTitleDiv {
    width: 100%;
    min-height: 15%;
    padding: 10px;
    text-align: center;
    //background-color: rgba(142, 142, 142, 0.47);
  }

  .topTextContentTitle {
    font-size: 1.7rem;
    font-weight: 580;
    line-height: 1.3;
    color: $primary;

  }

  .topTextContentSubtitleDiv {
    width: 100%;
    min-height: 45%;
    padding: 10px;
  }

  .topTextContentSubtitle {
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1.5;
    color: $primary;
  }

  // middle

  .middleContent {
    width: 100%;
    min-height: 50vh;
    margin-top: 35px;
    //background-color: red;
    background-color: rgba(236, 236, 236, 0.65);
  }

  .middleContentVTab {
    width: 100%;
  }

  .v-tabs--density-default {
    --v-tabs-height: 50px;
  }

  .middleContentVTabDescription, .middleContentVTabFeature, .middleContentVTabFiles {
    width: 50%;
    color: $surface;
    font-size: 1.1rem;
    font-weight: 600;
    letter-spacing: 4px;
  }

  //.middleContentVTabDescription {
  //  width: 30%;
  //}

  //.middleContentVTabFeature {
  //  width: 40%;
  //}

  //.middleContentVTabFiles {
  //  width: 30%
  //}

  .v-window {
    transition: none !important;
    padding: 30px;
  }

  .v-window-item, .v-window-item--active {
    transition: none !important;
  }

  .descriptionDiv {
    width: 100%;
    min-height: 10vh;
    display: flex;
    flex-direction: column;
  }

  .descriptionTitle {
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: 4px;
    text-align: center;
    color: $surface;
  }

  .descriptionUlLiDiv {
    width: 100%;
    margin-top: 10px;
  }

  .descriptionLi {
    width: 100%;
  }

  .descriptionUl {
    font-size: 1.5rem;
    font-weight: 550;
    letter-spacing: 1px;
    color: $primary;
  }

  .descriptionLiText {
    margin-top: 4px;
    font-size: 1rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    color: $background;
  }

  .descriptionIcon {
    font-size: 1rem;
    margin-right: 7px;
    color: $primary;
  }

  .descriptionMiddleInfoDiv {
    width: 100%;
    margin-top: 30px;
  }

  .descriptionMiddleInfoP {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5;
    color: $background;
  }

  //

  .descriptionTitleSecond {
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 2px;
    margin: 40px 0 40px 0;
    color: $surface;
  }

  .descriptionComponentVTableDiv {
    width: 100%;
    margin-top: 10px;
  }

  .descriptionComponentVTable {
    color: $primary;
    background-color: rgba(223, 222, 222, 0.68);
  }

  .v-table > .v-table__wrapper > table > tbody > tr > td, .v-table > .v-table__wrapper > table > thead > tr > td, .v-table > .v-table__wrapper > table > tfoot > tr > td {
    font-size: 1rem;
  }

  .v-table--density-compact > .v-table__wrapper > table > tbody > tr > td, .v-table--density-compact > .v-table__wrapper > table > thead > tr > td, .v-table--density-compact > .v-table__wrapper > table > tfoot > tr > td {
    height: 50px;
  }

}

@media screen and (min-width: 1920px) and (max-width: 2559px) {

  .wrapProductId {
    width: 1620px;
    min-height: 100vh;
    padding: 0;
    margin: 0 auto 50px;
  }

  // top

  .topContent {
    width: 100%;
    min-height: 65vh;
    display: flex;
    align-items: center;

    justify-content: space-between;


    //background-color: rgba(182, 181, 181, 0.45);
    background: transparent;
  }


  .topPhotoContent {
    width: 50%;
    min-height: 450px;
    margin: 20px;
    background-color: #FFFFFF;
  }

  .topPhotoContentVCarousel {
    width: 100%;
  }

  .topPhotoContentVCarouselItem {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .imgCarouselDiv {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .imgCarousel {
    width: 60%;
  }

  // Top

  .topTextContent {
    width: 50%;
    margin: 20px;
    min-height: 350px;
    background-color: #FFFFFF;

  }

  .topTextContentTitleDiv {
    width: 100%;
    min-height: 25%;
    padding: 15px;
    text-align: center;
    //background-color: rgba(142, 142, 142, 0.47);
  }

  .topTextContentTitle {
    font-size: 2.2rem;
    font-weight: 580;
    line-height: 1.3;
    color: $primary;

  }

  .topTextContentSubtitleDiv {
    width: 100%;
    min-height: 45%;
    margin-top: 1%;
    padding: 15px;
  }

  .topTextContentSubtitle {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.5;
    color: $primary;
  }

  // middle

  .middleContent {
    width: 100%;
    min-height: 35vh;
    margin-top: 35px;
    //background-color: red;
    background-color: rgba(236, 236, 236, 0.65);
  }

  .middleContentVTab {
    width: 100%;
  }

  .v-tabs--density-default {
    --v-tabs-height: 80px;
  }

  .middleContentVTabDescription, .middleContentVTabFeature, .middleContentVTabFiles {
    width: 50%;
    color: $surface;
    font-size: 1.7rem;
    font-weight: 600;
    letter-spacing: 4px;
  }

  //.middleContentVTabDescription {
  //  width: 30%;
  //}

  //.middleContentVTabFeature {
  //  width: 40%;
  //}

  .middleContentVTabFiles {
    width: 30%
  }

  .v-window {
    transition: none !important;
    padding: 30px;
  }

  .v-window-item, .v-window-item--active {
    transition: none !important;
  }

  .descriptionDiv {
    width: 100%;
    min-height: 10vh;
    display: flex;
    flex-direction: column;
  }

  .descriptionTitle {
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: 4px;
    text-align: center;
    color: $surface;
  }

  .descriptionUlLiDiv {
    width: 100%;
    margin-top: 10px;
  }

  .descriptionLi {
    width: 100%;
  }

  .descriptionUl {
    font-size: 2rem;
    font-weight: 550;
    letter-spacing: 1px;
    color: $primary;
  }

  .descriptionLiText {
    margin-top: 4px;
    font-size: 1.5rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    color: $background;
  }

  .descriptionIcon {
    font-size: 1rem;
    margin-right: 7px;
    color: $primary;
  }

  .descriptionMiddleInfoDiv {
    width: 100%;
    margin-top: 30px;
  }

  .descriptionMiddleInfoP {
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 1.5;
    color: $background;
  }

  //

  .descriptionTitleSecond {
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: 2px;
    margin: 40px 0 40px 0;
    color: $surface;
  }

  .descriptionComponentVTableDiv {
    width: 100%;
    margin-top: 10px;
  }

  .descriptionComponentVTable {
    color: $primary;
    background-color: rgba(223, 222, 222, 0.68);
  }

  .v-table > .v-table__wrapper > table > tbody > tr > td, .v-table > .v-table__wrapper > table > thead > tr > td, .v-table > .v-table__wrapper > table > tfoot > tr > td {
    font-size: 1.7rem;
  }

  .v-table--density-compact > .v-table__wrapper > table > tbody > tr > td, .v-table--density-compact > .v-table__wrapper > table > thead > tr > td, .v-table--density-compact > .v-table__wrapper > table > tfoot > tr > td {
    height: 80px;
  }

}

@media screen and (min-width: 2560px) {

  .wrapProductId {
    width: 1920px;
    min-height: 100vh;
    padding: 0;
    margin-bottom: 100px;
    //box-shadow: 0 15px 20px 1px rgba(46, 46, 46, 0.75);
  }

  // top

  .topContent {
    width: 100%;
    //min-height: 45vh;
    display: flex;
    align-items: center;
    justify-content: space-between;


    //background-color: rgba(182, 181, 181, 0.45);
    background: transparent;
  }


  .topPhotoContent {
    width: 50%;
    min-height: 350px;
    margin: 20px;
    background-color: #FFFFFF;
  }

  .topPhotoContentVCarousel {
    width: 100%;
  }

  .topPhotoContentVCarouselItem {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .imgCarouselDiv {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .imgCarousel {
    width: 60%;
  }

  // Top

  .topTextContent {
    width: 50%;
    margin: 20px;
    min-height: 350px;
    background-color: #FFFFFF;

  }

  .topTextContentTitleDiv {
    width: 100%;
    min-height: 25%;
    padding: 15px;
    text-align: center;
    //background-color: rgba(142, 142, 142, 0.47);
  }

  .topTextContentTitle {
    font-size: 2rem;
    font-weight: 580;
    line-height: 1.3;
    color: $primary;

  }

  .topTextContentSubtitleDiv {
    width: 100%;
    min-height: 45%;
    margin-top: 5%;
    padding: 15px;
  }

  .topTextContentSubtitle {
    font-size: 1.3rem;
    font-weight: 500;
    line-height: 1.5;
    color: $primary;
  }

  // middle

  .middleContent {
    width: 100%;
    min-height: 35vh;
    margin-top: 35px;
    //background-color: red;
    background-color: rgba(236, 236, 236, 0.65);
  }

  .middleContentVTab {
    width: 100%;
  }

  .v-tabs--density-default {
    --v-tabs-height: 80px;
  }
  //!
  .middleContentVTabDescription, .middleContentVTabFeature, .middleContentVTabFiles {
    width: 50%;
    color: $surface;
    font-size: 1.7rem;
    font-weight: 600;
    letter-spacing: 4px;
  }

  //.middleContentVTabDescription {
  //  width: 30%;
  //}

  //.middleContentVTabFeature {
  //  width: 40%;
  //}

  //.middleContentVTabFiles {
  //  width: 30%
  //}

  .v-window {
    transition: none !important;
    padding: 30px;
  }

  .v-window-item, .v-window-item--active {
    transition: none !important;
  }

  .descriptionDiv {
    width: 100%;
    min-height: 10vh;
    display: flex;
    flex-direction: column;
  }

  .descriptionTitle {
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: 4px;
    text-align: center;
    color: $surface;
  }

  .descriptionUlLiDiv {
    width: 100%;
    margin-top: 10px;
  }

  .descriptionLi {
    width: 100%;
  }

  .descriptionUl {
    font-size: 2rem;
    font-weight: 550;
    letter-spacing: 1px;
    color: $primary;
  }

  .descriptionLiText {
    margin-top: 4px;
    font-size: 1.5rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    color: $background;
  }

  .descriptionIcon {
    font-size: 1rem;
    margin-right: 7px;
    color: $primary;
  }

  .descriptionMiddleInfoDiv {
    width: 100%;
    margin-top: 30px;
  }

  .descriptionMiddleInfoP {
    font-size: 1.7rem;
    font-weight: 500;
    line-height: 1.5;
    color: $background;
  }

  //

  .descriptionTitleSecond {
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: 2px;
    margin: 40px 0 40px 0;
    color: $surface;
  }

  .descriptionComponentVTableDiv {
    width: 100%;
    margin-top: 10px;
  }

  .descriptionComponentVTable {
    color: $primary;
    background-color: rgba(223, 222, 222, 0.68);
  }

  .v-table > .v-table__wrapper > table > tbody > tr > td, .v-table > .v-table__wrapper > table > thead > tr > td, .v-table > .v-table__wrapper > table > tfoot > tr > td {
    font-size: 1.7rem;
  }

  .v-table--density-compact > .v-table__wrapper > table > tbody > tr > td, .v-table--density-compact > .v-table__wrapper > table > thead > tr > td, .v-table--density-compact > .v-table__wrapper > table > tfoot > tr > td {
    height: 80px;
  }

}

</style>
