<template>
  <div class="home">
    <search-board class="home-inside"/>
    <div class="home-icons">
      <div class="icon">
        <img src="../assets/images/iron.svg">
        <h2>{{ $t('bij_u_in_de_buurt') }}</h2>
        <p>{{ $t('bij_u_in_de_buurt_text') }}</p>
      </div>
      <div class="icon">
        <img src="../assets/images/bucket.svg">
        <h2>{{ $t('eerste_klas_service') }}</h2>
        <p>{{ $t('eerste_klas_service_text') }}</p>
      </div>
      <div class="icon">
        <img src="../assets/images/vacuum.svg">
        <h2>{{ $t('betaalbare_huishoudhulp') }}</h2>
        <p>{{ $t('betaalbare_huishoudhulp_text') }}.</p>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBoard from '@/components/cards/SearchBoard.vue'

export default {
  name: 'home',
  components: {
    SearchBoard
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/style.scss';

  .home {
    position: relative;
    min-height: 100vh;
    margin-bottom: 60px;
  }

  .home::before {
    content: "";
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: auto;
    background-image: url('../assets/images/banner-compressed.jpg');
    background-size: cover !important;
    min-height: 80vh;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    filter: brightness(55%);
    height: 68vh;

    @media #{$small-and-down}  {
      background-image: url('../assets/images/small_background.svg');
    }
  }

  .home-inside {
    position: relative;
  }

  .home-icons {
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    bottom: -70px;
    width: 92%;
    margin: 0 auto;
    opacity: 0.9;
    margin-bottom: 110px;

    @media #{$medium-and-down}  {
       flex-direction: column;
       margin-top: -40px;
    }
    .icon {
      width: 26%;
      height: 370px;
       @media #{$medium-and-down}  {
          width: 100%;
        }
      h2 {
        font-size: 1.2em;
        font-weight: 600;
        letter-spacing: .05em;
        text-align: center;
        margin-top: .5em;
        text-transform: uppercase;
      }

      p {
        font-size: 1.2em;
        line-height: 1.5;
        margin: 0;
        font-weight: 300;;
      }
    }
  }

</style>
