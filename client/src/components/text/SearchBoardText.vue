<template>
  <div class="search-board-specs">
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
  name: 'search-board-text'
}
</script>

<style lang="scss" scoped>
  @import '../../assets/style.scss';

  .search-board-specs {
    width: 45%;
    border: 2px solid #fff;
    text-align: initial;
    padding: 15px 15px 15px 40px;
    margin-top: 70px;

    @media #{$large-and-down}  {
      width: 70%;
    }

    @media #{$medium-and-down}  {
      display: none;
    }
    h5 {
      font-weight: 600;
    }
    p {
      font-weight: 300;
      font-size: 18px;

        @media #{$medium-and-down}  {
        font-size: 16px;
      }
    }

    .specs-list li {
      list-style-type: initial;
      font-size: 16px;

      @media #{$medium-and-down}  {
        font-size: 14px;
      }
    }
  }
</style>
