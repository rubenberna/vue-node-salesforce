<template>
  <div>
    <p class="typed-name-title">{{ $t('gebruiker') }}</p>
    <div v-if="!contractForm.signed && !currContract">
      <input type="text" 
            :placeholder="typedPlacehoder"
            @change="updateForm({name: 'typedName', inputValue: $event.target.value })">
    </div>
    <div v-else>
      <p class="typed-name">
        {{ currContract ? currContract.typedname.S : contractForm.typedName }}
      </p>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'typed-name',
    computed: {
      ...mapGetters(['currContract', 'contractForm', 'locale']),
      typedPlacehoder() {
        return this.locale === 'fr' ? 'Ecrivez votre nom' : 'Typ uw naam'
      }
    },
    methods: {
      ...mapActions(['updateForm'])
    },
  }
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css?family=Satisfy');

  .typed-name-title {
    text-transform: uppercase;
    font-weight: 800;
  }

  input {
    width: 320px !important; 
    font-family: 'Satisfy', cursive; 
    font-size: 23px !important;
  }

  .typed-name {
    font-family: 'Satisfy', cursive; 
    font-size: 23px;
  }
</style>


