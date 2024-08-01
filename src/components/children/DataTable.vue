<template>
  <table>
    <thead>
      <tr>
        <th>Purveyor</th>
        <th>Inventory Group</th>
        <th>Product Name</th>
        <th>Inventory Number</th>
        <th>Quantity</th>
        <th>Cost</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(product, index) in safeProducts"
        :key="product.inventoryNumber"
      >
        <td><input v-model="product.purveyor" /></td>
        <td><input v-model="product.inventoryGroup" /></td>
        <td><input v-model="product.productName" /></td>
        <td><input v-model="product.inventoryNumber" /></td>
        <td><input v-model="product.quantity" type="number" /></td>
        <td><input v-model="product.cost" type="number" /></td>
        <td>
          <button @click="removeProduct(index)">Remove</button>
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="4">Totals</td>
        <td>{{ totalQuantity }}</td>
        <td>{{ totalCost }}</td>
        <td></td>
      </tr>
    </tfoot>
  </table>
  <button @click="addProduct">Add Product</button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from 'vue'
import { Product } from './interfaces/Product.ts'

const props = defineProps<{ products?: Product[] }>()
const emit = defineEmits(['update-products'])

const safeProducts = computed(() => props.products || [])

const addProduct = () => {
  const newProduct: Product = {
    purveyor: '',
    inventoryGroup: '',
    productName: '',
    inventoryNumber: '',
    quantity: 0,
    cost: 0,
  }
  emit('update-products', [...safeProducts.value, newProduct])
}

const removeProduct = (index: number) => {
  const updatedProducts = safeProducts.value.filter((_, i) => i !== index)
  emit('update-products', updatedProducts)
}

const totalQuantity = computed(() =>
  safeProducts.value.reduce((sum, product) => sum + (product.quantity || 0), 0)
)

const totalCost = computed(() =>
  safeProducts.value.reduce((sum, product) => sum + (product.cost || 0), 0)
)
</script>
