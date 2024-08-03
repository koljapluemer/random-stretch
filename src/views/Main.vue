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


  <em>
    There is a new stretch every minute. If you really don't want to do this one, wait a minute and refresh the page.
  </em>
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
  // use current datetime (precision: minutes) as seed
  const seed = new Date().toISOString().slice(0, 16);
  const randomIndex = seededRandom(seed, stretches.length);
  name.value = stretches[randomIndex].name;
  id.value = stretches[randomIndex].id;
  original_source.value = stretches[randomIndex].original_source;
}

function seededRandom(seed, range) {
    // A simple hash function to generate a consistent hash from the seed string
    function hashString(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = (hash << 5) - hash + char;
            hash |= 0; // Convert to 32-bit integer
        }
        return hash;
    }

    // Use the hash value as the seed for generating a pseudorandom number
    function pseudoRandom(seed) {
        const x = Math.sin(seed) * 10000;
        return x - Math.floor(x);
    }

    const hash = hashString(seed);
    const randomValue = pseudoRandom(hash);

    // Return a random number between 0 and range-1
    return Math.floor(randomValue * range);
}

getRandomStretch();
</script>
