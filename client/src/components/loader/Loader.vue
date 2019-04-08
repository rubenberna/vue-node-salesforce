<template >
  <div class="container spinner">
    <dot-loader :loading="loading"
                :color="color"
                duration='100000'
                class="spinner" />
  </div>
</template>

<script>
  import DotLoader from 'vue-spinner/src/DotLoader.vue'
  import { mapGetters } from 'vuex'

  export default {
    name: 'loader',
    props: {
      color: {
        type: String,
        default: 'white'
      },
      // size: {
      //   type: String,
      //   default: 'small'
      // }
    },
    components: {
      DotLoader
    },
    computed: mapGetters(['loading'])
  }
</script>

<style media="screen">
  .spinner {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }

</style>
