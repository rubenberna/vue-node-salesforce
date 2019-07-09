<template>
  <div class="broken-page">
    <img src="../../assets/images/broken_small.png" alt="">
    <h5>{{ $t('bear_with_us') }}</h5>
    <h6>{{ $t('er_ging_iets_mis') }}<a href="https://easylife-dc.be/nl/contact" target="_">{{ $t('contacteren') }}</a> {{ $t('or_ga_terug_naar_de') }} <router-link to="/">{{ $t('startpagina') }}.</router-link></h6> 
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

