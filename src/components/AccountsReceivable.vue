<template>
  <div>version 1.0</div>
  <div>
    <h1>Accounts Receivable</h1>
    <DataTable :products="products" @update-products="updateProducts" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DataTable from './children/DataTable.vue'
import type { Product } from './interfaces/Product'

const products = ref<Product[]>([])

const updateProducts = (newProducts: Product[]) => {
  products.value = newProducts
}
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
