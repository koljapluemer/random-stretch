<template>
  <img src="@/assets/workout.svg" alt="" class="max-w-52 mx-auto" />
  <ul class="text-lg text-left list-disc mt-10">
    <li>You are convinced that some stretching is probably good.</li>
    <li>
      You are annoyed by endless, confusing articles, often incomplete, presuming previous
      skills, sporting longs intros...
    </li>
  </ul>
  <div class="flex gap-2 flex-col">
    <router-link class="btn btn-primary btn-lg" to="/main">
      Get a Random Stretch Right Now</router-link>
    <router-link class="btn btn-secondary" :to="{ name: 'Main', query: { officeOnly: true } }">
      Get a Desk Stretch</router-link>
    <span class="text-center mx-auto text-sm">(you don't need to get up and it's not awkward at work)</span>
  </div>

</template>

<script setup></script>
