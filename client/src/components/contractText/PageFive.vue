<template>
  <div id="page-five">
    <p><b>14 Betwistingen</b></p>
    <p>Bij betwistingen voortvloeiend uit deze overeenkomst is de Rechtbank van Antwerpen bevoegd.</p>
    <p>Deze overeenkomst werd getekend te {{ contact ? contact.office : currContract.office.S }}, op {{ contact ? today : signedDate }}</p>
    <p>De gebruiker verklaart hierbij dat:</p>
    <SavedCheckbox v-show="currContract"/>
    <Check-box-form v-show="!currContract && contact"/>
    <p>Beide partijen bevestigen voor gelezen en goedgekeurd</p>
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
      ...mapGetters(['currContract', 'contact', 'contractForm']),
      signedDate() {
        moment.locale('nl-be');
        return moment(this.currContract.signedat.S).format("MMM Do YYYY")
        },
      today() {
        moment.locale('nl-be');
        return moment(new Date()).format("MMM Do YYYY")
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
  }
</style>
