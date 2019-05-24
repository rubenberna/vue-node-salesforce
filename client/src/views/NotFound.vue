<template>
  <div class="notFound container">
    <broken-page />
  </div>
</template>

<script>
import BrokenPage from '@/components/404/BrokenPage'
export default {
  name: 'not-found',
  components: {
    BrokenPage
  }
}
</script>

<style lang="scss" scoped>
  .notFound {
    min-height: 100vh;
    margin-bottom: 50px;
  }
</style>
