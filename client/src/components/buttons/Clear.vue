<template>
  <div class="clear">
      <a class="btn-floating btn-large waves-effect waves-light red clear" @click='clear'><i class="material-icons">autorenew</i></a>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  
  export default {
    name: 'clear',
    methods: mapActions(['clear'])
  }
</script>

<style lang="scss" scoped>
  .clear {
    position: absolute;
    bottom: 0;
    right: 0;
  }
</style>
