<template>
  <div class="header">
    <div class="navbar">
    <div class="navbar-wrapper">
      <div class="navbar-wrapper-logo">
        <a href="https://easylife-dc.be/nl">
          <img src="../../assets/images/logo.png" class="logo-image" alt="">
        </a>
      </div>
      <div class="navbar-wrapper-slogan">
        <p style="font-weight:300; font-size: 16px">Het geheim van meer dan <strong>17.500</strong> gezinnen in Vlaanderen en Brussel</p>
      </div>
    </div>
    <div class="navbar-menu">
      <ul class="navbar-menu-list">
        <li class="navbar-menu-item home"><a href="https://easylife-dc.be/nl">Home</a></li>
        <li class="navbar-menu-item"><a href="https://easylife-dc.be/nl/huishoudhulp">Huishoudhulp</a></li>
        <li class="navbar-menu-item"><a href="https://easylife-dc.be/nl/strijkatelier">Strijkatelier</a></li>
        <li class="navbar-menu-item"><a href="https://easylife-dc.be/nl/dienstencheques/bestellen">Dienstencheques</a></li>
        <li class="navbar-menu-item"><a href="https://easylife-dc.be/nl/kantoren">Kantoren</a></li>
        <li class="navbar-menu-item"><a href="https://easylife-dc.be/nl/jobs">Jobs</a></li>
        <li class="navbar-menu-item"><a href="https://easylife-dc.be/nl/esf-projecten">ESF</a></li>
        <li class="navbar-menu-item webshop"><a href="https://easylifeshop.be/">Webshop</a></li>
      </ul>
    </div>
    <div class="small-media-menu">
      <el-dropdown>
          <el-button class="button Large">
            <i class="material-icons">apps</i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item><li class="navbar-menu-item home"><a href="https://easylife-dc.be/nl">Home</a></li></el-dropdown-item>
            <el-dropdown-item><li class="navbar-menu-item"><a class="small-media-menu_item" href="https://easylife-dc.be/nl/huishoudhulp">Huishoudhulp</a></li></el-dropdown-item>
            <el-dropdown-item><li class="navbar-menu-item"><a href="https://easylife-dc.be/nl/strijkatelier">Strijkatelier</a></li></el-dropdown-item>
            <el-dropdown-item><li class="navbar-menu-item"><a href="https://easylife-dc.be/nl/dienstencheques/bestellen">Dienstencheques</a></li></el-dropdown-item>
            <el-dropdown-item><li class="navbar-menu-item"><a href="https://easylife-dc.be/nl/kantoren">Kantoren</a></li></el-dropdown-item>
            <el-dropdown-item><li class="navbar-menu-item"><a href="https://easylife-dc.be/nl/jobs">Jobs</a></li></el-dropdown-item>
            <el-dropdown-item><li class="navbar-menu-item"><a class="small-media-menu_item" href="https://easylife-dc.be/nl/esf-projecten">ESF</a></li></el-dropdown-item>
            <el-dropdown-item><li class="navbar-menu-item webshop"><a href="https://easylifeshop.be/">Webshop</a></li></el-dropdown-item>
          </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
    <LanguageSelect class="language-btn"/>
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
  }

  .navbar {
    height: 136px;
    max-width: 70vw;
    margin: 0 auto;
    display: flex;
    align-items: center;

     @media #{$medium-and-down}  {
       flex-direction: row-reverse;
       justify-content: space-between;
       margin-bottom: 30px;
       margin-top: 10px;
       width: 100vw !important;
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

        img {
          max-width: 111%;
        }

        @media #{$small-and-down}  {
          display: none;
        }
      }

      .navbar-wrapper-slogan {
        color: #9f978f;
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
  }
 .el-dropdown-menu__item a {
    color: #2c3e50 !important;
 }
  .language-btn {
    position: absolute;
    right: 10vw;
    top: 8vh;
    display: none;
  }

</style>
