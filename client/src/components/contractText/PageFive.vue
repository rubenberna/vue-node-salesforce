<template>
  <div id="page-five">
    <p><b>{{ $t('14_Betwistingen') }}</b></p>
    <p>{{ $t('bij_betwistingen_voortvloeiend') }}</p>
    <p>{{ $t('deze_overeenkomst') }} {{ contact ? contact.office : currContract.office.S }}, {{ $t('op') }} {{ contact ? today : signedDate }}</p>
    <p>{{ $t('de_gebruiker_verklaart_dat') }}:</p>
    <SavedCheckbox v-show="currContract"/>
    <Check-box-form v-show="!currContract && contact"/>
    <p>{{ $t('beide_partijen_bevestigen') }}</p>
    <div id='signatures' style="display: flex; justify-content: space-between">
      <div class="gebruiker">
       <Typed-name/>
        <div style="margin-top: 30px;">
          <DrawSignature v-show="!currContract" @drawContract="passContract($event)"/>
          <User-signature v-show="contractForm.signature || currContract"/>
          <SignedStamp v-show="contractForm.signed || currContract"/>
        </div>
      </div>
      <Louis-signature/>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import moment from 'moment'

  import LouisSignature from '@/components/signatures/LouisSignature'
  import UserSignature from '@/components/signatures/UserSignature'
  import CheckBoxForm from '@/components/forms/CheckBoxForm'
  import TypedName from '@/components/forms/TypedName'
  import SignedStamp from '@/components/cards/SignedStamp'
  import DrawSignature from '@/components/signatures/DrawSignature'
  import SavedCheckbox from '@/components/forms/SavedCheckbox'

  export default {
    name: 'page-five',
    components: {
      LouisSignature,
      UserSignature,
      CheckBoxForm,
      SignedStamp,
      DrawSignature,
      TypedName,
      SavedCheckbox
    },
    computed: {
      ...mapGetters(['currContract', 'contact', 'contractForm', 'locale']),
      signedDate() {
        moment.locale('nl-be');
        return moment(this.currContract.signedat.S).format("MMM Do YYYY")
        },
      today() {
        if (this.locale === 'fr') {
          moment.locale('fr');
          return moment(new Date()).format("MMM Do YYYY")
        } else {
          moment.locale('nl-be');
          return moment(new Date()).format("MMM Do YYYY")
        }
      }, 
    },
    methods: {
      ...mapActions(['updateForm']),
      passContract(signature) {        
        this.$emit('saveContract', signature)
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/style.scss';

 #signatures {
    @media #{$medium-and-down}  {
      flex-direction: column-reverse;
      align-items: flex-start;
    }
  }

  .gebruiker {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 60%;
  }
</style>
