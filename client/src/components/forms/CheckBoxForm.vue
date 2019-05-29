<template>
  <div class="checkbox">
    <form action="#">
      <p style="display: flex; flex-direction: column;">
        <label>
          <input type="checkbox" @change="updateForm({name: 'checkBoxOne', inputValue: $event.target.checked })"/>
          <span style="color: #2c3e50">Deze overeenkomst afgesloten is voor het adres waar hij woonachtig is</span>
        </label>
        <label>
          <input type="checkbox" @change="updateForm({name: 'checkBoxTwo', inputValue: $event.target.checked })"/>
          <span style="color: #2c3e50;">Hij / Zij zich akkoord stelt met de <a href="https://easylife-dc.be/nl/algemene-voorwaarden" target="_blank">algemene voorwaarden</a></span>
        </label>
        <label>
          <input type="checkbox" @change="updateForm({name: 'checkBoxThree', inputValue: $event.target.checked })"/>
          <span style="color: #2c3e50">Hij / Zij zich akkoord stelt met de privacycharter van het dienstenbedrijf</span>
        </label>
      </p>
    </form>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'check-box-form',
    methods: {
      ...mapActions(['updateForm'])
    },
  }
</script>