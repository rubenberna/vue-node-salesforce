<template>
  <div v-show="!contractForm.signature">
    <div style="margin-top: 52px;">
      <p style="font-style: italic; text-align: center;">Gebruik uw <i class="material-icons">mouse</i> om uw overeenkomst te tekenen</p>
      <VueSignaturePad
      id="signature"
      width="507px"
      height="270px"
      ref="signaturePad"
      />
    </div>
    <div class="confirm-buttons">
      <a class="waves-effect btn-flat erase-btn" v-show='!signed' @click="undo">Wis</a>
      <a class="waves-effect btn light-blue darken-4 confirm-btn" v-show="!signed" @click="finishContract">Bevestig</a>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'draw-signature',
    computed: {
      ...mapGetters(['contractForm', 'signed'])
    },
    methods: {
      ...mapActions(['']),
      undo() {
        this.$refs.signaturePad.undoSignature();
      },
      finishContract() {
        const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
        this.$emit('drawContract', { isEmpty, data })
      }
    },
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/style.scss';

   #signature {
    border: double 3px transparent;
    border-radius: 5px;
    background-image: linear-gradient(white, white),
    radial-gradient(circle at top left, #4bc5e8, #9f6274);
    background-origin: border-box;
    background-clip: content-box, border-box;
    margin: 0 auto;

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
