<template>
  <div class="checkbox">
    <form action="#">
      <p style="display: flex; flex-direction: column;">
        <label>
          <input type="checkbox" @change="updateForm({name: 'checkBoxOne', inputValue: $event.target.checked })"/>
          <span style="color: #2c3e50">{{ $t('deze_overeenkomst_afgesloten') }}</span>
        </label>
        <label>
          <input type="checkbox" @change="updateForm({name: 'checkBoxTwo', inputValue: $event.target.checked })"/>
          <span style="color: #2c3e50;">{{ $t('hij_zij_zich_akkoord_1') }} <a href="https://easylife-dc.be/nl/algemene-voorwaarden" target="_blank">{{ $t('algemene_voorwaarden') }}</a></span>
        </label>
        <label>
          <input type="checkbox" @change="updateForm({name: 'checkBoxThree', inputValue: $event.target.checked })"/>
          <span style="color: #2c3e50">{{ $t('hij_zij_zich_akkoord_2') }}</span>
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