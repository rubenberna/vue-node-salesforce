<template>
  <div class="broken-page">
    <img src="../../assets/images/broken_small.png" alt="">
    <h5>"Bear" with us.. Something went wrong</h5>
    <h6>Er ging iets mis, gelieve ons te <a href="https://easylife-dc.be/nl/contact" target="_">contacteren</a> or ga terug naar de <router-link to="/">startpagina.</router-link></h6> 
  </div>
</template>

<script>
export default {
  name: 'broken-page'
}
</script>

<style scoped>
  .broken-page {
    margin-bottom: 50px;    
  }
</style>

