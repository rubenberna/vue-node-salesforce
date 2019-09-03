<template>
  <div class="contract">
    <Flash class="flash"/>
    <div v-if='!contact' class="no-contact container">
      <Broken-page />
    </div>
    <div v-else class="container">
      <div class="container" 
           style="text-align:justify;">
       <PageOne />
       <PageTwo/>
       <PageThree/>
       <PageFour/>  
       <PageFive @saveContract="validateContract($event)"/> 
    </div>
    <transition name="custom-classes-transition"
                enter-active-class="animated fadeInUp"
                leave-active-class="fadeOut slow">
      <div v-show='contractForm.signed' 
           class="send-pdf">
        <div class="contract-print-action">
          <Loader class='loader' 
                  color="#26a69a" 
                  :loading='loading'/>
          <button v-show="!loading"
                  class="btn waves-effect waves-light print-btn"
                  type="submit"
                  @click.stop="makePDF">{{ $t('bewaren') }}
            <i class="material-icons right">
              picture_as_pdf
            </i>
          </button>
        </div>
      </div>
    </transition>
    </div>
    <Modal :dialogVisible='modalOpen' 
            @toggleDialog='closeModal'
    />
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import Flash from '@/components/flash/Flash'
  import pdfCreator from '@/components/_helpers/pdfCreator'
  import BrokenPage from '@/components/404/BrokenPage'
  import Loader from '@/components/loader/Loader'
  import Modal from '@/components/modal/Modal'
  import PageOne from '@/components/contractText/PageOne'
  import PageTwo from '@/components/contractText/PageTwo'
  import PageThree from '@/components/contractText/PageThree'
  import PageFour from '@/components/contractText/PageFour'
  import PageFive from '@/components/contractText/PageFive'

  export default {
    name: 'contract',
    data() {
      return {
        sendVisible: true,
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
      PageFive,
    },
    computed: {
      ...mapGetters(['contact', 'flashSticker', 'loading', 'contractForm', 'locale']),
    },
    methods: {
      ...mapActions(['createContract', 'changeLoading', 'updateForm']),
      closeModal(e){
        this.modalOpen = e
      },
      setIPAddress() {
        $.getJSON("https://jsonip.com?callback=?", (data) => {
          this.updateForm({ name: 'ipAddress', inputValue: data.ip })
        })
      },
      validateContract( { isEmpty, data } ) {        
        if(isEmpty) {
          let msgMouse;
          this.locale === 'fr' ? msgMouse = 'Utilisez votre souris pour signer' : msgMouse = 'Gebruik je muis om je handtekening te tekenen'
          this.flashError(msgMouse)
        } else if (!this.contractForm.typedName) {
          let msgName;
          this.locale === 'fr' ? msgName = 'Entrez votre nom' : msgName = 'Geef eerst uw naam in'
          this.flashError(msgName)
        } else if (!this.contractForm.checkBoxOne || !this.contractForm.checkBoxTwo || !this.contractForm.checkBoxThree) {
          let msgTC;
          this.locale === 'fr' ? msgTC = 'Vous devez accepter les conditions générales d’Easy Life T&C' : msgTC = 'U moet eerst akkoord gaan met de algemene Easy Life T&C'
          this.flashError(msgTC)
        } else {
            this.updateForm({ name: 'signature', inputValue: data })
            this.updateForm({ name: 'signed', inputValue: true })
            this.createContract()
            this.modalOpen = true
        }
      },
        async makePDF() {
          this.changeLoading(true)
          const pageOne = document.getElementById('page-one')
          const pageTwo = document.getElementById('page-two')
          const pageThree = document.getElementById('page-three')
          const pageFour = document.getElementById('page-four')
          const pageFive = document.getElementById('page-five')
          const screen = window.innerWidth
          await pdfCreator.printPdf(pageOne, pageTwo, pageThree, pageFour, pageFive, screen)
          this.changeLoading(false)
          setTimeout(() => this.$router.push('/'), 4000 )
      },
    },
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

  .loader {
    width: 90px;
    position: absolute;
    left: 40vw;
    bottom: 1vh;
  }
</style>
