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
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    />
    <div id="socials" class="mb-4 flex justify-center gap-2">
      <!-- Twitter Share Button -->
      <a
        href="https://twitter.com/share?url=https://arabic-numbers.koljapluemer.com"
        target="_blank"
        rel="noopener"
      >
        <i class="fab fa-twitter share-icon"></i> Share on Twitter
      </a>

      <!-- Reddit Share Button -->
      <a
        href="https://www.reddit.com/submit?url=https://arabic-numbers.koljapluemer.com"
        target="_blank"
        rel="noopener"
      >
        <i class="fab fa-reddit share-icon"></i> Share on Reddit
      </a>

      <!-- Hacker News Share Button -->
      <a
        href="https://news.ycombinator.com/submitlink?u=https://arabic-numbers.koljapluemer.com&amp;t=Arabic%20Numbers%20Converter"
        target="_blank"
        rel="noopener"
      >
        <i class="fab fa-hacker-news share-icon"></i> Share on Hacker News
      </a>
    </div>

    <div class="mb-4 flex-justify-center">
      <a href="mailto:feedback@koljapluemer.com" class="underline"
        >Give Feedback</a
      >
    </div>
    <ul class="flex flex-col gap-2">
      <li>
        Transliterations are Egyptian Arabic. For now. I'm working on an option
        to choose between different dialects.
      </li>
      <li>
        Made by
        <a class="underline" href="hello@koljapluemer.com">Kolja Sam Pluemer</a
        >.
      </li>
      <li>
        Pseudonymous learning is transmitted to improve the app. No personal
        data leaves your device.
      </li>
      <li>
        you may also enjoy:
        <a
          class="underline"
          href="https://arabic-pronounciation.koljapluemer.com/"
          >Arabic Pronunciation Tutor (WIP)</a
        >.
      </li>
      <li>
        More cool stuff at
        <a class="underline" href="https://koljapluemer.com/"
          >koljapluemer.com</a
        >.
      </li>
    </ul>
  </footer>
</template>
