<script setup>
import Footer from '../Footer/Footer.vue';
import Project from '../Project/Project.vue';
import { ref } from 'vue';
const hexMoved = ref(false);
const subtextVisible = ref([false, false, false]);
import handGestureImage from "../../assets/strojno_mala.bmp"
import handGestureImageBig from "../../assets/strojno_velika.bmp"
import casinoImage from "../../assets/casino_mala.gif"
import casinoImageBig from "../../assets/casino_velika.gif"
import eneaImage from "../../assets/enea_mala.jpg"
import eneaImageBig from "../../assets/enea_velika.jpg"

</script>

<template>
    <div class="container">
      <h1 id="name">PROJEKTI <h2 id="name"><RouterLink to="/leagreguric">Lea</RouterLink> </h2></h1>
      <div class="projects-container-container">
        <Project
        title="HAND GESTURE RECOGNITION"
        description="    Ovaj projekt je implementacija sustava za 
                prepoznavanje gestikulacija ruku pomoću tehnologija 
                strojnog učenja. Cilj projekta je omogućiti računalima
                 da prepoznaju i interpretiraju gestikulacije ruku, što može imati široku primjenu u raznim područjima kao što su upravljanje sučeljem, virtualna stvarnost, robotika, i slično.
            "
        :imageUrl="casinoImage"
        :imageUrlBig="casinoImageBig"
        url="https://github.com/leagreguric/HandGestureRecognition"
        ></Project>

        <Project
        title="HAND GESTURE RECOGNITION"
        description="    Ovaj projekt je implementacija sustava za 
                prepoznavanje gestikulacija ruku pomoću tehnologija 
                strojnog učenja. Cilj projekta je omogućiti računalima
                 da prepoznaju i interpretiraju gestikulacije ruku, što može imati široku primjenu u raznim područjima kao što su upravljanje sučeljem, virtualna stvarnost, robotika, i slično.
            "
        :imageUrl="handGestureImage"
        :imageUrlBig="handGestureImageBig"
        url="https://github.com/leagreguric/HandGestureRecognition"
        ></Project>

        <Project
        title="HAND GESTURE RECOGNITION"
        description="    Ovaj projekt je implementacija sustava za 
                prepoznavanje gestikulacija ruku pomoću tehnologija 
                strojnog učenja. Cilj projekta je omogućiti računalima
                 da prepoznaju i interpretiraju gestikulacije ruku, što može imati široku primjenu u raznim područjima kao što su upravljanje sučeljem, virtualna stvarnost, robotika, i slično.
            "
        :imageUrl="eneaImage"
        :imageUrlBig="eneaImageBig"
        url="https://github.com/leagreguric/HandGestureRecognition"
        ></Project>
        
      </div>
      </div>
      <Footer></Footer>
</template>
