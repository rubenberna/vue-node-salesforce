<template>
  <div class="home">
    <search-board class="home-inside"/>
    <div class="home-icons">
      <div class="icon">
        <img src="../assets/images/iron.svg">
        <h2>Bij u in de buurt</h2>
        <p>Persoonlijk contact blijft belangrijk. Met 18 locaties in Vlaanderen, is er altijd een EasyLife kantoor <b>in uw buurt</b> waar u terecht kan.</p>
      </div>
      <div class="icon">
        <img src="../assets/images/bucket.svg">
        <h2>Eerste klas service</h2>
        <p>Voor al onze <b>bekwame vakmensen</b> staan we garant. En wij niet alleen, onze klanten geven ons gemiddeld een uitmuntende score van 4.6 op 5.</p>
      </div>
      <div class="icon">
        <img src="../assets/images/vacuum.svg">
        <h2>Betaalbare Huishoudhulp</h2>
        <p>Op zoek naar betaalbare huishoudhulp? Onze poetshulp komt langs vanaf € 6,30/u met dienstencheques. <b>Er zijn geen extra kosten</b>.</p>
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
    width: 69%;
    margin: 0 auto;
    opacity: 0.9;
    margin-bottom: 100px;

    @media #{$medium-and-down}  {
       flex-direction: column;
       margin-top: -40px;
    }
    .icon {

      h2 {
        font-size: 1.2em;
        font-weight: 600;
        letter-spacing: .05em;
        text-align: center;
        margin-top: .5em;
        text-transform: uppercase;

          @media #{$medium-and-down}  {
            /* font-size: 50%; */
         }
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
