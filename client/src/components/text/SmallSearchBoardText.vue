<template>
   <div id="contract-specs-medium-small">
      <h5>{{ $t('welkom_msg') }}</h5>
      <p>{{ $t('welkom_msg_intro') }}</p>
      <p>{{ $t('we_sommen_graag') }}</p>
      <ul class="specs-list">
        <li class="specs-item">{{ $t('de_huishoudhulp_mag') }}</li>
        <li class="specs-item">{{ $t('gelieve_bij_elke') }}</li>
        <li class="specs-item">{{ $t('gebruik_enkel_cheques') }}
      </li>
        <li class="specs-item">{{ $t('geef_alle_wijzigingen') }}
      </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'small-search-board-text'
}
</script>

<style lang="scss" scoped>
  @import '../../assets/style.scss';

  #contract-specs-medium-small{
    border: 2px solid #2c3e50;
    text-align: initial;
    padding: 15px 15px 15px 40px;
    margin: 35px;
    border-radius: 4px;
    font-size: 16px;
    display: none;

    h5 {
      text-align: center;
      font-weight: 600;
    }

    @media #{$medium-and-down}  {
      display: block;
    }
  }
</style>
