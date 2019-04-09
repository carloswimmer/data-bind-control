<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1, h2 {
  font-weight: normal;
}
h2 {
  color: #62667c;
}
.container {
  border: 1px solid #cccccc;
  border-radius: 6px;
  padding: 20px;
  margin: 50px auto 30px auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.button-group {
  padding-top: 20px;
  display: flex;
  justify-content: space-evenly;
}
</style>
