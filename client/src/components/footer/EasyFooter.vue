<template>
  <div class="easy-footer">
    <div class="easy-footer-wrapper">
      <div class="social">
        <h2>Blijf op de hoogte</h2>
        <div class="social-links">
          <div class="social-links-tips">
            <h3>Huishoudtips</h3>
            <ul style="list-style: none;">
              <li><i class="fa fa-angle-right"></i><a href="https://easylife-dc.be/nl/huishoudtips/11-tips-voor-je-auto-bij-vriesweer" target="_blank" class="social-links-item link">11 tips voor je auto bij vriesweer!</a></li>
              <li><i class="fa fa-angle-right"></i><a href="https://easylife-dc.be/nl/huishoudtips/easylifetip-met-mc-lily-stofzuigen" target="_blank" class="social-links-item link">#EasyLifeTip met MC Lily: Stofzuigen</a></li>
              <li><i class="fa fa-angle-right"></i><a href="https://easylife-dc.be/nl/huishoudtips/easylifetip-met-mc-lily-de-wondergom" target="_blank" class="social-links-item link">#EasyLifeTip met MC Lily: De Wondergom</a></li>
              <li><a href="https://easylife-dc.be/nl/huishoudtips" target="_blank" class="social-links-item link" style="margin-left: 11px;">Meer tips…</a></li>
            </ul>
          </div>
          <div class="social-links-media">
            <h3><a href="https://www.facebook.com/easylifedienstencheques/" target="_blank" style="color: #fff;"> <span class="link">Facebook</span><i class="fa fa-facebook-square"></i></a></h3>
            <p><a href="https://www.facebook.com/easylifedienstencheques/" target="_blank" class="link">Like ons</a> en lees onze huishoudtips op je tijdslijn</p>
          </div>
        </div>
      </div>

      <div class="support">
        <h2>Hoe kunnen we u helpen?</h2>
        <div class="support-container">
          <div class="support-text">
            <div class="support-text-segment">
              <h3 class="phone"><i class="fa fa-phone"></i>0800 62080</h3>
              <p>Vandaag nog open tot 18u</p>
            </div>
            <div class="support-text-segment small-media">
              <h3>Vraag <a href="https://easylife-dc.be/nl/huishoudhulp-aanvragen" target="_blank" class="link">poetshulp</a> aan</h3>
              <p>Vrijblijvend, en zo gebeurd</p>
            </div>
            <div class="support-text-segment small-media">
              <h3>Vul het <a href="https://easylife-dc.be/nl/contact" target="_blank" class="link">contactformulier</a> in</h3>
              <p>Vul het contactformulier in</p>
            </div>
          </div>
          <div class="support-visual">
            <div class="support-image">
              <img src="../../assets/images/thumb.jpg" alt="">
            </div>
            <div class="support-label">
              EasyLife servicedesk
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'easy-footer',
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/style.scss';

  .easy-footer {
    min-height: 300px;
    background: #004471;
    color: white;

    .easy-footer-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 90%;
      margin: 0 auto;

      @media #{$small-and-down}  {
        flex-direction: column;
        width: 100%;
        overflow: hidden;
      }

      h2 {
        font-style: normal;
        font-weight: 700;
        color: #fff;
        font-size: 2.1em;
        margin-bottom: .5em;
      }

      h3 {
        margin-bottom: .3em;
        font-style: normal;
        font-weight: 600;
        font-size: 1.5em;
        line-height: 1.05;
        margin: 0;
        text-rendering: optimizeLegibility;
      }

      p, li {
        line-height: 1.5;
        margin: 0;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
      }

      .link {
        color: #fff;
        border-bottom: 1px solid hsla(0,0%,100%,.2);
        transition: color .3s linear,border-color .3s linear;
        cursor: pointer;
        &:hover {
          border-bottom: 1px solid #fff;
        }
      }

      .social {
        text-align: left;
        width: 38%;
        height: 281px;

        @media #{$small-and-down}  {
        width: 90%;
      }
        .social-links {
          display: flex;
          justify-content: space-between;
          li {
            line-height: 1.5;
            display: list-item;
            text-align: -webkit-match-parent;
          }
          i {
            margin-right: 8px;
          }
        }
        .social-links-media {
          max-width: 38%;
          h3 {
            width: 133px;
          }
          i {
            margin-left: 8px;
          }
          p {
            margin-top: 7px;
          }
        }
      }

      .support {
        width: 35%;
        line-height: 1.05;
        height: 281px;
        text-align: left;
         @media #{$small-and-down}  {
        width: 90%;
      }
        .support-container {
          display: flex;
          justify-content: space-between;

          .small-media {
             @media #{$large-and-down}  {
              display: none;
            }
          }
        }
        .support-text {
          text-align: left;
          .support-text-segment {
            margin-bottom: 12px;

            p {
              margin-top: 4px;
            }
          }
          .phone {
            font-style: normal;
            font-weight: 900;
            border-bottom: 0!important;
            color: inherit!important;
            margin-left: .25em;
            white-space: nowrap;
            i {
              margin-right: 8px;
              border: 1px solid #fff;
              padding: 5px;
              border-radius: 50%;
            }
          }
        }

        .support-visual {

          .support-image {
            border: 5px solid #fff;
            box-shadow: 0 3px 0 rgba(0,0,0,.05);
            border-radius: 100%;
            content: "";
            display: inline-block;
            height: 8.5em;
            line-height: 8.5em;
            overflow: hidden;
            text-align: center;
            width: 8.5em;
            background-color: rgba(0,0,0,.075);
            margin-bottom: .25em;
            position: relative;

            img {
              position: absolute;
              right: 0;
              top: 0;
              max-width: 100%;
              max-height: 100%;
            }
          }
          .support-label {
            font-style: normal;
            font-weight: 300;
            font-size: .8em;
            text-transform: uppercase;
          }
        }
      }
    }
  }
</style>
