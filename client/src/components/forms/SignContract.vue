<template>
  <div class="search-board-result">
    <h4 class="animated fadeIn slow">
      {{ $t('hallo') }} {{contact.Name}}
    </h4>
    <div class="search-board-result-actions">
      <button class="btn red darken-2 animated slideInUp slow"
              type="submit"
              @click="navigate(contact.External_Id__c)">
              {{ $t('contract_ondertekenen') }} 
              <i class="fa fa-book"></i>
      </button>
      <Clear-btn/>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import ClearBtn from '@/components/buttons/Clear'

  export default {
    name: 'sign-contract',
    components: {
      ClearBtn
    },
    computed: {
      ...mapGetters(['contact'])
    },
    methods: {
      navigate(id) {
        this.$router.push({ name: 'contract', params: {id} })
      },
    },
  }
</script>