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
}

#nav a {
  font-weight: bold;
  color: #a2a4a7;
}

#nav a.router-link-exact-active {
  color: rgb(0, 0, 0);
}
</style>
