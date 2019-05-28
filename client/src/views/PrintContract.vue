<template lang="html">
  <div class="contract">
    <div class="container">
      <div v-if='!currContract' class="no-contact container">
        <broken-page />
      </div>
      <div v-else id="contract-layout" class="container" style="text-align:justify; color: black;">
        <PageOne/>
        <PageTwo/>
        <PageThree/>
        <PageFour/>
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
            <loader class='loader' color="#1a237e" :loading='loading'/>
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
  import PageOne from '@/components/contractText/PageOne'
  import PageTwo from '@/components/contractText/PageTwo'
  import PageThree from '@/components/contractText/PageThree'
  import PageFour from '@/components/contractText/PageFour'

  export default {
    name: 'printContract',
    data() {
      return {
        bgColor: '#034471',
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
        ],
      }
    },
    components: {
      Loader,
      fab,
      BrokenPage,
      PageOne,
      PageTwo,
      PageThree,
      PageFour
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
      top: 5vh;
    }

</style>
