<script setup>
import './styles/style.css'
import Projekti from '../Marija/ProjektiMarija.vue';
import FooterMarija from '../Footer/FooterMarija.vue';
</script>
<template>

   <div class="container" id="txt">
   <div class="about">
      
      <div class="info-container">
         <h1 id="name">MARIJA GRGIĆ</h1>
      <div class="info">
         
         <h3 id="title">
      KONTAKT
   </h3>
   <ul>
      <li>Mobitel: 0981381514</li>
      <li>E-mail: grgicmarija53@gmail.com</li>
      
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
         <div class="image"><img src="../../assets/190221629_6138262659520843_5634576881009444184_n.jpg" id="slika"></div>
         <ul id="list">
               <li id="list">
                  Datum rođenja: 06.03.2003.
               </li>
               <li id="list">
                  Mjesto rođenja: Vinkovci
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
               OBRAZOVANJE
            </h3>
            <ul>
               <li>
                  <a id="url" href="http://os-ikozarca-zu.skole.hr/">Osnovna škola Ivana Kozarca Županja</a>
               </li>
               <li>
                  <a id="url" href="http://gimnazija-zupanja.skole.hr/"> Gimnazija Županja, Opća gimnazija</a>              
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
                  Programski jezici: C, Tyescript, Java, Python, HTML/CSS, JavaScript, PHP
               </li>
               <li>
                  Frameworks: Django, Cypress, Vue.js
               </li>
               <li>
                  Rad s bazama podataka: SQL (MySql)
               </li>
               <li>
                  Poznavanje rada u Linuxu
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
                  Stručna praksa u <a id="url" href="https://hr.linkedin.com/company/dice-digital-innovation-center">DICE Digital Innovation Centre d.o.o.</a>
               </li>
               <li>
                  Hrvatski Telekom <a id="url" href="https://www.t.ht.hr/">Agent za teleprodaju i savjetovanje privatnih korisnika</a>
               </li>
            </ul>
         </div>
      </div>
      <div class="project-container">
         <div class="project">
            <h3 id="title"><RouterLink to="/marijagrgic/projekti" id="url" >PROJEKTI</RouterLink></h3>
            <ul>
               <li>
                  Statistika košarkaških igrača
               </li>
               <li>
                  Predikcija žanra filma
               </li>
               <li>
                  KK Županja Web Shop
               </li>
            </ul>

         </div>
      </div>

      </div>
      
   </div>
   <FooterMarija></FooterMarija>
</div>


</template>

