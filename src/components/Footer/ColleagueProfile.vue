<script setup>
const props = defineProps(["imePrezime","url"])
</script>


<template>
    <a :href="url" class="footer-text footer-link" target="_blank">{{ imePrezime }}</a>
</template>
