<template>
  <div id="app">
    <navbar />
    <router-view/>
    <easy-footer />
  </div>
</template>

<script>
  import navbar from '@/components/navbar/Navbar'
  import EasyFooter from '@/components/footer/EasyFooter'
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'app',
    components: {
      navbar,
      EasyFooter
    },
    computed: {
      ...mapGetters(['locale'])
    },
    methods: {
      ...mapActions(['clear', 'changeLocale'])
    },
    mounted() {
      this.locale === 'fr' ? this.changeLocale('FR') : this.changeLocale('NL')
    },
    beforeDestroy() {
      this.clear()
    },
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600,700,900');

  #app {
    font-family: Source Sans Pro,-apple-system,Segoe UI,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }



  #nav {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
