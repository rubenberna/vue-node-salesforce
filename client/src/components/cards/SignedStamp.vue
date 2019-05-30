<template>
  <div class="frame">
    <div>
      <img src="../../assets/images/signed.jpeg">
      <p class="frame-subtitle">ONDERTEKEND</p>
    </div>
    <div>
      <p class="frame-title">{{ currContract ? signedDate : today  }}</p>
      <p class="frame-subtitle">{{ currContract ? currContract.signedtime.S : time  }}</p>
    </div>
    <div>
      <p class="frame-title">
        Getekend door - {{ currContract ? currContract.name.S : contact.Name  }}
      </p>
      <p class="frame-subtitle">
        IP: {{ currContract ? currContract.ipaddress.S : contractForm.ipAddress }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import moment from 'moment'

export default {
  name: 'signed-stamp',
  computed: {
    ...mapGetters(['contact', 'currContract', 'contractForm']),
    today() {
      moment.locale('nl-be');
      return moment(new Date()).format("MMM Do YYYY")
    },
    time() {
      moment.locale('nl-be');
      return moment(Date.now()).format('h:mm:ss a')
    },
    signedDate() {
      moment.locale('nl-be');
      return moment(this.currContract.signedat.S).format("MMM Do YYYY")
    }
  },
}
</script>

<style lang="scss" scoped>
  @import '../../assets/style.scss';

  .frame {
    display: flex;
    justify-content: space-around;
    margin: 35px 0;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
    padding: 15px;
    width: 700px;

    img {
      width: 32px; 
      margin: 0 auto;
    }

    .frame-title {
      margin: 0 0 9px 0; 
      font-weight: 600;
    }

    .frame-subtitle {
      margin: 0;
    }

    @media #{$medium-and-down}  {
      flex-direction: column;
      width: 50%;
      flex-direction: column;
      min-width: 280px !important;
      margin: 0 auto;
      margin-bottom: 35px;
    }
  }
</style>
