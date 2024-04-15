<script setup>
import './styles/projekti.css';
import './scripts/projekti.js';
import { ref } from 'vue';
const hexMoved = ref(false);
const subtextVisible = ref([false, false, false]);
</script>

<template>
    <body onload="draw()">
    <canvas id="bg"></canvas>
    <main id="content">
        <h1>
            <div class="hex moved"></div><span>PRROJEKTI</span></h1>

        <h2>
            <div class="hex"></div><span> HandGestureRecognition</span></h2>
        <div class="subtext coll">
            Ovaj projekt je implementacija sustava za prepoznavanje gestikulacija ruku pomoću tehnologija strojnog učenja. Cilj projekta je omogućiti računalima da prepoznaju i interpretiraju gestikulacije ruku, što može imati široku primjenu u raznim područjima kao što su upravljanje sučeljem, virtualna stvarnost, robotika, i slično.
            <div class="image"><img src="../../assets/20231011_133254.jpg" id="slika"></div>
        </div>
        <h2>
            <div class="hex"></div><span>Cas-Simo</span></h2>
        <div class="subtext coll">
            "Cas-Simo" ima za cilj ponuditi korisnicima dinamično i sigurno online okruženje za sudjelovanje u raznim igrama na sreću, uključujući casino igre i druge aktivnosti klađenja. Opseg ovog projekta obuhvaća interakcije korisnika, funkcionalnosti sustava i očekivanja korisnika vezana uz platformu za online kockanje.
            <div class="image"><img src="../../assets/20231011_133254.jpg" id="slika"></div>
        </div>
        <h2>
            <div class="hex"></div><span> Subscription-app</span></h2>
        <div class="subtext coll">
          
        </div>
        
    </main>

</body>
</template>

<script>
import { onMounted } from 'vue';

onMounted(() => {
  draw();
  document.getElementById('content').style.opacity = '1';
  document.getElementById('content').style.marginTop = '0';
});

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