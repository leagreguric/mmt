<script setup>
import './scripts/projekti.js';
import Footer from '../Footer/Footer.vue';
import Project from '../Project/Project.vue';
import { ref } from 'vue';
const hexMoved = ref(false);
const subtextVisible = ref([false, false, false]);
import lea from "../../assets/20231011_133254.jpg"
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
        :imageUrl="lea"
        url="https://github.com/leagreguric/HandGestureRecognition"
        ></Project>
        <Project
        title="HAND GESTURE RECOGNITION"
        description="    Ovaj projekt je implementacija sustava za 
                prepoznavanje gestikulacija ruku pomoću tehnologija 
                strojnog učenja. Cilj projekta je omogućiti računalima
                 da prepoznaju i interpretiraju gestikulacije ruku, što može imati široku primjenu u raznim područjima kao što su upravljanje sučeljem, virtualna stvarnost, robotika, i slično.
            "
        :imageUrl="lea"
        url="https://github.com/leagreguric/HandGestureRecognition"
        ></Project>
        <Project
        title="HAND GESTURE RECOGNITION"
        description="    Ovaj projekt je implementacija sustava za 
                prepoznavanje gestikulacija ruku pomoću tehnologija 
                strojnog učenja. Cilj projekta je omogućiti računalima
                 da prepoznaju i interpretiraju gestikulacije ruku, što može imati široku primjenu u raznim područjima kao što su upravljanje sučeljem, virtualna stvarnost, robotika, i slično.
            "
        :imageUrl="lea"
        url="https://github.com/leagreguric/HandGestureRecognition"
        ></Project>
      </div>
      </div>
      <Footer></Footer>
</template>

<script>
import { onMounted } from 'vue';

function draw() {
  const canvas = this.$refs.canvas;
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.fillRect(10, 10, 50, 50);
    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    ctx.fillRect(30, 30, 50, 50);
  }
}

function toggleSubtext(index) {
  subtextVisible[index] = !subtextVisible[index];
  hexMoved.value = !hexMoved.value;
}
</script>