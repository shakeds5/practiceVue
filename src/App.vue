<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
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
}

#nav a {
  font-weight: bold;
  color: #777a7e;
}

#nav a.router-link-exact-active {
  color: rgb(0, 0, 0);
}
</style>
