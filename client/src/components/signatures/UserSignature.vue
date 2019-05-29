<template>
  <div>
    <img :src="savedSignature">
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'user-signature',
    computed: {
      ...mapGetters(['contractForm', 'currContract']),
      savedSignature() {
        if(this.currContract) return this.currContract.signature.S
        else return this.contractForm.signature
      }
    },
  }
</script>

<style lang="scss" scoped>
  img {
    width: 300px;
  }
</style>
