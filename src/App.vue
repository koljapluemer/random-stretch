<template>
  <header class="flex gap-2 flex-col md:flex-row md:justify-between items-center py-2 border-b-1">
    <router-link class="font-bold text-lg" to="/">Random Stretch Recommender</router-link>
    <nav class="flex flex-row gap-2">
      <!-- make btn-primary is path is exactly "/main" -->
      <router-link class="btn btn-sm" :to="{ name: 'Main', query: { officeOnly: false, deskOnly: false } }"
        :class="{ 'btn-primary': $route.query.officeOnly === 'false' && $route.query.deskOnly === 'false' }">
        All</router-link>
      <!-- make btn-primary if path is main?officeOnly=true -->
      <router-link class="btn btn-sm" :to="{ name: 'Main', query: { officeOnly: true, deskOnly: false } }"
        :class="{ 'btn-primary': $route.query.officeOnly === 'true' }">
        Office</router-link>
      <router-link class="btn btn-sm" :to="{ name: 'Main', query: { deskOnly: true, officeOnly: false } }"
        :class="{ 'btn-primary': $route.query.deskOnly === 'true' }">
        Desk</router-link>
    </nav>
  </header>
  <main class="flex flex-col gap-4 py-10 mx-auto w-full">
    <router-view :key="$route.fullPath" />
  </main>

  <footer
    class="border-t-2 mt-10 w-full py-4 text-sm flex flex-col md:flex-row justify-center gap-2 md:gap-4 items-center">
    <p>
      Made by
      <a class="link" href="https://koljasam.com/" target="_blank">Kolja Sam</a>.
    </p>

    <p class="text-base-content/90">
      Nothing tracked except page views.
    </p>

    <p>If this little site improved your flexibility, I'd be happy if you'd <a href="https://ko-fi.com/S6S81CWUVD" target="_blank" rel="noopener" class="link">
        buy me a coffee
      </a>.</p>
    <router-link to="/about" class="link">→ About</router-link>
  </footer>
</template>
