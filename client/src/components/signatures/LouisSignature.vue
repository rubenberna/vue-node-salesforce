<template>
  <div class="louis-signature">
    <div class="typed-name">
      <p class="typed-name-title">{{ $t('dienstenbedrijf') }}</p>
      <p class="typed-name-handwrite">Louis Ballegeer - {{ $t('zaakvoerder') }}</p>
    </div>
    <div class="signature">
      <img src="../../assets/images/handtekening300.jpeg" >
    </div>
  </div>
</template>

<script>
export default {
  name: 'louis-signature'
}
</script>

<style lang="scss" scoped>
  @import '../../assets/style.scss';

  .louis-signature {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 312px;
    @media #{$medium-and-down}  {
      height: 300px;
    }

    .typed-name {
      .typed-name-title {
        text-transform: uppercase;
        font-weight: 800;
      }
    
      .typed-name-handwrite {
        font-family: 'Satisfy', cursive; 
        font-size: 23px;
      }
    }
    img {
      width: 300px;
    }
  }
</style>