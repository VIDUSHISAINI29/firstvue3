<script setup>
import multiselector from '@/components/MultiSelect.vue';
import { ref } from 'vue';

const  vegetables = ref([
    'Tomato', 'Potato', 'Turnip', 'Carrot', 'Peas', 'Spinach', 'Capsicum', 'Cabbage', 'Cauli-flower', 'Guard', 'Cucumber'
])
const veg = vegetables.value

const placeHold = 'Select Vegetables'

</script>



<template>
   <div>
      <multiselector :placeholder=placeHold :division=veg />
     
            <router-view />
        

      
   </div>
</template>

<style scoped></style>