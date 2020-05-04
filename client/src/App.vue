<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        <i class="fas fa-home"></i>
      </router-link>
      |
      <router-link to="/about">
        <i class="far fa-question-circle"></i>
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  left: 0;
  position: absolute;
  top: 0;
  margin: 5px;
  margin-top: 10px;
}

#nav a {
  font-weight: bold;
  color: #a2a4a7;
}

#nav a.router-link-exact-active {
  color: rgb(0, 0, 0);
}

/* ///////////////////////////////////////////////////// */

body,
html {
  padding: 0;
  margin: 0;
  width: 100%;
  /* min-height: 100vh; */
  background-color: #fdfdbf;
  /* font-size: calc(100%+15vw); */
}
* {
  box-sizing: border-box;
}

/* in short: 768px for tablet 1000px for computer */

/* smartphones, iPhone, portrait 480x320 phones (min-width: 320px) */
/* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */
@media (min-width: 481px) {
  body,
  html {
    font-size: larger;
  }
}
/* portrait tablets, portrait iPad, landscape e-readers,
 landscape 800x480 or 854x480 phones */
@media (min-width: 641px) {
  body,
  html {
    font-size: xx-large;
  }
}
/* tablet, landscape iPad, lo-res laptops ands desktops */
@media (min-width: 961px) {
  body,
  html {
    font-size: xx-large;
  }
}

/* big landscape tablets, laptops,
 and desktops (min-width: 1025px)*/
@media (min-width: 1025px) {
  body,
  html {
    font-size: large;
  }
}

/* hi-res laptops and desktops (min-width: 1281px) */
</style>
