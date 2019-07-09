<template>
  <div>
    <el-dialog
      :title="modalTitle"
      :visible.sync="dialogVisible"
      :before-close="closeModal"
      width="30%">
      <div class="modal-question-box">
        <p class="modal-question">{{ $t('fantastisch') }} <i class="material-icons">check</i></p>
        <p class="modal-question">{{ $t('neem_dan_snel') }}</p>
      </div>
        <a 
          class="waves-effect waves-light btn modal-link-btn"
          href="https://easylife.poets.expert/" 
          target="_blank" 
          rel="noopener noreferrer"
          >EasyLifeshop</a>
    </el-dialog>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'modal',
    props: {
      dialogVisible: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      ...mapGetters(['locale']),
      modalTitle() {
       return this.locale === 'fr' ? 'Possedez-vous déjà un produit de nettoyage écologique?' : 'Beschikt u al over ecologische schoonmaakmiddelen?'
      }
    },
    methods: {
      closeModal() {
        this.$emit('toggleDialog', false)
      }
    },
  }
</script>

<style lang="scss">
@import '../../assets/style.scss';

  .modal-question-box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .modal-question {
      margin: 5px;

      i {
        color: green;
      }
    }

  }

  .modal-link-btn {
    margin-top: 20px;
  }

  .el-dialog {
   @media #{$large-and-down}  {
      width: 50% !important;
    }
   @media #{$medium-and-down}  {
      width: 55% !important;
    }
   @media #{$small-and-down}  {
      width: 85% !important;
    }
  }
</style>
