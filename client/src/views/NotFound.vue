<template>
  <div class="404 container">
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
.404 {
  min-height: 100vh;
  margin-bottom: 50px;
}
</style>
