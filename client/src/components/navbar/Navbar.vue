<template>
  <div class="header">
    <div class="navbar">
      <div class="navbar-wrapper">
        <div class="navbar-wrapper-logo">
          <a href="https://easylife-dc.be/nl">
            <img src="../../assets/images/logo.svg" class="logo-image" alt="">
          </a>
        </div>
        <div class="navbar-wrapper-slogan">
          <p style="font-weight:300; font-size: 16px">{{ $t('navbar_intro') }}</p>
        </div>
      </div>
      <div class="navbar-menu">
        <ul class="navbar-menu-list">
          <li class="navbar-menu-item home"><a href="https://easylife-dc.be/nl">{{ $t('home') }}</a></li>
          <li class="navbar-menu-item"><a href="https://easylife-dc.be/nl/huishoudhulp">{{ $t('huishoud_hulp') }}</a></li>
          <li class="navbar-menu-item"><a href="https://easylife-dc.be/nl/strijkatelier">{{ $t('strijkatelier') }}</a></li>
          <li class="navbar-menu-item"><a href="https://easylife-dc.be/nl/dienstencheques/bestellen">{{ $t('dienstencheques') }}</a></li>
          <li class="navbar-menu-item"><a href="https://easylife-dc.be/nl/kantoren">{{ $t('kantoren') }}</a></li>
          <li class="navbar-menu-item"><a href="https://easylife-dc.be/nl/jobs">{{ $t('jobs') }}</a></li>
          <li class="navbar-menu-item"><a href="https://easylife-dc.be/nl/esf-projecten">{{ $t('esf') }}</a></li>
          <li class="navbar-menu-item webshop"><a href="https://easylifeshop.be/">{{ $t('webshop') }}</a></li>
        </ul>
      </div>
      <div class="small-media-menu">
        <el-dropdown>
            <el-button class="button Large">
              <i class="material-icons">apps</i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item><li class="navbar-menu-item home"><a href="https://easylife-dc.be/nl">{{ $t('home') }}</a></li></el-dropdown-item>
              <el-dropdown-item><li class="navbar-menu-item"><a class="small-media-menu_item" href="https://easylife-dc.be/nl/huishoudhulp">{{ $t('huishoud_hulp') }}</a></li></el-dropdown-item>
              <el-dropdown-item><li class="navbar-menu-item"><a href="https://easylife-dc.be/nl/strijkatelier">{{ $t('strijkatelier') }}</a></li></el-dropdown-item>
              <el-dropdown-item><li class="navbar-menu-item"><a href="https://easylife-dc.be/nl/dienstencheques/bestellen">{{ $t('dienstencheques') }}</a></li></el-dropdown-item>
              <el-dropdown-item><li class="navbar-menu-item"><a href="https://easylife-dc.be/nl/kantoren">{{ $t('kantoren') }}</a></li></el-dropdown-item>
              <el-dropdown-item><li class="navbar-menu-item"><a href="https://easylife-dc.be/nl/jobs">{{ $t('jobs') }}</a></li></el-dropdown-item>
              <el-dropdown-item><li class="navbar-menu-item"><a class="small-media-menu_item" href="https://easylife-dc.be/nl/esf-projecten">{{ $t('esf') }}</a></li></el-dropdown-item>
              <el-dropdown-item><li class="navbar-menu-item webshop"><a href="https://easylifeshop.be/">{{ $t('webshop') }}</a></li></el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
      </div>
      <LanguageSelect class="language-btn"/>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import LanguageSelect from '@/components/buttons/Language'

  export default {
    name: 'navbar',
    components: {
      LanguageSelect
    },
    computed: mapGetters(['contact']),
    methods: {
      ...mapActions(['clear']),
    },
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/style.scss';

  .header {
    display: flex;
    align-items: center;
    @media #{$small-and-down}  {
       height: 100%;
    }
  }

  .navbar {
    height: 136px;
    min-width: 87vw;
    margin: 0 auto;
    display: flex;
    align-items: center;

     @media #{$medium-and-down}  {
       justify-content: space-between;
       margin-bottom: 30px;
       margin-top: 10px;
      }

     @media #{$small-and-down}  {
       height: 100%;
    }

    p {
      line-height: 1.5;
      margin: 0 auto;
    }

    strong {
      font-weight: 700;
    }

    .navbar-wrapper {
      max-width: 38%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 24px 0px 24px 0px;

      .navbar-wrapper-logo {
        display: inline-block;
        width: 5.5em;
        height: 5.5em;
        vertical-align: middle;

        @media #{$small-and-down}  {
          display: none;
        }
      }

      .navbar-wrapper-slogan {
        padding: 0 1em;
        padding-left: 32px;

        @media #{$x-large-and-down}  {
          p {
            font-size: 14px !important;
          }
          }
        @media #{$large-and-down}  {
          display: none;
        }
      }
    }

    .navbar-menu {
      width: 63%;
      display: inline-flex;
      justify-content: center;

      ul.navbar-menu-list {
        display: flex;
        width: 100%;
        justify-content: space-evenly;

        @media #{$large-and-down}  {
        justify-content: flex-start;
        max-width: 100%;
        margin-right: -90px;
        overflow: hidden;
      }

      @media #{$medium-and-down}  {
       display: none;
      }

        li.navbar-menu-item.home {
          display: table-cell;
          padding-bottom: .125em;
          position: relative;
          border-bottom: 3px solid #EAF5CF;
          li.navbar-menu-item.home:after {
            display: table-cell;
            width: 100%;
            content: "";
          }
        }

        li.navbar-menu-item.webshop {
          background: #0080c8 !important;
          color: #fff;
          font-weight: 600 !important;
          border-radius: 3px;
          padding: .25em .5em;
          font-size: 19px;
          height: 37px;

           @media #{$large-and-down}  {
            display: none;
          }
        }
      }

      ul.navbar-menu-list li {
        display: inline-block;
        background: white;
        padding: .25em;
        border: 0;
        font-size: 20px;
        line-height: 1.5;
        font-weight: 300;
        &:hover {
          color: #5F97DD;
        }
        @media #{$x-large-and-down}  {
            font-size: 16px;
          }
         @media #{$large-and-down}  {
            font-size: 15px;
          }
      }
      a {
        text-decoration: none;
        color: inherit;
      }
    }
  }

  .small-media-menu {
    display: none;
    a.small-media-menu_item {
      color: #2c3e50 !important;
    }
    @media #{$medium-and-down}  {
       display: block;
      }
    @media #{$small-and-down}  {
       position: absolute;
      }
  }
 .el-dropdown-menu__item a {
    color: #2c3e50 !important;
 }
  .language-btn {
    /* display: none; */
    padding-left: 35px;
    @media #{$medium-and-down}  {
      padding-left: 15px;
    }
  }

</style>
