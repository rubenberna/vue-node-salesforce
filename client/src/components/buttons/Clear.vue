<template>
  <div>
    <p>{{ $t('andere_gebruiker') }}
      <span class="strong"
            @click='clear'>{{ $t('hier') }}
      </span>
      {{ $t('je_account_opnieuw_in') }}
    </p>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  
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
