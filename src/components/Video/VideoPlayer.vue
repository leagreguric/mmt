<script setup>
const props = defineProps(["videoUrl"]);
</script>

<template>
     
    <section class="video-section">
        <h1>Video vožnje kroz moje selo
        </h1>
        <video controls class="video">
            <source :src="videoUrl" />
        </video>
    </section>

</template>