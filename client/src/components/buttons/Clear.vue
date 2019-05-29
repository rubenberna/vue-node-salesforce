<template>
  <div>
    <p>Andere gebruiker ? 
      <span class="strong"
            @click='clear'>hier
      </span>
      je account opnieuw in.
    </p>
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
  .strong {
    font-weight: 700;
    cursor: pointer;
  }
</style>
