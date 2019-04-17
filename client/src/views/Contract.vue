<template>
  <div class="contract">
    <flash class="flash"/>
    <div v-if='!contact' class="no-contact container">
      <broken-page />
    </div>
    <div v-else
        class="container"
        id="contract-layout">
      <div class="container" style="text-align:justify;" ref='myDom'>
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
            <p>en {{contact.Name}}</p>
            <div v-if="contact.MailingAddress">
              <p>{{contact.MailingAddress.street}}</p>
              <p>{{contact.MailingAddress.postalCode}} {{contact.MailingAddress.city}}</p>
            </div>
          </div>
          <p style="padding-top: 8px;">hierna genoemd de <b>gebruiker</b> wordt overeengekomen hetgeen volgt:</p>
          <p><b>1 Inleiding</b></p>
          <p>Tussen dienstenbedrijf, gebruiker en uitvoerder wordt overeengekomen dat de uitvoerder die tewerkgesteld is bij het dienstenbedrijf een aantal taken van huishoudelijke hulp uitvoert voor de gebruiker, kaderend in het overheidsprogramma 'dienstencheques'. De gebruiker en de uitvoerder verklaren uitdrukkelijk geen bloed- of aanverwanten te zijn tot de tweede graad, en niet dezelfde woonplaats delen.</p>
          <p><b>2 Opdracht</b></p>
          <p>De gebruiker geeft hierbij de opdracht aan het dienstenbedrijf voor het uitvoeren van volgende prestaties in de privéwoning van de opdrachtgever:</p>
          <ul>
            <li style="list-style-type: initial;">onderhoud van vloeren en vloerbekleding (stofzuigen, vegen, uitkloppen, dweilen, schuren, boenen, etc.);</li>
            <li style="list-style-type: initial;">afwassen, wassen (machinaal), strijken;</li>
            <li style="list-style-type: initial;">poetsen van de keuken (gootsteen, fornuis, aanrecht, koelkast, diepvries, kleine keukentoestellen zoals koffiezet, keukenrobot en dergelijke);</li>
            <li style="list-style-type: initial;">schoonmaken van sanitaire installaties (bad, douche, wastafel, toilet, etc.);</li>
            <li style="list-style-type: initial;">ramen lappen;</li>
            <li style="list-style-type: initial;">boodschappen doen, koken;</li>
          </ul>
          <p>De volgende opdrachten kunnen niet uitgevoerd worden:</p>
          <ul>
            <li style="list-style-type: initial;">onderhoud van alle ruimtes die niet integraal deel uitmaken van de privéwoning van de opdrachtgever (bergruimtes buiten, tuinhuisjes, hondenhokken, gemeenschappelijke gangen, trappen of liften in appartementsgebouwen, beroepslokalen, praktijkruimtes);</li>
            <li style="list-style-type: initial;">verzorging van huisdieren of onderhoud van verblijfsruimtes of materiaal gebruikt voor huisdieren;</li>
            <li style="list-style-type: initial;">onderhoud van ramen die vast zijn of die niet naar binnen opengaan vanaf de eerste verdieping;</li>
            <li style="list-style-type: initial;">onderhoud van auto's, motoren, brommers en fietsen;</li>
            <li style="list-style-type: initial;">onderhoud van uiterst kostelijke zaken zoals waardevolle en dure schilderijen, vazen, kunstvoorwerpen, etc .</li>
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
          <p>De gebruiker staat in voor het benodigde materiaal en producten die de uitvoerder nodig heeft voor zijn taak. De gebruiker verbindt zich ertoe informatie aan te bieden over de aanwezige producten. Alle producten moeten voorzien zijn van een geldig etiket.
          De uitvoerder zal aan de gebruiker advies verlenen i.v.m. de materialen en producten die hij nodig acht voor de uitoefening van zijn taak en hierbij rekening houden met de efficiëntie, kostprijs en milieu.</p>
          <p><b>5 Veiligheid en gezondheid</b></p>
          <p>De gebruiker verbindt zich ertoe om steeds een verbanddoos ter beschikking te stellen voor de uitvoerder.</p>
          <p>De gebruiker verklaart hierbij uitdrukkelijk alle mogelijke maatregelen te treffen om de veiligheid en de gezondheid van de uitvoerder te garanderen.
            Meer bepaald zal:</p>
        </div>
        <div id='page-three'>
          <ul>
            <li style="list-style-type: initial;">de gebruiker steeds zorgen voor veilige elektrische leidingen en bij werken in de buurt van deze leidingen er zorg voor dragen dat de elektriciteit uitgeschakeld is;</li>
            <li style="list-style-type: initial;">de gebruiker zorgt ervoor dat de toestellen (strijkijzer, fornuis, stofzuiger, trapladder, etc.) en de producten die hij ter beschikking stelt aan de uitvoerder geen aanleiding kunnen geven tot ongevallen of gezondheidsproblemen;</li>
            <li style="list-style-type: initial;">de gebruiker zorgt ervoor dat de uitvoerder niet in contact hoeft te komen met huisdieren indien deze laatste dit niet wenst of gevaarlijk acht;</li>
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
          <p><b>10 Algemene bepalingen</b></p>
          <p>Roken: zowel de gebruiker als de uitvoerder verbinden zich ertoe niet te roken in de ruimtes waarin de uitvoerder werkzaam is, indien dit stoort voor zowel gebruiker of uitvoerder.</p>
        </div>
        <div id="page-four">
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
          <p>Deze overeenkomst werd getekend te {{contact.office}}, op {{today}}</p>
          <p>De gebruiker verklaart hierbij dat:</p>
          <div class="checkbox">
            <form action="#">
              <p style="display: flex; flex-direction: column;">
                <label>
                  <input type="checkbox" v-model='checkbox.one'/>
                  <span style="color: #2c3e50">Deze overeenkomst afgesloten is voor het adres waar hij woonachtig is</span>
                </label>
                <label>
                  <input type="checkbox" v-model='checkbox.two'/>
                  <span style="color: #2c3e50;">Hij / Zij zich akkoord stelt met de <a href="https://easylife-dc.be/nl/algemene-voorwaarden" target="_blank">algemene voorwaarden</a></span>
                </label>
                <label>
                  <input type="checkbox" v-model='checkbox.three'/>
                  <span style="color: #2c3e50">Hij / Zij zich akkoord stelt met de privacycharter van het dienstenbedrijf</span>
                </label>
              </p>
            </form>
          </div>
          <p>Beide partijen bevestigen voor gelezen en goedgekeurd</p>
          <div class='signatures' style="display: flex; justify-content: space-between">

            <!-- User information -->
            <div class="gebruiker">
              <p><b>GEBRUIKER</b></p>

              <!-- Type name -->
              <input type="text" placeholder="Type your name" style="max-width: 330px; font-family: 'Satisfy', cursive; font-size: 20px; " v-model="contactDB.typedName">
              <div style="margin-top: 30px;">
                <div v-show='!autograph'
                    style="margin-top: 52px;">
                  <p style="font-style: italic; text-align: center;">Gebruik uw <i class="material-icons">mouse</i> om uw overeenkomst te tekenen</p>
                  <!-- Signature canvas -->
                  <VueSignaturePad
                  id="signature"
                  width="507px"
                  height="270px"
                  ref="signaturePad"
                  />
                </div>

                <!-- signature after saved -->
                <div v-show='autograph'>
                  <img :src="autograph" style="width: 200px">
                </div>

                <!-- Data after signed -->
                <div v-if="signed && autograph"
                class="stamp"
                style="display: flex; justify-content: space-around; margin: 35px 0; box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15); padding: 15px; min-width: 500px;">
                <div>
                  <img src="../assets/images/signed.jpeg" style="width: 32px; margin: 0 auto;">
                  <p style="margin: 0;">ONDERTEKEND</p>
                </div>
                <div>
                  <p style="margin: 0 0 9px 0; font-weight: 600;">{{today}}</p>
                  <p style="margin: 0;">{{time}}</p>
                </div>
                <div>
                  <p style="margin: 0 0 9px 0; font-weight: 600;">Ondertekend door - {{contact.Name}}</p>
                  <p style="margin: 0;">IP: {{contactDB.ipAddress}}</p>
                </div>
              </div>
              <router-link to="/">
                <a v-show="homeBtn" class="waves-effect waves-light btn home-btn"><i class="material-icons">home</i>Home</a>
              </router-link>

              <!-- buttons to sign or undo -->
              <div class="confirm-buttons">
                <a class="waves-effect btn-flat erase-btn" v-show='!signed' @click="undo">Wis</a>
                <a class="waves-effect btn light-blue darken-4 confirm-btn" v-show="!signed" @click="validateContract">Bevestig</a>
              </div>
            </div>
          </div>

          <!-- Louis signature -->
          <div>
            <p><b>DIENSTENBEDRIJF</b></p>
            <p style="width: 330px; font-family: 'Satisfy', cursive; font-size: 20px; ">Louis Ballegeer - zaakvoerder</p>
            <div>
              <img src="../assets/images/handtekening300.jpeg" style="width: 300px;">
            </div>
          </div>
        </div>
        </div>
      </div>

      <!-- Send contract by email -->
      <transition name="custom-classes-transition"
                  enter-active-class="animated fadeInUp"
                  leave-active-class="fadeOut slow">
      <div v-show='signed && sendVisible' class="send-pdf">

        <!-- contact has email -->
        <!-- <div v-if='contact.Email'
             class="send-pdf-wrapper">
          <p>Verstuur per e-mail naar <b>{{contact.Email}}</b>?</p>
          <div class="send-pdf-has-email">
            <button class="btn waves-effect waves-light"
                    type="submit"
                    @click.prevent="verifyEmail">Stuur
              <i class="material-icons right">send</i>
            </button> -->

            <!-- choose another email -->
            <!-- <a v-show='!anotherEmail' class="btn-flat" style="color: #bdbdbd" @click='anotherEmail = true'>Selecteer een ander email</a>
            <form v-show='anotherEmail'>
              <div class="input-field" style="margin-left: 20px;">
                <label for="email">Email</label>
                <input type="email"  class="validate" v-model='contactDB.newEmail'>
                <span class="helper-text" data-error="Wrong email type" data-success="Correct email type"></span>
              </div>
            </form>
          </div>
        </div> -->

        <!-- contact doesn't have email -->
        <!-- <div v-else
             class="send-pdf-wrapper">
          <p style="text-align: left;">Verstuur <b>contract</b> per e-mail?</p>
          <form style="display: flex; align-items: center;">
            <div class="input-field">
              <label for="email">Email</label>
              <input type="email"  class="validate" v-model='contactDB.newEmail'>
              <span class="helper-text" data-error="Wrong email type" data-success="Correct email type"></span>
            </div>
            <button class="btn waves-effect waves-light"
                    type="submit"
                    style="margin-left: 20px;"
                    :disabled='!contactDB.newEmail'
                    @click.prevent="verifyEmail">Stuur
              <i class="material-icons right">send</i>
            </button>
          </form>
        </div> -->

        <button class="btn waves-effect waves-light"
                type="submit"
                @click.prevent="makePDF">Print
          <i class="material-icons right">picture_as_pdf</i>
        </button>

      </div>
    </transition>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import Flash from '@/components/flash/Flash'
  import pdfCreator from '@/components/_helpers/pdfCreator'
  import moment from 'moment'
  import BrokenPage from '@/components/404/BrokenPage'
  import ContractService from '../modules/contracts/api'
  import sizeof from 'object-sizeof'

  export default {
    name: 'contract',
    data() {
      return {
        checkbox: {
          one: null,
          two: null,
          three: null
        },
        anotherEmail: false,
        sendVisible: true,
        contactDB: {
          signature: null,
          ipAddress: null,
          contractHTML: null,
          newEmail: null,
          typedName: null,
          signedTime: null
        },
        homeBtn: false
      }
    },
    components: {
      Flash,
      BrokenPage
    },
    computed: {
      ...mapGetters(['contact', 'signed', 'autograph', 'flashSticker']),
      today() {
        moment.locale('nl-be');
        return moment(new Date()).format("MMM Do YYYY")
      },
      time() {
        return moment(Date.now()).format('h:mm:ss a')
      }
    },
    methods: {
      ...mapActions(['createContract', 'storeSignature', 'addEmail']),
      // Set IP address of the user
      setIPAddress() {
        $.getJSON("https://jsonip.com?callback=?", (data) => {
          this.contactDB.ipAddress = data.ip
        })
      },
      // Undo last action in the canvas
      undo() {
        this.$refs.signaturePad.undoSignature();
      },
      async validateContract() {
        const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
        if(isEmpty) {
          this.flashError('Gebruik je muis om je handtekening te tekenen')
        } else if (!this.contactDB.typedName) {
            this.flashError('Geef eerst uw naam in')
        } else if (!this.checkbox.one || !this.checkbox.two || !this.checkbox.three) {
            this.flashError('U moet eerst akkoord gaan met de algemene Easy Life T&C')
        } else {
            this.$refs.signaturePad.lockSignaturePad();
            this.saveSignature(data) // uneeded ? change autograph by image with data?
            this.formContract(data)
        }
      },
      formContract(data) {
        const finalContact = {
          name: this.contact.Name,
          email: this.contact.Email,
          externalId: this.contact.External_Id__c,
          regioId: this.contact.RegioId__c || 'not provided',
          office: this.contact.office.name || 'EasyLife',
          signature: data,
          signedAt: new Date(),
          ipAddress: this.contactDB.ipAddress || 'not provided',
          contractVersion: '1',
          typedName: this.contactDB.typedName,
          signedTime: moment(Date.now()).format('h:mm:ss a'),
          street: this.contact.MailingAddress.street || 'not provided',
          postalCode: this.contact.MailingAddress.postalCode || 'not provided',
          city: this.contact.MailingAddress.city || 'not provided',
          id: this.contact.Id
          }
        this.createContract(finalContact)
      },

      async saveSignature(data) {
        this.storeSignature(data)
      },
      verifyEmail() {
        if(this.contactDB.newEmail) {
          if(this.validateEmail(this.contactDB.newEmail) == false) this.flashError('Onjuist e-mail')
          else {
            this.addEmail(this.contactDB.newEmail)
            this.triggerEmail()
          }
        } else {
          this.triggerEmail()
        }
      },
      // Validate function
      validateEmail(email) {
        const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(email.match(mailformat)) return true;
        else return false
      },
      // Send PDF as attachment via nodemailer
      async triggerEmail() {
        this.sendVisible = false 
        const pageOne = document.getElementById('page-one')
        const pageTwo = document.getElementById('page-two')
        const pageThree = document.getElementById('page-three')
        const pageFour = document.getElementById('page-four')
        const pageFive = document.getElementById('page-five')
        const screen = window.innerWidth

        const source = await pdfCreator.buildPdf(pageOne, pageTwo, pageThree, pageFour, pageFive, screen)
        const email = this.contactDB.newEmail ? this.contactDB.newEmail : this.contact.Email
        const payload = {
          dom: source.toString(),
          email,
          id: this.contact.External_Id__c
        }
        this.flashSuccess('E-mail verstuurd')
                
        ContractService.sendEmail(payload)
        this.homeBtn = true
      },
        makePDF() {
        const pageOne = document.getElementById('page-one')
        const pageTwo = document.getElementById('page-two')
        const pageThree = document.getElementById('page-three')
        const pageFour = document.getElementById('page-four')
        const pageFive = document.getElementById('page-five')
        const screen = window.innerWidth
        const source = pdfCreator.printPdf(pageOne, pageTwo, pageThree, pageFour, pageFive, screen)
      },
    },
    // Get IP address from the user
    created() {
      this.setIPAddress()      
    }
  }
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css?family=Satisfy');
  @import '../assets/style.scss';

  .contract {
    min-height: 100vh;
    margin-bottom: 50px;
    display: flex;
    position: relative;
    overflow: -moz-hidden-unscrollable;
    overflow: hidden;
    margin-top: 50px;
  }

  #signature {
    border: double 3px transparent;
    border-radius: 5px;
    background-image: linear-gradient(white, white),
    radial-gradient(circle at top left, #4bc5e8, #9f6274);
    background-origin: border-box;
    background-clip: content-box, border-box;
    margin: 0 auto;
    /* margin-top: 60px; */

    @media #{$large-and-down}  {
      width: 450px !important;
    }
    @media #{$medium-and-down}  {
      width: 400px !important;
    }
    @media #{$small-and-down}  {
      max-width: 350px !important;
      width: 270px !important;
    }
  }

  .signatures {
    @media #{$medium-and-down}  {
      flex-direction: column-reverse;
      align-items: flex-start;
    }
  }

  .flash {
    width: 255px;
    position: absolute;
    bottom: 9vh;
    right: 0;
  }

  .send-pdf {
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    .send-pdf-wrapper {
      background: #fafafa;
      padding: 0 25px;
      .input-field {
        width: 330px;
      }
      .send-pdf-has-email {
        display: flex;
        align-items: center;
      }
    }
  }

  .no-contact {
    display: flex;
    justify-content: center;
    align-items: center;
    i {
      font-size: 44px;
      margin-right: 9px;
    }
  }

  .gebruiker {
    width: 84%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media #{$small-and-down}  {
      margin: 0 auto;
    }
  }

  .stamp {
    @media #{$medium-and-down}  {
      flex-direction: column;
      min-width: 300px !important;
      margin: 0 auto;
    }
  }

  .home-btn{
    display: flex;
    align-items: center;
    width: 100px;
    justify-content: space-around;
  }

  .confirm-buttons {
    display: flex; 
    margin-top: 20px; 
    justify-content: space-evenly;

    .erase-btn {
      border: 1px solid;
      padding-right: 28px; 
      padding-left: 28px;
      &:hover {
        background: #eceff1;
      }
    }

    .confirm-btn:hover {
        background: #0277bd !important;
    }
  }

</style>
