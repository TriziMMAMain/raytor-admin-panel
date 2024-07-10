<script setup>
import {onMounted, ref} from 'vue'
// Lodash
import _ from 'lodash'
// Pinia
import {useStore} from '@/stores/index.js'
const {fetchAllProducts, updateHideProduct, deletePostProduct} = useStore()

// Product

const productsList = ref([])
const productsListName = ref([])
const productsListNameValue = ref('')

// Func

const searchProductByName = (name) => {
  productsList.value = JSON.parse(localStorage.getItem('products'))
  if (name === null) {
    productsList.value = JSON.parse(localStorage.getItem('products'))
  } else {
    productsList.value = _.filter(productsList.value, {title: name})
  }
}

// More
const showMore = ref(_.fill(Array(productsList.value.length), false));

const toggleShowMore = (index) => {
  showMore.value[index] = !showMore.value[index];
};
const hideProduct = async (id, value) => {
  if (value === true) {
    await updateHideProduct(id, false)
  } else if (value === false) {
    await updateHideProduct(id, true)
  }
}
const idClick = ref(null)
const clickToConfirm = ref(false)
const deletePostNoConfirm = () => {
  clickToConfirm.value = false
}
const deletePostConfirm = async () => {
  await deletePostProduct(idClick.value)
    .then(() => {
      window.location.reload()
    })
    .catch((e) => {
      console.log(e);
    })
}
const deleteProduct = async (id) => {
  clickToConfirm.value = true
  idClick.value = id
}
//

onMounted( async () => {
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
  <div class="wrap-products-block">

    <div class="filter-block">
      <v-autocomplete
        class="filter-block-search"
        label="Search"
        :items="productsListName"
        v-model="productsListNameValue"
        clearable
        variant="outlined"
        @update:search="searchProductByName(productsListNameValue)"
      ></v-autocomplete>
    </div>

    <div class="product-block-wrap">
      <div class="product-block" v-for="(i, index) in productsList" :key="index">
        <h1 class="product-block-title-id">ID: {{ i.id }} // Hide: {{ i.hide }}</h1>
        <h1 class="product-block-title">{{ ++index }}. Name: {{ i.title }}</h1>
        <div class="product-block-title-actions">
          <v-btn class="product-block-v-btn" @click="toggleShowMore(index)">More</v-btn>
          <v-btn class="product-block-v-btn" @click="hideProduct(i.id, i.hide)">Hide</v-btn>
          <v-btn class="product-block-v-btn" @click="deleteProduct(i.id)">Delete</v-btn>
        </div>
        <div class="product-block-description" v-if="showMore[index]">
          <div class="product-block-description-photo-block">
            <img class="product-block-description-photo"
                   v-for="photoLi in i.photo" alt="" :src="photoLi">
          </div>
          <h1 class="product-block-description-title">Description</h1>
          <p class="product-block-description-text">{{ i.textDescription }}</p>
          <div class="product-block-description-ul-block-wrap">
            <div class="product-block-description-ul-block"
                 v-for="textUlLi in i.textDescripitonLi">
              <h1 class="product-block-description-ul-title">{{ textUlLi.textUl }}</h1>
              <p class="product-block-description-li-text"
                 v-for="textLi in textUlLi.textLi">{{ textLi }}</p>
            </div>
          </div>
          <div class="product-block-description-p">
            <h1 class="product-block-description-p-title">Additional description</h1>
            <p class="product-block-description-p-text" v-for="textP in i.textDescriptionP">
              {{ textP }}
            </p>
          </div>
          <div class="product-block-description-feature">
            <h1 class="product-block-description-feature-title">Feature</h1>
            <v-table class="product-block-description-feature-v-table" density="compact">
              <tbody>
              <tr
                v-for="item in i.feature"
                :key="item"
              >
                <td class="product-block-description-feature-v-table-text">{{ item.featureText }}</td>
                <td class="product-block-description-feature-v-table-value">{{ item.featureValue }}</td>
              </tr>
              </tbody>
            </v-table>
          </div>
          <div class="product-block-description-order">
            <h1 class="product-block-description-order-title">Order</h1>
            <v-table class="product-block-description-order-v-table" density="compact">
              <tbody>
              <tr
                v-for="item in i.order"
                :key="item"
              >
                <td class="product-block-description-order-v-table-text">{{ item.orderText }}</td>
                <td class="product-block-description-order-v-table-value">{{ item.orderValue }}</td>
              </tr>
              </tbody>
            </v-table>
          </div>
          <div class="product-block-description-info">
            <h1 class="product-block-description-info-title">Available: {{ i.available }}</h1>
            <h1 class="product-block-description-info-title">Standard: {{ i.standard }}</h1>
            <h1 class="product-block-description-info-title">Manufacturer: {{ i.manufacturer }}</h1>
            <h1 class="product-block-description-info-title">Field: {{ i.field }}</h1>
          </div>


        </div>
        <v-divider
          :thickness="4"
          class="border-opacity-100"
          color="primary"
        ></v-divider>
      </div>

    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../assets/mixins.scss';

// Wrap

.wrap-products-block {
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #ffffff;
}

// Filter

.filter-block {
  width: 1920px;
  min-height: 100px;
  margin-top: 30px;
}

.filter-block-search {
  width: 50%;
  color: $primary;
  margin: 0 auto;
}

// Product

.product-block-wrap {
  width: 1920px;
  min-height: 100%;
}

.product-block {
  width: 100%;
  height: 100%;
}

.product-block-title-id {
  font-size: 2rem;
  font-weight: 500;
  color: #292929;
}

.product-block-title {
  font-size: 2rem;
  font-weight: 500;
  color: #292929;
}

.product-block-title-actions {
  display: flex;
  justify-content: space-between;
}

.product-block-v-btn {
  width: 200px !important;
  height: 55px !important;
  font-size: 1.5rem;
  margin: 20px 0 20px 0;
  background-color: $primary;
}

// Description

.product-block-description {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

// Photo

.product-block-description-photo-block {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}

.product-block-description-photo {
  width: 25%;
}

// Text

.product-block-description-title {
  text-align: center;
  font-size: 4rem;
  margin-top: 50px;
  margin-bottom: 50px;
  color: $primary;
}

.product-block-description-text {
  font-size: 1.5rem;
  color: $text;
}

// Ul block

.product-block-description-ul-block-wrap {
  width: 100%;
  height: 100%;
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
}

.product-block-description-ul-block {
  width: 50%;
}

.product-block-description-ul-title {
  font-size: 2.5rem;
  color: $textSpan;
}

.product-block-description-li-text {
  font-size: 1.5rem;
  color: $text;
}

// Ul2 block

.product-block-description-p {
  width: 100%;
  height: 100%;
}

.product-block-description-p-title {
  font-size: 3rem;
  margin: 50px 0 50px 0;

  text-align: center;
  color: $primary;
}

.product-block-description-p-text {
  font-size: 1.5rem;
  color: $text;
}

// Feature

.product-block-description-feature, .product-block-description-order {
  width: 100%;
}

.product-block-description-feature-title, .product-block-description-order-title {
  font-size: 4rem;
  font-weight: 600;
 text-align: center;
  margin: 40px 0 40px 0;
  color: $primary;
}

.product-block-description-feature-v-table, .product-block-description-order-v-table {
  width: 100%;
  color: $primary;
  background-color: rgba(223, 222, 222, 0.68);
  //margin-top: 10px;
}

//.product-block-description-feature-v-table-text {}

//.product-block-description-feature-v-table-value {}

.v-table > .v-table__wrapper > table > tbody > tr > td, .v-table > .v-table__wrapper > table > thead > tr > td, .v-table > .v-table__wrapper > table > tfoot > tr > td {
  font-size: 1.7rem;
}

.v-table--density-compact > .v-table__wrapper > table > tbody > tr > td, .v-table--density-compact > .v-table__wrapper > table > thead > tr > td, .v-table--density-compact > .v-table__wrapper > table > tfoot > tr > td {
  height: 80px;
}


// Order

//.product-block-description-order {}
//
//.product-block-description-order-title {}
//
//.product-block-description-order-v-table {}
//
//.product-block-description-order-v-table-text {}
//
//.product-block-description-order-v-table-value {}

// Info

.product-block-description-info {
  width: 100%;
  margin: 50px 0 50px 0;
}

.product-block-description-info-title {
  font-size: 2rem;
  font-weight: 600;
  color: $textSpan;
}

.v-divider {
  margin-bottom: 100px;
}

</style>
