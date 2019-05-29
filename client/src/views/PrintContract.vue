<template lang="html">
  <div class="contract">
    <div class="container">
      <div v-if='!currContract' class="no-contact container">
        <broken-page />
      </div>
      <div v-else class="container" style="text-align:justify; color: black;">
        <PageOne/>
        <PageTwo/>
        <PageThree/>
        <PageFour/>
        <PageFive/>
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
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import pdfCreator from '@/components/_helpers/pdfCreator'
  import Loader from '@/components/loader/Loader'
  import fab from 'vue-fab'
  import BrokenPage from '@/components/404/BrokenPage'
  import PageOne from '@/components/contractText/PageOne'
  import PageTwo from '@/components/contractText/PageTwo'
  import PageThree from '@/components/contractText/PageThree'
  import PageFour from '@/components/contractText/PageFour'
  import PageFive from '@/components/contractText/PageFive'

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
      PageFour,
      PageFive,
    },
    computed: {
      ...mapGetters(['currContract', 'loading']),
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
        await pdfCreator.printPdf(pageOne, pageTwo, pageThree, pageFour, pageFive, screen)
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
  @import '../assets/style.scss';

  .contract {
    margin-top: 50px;
    margin-bottom: 50px;
    min-height: 100vh;
    position: relative;
  }

  .loader {
      width: 90px;
      position: fixed;
      right: 5vw;
      top: 5vh;
    }

</style>
