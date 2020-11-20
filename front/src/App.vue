<template>
  <div id="app">
    <h1>Nome: <b>{{ name }}</b></h1>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      name: "",
    };
  },
  created () {
    this.getName()
  },
  methods: {
    async getName() {
      const backendHost = '$VUE_APP_BACKEND'
      console.log(backendHost)
      await this.axios.get(backendHost + '/api').then((res) => {
        const data = res.data
        this.name = data.name
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
