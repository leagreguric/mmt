<script setup>
import {ref} from 'vue';

const props = defineProps(["imageUrl",
                        "imageUrlBig",
                        "datumRodenja",
                        "mjestoRodenja",
                        "mjestoStanovanja"]);
const imageEnlarged = ref(false);


const changeImageSize = () => {
    imageEnlarged.value = !imageEnlarged.value
    if(imageEnlarged.value){

    }
}

</script>

<template>
    <div class="image-container">
        <img v-if="!imageEnlarged" :src="imageUrl" class="image" @click="changeImageSize">
        <img v-else :src="imageUrlBig" class="profile-image-big" @click="changeImageSize">
        <ul>
            <li>Datum rođenja: {{ datumRodenja }}</li>
            <li>Mjesto rođenja: {{ mjestoRodenja }}</li>
            <li>Mjesto stanovanja: {{ mjestoStanovanja }}</li>
        </ul>
    </div>
</template>