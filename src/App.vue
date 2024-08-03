<template>
  <!-- <h1 className="text-3xl font-bold underline">Hello world!</h1>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <main class="flex flex-col gap-4 flex-center p-10 max-w-lg mx-auto w-full">
    <router-view />
  </main>

  <footer class="border-t-2 mt-10 w-full p-4 text-sm">
    <div id="socials" class="mb-4 flex justify-center gap-2">
      <!-- Twitter Share Button -->
      <a
        href="https://twitter.com/share?url=https://stretch.koljapluemer.com/"
        target="_blank"
        rel="noopener"
      >
        <i class="fab fa-twitter share-icon"></i> Share on Twitter/X
      </a>

      <!-- Reddit Share Button -->
      <a
        href="https://www.reddit.com/submit?url=https://stretch.koljapluemer.com/"
        target="_blank"
        rel="noopener"
      >
        <i class="fab fa-reddit share-icon"></i> Share on Reddit
      </a>

   
    </div>

    <div class="mb-4 flex justify-center gap-2 items-center">
      <router-link to="/main" class="underline">Get Random Stretch</router-link>
      <span>•</span>
      <a href="mailto:feedback@koljapluemer.com" class="underline">Give Feedback</a>
      <span>•</span>
      <a class="underline" href="https://koljapluemer.com/">koljapluemer.com</a>
      <span>•</span>
      <router-link to="/about" class="underline">About</router-link>
    </div>
  </footer>
</template>
