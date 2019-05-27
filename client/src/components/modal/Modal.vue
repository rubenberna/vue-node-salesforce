<template>
  <div>
    <el-dialog
      title="Beschikt u al over ecologische schoonmaakmiddelen?"
      :visible.sync="dialogVisible"
      width="30%">
      <div class="modal-question-box">
        <p class="modal-question">Ja - Fantastisch! <i class="material-icons">check</i></p>
        <p class="modal-question">Neen - Kijk dan snel eens een kijkje op onze webshop</p>
      </div>
        <a 
          class="waves-effect waves-light btn link-btn"
          href="https://easylife.poets.expert/" 
          target="_blank" 
          rel="noopener noreferrer"
          @click="closeModal"
          >Poets Expert</a>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'modal',
    props: {
      dialogVisible: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      closeModal() {
        this.$emit('toggleDialog', false)
      }
    },
  }
</script>

<style lang="scss" scoped>
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

    .link-btn {
      margin-top: 20px;
    }
  }
</style>
