<template>
  <div class="search-board">
    <flash class="flash"/>
    <div class="search-board-content">
      <Search-board-text/>
      <div class="search-board-cta">
        <h3 v-show="!contact">{{ $t('welcomeMsg') }}</h3>
        <div v-if='loading' class="loader">
          <loader/>
        </div>
        <div v-else>
          <SearchContact v-if="contact === null || contact === 'not_found'"
                         @setFlash="flashOn"/>
          <View-contract v-else-if="contact.Signed_Contract__c || contractForm.signed" 
          />
          <Sign-contract v-else/>
        </div>
      </div>
    </div>
    <!-- medium-small media queries -->
    <Small-search-board-text/>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Loader from '@/components/loader/Loader'
  import Flash from '@/components/flash/Flash'
  import SearchBoardText from '@/components/text/SearchBoardText'
  import SmallSearchBoardText from '@/components/text/SmallSearchBoardText'
  import SearchContact from '@/components/forms/SearchContact'
  import ViewContract from '@/components/forms/ViewContract'
  import SignContract from '@/components/forms/SignContract'

  export default {
    name: 'SearchBoard',
    data() {
      return {
        dplanId: null,
      }
    },
    components: {
      Loader,
      Flash,
      SearchBoardText,
      SmallSearchBoardText,
      SearchContact,
      ViewContract,
      SignContract
    },
    computed: mapGetters(['flashSticker', 'contact', 'loading', 'contractForm']),
    methods: {
      flashOn() {        
        setTimeout( () => {this.flash(`${this.flashSticker.msg}`, `${this.flashSticker.type}`)}, 2300)
      },
    }
  }
</script>

<style scoped lang="scss">
@import '../../assets/style.scss';

  .search-board {
    position: relative;
    .search-board-content {
      display: flex;
      align-items: center;
      height: 65vh;
      color: #fff;
      justify-content: space-between;
      width: 90vw;
      margin: 0 auto;

      @media #{$medium-and-down}  {
        justify-content: center;
        align-items: center;
        height: 80vh;
      }

      .search-board-cta {
        width: 45%;
        @media #{$large-and-down}  {
           h3 {
              font-size: 35px;
            }
          }
        @media #{$medium-and-down}  {
          width: 100%;
         }
      }
    }
    .flash {
      width: 255px;
      top: 0;
      right: 0;
      position: absolute;
    }
  }

</style>
