<template>
  <article class="max-w-lg mx-auto">
    <img src="@/assets/workout.svg" alt="" class="mx-auto" />
    <ul class="text-lg text-left list-disc mt-10">
      <li>You are convinced that some stretching is probably good.</li>
      <li>
        You are annoyed by endless, confusing articles, often incomplete, presuming previous
        skills, sporting long intros...
      </li>
    </ul>
    <div class="flex gap-2 flex-col mx-auto mt-10">
      <router-link class="btn btn-primary btn-lg" to="/main">
        Get a Random Stretch Right Now
      </router-link>

      <router-link class="btn btn-sm" :to="{ name: 'Main', query: { officeOnly: true } }"
        :class="{ 'btn-primary': $route.query.officeOnly === 'true' }">
        Office Stretch
      </router-link>

      <router-link class="btn btn-sm" :to="{ name: 'Main', query: { deskOnly: true } }"
        :class="{ 'btn-primary': $route.query.deskOnly === 'true' }">
        Desk Stretch
      </router-link>

    </div>
  </article>

</template>

<script setup></script>
