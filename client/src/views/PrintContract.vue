<template lang="html">
  <div class="contract">
    <div class="container">
      <div v-if='!currContract' class="no-contact container">
        <broken-page />
      </div>
      <div v-else id="contract-layout" class="container" style="text-align:justify; color: black;">
        <div id="page-one">
          <div class="" style="display: flex; justify-content: space-between;">
            <div class="">
              <p style="font-weight: 700;">Overeenkomst huishoudelijke hulp DIENSTENCHEQUES</p>
              <p style="font-style: italic; text-align: center;">Tussen gebruiker en dienstenbedrijf</p>
            </div>
            <div>
              <img src="../assets/images/logo.png" style="width: 90px;">
            </div>
          </div>
            <hr>
            <p>Tussen,</p>
            <p>EasyLife dienstencheques als commerciële benaming van volgende vennootschappen: Dienstenbedrijf EasyLife bvba, Sivac bvba, Dilito bvba, met als correspondentieadres Draaiboomstraat 6, 2160 Wommelgem, vertegenwoordigd door haar zaakvoerder Louis Ballegeer.</p>
            <p>Hierna genoemd het <b>dienstenbedrijf</b>,</p>
            <div style="line-height: 0.7">
              <p>en {{currContract.name.S}}</p>
              <p>{{currContract.street.S}}</p>
              <p>{{currContract.postalcode.N}} {{currContract.city.S}}</p>
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
        <div id="page-two">
          <p>Enige schade die het gevolg zou zijn van een inbreuk op bovenstaande bepalingen (1 & 2) kan door het dienstenbedrijf worden verhaald op de gebruiker.</p>
          <p><b>3 Vergoeding</b></p>
          <p>De betalingen gebeuren door middel van dienstencheques, één cheque per gepresteerd uur. De betaling dient te gebeuren bij elke onderhoudsbeurt. Bij afwezigheid van de gebruiker dient deze er voor in te staan dat het afgesproken aantal papieren dienstencheques ondertekend en gedateerd klaar ligt.</p>
          <p>Het dienstenbedrijf mag enkel dienstencheques aanvaarden op naam van gebruikers die woonachtig zijn op het schoonmaakadres. Indien er dienstencheques aangewend worden die niet toebehoren aan bewoners van het schoonmaakadres, kunnen deze geweigerd worden als geldig betalingsmiddel. Indien de gebruiker toch met ongeldige dienstencheques betaald en deze geweigerd worden door de uitbetalingsmaatschappij, kan het dienstenbedrijf deze aanrekenen aan 25 euro per cheque aan de gebruiker.</p>
          <p>Verschuldigde achterstallige dienstencheques dienen uiterlijk binnen de 7 dagen, na de geleverde prestaties, in het bezit te zijn van het dienstenbedrijf. Indien de gebruiker hieraan niet voldoet, behoudt het dienstenbedrijf zich het recht een vergoeding aan te rekenen gelijk aan de gepresteerde uren vermenigvuldigd met de inruilwaarde van een dienstencheque. Dit bedrag stemt overeen met 23,02 euro per uur en is gekoppeld aan de evolutie van de lonen in het paritair comité 322.01.</p>
          <p>Indien de gebruiker in gebreke blijft, zal op de verschuldigde bedragen van rechtswege en zonder aanmaning een intrest verschuldigd zijn gelijk aan de intrest voorzien in de wet van 02/08/2001 op de betalingsachterstand met een minimum van 6% en tevens een forfaitaire schadevergoeding voor administratiekosten van 10% met een minimum van 50 euro</p>
          <p>Ingeval van niet-betaling heeft het dienstenbedrijf het recht de overeenkomst onmiddellijk op te schorten, onverminderd het recht om de ontbinding van de overeenkomst en een vergoeding voor de geleden schade te vorderen.</p>
          <p>Ingeval van laattijdige betaling heeft het dienstenbedrijf het recht een administratieve kost van 1 euro per dienstencheque aan te rekenen. Deze kost komt voor uit de bijkomende administratie die er gevoerd moet worden in het kader van de inning van de dienstencheques, zoals bijvoorbeeld: briefwisseling, telefoonverkeer, opzoekwerk betalingen, etc.</p>
          <p><b>4 Materiaal en producten</b></p>
          <p>De gebruiker staat in voor het benodigde materiaal en producten die de uitvoerder nodig heeft voor zijn taak.    De gebruiker verbindt zich ertoe informatie aan te bieden over de aanwezige producten. Alle producten moeten voorzien zijn van een geldig etiket.
          De uitvoerder zal aan de gebruiker advies verlenen i.v.m. de materialen en producten die hij nodig acht voor de uitoefening van zijn taak en hierbij rekening houden met de efficiëntie, kostprijs en milieu.</p>
          <p><b>5 Veiligheid en gezondheid</b></p>
          <p>De gebruiker verbindt zich ertoe om steeds een verbanddoos ter beschikking te stellen voor de uitvoerder.</p>
          <p>De gebruiker verklaart hierbij uitdrukkelijk alle mogelijke maatregelen te treffen om de veiligheid en de gezondheid van de uitvoerder te garanderen.
            Meer bepaald zal:</p>
        </div>
        <div id="page-three">
          <ul>
            <li><i class="fa fa-check" style="margin-right: 9px;"></i>de gebruiker steeds zorgen voor veilige elektrische leidingen en bij werken in de buurt van deze leidingen er zorg voor dragen dat de elektriciteit uitgeschakeld is;</li>
            <li><i class="fa fa-check" style="margin-right: 9px;"></i>de gebruiker zorgt ervoor dat de toestellen (strijkijzer, fornuis, stofzuiger, trapladder, etc.) en de producten die hij ter beschikking stelt aan de uitvoerder geen aanleiding kunnen geven tot ongevallen of gezondheidsproblemen;</li>
            <li><i class="fa fa-check" style="margin-right: 9px;"></i>de gebruiker zorgt ervoor dat de uitvoerder niet in contact hoeft te komen met huisdieren indien deze laatste dit niet wenst of gevaarlijk acht;</li>
          </ul>
          <p><b>6 Verlof of afwezigheid van de gebruiker</b></p>
          <p>Onverwachte bijsturing aan het werkschema en vakantieperiodes moeten minstens 14 dagen op voorhand aan het dienstenbedrijf gemeld worden. Indien de uitvoerder de voorziene taken niet kan uitvoeren ingevolge nalatigheid van de gebruiker, verbindt de gebruiker zich ertoe om per gepland werkuur een bedrag van 23,02 euro te betalen aan het dienstenbedrijf. De gebruiker heeft het recht om 6 poetsbeurten per jaar de dienstverlening te annuleren. De daaropvolgende weken kunnen ook in rekening gebracht aan het geplande uren maal 23,02 euro.</p>
          <p><b>7 Verlof of afwezigheid van de uitvoerder</b></p>
          <p>Verloven van de uitvoerder zullen minstens twee weken op voorhand door de uitvoerder ter kennis gebracht worden aan de gebruiker en het dienstenbedrijf. Op vraag van de gebruiker en voor zover de mogelijkheden dit toelaten kan het dienstenbedrijf een tijdelijke vervanging voorzien. Bij ziekte of omstandigheidsverlof van de uitvoerder zal het dienstenbedrijf of de uitvoerder zelf de gebruiker hiervan zo snel mogelijk verwittigen. Bij langdurige afwezigheid (meer dan twee weken) zal het dienstenbedrijf in de mate van het mogelijke vervanging voorzien.</p>
          <p><b>8 Verzekeringen</b></p>
          <p>Het dienstenbedrijf staat in voor de verzekering van de uitvoerder zowel tegen arbeidsongevallen als tegen materiële schade veroorzaakt door de uitvoerder.
          Uitzonderlijk kostbare zaken dienen door de gebruiker buiten het bereik gehouden te worden. Het dienstenbedrijf en de uitvoerder aanvaarden geen opdracht voor het reinigen of het onderhoud van deze zaken in het kader van de dienstencheques en zijn hier evenmin voor verzekerd. Er is een eigen risico van maximum 250 euro ten laste van de gebruiker. Het aandeel van het eigen risico is afhankelijk van de classering van het schadegeval door de verzekering van het dienstenbedrijf.</p>
          <p>Er is geen verzekering voor diefstal. Het dienstenbedrijf kan niet aansprakelijk gesteld worden voor eventuele diefstal gepleegd door medewerkers. De gebruiker zal ten allen tijde alle kostbare stukken zoals juwelen, geld, bankkaarten en andere materialen veilig opbergen. Indien er toch sprake zou zijn van ontvreemding, dient de gebruiker klacht in te dienen tegen de uitvoerder en het dienstenbedrijf hier meteen van op de hoogte te brengen.</p>
          <p><b>9 Duur van de overeenkomst</b></p>
          <p>Deze overeenkomst geldt voor een periode van onbepaalde duur.
          De eerste maand van het in voege treden van deze overeenkomst geldt als proefperiode: elk van de partijen kan mits een vooropzeg van één week een einde maken aan de overeenkomst. Nadien geldt een opzegperiode van 2 maanden.
          Tijdens de opzegperiode moet de uitvoerder zijn taken ook effectief uitvoeren bij de gebruiker. Dit wil zeggen dat de gebruiker geen afwezigheid kan opnemen tijdens de opzegperiode. De opzeg dient te gebeuren via:</p>
          <p>- email: customercare@easylifedc.be</p>
          <p>- aangetekend schrijven gericht aan: EasyLife customercare, Draaiboomstraat 6, 2160 Wommelgem</p>
        </div>
        <div id="page-four">
          <p><b>10 Algemene bepalingen</b></p>
          <p>Roken: zowel de gebruiker als de uitvoerder verbinden zich ertoe niet te roken in de ruimtes waarin de uitvoerder werkzaam is, indien dit stoort voor zowel gebruiker of uitvoerder.</p>
          <p>Rustperiodes: per 4 uur is er een rustperiode voorzien van 10 minuten (betaald); bij opdrachten van meer dan 4 uur heeft de uitvoerder de mogelijkheid een extra pauze van maximaal 1 uur (onbetaald in te lassen).</p>
          <p><b>11 Overstap beperkingen</b></p>
          <p>Partijen erkennen dat het klantenbestand van het dienstenbedrijf, waarvan de gebruiker deel uitmaakt, bijzonder waardevol is voor het dienstenbedrijf en dat het verlies/de afwering van klanten een aanzienlijke destabilisering van het dienstenbedrijf tot gevolg heeft.</p>
          <p>De gebruiker verbindt zich er dus toe, gedurende een periode van 12 maanden na beëindiging van de huidige overeenkomst, geen personeel in dienst te nemen dat, in het kader van huidige overeenkomst, arbeidsprestaties heeft verricht voor de gebruiker. Dit houdt in dat de gebruiker zich er toe verbindt om geen personeel van het dienstenbedrijf, ook niet na verbreking van de overeenkomst tussen het dienstenbedrijf en de werknemer, in dienst te nemen voor een periode van 12 maanden.</p>
          <p>De gebruiker verbindt zich bij overtreding tot betaling van een forfaitaire schadevergoeding aan het dienstenbedrijf ten bedrage van 1.000 euro per overtreding, onverminderd het recht van het dienstenbedrijf om de werkelijke schade te vorderen indien deze groter zou zijn.</p>
          <p><b>12 Algemene voorwaarden</b></p>
          <p>Alle bepalingen in deze overeenkomst zijn ondergeschikt aan de algemene voorwaarden van het dienstenbedrijf. Het dienstenbedrijf behoudt zich het recht voor om de algemene voorwaarden eenzijdig te wijzigen. De gebruiker zal hiervan op voorhand in kennis worden gebracht en zal in dat geval over een redelijke termijn beschikken om de overeenkomst kostenloos te beëindigen vooraleer de nieuwe voorwaarden in werking treden.</p>
          <p>Indien de gebruiker de overeenkomst niet opzegt, geeft dit aan dat hij akkoord gaat met de laatst gepubliceerde algemene voorwaarden. De algemene voorwaarden zijn te vinden op <a href="www.Easylife-dc.be/algemenevoorwaarden">www.Easylife-dc.be/algemenevoorwaarden</a></p>
          <p>Deze kunnen op vraag van de gebruiker ook per post aangeleverd worden.</p>
          <p><b>13 Privacy en gegevensverwerking</b></p>
          <p>De gegevens van alle gebruikers worden verwerkt en bijgehouden zoals beschreven in ons privacycharter. Dit privacycharter is te vinden op <a href="www.easylife-dc.be/nl/privacy">www.easylife-dc.be/nl/privacy</a>.</p>
        </div>
        <div id="page-five">
          <p><b>14 Betwistingen</b></p>
          <p>Bij betwistingen voortvloeiend uit deze overeenkomst is de Rechtbank van Antwerpen bevoegd.</p>
          <p>Deze overeenkomst werd getekend te {{currContract.office.S}}, op {{signedDate}}</p>
          <p>De gebruiker verklaart hierbij dat:</p>
          <div class="checkbox">
            <ul>
              <li><i class="fa fa-check" style="margin-right: 9px;"></i>Deze overeenkomst afgesloten is voor het adres waar hij woonachtig is</li>
              <li><i class="fa fa-check" style="margin-right: 9px;"></i>Zich akkoord met de algemene voorwaarden</li>
              <li><i class="fa fa-check" style="margin-right: 9px;"></i>Zich akkoord met de privacycharter van het dienstenbedrijf</li>
            </ul>
          </div>
          <p>Beide partijen bevestigen voor gelezen en goedgekeurd</p>
          <div>
            <div id='signatures' style="display: flex; justify-content: space-around; margin-top: 50px;">
              <!-- User information -->
              <div>
                <p><b>GEBRUIKER</b></p>
                <p style="font-family: 'Satisfy', cursive; font-size: 20px;">{{currContract.typedname.S}}</p>
                <div style="margin-top: 30px;">
                  <div>
                    <img :src="currContract.signature.S" style="width: 150px">
                  </div>
                </div>
              </div>
              <!-- Louis signature -->
              <div>
                <p><b>DIENSTENBEDRIJF</b></p>
                <p style="font-family: 'Satisfy', cursive; font-size: 20px;">Louis Ballegeer - zaakvoerder</p>
                <div>
                  <img src="../assets/images/handtekening300.jpeg">
                </div>
              </div>
            </div>
            <!-- Data after signed -->
            <div class="frame">
              <div>
                <img src="../assets/images/signed.jpeg" style="width: 32px; margin: 0 auto;">
                <p style="margin: 0;">SIGNED</p>
              </div>
              <div>
                <p style="margin: 0 0 9px 0; font-weight: 600;">{{signedDate}}</p>
                <p style="margin: 0;">{{currContract.signedtime.S}}</p>
              </div>
              <div>
                <p style="margin: 0 0 9px 0; font-weight: 600;">Signed by - {{currContract.name.S}}</p>
                <p style="margin: 0;">IP: {{currContract.ipaddress.S}}</p>
              </div>
            </div>
          </div>
          </div>
            <loader class='loader' color="#848484" :loading='loading'/>
            <!-- <a v-show="!loading" class="btn-floating pulse btn-large print-btn grey accent-3"
              @click.prevent='makePDF'>
                <i class="material-icons">print</i>
            </a> -->
            <fab
              v-show="!loading"
              :bg-color="bgColor"
              :actions="fabActions"
              :position="position"
              @reset="reset"
              @makePDF="makePDF"
            ></fab>
        </div>
      </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import moment from 'moment'
  import pdfCreator from '@/components/_helpers/pdfCreator'
  import Loader from '@/components/loader/Loader'
  import fab from 'vue-fab'
  import BrokenPage from '@/components/404/BrokenPage'

  export default {
    name: 'printContract',
    data() {
      return {
        bgColor: '#1a237e',
        position: 'top-right',
        fabActions: [
          {
              name: 'reset',
              icon: 'home',
              tooltip: 'Home'
          },
          {
              name: 'makePDF',
              icon: 'picture_as_pdf',
              tooltip: 'Print PDF'
          },
        ]
      }
    },
    components: {
      Loader,
      fab,
      BrokenPage
    },
    computed: {
      ...mapGetters(['currContract', 'loading']),
      signedDate() {
        moment.locale('nl-be');
        return moment(this.currContract.signedat.S).format("MMM Do YYYY")
      }
    },
    methods: {
      ...mapActions(['changeLoading', 'clear']),
      async makePDF() {
        this.changeLoading(true)
        const pageOne = document.getElementById('page-one')
        const pageTwo = document.getElementById('page-two')
        const pageThree = document.getElementById('page-three')
        const pageFour = document.getElementById('page-four')
        const pageFive = document.getElementById('page-five')
        const screen = window.innerWidth
        const print = await pdfCreator.printPdf(pageOne, pageTwo, pageThree, pageFour, pageFive, screen)
        this.changeLoading(false)
      },
      reset(){
          this.clear()
          this.$router.push('/')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css?family=Satisfy');
  @import '../assets/style.scss';

  .contract {
    margin-top: 50px;
    margin-bottom: 50px;
    min-height: 100vh;
    position: relative;
  }

  .frame {
    display: flex;
    justify-content: space-around;
    margin: 35px 0;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
    padding: 15px;
    width: 700px;

    @media #{$medium-and-down}  {
      flex-direction: column;
      width: 50%;
    }
  }

  #signatures {
    @media #{$medium-and-down}  {
      flex-direction: column-reverse;
      align-items: flex-start;
    }
  }

  .loader {
      width: 90px;
      position: fixed;
      right: 5vw;
      bottom: 5vh;
    }

</style>
