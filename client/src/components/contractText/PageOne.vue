<template>
  <div id="page-one">
    <div class="page-one-wrapper">
      <div class="">
        <p class="page-one-wrapper-title">Overeenkomst huishoudelijke hulp DIENSTENCHEQUES</p>
        <p class="page-one-wrapper-subtitle">Tussen gebruiker en dienstenbedrijf</p>
      </div>
      <div>
        <img src="../../assets/images/logo.png" class="page-one-wrapper-logo">
      </div>
    </div>
      <hr>
      <p>Tussen,</p>
      <p>EasyLife dienstencheques als commerciële benaming van volgende vennootschappen: Dienstenbedrijf EasyLife bvba, Sivac bvba, Dilito bvba, met als correspondentieadres Draaiboomstraat 6, 2160 Wommelgem, vertegenwoordigd door haar zaakvoerder Louis Ballegeer.</p>
      <p>Hierna genoemd het <b>dienstenbedrijf</b>,</p>
      <div class="page-one-wrapper-user-details">
        <p>en {{ currContract ? currContract.name.S : contact.Name }}</p>
        <p>{{ currContract ? currContract.street.S : contact.MailingAddress.street }}</p>
        <p>{{ currContract ? currContract.postalcode.N : contact.MailingAddress.postalCode }} {{ currContract ? currContract.city.S : contact.MailingAddress.city }}</p>
      </div>
      <p style="padding-top: 8px;">hierna genoemd de <b>gebruiker</b> wordt overeengekomen hetgeen volgt:</p>
      <p><b>1 Inleiding</b></p>
      <p>Tussen dienstenbedrijf, gebruiker en uitvoerder wordt overeengekomen dat de uitvoerder die tewerkgesteld is bij het dienstenbedrijf een aantal taken van huishoudelijke hulp uitvoert voor de gebruiker, kaderend in het overheidsprogramma 'dienstencheques'. De gebruiker en de uitvoerder verklaren uitdrukkelijk geen bloed- of aanverwanten te zijn tot de tweede graad, en niet hetzelfde woonplaats te delen.</p>
      <p><b>2 Opdracht</b></p>
      <p>De gebruiker geeft hierbij de opdracht aan het dienstenbedrijf voor het uitvoeren van volgende prestaties in de privéwoning van de opdrachtgever:</p>
      <ul>
        <li><i class="fa fa-check"></i>onderhoud van vloeren en vloerbekleding (stofzuigen, vegen, uitkloppen, dweilen, schuren, boenen, etc.);</li>
        <li><i class="fa fa-check"></i>afwassen, wassen (machinaal), strijken;</li>
        <li><i class="fa fa-check"></i>poetsen van de keuken (gootsteen, fornuis, aanrecht, koelkast, diepvries, kleine keukentoestellen zoals koffiezet, keukenrobot en dergelijke);</li>
        <li><i class="fa fa-check"></i>schoonmaken van sanitaire installaties (bad, douche, wastafel, toilet, etc.);</li>
        <li><i class="fa fa-check"></i>ramen lappen;</li>
        <li><i class="fa fa-check"></i>boodschappen doen, koken;</li>
      </ul>
      <p>De volgende opdrachten kunnen niet uitgevoerd worden:</p>
      <ul>
        <li><i class="fa fa-check"></i>onderhoud van alle ruimtes die niet integraal deel uitmaken van de privéwoning van de opdrachtgever (bergruimtes buiten, tuinhuisjes, hondenhokken, gemeenschappelijke gangen, trappen of liften in appartementsgebouwen, beroepslokalen, praktijkruimtes);</li>
        <li><i class="fa fa-check"></i>verzorging van huisdieren of onderhoud van verblijfsruimtes of materiaal gebruikt voor huisdieren;</li>
        <li><i class="fa fa-check"></i>onderhoud van ramen die vast zijn of die niet naar binnen opengaan vanaf de eerste verdieping;</li>
        <li><i class="fa fa-check"></i>onderhoud van auto's, motoren, brommers en fietsen;</li>
        <li><i class="fa fa-check"></i>onderhoud van uiterst kostelijke zaken zoals waardevolle en dure schilderijen, vazen, kunstvoorwerpen, etc .</li>
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
