<template>
  <div id="page-three">
    <ul>
      <li><i class="fa fa-check"></i>{{ $t('de_gebruiker_steeds') }}</li>
      <li><i class="fa fa-check"></i>{{ $t('de_gebruiker_zorgt_1') }}</li>
      <li><i class="fa fa-check"></i>{{ $t('de_gebruiker_zorgt_2') }}</li>
    </ul>
    <p><b>{{ $t('6_Verlof') }}</b></p>
    <p>{{ $t('onverwachte_bijsturing') }}</p>
    <p><b>{{ $t('7_Verlof') }}</b></p>
    <p>{{ $t('verloven_van_de_uitvoerder') }}</p>
    <p><b>{{ $t('8_Verzekeringen') }}</b></p>
    <p>{{ $t('het_dienstenbedrijf_staat_in_voor_de_verzekering') }}</p>
    <p>{{ $t('er_is_geen_verzekering') }}</p>
    <p><b>{{ $t('9_Duur') }}</b></p>
    <p>{{ $t('deze_overeenkomst_geldt') }}</p>
    <p>- {{ $t('cancellation_app') }} <a href="http://ikzegop.easylife-dc.be/" target="_blank">http://ikzegop.easylife-dc.be/</a></p>
    <p>- {{ $t('aangetekend_schrijven_gericht_aan') }}: EasyLife customercare, Draaiboomstraat 6, 2160 Wommelgem</p>
  </div>
</template>

<script>
export default {
  name: 'page-three'
}
</script>

<style lang="scss" scoped>
  i {
    margin-right: 9px;
  }
</style>
