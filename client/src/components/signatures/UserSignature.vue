<template>
  <div>
    <img :src="autograph" style="width: 200px">
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'user-signature',
    computed: {
      ...mapGetters(['autograph'])
    },
  }
</script>