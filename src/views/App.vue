<template>
  <div class="home">
    Random Stretch:

    <LiteYouTubeEmbed
      id="dQw4w9WgXcQ"
      title="Rick Astley - Never Gonna Give You Up (Official Music Video)"
    />
  </div>
</template>

<script setup>
import LiteYouTubeEmbed from "vue-lite-youtube-embed";
import "vue-lite-youtube-embed/style.css";

import stretches from "@/stretches.json";
console.log(stretches);

// function to find new random exercises:
function getRandomStretch() {
  const randomIndex = Math.floor(Math.random() * stretches.length);
  return stretches[randomIndex];
}


</script>
