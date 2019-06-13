<template>
  <div class="search-board-specs">
    <h5>Welkom bij jouw klantenovereenkomst</h5>
    <p>Er werkt een huishoudhulp van EasyLife bij jou thuis.
      Hiervoor moet een verplichte overeenkomst getekend worden.
      Let op: zonder ondertekende overeenkomst zijn er geen verzekeringsmaatregelen getroffen.</p>
    <p>We sommen graag de belangrijkste punten nog even op:</p>
    <ul class="specs-list">
      <li class="specs-item">
        De huishoudhulp mag enkel werken in jouw privéwoning.
      </li>
      <li class="specs-item">
        Gelieve bij elke prestatie te betalen.
      </li>
      <li class="specs-item">
        Gebruik enkel cheques van gebruikers woonachtig op het poetsadres.
      </li>
      <li class="specs-item">
        Geef alle wijzigingen aan de planning meteen door aan het kantoor.
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
