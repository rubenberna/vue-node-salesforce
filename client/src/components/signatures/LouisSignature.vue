<template>
  <div>
    <p class="typed-name-title">Dienstenbedrijf</p>
    <p class="typed-name">Louis Ballegeer - zaakvoerder</p>
    <div>
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

  .typed-name-title {
    text-transform: uppercase;
    font-weight: 800;
  }

  .typed-name {
    font-family: 'Satisfy', cursive; 
    font-size: 23px;
  }

  img {
    width: 300px;
  }
</style>