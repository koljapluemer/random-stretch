<template>

<h2 class="font-bold text-xl">{{ stretch.name }}</h2>

<LiteYouTubeEmbed v-if="stretch" :id="stretch.id" :title="'Guide for ' + stretch.name" />

<span class="" v-if="stretch.original_source">
  I originally found this stretch
  <a :href="stretch.original_source" target="_blank" class="underline">here</a>.
</span>

</template>

<script setup lang="ts">

import LiteYouTubeEmbed from "vue-lite-youtube-embed";
import "vue-lite-youtube-embed/style.css";

const props = defineProps({
  stretch: Object,
});

</script>