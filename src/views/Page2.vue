<script setup>
import multiselector from '@/components/MultiSelect.vue';
import { ref } from 'vue';

const fruits = ref([
    'Apple','Mango', 'Banana', 'Orange', 'Papaya', 'Guava', 'Grapes', 'Litchi', 'Pine-Apple', 'Melon'
])
const fruit = fruits.value
const placeHold = 'Select Fruits'

</script>

<template>
   <div>
      <multiselector :placeholder=placeHold :division="fruit" />
     
            <router-view />
        

      
   </div>
</template>

<style scoped></style>