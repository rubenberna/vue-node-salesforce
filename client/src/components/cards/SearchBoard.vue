<template>
  <div class="search-board">
    <flash class="flash"/>
    <div class="search-board-content">
      <div class="search-board-specs">
        <h5>Welkom bij jouw klantenovereenkomst</h5>
        <p>Er werkt een huishoudhulp van EasyLife bij jou thuis.
          Hiervoor moet een verplichte overeenkomst getekend worden.
        Let op: zonder ondertekende overeenkomst zijn er geen verzekeringsmaatregelen getroffen.</p>
        <p>We sommen graag de belangrijkste punten nog even op:</p>
        <ul class="specs-list">
          <li class="specs-item">De huishoudhulp mag enkel werken in jouw privéwoning.</li>
          <li class="specs-item">Gelieve bij elke prestatie te betalen.</li>
          <li class="specs-item">Gebruik enkel cheques van gebruikers woonachtig op het poetsadres.</li>
          <li class="specs-item">Geef alle wijzigingen aan de planning meteen door aan het kantoor.</li>
        </ul>
      </div>
      <div class="search-board-cta">
        <h3 v-show="!contact">Geef hier uw code in:</h3>
        <div v-if='loading' class="loader">
          <loader/>
        </div>
        <div v-else>
          <div  v-if="!contact">
            <div class="search-board-input input-field">
              <input id="email_inline"
                     type="number" class="validate"
                     v-model='dplanId'>
              <label for="email_inline" style="color: #fff; text-align: center; width:60%">Type ID</label>
              <span class="helper-text"></span>
              <button class="btn waves-effect waves-light search"
                type="submit"
                data-target="modal1"
                @click="searchSalesforce()">Zoeken
                <i class="material-icons right">send</i>
            </button>
          </div>
        </div>
        <div v-else-if="contact.Signed_Contract__c || signed"
          class="search-board-result">
          <h4 class="animated fadeIn slow">Welkom {{contact.Name}} !</h4>
          <div class="search-board-result-actions">
            <button class="btn grey accent-4 animated slideInUp slow"
              type="submit"
              @click="printPDF(contact.External_Id__c)">
              Zie contract
              <i class="fa fa-print"></i>
            </button>
            <!-- <button class="btn waves-effect" type="submit" @click='deleteContract(contact.External_Id__c)'>Delete from DB</button> -->
            <p>Andere gebruiker ? Stel <strong class="reset" @click='clear'>hier</strong> je account opnieuw in.</p>
          </div>
        </div>
        <div v-else
          class="search-board-result">
          <h4 class="animated fadeIn slow">Hallo {{contact.Name}}</h4>
          <div class="search-board-result-actions">
            <button class="btn red darken-2 animated slideInUp slow"
              type="submit"
              @click="navigate(contact.External_Id__c)">
              Contract ondertekenen
              <i class="fa fa-book"></i>
            </button>
            <p>Andere gebruiker ? Stel <strong class="reset" @click='clear'>hier</strong> je account opnieuw in.</p>
          </div>
        </div>
        </div>
      </div>
    </div>
    <div id="contract-specs-medium-small">
       <h5>Welkom bij jouw klantenovereenkomst</h5>
        <p>Er werkt een huishoudhulp van EasyLife bij jou thuis.
          Hiervoor moet een verplichte overeenkomst getekend worden.
        Let op: zonder ondertekende overeenkomst zijn er geen verzekeringsmaatregelen getroffen.</p>
        <p>We sommen graag de belangrijkste punten nog even op:</p>
        <ul class="specs-list">
          <li class="specs-item">De huishoudhulp mag enkel werken in jouw privéwoning.</li>
          <li class="specs-item">Gelieve bij elke prestatie te betalen.</li>
          <li class="specs-item">Gebruik enkel cheques van gebruikers woonachtig op het poetsadres.</li>
          <li class="specs-item">Geef alle wijzigingen aan de planning meteen door aan het kantoor.</li>
        </ul>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import Loader from '@/components/loader/Loader'
  import Flash from '@/components/flash/Flash'

  export default {
    name: 'SearchBoard',
    data() {
      return {
        dplanId: null,
        goodToPrint: false
      }
    },
    components: {
      Loader,
      Flash
    },
    computed: mapGetters(['flashSticker', 'contact', 'loading', 'signed', 'currContract']),
    methods: {
      ...mapActions(['searchID', 'findContract', 'clear', 'changeLoading', 'deleteContract']),
      async searchSalesforce() {
        const salesforceSearch = await this.searchID(this.dplanId)
        setTimeout( () => {this.flash(`${this.flashSticker.msg}`, `${this.flashSticker.type}`)}, 1800)
      },
      navigate(id) {
        this.$router.push({ name: 'contract', params: {id} })
      },
      async printPDF(id) {
        this.changeLoading(true)
        if(!this.currContract) {
          const saved = await this.findContract(id)
          this.changeLoading(false)
          this.$router.push({ name: 'printContract', params: {id} })
        } else {
          this.changeLoading(false)
          this.$router.push({ name: 'printContract', params: {id} })
        }
      },
    }
  }
</script>

<style scoped lang="scss">
@import '../../assets/style.scss';

  .search-board {
    position: relative;
    .search-board-content {
      display: flex;
      align-items: center;
      height: 65vh;
      color: #fff;
      justify-content: space-between;
      width: 90vw;
      margin: 0 auto;

      @media #{$medium-and-down}  {
        justify-content: center;
        align-items: center;
        height: 80vh;
      }

      .search-board-specs {
        width: 45%;
        border: 2px solid #fff;
        text-align: initial;
        padding: 15px 15px 15px 40px;
        margin-top: 70px;

        @media #{$large-and-down}  {
          width: 70%;
        }

        @media #{$medium-and-down}  {
          display: none;
        }
        h5 {
          font-weight: 600;
        }
        p {
          font-weight: 300;
          font-size: 18px;

           @media #{$medium-and-down}  {
           font-size: 16px;
          }
        }
      }

      .search-board-cta {
        width: 45%;

        @media #{$large-and-down}  {
           h3 {
              font-size: 35px;
            }
          }
        @media #{$medium-and-down}  {
          width: 100%;
         }
      }

      .search-board-input {
        margin: 0 auto;
        margin-top: 50px;
        color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;

        // remove the wheel helper for number input
        input[type=number]::-webkit-inner-spin-button,
        input[type=number]::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        input {
          text-align: center;
          color: #fff;
          width:53%;
          -webkit-appearance: none;
          margin: 0;

          @media #{$medium-and-down} {
            width: 60%;
          }
        }

        button.search {
          background: #0080c8;
        }
      }
      .search-board-result {
        margin: 0 auto;
        width: 100%;
        margin-top: 50px;
        color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;

        .search-board-result-actions {
          height: 55px;
          p {
            font-size: 13px;
            margin-top: 14px;
          }

          .reset {
            font-weight: 700;
            cursor: pointer;
          }
        }
        .btn {
          margin-top: 15px;
          min-width: 250px;
        }
      }
    }
    .flash {
      width: 255px;
      top: 0;
      right: 0;
      position: absolute;
    }
  }

  #contract-specs-medium-small{

    border: 2px solid #2c3e50;
    text-align: initial;
    padding: 15px 15px 15px 40px;
    margin: 35px;
    border-radius: 4px;
    font-size: 16px;
    display: none;

    h5 {
      text-align: center;
      font-weight: 600;
    }

    @media #{$medium-and-down}  {
      display: block;
    }
  }

  .specs-list li {
    list-style-type: initial;
    font-size: 16px;

    @media #{$medium-and-down}  {
      font-size: 14px;
    }
  }

</style>
