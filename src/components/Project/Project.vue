<script setup>
import {ref} from 'vue';

const props = defineProps(["title","description","imageUrl","imageUrlBig","url"]);
const imageEnlarged = ref(false);
const containerClass = ref("project-container")
const imageClass = ref("project-image")

const changeImageSize = () => {
    imageEnlarged.value = !imageEnlarged.value;
    imageClass.value="project-image-big";
    containerClass.value = "project-container-big";
    if(!imageEnlarged.value){
        containerClass.value="project-container";
        imageClass.value = "project-image"
    }
}

</script>

<template>
    
        <div class="work " :class="containerClass">
            <a :href="url" target="_blank" class="project-link"><h2 class="project-title">{{ title }}</h2></a>
            <p class="project-description">
                {{ description }}
            </p>
            <img v-if="!imageEnlarged" :class="imageClass" :src="imageUrl" @click="changeImageSize">
            <img v-else :class="imageClass" :src="imageUrlBig" @click="changeImageSize">
            
        </div>

</template>
