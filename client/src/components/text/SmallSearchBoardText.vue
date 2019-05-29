<template>
   <div id="contract-specs-medium-small">
      <h5>Welkom bij jouw klantenovereenkomst</h5>
      <p>Er werkt een huishoudhulp van EasyLife bij jou thuis.
        Hiervoor moet een verplichte overeenkomst getekend worden.
      Let op: zonder ondertekende overeenkomst zijn er geen verzekeringsmaatregelen getroffen.</p>
      <p>We sommen graag de belangrijkste punten nog even op:</p>
      <ul class="specs-list">
        <li class="specs-item">De huishoudhulp mag enkel werken in jouw privéwoning.</li>
        <li class="specs-item">Gelieve bij elke prestatie te betalen.</li>
        <li class="specs-item">Gebruik enkel cheques van gebruikers woonachtig op het poetsadres.</li>
        <li class="specs-item">Geef alle wijzigingen aan de planning meteen door aan het kantoor.</li>
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
