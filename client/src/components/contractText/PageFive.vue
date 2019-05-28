<template>
  <div id="page-five">
    <p><b>14 Betwistingen</b></p>
    <p>Bij betwistingen voortvloeiend uit deze overeenkomst is de Rechtbank van Antwerpen bevoegd.</p>
    <p>Deze overeenkomst werd getekend te {{ contact ? contact.office : currContract.office.S }}, op {{ contact ? today : signedDate }}</p>
    <p>De gebruiker verklaart hierbij dat:</p>
    <div class="checkbox">

      <form action="#">
        <p style="display: flex; flex-direction: column;">
          <label>
            <input type="checkbox" v-model='checkbox.one'/>
            <span style="color: #2c3e50">Deze overeenkomst afgesloten is voor het adres waar hij woonachtig is</span>
          </label>
          <label>
            <input type="checkbox" v-model='checkbox.two'/>
            <span style="color: #2c3e50;">Hij / Zij zich akkoord stelt met de <a href="https://easylife-dc.be/nl/algemene-voorwaarden" target="_blank">algemene voorwaarden</a></span>
          </label>
          <label>
            <input type="checkbox" v-model='checkbox.three'/>
            <span style="color: #2c3e50">Hij / Zij zich akkoord stelt met de privacycharter van het dienstenbedrijf</span>
          </label>
        </p>
      </form>

    </div>
    <p>Beide partijen bevestigen voor gelezen en goedgekeurd</p>
    <div class='signatures' style="display: flex; justify-content: space-between">

      <!-- User information -->
      <div class="gebruiker">
        <p><b>GEBRUIKER</b></p>

        <!-- Type name -->
        <input type="text" placeholder="Type your name" style="max-width: 330px; font-family: 'Satisfy', cursive; font-size: 20px; " v-model="contactDB.typedName">
        <div style="margin-top: 30px;">
          <div v-show='!autograph'
              style="margin-top: 52px;">
            <p style="font-style: italic; text-align: center;">Gebruik uw <i class="material-icons">mouse</i> om uw overeenkomst te tekenen</p>
            <!-- Signature canvas -->
            <VueSignaturePad
            id="signature"
            width="507px"
            height="270px"
            ref="signaturePad"
            />
          </div>

          <!-- signature after saved -->
          <div v-show='autograph'>
            <img :src="autograph" style="width: 200px">
          </div>

          <!-- Data after signed -->
          <div v-if="signed && autograph"
          class="stamp"
          style="display: flex; justify-content: space-around; margin: 35px 0; box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15); padding: 15px; min-width: 500px;">
          <div>
            <img src="../assets/images/signed.jpeg" style="width: 32px; margin: 0 auto;">
            <p style="margin: 0;">ONDERTEKEND</p>
          </div>
          <div>
            <p style="margin: 0 0 9px 0; font-weight: 600;">{{today}}</p>
            <p style="margin: 0;">{{time}}</p>
          </div>
          <div>
            <p style="margin: 0 0 9px 0; font-weight: 600;">Ondertekend door - {{contact.Name}}</p>
            <p style="margin: 0;">IP: {{contactDB.ipAddress}}</p>
          </div>
        </div>
        <router-link to="/">
          <a v-show="homeBtn" class="waves-effect waves-light btn home-btn"><i class="material-icons">home</i>Home</a>
        </router-link>

        <!-- buttons to sign or undo -->
        <div class="confirm-buttons">
          <a class="waves-effect btn-flat erase-btn" v-show='!signed' @click="undo">Wis</a>
          <a class="waves-effect btn light-blue darken-4 confirm-btn" v-show="!signed" @click="validateContract">Bevestig</a>
        </div>
      </div>
    </div>

    <!-- Louis signature -->
    <Louis-signature/>
  </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import LouisSignature from '@/components/signatures/LouisSignature'

export default {
  name: 'page-five',
  components: {
    LouisSignature
  },
  computed: {
    ...mapGetters(['currContract', 'contact']),
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
    ...mapActions(['storeSignature'])
  },
}
</script>