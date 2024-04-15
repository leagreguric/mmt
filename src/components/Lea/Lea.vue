<script setup>
import './styles/style.css'
import Obrazovanje from '../Lea/Obrazovanje.vue'
import Projekti from '../Lea/Projekti.vue';
</script>





<template>

   <div class="container" id="txt">
   <div class="about">
      
      <div class="info-container">
         <h1 id="name">LEA GREGURIĆ</h1>
      <div class="info">
         
         <h3 id="title">
      KONTAKT
   </h3>
   <ul>
      <li>Mobitel: 0998651666</li>
      <li>E-mail: lea.lea.greguric@gmail.com</li>
      <li><a id="url" href="https://github.com/leagreguric">GitHub: https://github.com/leagreguric</a></li>
   </ul>
   <div class="audio">
               <audio controls>
  <source src="../../assets/WhatsApp Audio 2024-04-07 at 19.25.11.mp4" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>
      </div>
            </div>

   </div>
      <div class="image-container">
         <div class="image"><img src="../../assets/20231011_133254.jpg" id="slika"></div>
         <ul id="list">
               <li id="list">
                  Datum rođenja: 12.07.2000.
               </li>
               <li id="list">
                  Mjesto rođenja: Zagreb
               </li>
               <li id="list">
                  Mjesto stanovanja: Osijek
               </li>
            </ul>
      </div>
   </div>
   <div class="work">
      <div class="row-1">
         <div class="education-container">
         <div class="education">
            <h3 id="title">
               <RouterLink to="/leagreguric/obrazovanje" id="url">OBRAZOVANJE</RouterLink>
            </h3>
            <ul>
               <li>
                  <a id="url" href="http://www.os-banova-jaruga.skole.hr/">Osnovna škola Banova Jaruga</a>
               </li>
               <li>
                  <a id="url" href="http://ss-tujevica-kt.skole.hr/"> Srednja škola Tina Ujevića Kutina, Prirodoslovno-matematička gimnazija</a>              
               </li>
               <li>
                  <a id="url" href="https://www.ferit.unios.hr/">FERIT Osijek, stručni studij Računarstva</a>                
               </li>

            </ul>
            
         </div>
      </div>
      <div class="skills-container">
         <div class="skills">
            <h3 id="title">
               ZNANJA I VJEŠTINE
            </h3>

            <ul>
               <li>
                  Programski jezici: C, C#, Java, Python, HTML/CSS, JavaScript, PHP
               </li>
               <li>
                  Frameworks: Django, Spring, Vue.js
               </li>
               <li>
                  Rad s bazama podataka: SQL (MySql, PostgreSQL), LDAP (Ldaptive)
               </li>
               <li>
                  Poznavanje rada u Linuxu
               </li>
               <li>
                  Docker
               </li>
               <li>
                  Git
               </li>
               <li>
                  REST API
               </li>
             
            </ul>
          
         </div>

   </div>

      </div>
      <div class="row-2">
         <div class="experience-container">
         <div class="experience">
            <h3 id="title">RADNO ISKUSTVO</h3>
            <ul>
               <li>
                  Stručna praksa u <a id="url" href="https://www.enea.com/">Enea</a>
               </li>
            </ul>
         </div>
      </div>
      <div class="project-container">
         <div class="project">
            <h3 id="title"><RouterLink to="/leagreguric/projekti" id="url" >PROJEKTI</RouterLink></h3>
            <ul>
               <li>
                  HandGestureRecognition
               </li>
               <li>
                  Cas-Simo
               </li>
               <li>
                  Subscription-app
               </li>
            </ul>

         </div>
      </div>

      </div>
   </div>

</div>


</template>

