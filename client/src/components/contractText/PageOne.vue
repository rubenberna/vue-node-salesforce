<template>
  <div id="page-one">
    <div class="" style="display: flex; justify-content: space-between;">
      <div class="">
        <p style="font-weight: 700;">Overeenkomst huishoudelijke hulp DIENSTENCHEQUES</p>
        <p style="font-style: italic; text-align: center;">Tussen gebruiker en dienstenbedrijf</p>
      </div>
      <div>
        <img src="../../assets/images/logo.png" style="width: 90px;">
      </div>
    </div>
      <hr>
      <p>Tussen,</p>
      <p>EasyLife dienstencheques als commerciële benaming van volgende vennootschappen: Dienstenbedrijf EasyLife bvba, Sivac bvba, Dilito bvba, met als correspondentieadres Draaiboomstraat 6, 2160 Wommelgem, vertegenwoordigd door haar zaakvoerder Louis Ballegeer.</p>
      <p>Hierna genoemd het <b>dienstenbedrijf</b>,</p>
      <div style="line-height: 0.7">
        <p>en {{contact ? contact.Name : currContract.name.S }}</p>
        <p>{{ contact ? contact.MailingAddress.street : currContract.street.S }}</p>
        <p>{{ contact ? contact.MailingAddress.postalCode : currContract.postalcode.N }} {{ contact ? contact.MailingAddress.city : currContract.city.S }}</p>
      </div>
      <p style="padding-top: 8px;">hierna genoemd de <b>gebruiker</b> wordt overeengekomen hetgeen volgt:</p>
      <p><b>1 Inleiding</b></p>
      <p>Tussen dienstenbedrijf, gebruiker en uitvoerder wordt overeengekomen dat de uitvoerder die tewerkgesteld is bij het dienstenbedrijf een aantal taken van huishoudelijke hulp uitvoert voor de gebruiker, kaderend in het overheidsprogramma 'dienstencheques'. De gebruiker en de uitvoerder verklaren uitdrukkelijk geen bloed- of aanverwanten te zijn tot de tweede graad, en niet dezelfde woonplaats delen.</p>
      <p><b>2 Opdracht</b></p>
      <p>De gebruiker geeft hierbij de opdracht aan het dienstenbedrijf voor het uitvoeren van volgende prestaties in de privéwoning van de opdrachtgever:</p>
      <ul>
        <li><i class="fa fa-check" style="margin-right: 9px;"></i>onderhoud van vloeren en vloerbekleding (stofzuigen, vegen, uitkloppen, dweilen, schuren, boenen, etc.);</li>
        <li><i class="fa fa-check" style="margin-right: 9px;"></i>afwassen, wassen (machinaal), strijken;</li>
        <li><i class="fa fa-check" style="margin-right: 9px;"></i>poetsen van de keuken (gootsteen, fornuis, aanrecht, koelkast, diepvries, kleine keukentoestellen zoals koffiezet, keukenrobot en dergelijke);</li>
        <li><i class="fa fa-check" style="margin-right: 9px;"></i>schoonmaken van sanitaire installaties (bad, douche, wastafel, toilet, etc.);</li>
        <li><i class="fa fa-check" style="margin-right: 9px;"></i>ramen lappen;</li>
        <li><i class="fa fa-check" style="margin-right: 9px;"></i>boodschappen doen, koken;</li>
      </ul>
      <p>De volgende opdrachten kunnen niet uitgevoerd worden:</p>
      <ul>
        <li><i class="fa fa-check" style="margin-right: 9px;"></i>onderhoud van alle ruimtes die niet integraal deel uitmaken van de privéwoning van de opdrachtgever (bergruimtes buiten, tuinhuisjes, hondenhokken, gemeenschappelijke gangen, trappen of liften in appartementsgebouwen, beroepslokalen, praktijkruimtes);</li>
        <li><i class="fa fa-check" style="margin-right: 9px;"></i>verzorging van huisdieren of onderhoud van verblijfsruimtes of materiaal gebruikt voor huisdieren;</li>
        <li><i class="fa fa-check" style="margin-right: 9px;"></i>onderhoud van ramen die vast zijn of die niet naar binnen opengaan vanaf de eerste verdieping;</li>
        <li><i class="fa fa-check" style="margin-right: 9px;"></i>onderhoud van auto's, motoren, brommers en fietsen;</li>
        <li><i class="fa fa-check" style="margin-right: 9px;"></i>onderhoud van uiterst kostelijke zaken zoals waardevolle en dure schilderijen, vazen, kunstvoorwerpen, etc .</li>
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
    created() {
      console.log()
    },
  }
</script>

<style lang="scss" scoped>

</style>