<template lang="html">
  <div class="batch container">
    <button type="submit"  @click="getAll" class="btn waves-effect waves-light">Get 'em all</button>
    <button type="submit"  @click="sort" class="btn waves-effect waves-light">Sort 'em'</button>
    <button type="submit"  @click="sendTwenty(twenty)" class="btn waves-effect waves-light">Twenty</button>
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
      this.twenty = this.allDB.slice(0, 20)
      this.fourty = this.allDB.slice(20, 40)
      this.sixty = this.allDB.slice(40, 60)
      this.eighty = this.allDB.slice(60, 80)
      this.last = this.allDB.slice(-12, -1)
    },
    sendTwenty(list) {
      let group = []
      list.forEach(contact => {
        let obj = {
          PutRequest: {
            Item: {
              'externalId': { 'N': contact.externalid },
              'name': { 'S': contact.name },
              'email': { 'S': contact.email },
              'regioid': { 'S': contact.regioid || 'not provided' },
              'office': { 'S': contact.office || 'EasyLife' },
              'signature': { 'S': contact.signature },
              'signedat': { 'S': contact.signedat },
              'ipaddress': { 'S': contact.ipaddress || 'not provided' },
              'contractversion': { 'N': contact.contractversion },
              'typedname': { 'S': contact.typedname },
              'signedtime': { 'S': contact.signedtime },
              'street': { 'S': contact.street || 'not provided' },
              'postalcode': { 'N': contact.postalcode  },
              'city': { 'S': contact.city || 'not provided' },
              'id': { 'S': contact.id }
            }
          }
        }
        group.push(obj)
      })
      console.log(group)
      api.sendAll(group)
    }
    // async search() {
    //   const response = await api.getContracts()
    //   this.all = response
    //   // console.log(response.length);
    //   const twenty = response.slice(0, 20)
    //   const fourty = response.slice(20, 40)
    //   const sixty = response.slice(40, 60)
    //   const eighty = response.slice(60, 80)
    //   const last = response.slice(60, -1)
    //   // console.log(twenty.length, fourty.length, sixty.length, eighty.length, last.length)
    //   // api.sendAll(response)
    // }
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
