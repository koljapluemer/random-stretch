<template>
  <header class="flex gap-2 flex-col items-center p-2">
    <router-link class="font-bold text-lg" to="/">Random Stretch Recommender</router-link>
    <nav class="flex flex-row gap-2">
      <!-- make btn-primary is path is exactly "/main" -->
      <router-link class="btn btn-sm" to="/main"
        :class="{ 'btn-primary': $route.path === '/main' && !$route.query.officeOnly }">
        Random Stretch</router-link>
      <!-- make btn-primary if path is main?officeOnly=true -->
      <router-link class="btn btn-sm" :to="{ name: 'Main', query: { officeOnly: true, deskOnly: false } }"
        :class="{ 'btn-primary': $route.query.officeOnly === 'true' }">
        Office Stretch</router-link>
      <router-link class="btn btn-sm" :to="{ name: 'Main', query: { deskOnly: true, officeOnly: false } }"
        :class="{ 'btn-primary': $route.query.deskOnly === 'true' }">
        Desk Stretch</router-link>
    </nav>
  </header>
  <main class="flex flex-col gap-4 flex-center p-10 max-w-lg mx-auto w-full">
    <router-view :key="$route.fullPath" />
  </main>

  <footer class="border-t-2 mt-10 w-full p-4 text-sm">
    <div id="socials" class="mb-4 flex justify-center gap-2">
      <!-- Twitter Share Button -->
      <a href="https://twitter.com/share?url=https://stretch.koljapluemer.com/" target="_blank" rel="noopener">
        <i class="fab fa-twitter share-icon"></i> Share on Twitter/X
      </a>

      <!-- Reddit Share Button -->
      <a href="https://www.reddit.com/submit?url=https://stretch.koljapluemer.com/" target="_blank" rel="noopener">
        <i class="fab fa-reddit share-icon"></i> Share on Reddit
      </a>

    </div>

    <div class="mb-4 flex justify-center gap-2 items-center">
      <router-link to="/main" class="underline">Get Random Stretch</router-link>
      <span>•</span>
      <a href="mailto:feedback@koljapluemer.com" class="underline">Give Feedback</a>
      <span>•</span>
      More on <a class="underline" href="https://koljapluemer.com/">koljapluemer.com</a>
      <span>•</span>
      <router-link to="/about" class="underline">About</router-link>
    </div>
  </footer>
</template>
