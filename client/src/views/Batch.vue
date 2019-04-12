<template lang="html">
  <div class="batch container">
    <button type="submit"  @click="getAll" class="btn waves-effect waves-light">Get 'em all</button>
    <button type="submit"  @click="sort" class="btn waves-effect waves-light">Sort 'em'</button>
    <button type="submit"  @click="sendTwenty(last)" class="btn waves-effect waves-light">Twenty</button>
    <button type="submit"  @click="batchCsv" class="btn waves-effect waves-light">Batch</button>
  </div>
</template>

<script>
import api from '../modules/contracts/api'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'batch',
  data() {
    return {
      twenty: '',
      fourty: '',
      sixty: '',
      eighty: '',
      last: ''
    }
  },
  computed: mapGetters(['allDB']),
  methods: {
    ...mapActions(['getAll', 'createContract']),
    sort() {
      // this.twenty = this.allDB.slice(0, 20)
      // this.fourty = this.allDB.slice(20, 40)
      this.last = this.allDB.slice(0, 10)
    },
    sendTwenty(list) {
      api.sendAll(list)
    },
    batchCsv() {
      api.sendAll()
    },
  }

}
</script>

<style lang="scss" scoped>
  .batch {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
</style>
