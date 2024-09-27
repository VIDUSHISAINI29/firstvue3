<script setup>
import MultiSelect from "primevue/multiselect";
import { ref, onMounted, computed } from "vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import ColumnGroup from "primevue/columngroup"; // optional
import Row from "primevue/row";// optional
import { ProductService } from '@/service/ProductService';


const selectedFruits = ref([]);


const products = ref();




const props = defineProps({
  division: Array,
  placeholder: String,
  value: String
})
onMounted(() => {
    ProductService.getProductsMini().then((data) => (products.value = data));
    selectedFruits.value  = props.division
    
});

const dataSet = computed(() =>{
    return selectedFruits.value.map((products) =>({
        item:products,
    }));
})



</script>
<template>
 <div>
    <div class="tw-card  tw-p-20 tw-gap-20 tw-flex tw-justify-center tw-mt-10">
    <MultiSelect
      v-model="selectedFruits"
      :options="division"
      filter
      :placeholder="placeholder"
      :maxSelectedLabels="3"
      class="tw-w-1/5 tw-md:w-60"
    />

   <div class="tw-h-12 tw-flex tw-flex-col">

    <div class="card">
      <DataTable :value="dataSet" tableStyle="min-width: 10rem">
        <Column v-for="(fruit, index) in selectedFruits" :key="index" :field='item' :header='fruit'></Column>
      </DataTable>
    </div>

    <div class="card">
    <DataTable :value="products" tableStyle="min-width: 40rem">
      <Column field="code" header="Code"></Column>
      <Column field="name" header="Name"></Column>
      <Column field="category" header="Category"></Column>
      <Column field="quantity" header="Quantity"></Column>
    </DataTable>
  </div>
   </div>
</div>
 </div>
</template>

<!-- <template>
 
</template> -->

<!-- <script setup>
    import { ref, onMounted } from 'vue';
    import { ProductService } from '@/service/ProductService';

    onMounted(() => {
        ProductService.getProductsMini().then((data) => (products.value = data));
    });

    const products = ref();

    </script> -->
