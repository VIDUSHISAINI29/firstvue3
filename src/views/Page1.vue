<script setup>
import multiselector from '@/components/MultiSelect.vue';
import {ref, onMounted} from 'vue';

onMounted(() => {
    
    
});

const furniture = ref([
    'Chair',
    'Table',
    'Bench',
    'Door',
    'Window',
    'Sofa',
    'Tea-table',
    'Dice'
])
const placeHold = 'Select Furniture'
const x = furniture.value
const item = 'apple'

</script>

<template>
   <div>
      <multiselector :products=item :placeholder=placeHold :division=x />
     
            <router-view />
        

      
   </div>
</template>

<style scoped></style>