<template>
  <div class="search-board-input input-field">
    <input id="email_inline"
            type="number" class="validate"
            v-model='dplanId'>
    <label for="email_inline" 
            style="color: #fff; text-align: center; width:60%">
            {{ $t('type_id') }}
    </label>
    <span class="helper-text"></span>
    <button class="btn waves-effect waves-light search"
            type="submit"
            data-target="modal1"
            @click="runSearch">
            {{ $t('zoeken') }}
            <i class="material-icons right">send</i>
    </button>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'search-contact',
    data() {
      return {
        dplanId: null,
      }
    },
    methods: {
      ...mapActions(['searchID']),
      runSearch() {
        this.searchID(this.dplanId)
        this.$emit('setFlash')
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/style.scss';

  .search-board-input {
    margin: 0 auto;
    margin-top: 50px;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    // remove the wheel helper for number input
    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    input {
      text-align: center;
      color: #fff;
      width:53%;
      -webkit-appearance: none;
      margin: 0;

      @media #{$medium-and-down} {
        width: 60%;
      }
    }

    button.search {
      background: #0080c8;
    }
  }
</style>
