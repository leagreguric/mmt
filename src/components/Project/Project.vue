<script setup>
const props = defineProps(["title","description","imageUrl","url"]);
</script>

<template>
    <a :href="url" target="_blank" class="project-link">
        <div class="project-container work">
        <h2 class="project-title">{{ title }}</h2>
            <p class="project-description">
                {{ description }}
            </p>
            <img class="project-image" :src="imageUrl">
</div>
</a>
</template>
