<template>
  <span> How about this? </span>

  <h2 class="font-bold text-xl">{{ name }}</h2>

  <LiteYouTubeEmbed v-if="name" :id="id" :title="'Guide for ' + name" />

  <span class="" v-if="original_source">
    I originally found this stretch
    <a :href="original_source" target="_blank" class="underline">here</a>.
  </span>

  <div
    role="alert"
    class="alert alert-error cursor-pointer text-small"
    @click="disclaimerOpen = !disclaimerOpen"
    v-if="disclaimerOpen"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6 shrink-0 stroke-current"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    <span class="text-small"
      >Disclaimer: I am not a medical professional, just a random guy on the internet.
      This site is not medical advice. Consult a medical professional for medical
      questions. Listen to your body, and be safe.</span
    >
  </div>

  
  <button :disabled="isDisabled" @click="handleClick" class="btn">
    {{ buttonText }}
  </button>
</template>

<script setup>
import LiteYouTubeEmbed from "vue-lite-youtube-embed";
import "vue-lite-youtube-embed/style.css";

import stretches from "@/assets/stretches.json";

import { ref, onMounted } from "vue";
const isDisabled = ref(true);
const countdown = ref(60);
const buttonText = ref(`Wait ${countdown.value}s`);

const startCountdown = () => {
  const timer = setInterval(() => {
    countdown.value -= 1;
    buttonText.value = `Wait ${countdown.value}s`;

    if (countdown.value <= 0) {
      clearInterval(timer);
      isDisabled.value = false;
      buttonText.value = "Show Next";
    }
  }, 1000);
};

const handleClick = () => {
  getRandomStretch();
  isDisabled.value = true;
  countdown.value = 60;
  buttonText.value = `Wait ${countdown.value}s`;
  startCountdown();
};

onMounted(() => {
  startCountdown();
});
const name = ref("");
const id = ref("");
const original_source = ref("");
const disclaimerOpen = ref(true);

// function to find new random exercises:
function getRandomStretch() {
  const randomIndex = Math.floor(Math.random() * stretches.length);
  name.value = stretches[randomIndex].name;
  id.value = stretches[randomIndex].id;
  original_source.value = stretches[randomIndex].original_source;
}

getRandomStretch();
</script>
