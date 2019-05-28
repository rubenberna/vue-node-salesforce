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
       <PageOne/>
       <PageTwo/>
       <PageThree/>
       <PageFour/>  
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
                <user-signature v-show="autograph"/>
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
          <Louis-signature/>
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
        <div class="contract-print-action">
          <loader class='loader' color="#26a69a" :loading='loading'/>
          <button v-show="!loading"
                  class="btn waves-effect waves-light print-btn"
                  type="submit"
                  @click.prevent="makePDF">Bewaren
            <i class="material-icons right">picture_as_pdf</i>
          </button>
        </div>
      </div>
    </transition>
    </div>
      <Modal 
        :dialogVisible='modalOpen' 
        @toggleDialog='modalOpen = $event'/>
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
  import Loader from '@/components/loader/Loader'
  import Modal from '@/components/modal/Modal'
  import PageOne from '@/components/contractText/PageOne'
  import PageTwo from '@/components/contractText/PageTwo'
  import PageThree from '@/components/contractText/PageThree'
  import PageFour from '@/components/contractText/PageFour'
  import LouisSignature from '@/components/signatures/LouisSignature'
  import UserSignature from '@/components/signatures/UserSignature'

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
        homeBtn: false,
        modalOpen: false
      }
    },
    components: {
      Flash,
      BrokenPage,
      Loader,
      Modal,
      PageOne,
      PageTwo,
      PageThree,
      PageFour,
      LouisSignature,
      UserSignature
    },
    computed: {
      ...mapGetters(['contact', 'signed', 'flashSticker', 'autograph', 'loading']),
      today() {
        moment.locale('nl-be');
        return moment(new Date()).format("MMM Do YYYY")
      },
      time() {
        return moment(Date.now()).format('h:mm:ss a')
      }
    },
    methods: {
      ...mapActions(['createContract', 'storeSignature', 'addEmail', 'changeLoading']),
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
        this.modalOpen = true
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
        async makePDF() {
        this.changeLoading(true)
        const pageOne = document.getElementById('page-one')
        const pageTwo = document.getElementById('page-two')
        const pageThree = document.getElementById('page-three')
        const pageFour = document.getElementById('page-four')
        const pageFive = document.getElementById('page-five')
        const screen = window.innerWidth
        const source = await pdfCreator.printPdf(pageOne, pageTwo, pageThree, pageFour, pageFive, screen)
        this.changeLoading(false)
        setTimeout(() => this.$router.push('/'), 2000 )
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

    .loader {
      width: 90px;
      position: absolute;
      left: 1vw;
      bottom: 2vh;
    }
  }

</style>
