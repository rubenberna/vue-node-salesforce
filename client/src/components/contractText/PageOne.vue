<template>
  <div id="page-one">
    <div class="page-one-wrapper">
      <div class="">
        <p class="page-one-wrapper-title">{{ $t('overeenkomst_huishoudelijke_hulp') }}</p>
        <p class="page-one-wrapper-subtitle">{{ $t('tussen_gebruiker_en') }}</p>
      </div>
      <div>
        <img src="../../assets/images/logo.svg" class="page-one-wrapper-logo">
      </div>
    </div>
      <hr>
      <p>{{ $t('tussen') }},</p>
      <p>{{ $t('EasyLife_dienstencheques_als_commerciële') }}</p>
      <p>{{ $t('hierna_genoemd_het') }} <b>{{ $t('dienstenbedrijf') }}</b>,</p>
      <div class="page-one-wrapper-user-details">
        <p>{{ $t('en') }} {{ currContract ? (currContract.name.S || 'n/a') : (contact.Name || 'n/a')}}</p>
        <p>{{ currContract ? ( currContract.street.S || 'n/a'): (contact.MailingAddress.street || 'n/a')}}</p>
        <p>{{ currContract ? (currContract.postalcode.N || 'n/a'): (contact.MailingAddress.postalCode || 'n/a')}} {{ currContract ? (currContract.city.S || 'n/a'): (contact.MailingAddress.city || 'n/a')}}</p>
      </div>
      <p style="padding-top: 8px;">{{ $t('hierna_genoemd_de') }}<b>{{ $t('gebruiker') }}</b> {{ $t('wordt overeengekomen hetgeen volgt') }}:</p>
      <p><b>{{ $t('1_Inleiding') }}</b></p>
      <p>{{ $t('tussen_dienstenbedrijf') }}</p>
      <p><b>{{ $t('2_Opdracht') }}</b></p>
      <p>{{ $t('de_gebruiker_geeft_hierbij_de_opdracht') }}:</p>
      <ul>
        <li><i class="fa fa-check"></i>{{ $t('onderhoud_van_vloeren') }}</li>
        <li><i class="fa fa-check"></i>{{ $t('afwassen_wassen') }}</li>
        <li><i class="fa fa-check"></i>{{ $t('poetsen_van_de_keuken') }}</li>
        <li><i class="fa fa-check"></i>{{ $t('schoonmaken_van_sanitaire') }}</li>
        <li><i class="fa fa-check"></i>{{ $t('ramen_lappen') }}</li>
        <li><i class="fa fa-check"></i>{{ $t('boodschappen_doen') }}</li>
      </ul>
      <p>{{ $t('de_volgende_opdrachten_kunnen') }}:</p>
      <ul>
        <li><i class="fa fa-check"></i>{{ $t('onderhoud_van_alle') }}</li>
        <li><i class="fa fa-check"></i>{{ $t('verzorging_van_huisdieren') }}</li>
        <li><i class="fa fa-check"></i>{{ $t('onderhoud_van_ramen') }}</li>
        <li><i class="fa fa-check"></i>{{ $t('onderhoud_van_autos') }}</li>
        <li><i class="fa fa-check"></i>{{ $t('onderhoud_van_uiterst') }}</li>
      </ul>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'page-one',
    computed: {
      ...mapGetters(['currContract', 'contact'])
    },
  }
</script>

<style lang="scss" scoped>
  .page-one-wrapper {
    display: flex; 
    justify-content: space-between;
    .page-one-wrapper-title {
      font-weight: 700;
    }
    .page-one-wrapper-subtitle {
      font-style: italic; 
      text-align: center;
    }
    .page-one-wrapper-logo img {
      width: 90px;
    }
    .page-one-wrapper-user-details {
      line-height: 0.7
    }
  }
  i {
    margin-right: 9px;
  }
</style>
