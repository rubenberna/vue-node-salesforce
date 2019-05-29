<template>
  <div class="search-board-result">
    <h4 class="animated fadeIn slow">Welkom {{contact.Name}} !</h4>
      <div class="search-board-result-actions">
        <button class="btn grey accent-4 animated slideInUp slow"
                type="submit"
                @click="viewContract(contact.External_Id__c)">
                Zie contract
                <i class="fa fa-print"></i>
        </button>
        <!-- <button class="btn waves-effect" type="submit" @click='deleteContract(contact.External_Id__c)'>Delete from DB</button> -->
        <Clear-btn/>
      </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import ClearBtn from '@/components/buttons/Clear'

  export default {
    name: 'view-contract',
    components: {
      ClearBtn
    },
    computed: {
      ...mapGetters(['currContract', 'contact'])
    },
    methods: {
      ...mapActions(['changeLoading', 'findContract']),
      async viewContract(id) {
        this.changeLoading(true)
        if(!this.currContract) {
          await this.findContract(id)
          this.changeLoading(false)
          this.$router.push({ name: 'printContract', params: {id} })
        } else {
          this.changeLoading(false)
          this.$router.push({ name: 'printContract', params: {id} })
        }
      },
    },
  }
</script>


<style lang="scss">

  .search-board-result {
        margin: 0 auto;
        width: 100%;
        margin-top: 50px;
        color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;

        .search-board-result-actions {
          height: 55px;
          p {
            font-size: 13px;
            margin-top: 14px;
          }

          .reset {
            font-weight: 700;
            cursor: pointer;
          }
        }
        .btn {
          margin-top: 15px;
          min-width: 250px;
        }
      }
</style>
