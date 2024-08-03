<template>
  <h1 className="text-3xl font-bold underline">Hello world!</h1>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>
