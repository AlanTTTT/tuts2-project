<template>
    <div class='csComponent'>
        <div class='part2Container'>
            <el-row :gutter='10' style='justify-content: center;'>
                <el-col
                    class='backgroundPart2'
                    :lg='11'
                    :md='11'
                    :sm='20'
                    :xl='11'
                    :xs='20'
                >
                    <el-row style='justify-content: center;'>
                        <el-col
                            :lg='17'
                            :md='18'
                            :sm='19'
                            :xl='16'
                            :xs='20'
                        >
                            <p class='introduction'>
                                Maximize Profits in One Week with Headline.net's NFP and CFD Convergence - Enhance Your Earnings with Exclusive Insights! Discover the untapped potential of Headline.net's cutting-edge integration of the<span class='yellow'>
                                    NFP (None Farm Payroll ) data and Contract for Difference (CFD) trading,
                                </span> now with a chance to increase your chances of winning trades!
                            </p>
                            <p class='introduction introduction2'>
                                With real-time updates on <span class='yellow'>
                                    Non-Farm Payroll (NFP) data,
                                </span> you can now seize the opportunity to make informed decisions and optimize your CFD strategies like never before. By staying ahead of the market trends and leveraging the power of CPI and CFD convergence, you position yourself for unparalleled financial success.
                            </p>
                            <p class='introduction introduction2'>
                                Join Headline.net today and unlock the secrets of NFP data reports to elevate your trading game to new heights. Don't miss out on the chance to maximize your profits and embrace a brighter financial future.
                            </p>
                            <div class='tradeButtonContainer'>
                                <el-button class='learnButton lp_btn lp_btn_register' plain text @click='jumpPage(1)'>
                                    <p class='lp_btn lp_btn_register'>
                                        Register with No KYC
                                    </p>
                                </el-button>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col
                    class='cfdIntro'
                    :lg='11'
                    :md='11'
                    :sm='20'
                    :xl='11'
                    :xs='20'
                >
                    <el-row style='justify-content: center;'>
                        <el-col
                            class='container'
                            :lg='19'
                            :md='20'
                            :sm='21'
                            :xl='18'
                            :xs='22'
                        >
                            <p class='content'>
                                Mark your calendars for the highly anticipated
                                <span class='yellow'>
                                    NFP (Non-Farm Payroll) data event on 2 Aug, 2023,
                                </span>
                                as it promises to bring substantial market movement.
                            </p>
                            <p class='content'>
                                There are several key reasons why the NFP data is considered crucial:
                            </p>
                            <ul class='content'>
                                <li style='list-style: auto;'>
                                    Employment Indicator: NFP data provides essential insights into the employment situation in the United States, which significantly impacts the overall economy.
                                </li>
                                <li style='list-style: auto;'>
                                    Interest Rate Implications: The NFP data plays a pivotal role in shaping the Federal Reserve's monetary policy, influencing decisions on interest rates for promoting stable prices and employment.
                                </li>
                                <li style='list-style: auto;'>
                                    Market Impact: NFP data releases directly affect financial markets, guiding investor strategies and influencing various asset classes.
                                </li>
                                <li style='list-style: auto;'>
                                    Global Significance: The NFP data holds global significance as it influences not only the U.S. economy but also has ripple effects on international economies, capital flows, and exchange rates.
                                </li>
                            </ul>
                            <p class='content'>
                                Marked as a key economic indicator, the NFP data event on 2 Aug 2023, is an event that traders and investors alike should closely monitor. Its impact on financial markets and trading strategies can be profound, making it a crucial factor to consider in your financial planning and decision-making process.
                            </p>
                            <div class='tradeButtonContainer'>
                                <el-button class='learnButton lp_btn lp_btn_register' plain text @click='jumpPage(1)'>
                                    <p class='lp_btn lp_btn_register'>
                                        Register with No KYC
                                    </p>
                                </el-button>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>

        <cardContainer />

        <div class='part3Container'>
            <el-row class='row part3Row' :gutter='10' style='justify-content: center'>
                <el-col
                    class='logoContainer'
                    :lg='5'
                    :md='5'
                    :sm='20'
                    :xl='5'
                    :xs='20'
                >
                    <h1 class='partnerTitle'>
                        Our<br /> Partners
                    </h1>
                </el-col>
                <el-col
                    class='logoContainer'
                    :lg='5'
                    :md='5'
                    :sm='20'
                    :xl='5'
                    :xs='20'
                >
                    <img alt='tradingView' class='logo' src='../../../images/cpi1/g7-summit/tradingView.png' />
                </el-col>
                <el-col
                    class='logoContainer'
                    :lg='5'
                    :md='5'
                    :sm='20'
                    :xl='5'
                    :xs='20'
                >
                    <img alt='Magic Compass' class='logo' src='../../../images/cpi1/g7-summit/mcLogo.png' />
                </el-col>
                <el-col
                    class='logoContainer'
                    :lg='5'
                    :md='5'
                    :sm='20'
                    :xl='5'
                    :xs='20'
                >
                    <img alt='Investing Compass' class='logo' src='../../../images/cpi1/g7-summit/investingCom.png' />
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import cardContainer from './cardContainerAugNfpSc.vue'
export default {
    name: 'Component',
    components: {
        cardContainer,
    },
    setup (props) {
        const jumpPage = (attr) => {
            switch (attr) {
                case 1 :
                    window.open('https://www.headline.net/en-US/register')
                    break
                case 2 :
                    window.open('https://www.headline.net/en-US/order?symbolId=1416&tradeType=1')
                    break
            }
        }
        return {
            jumpPage,
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/sass/mixin.scss';

.tradeButtonContainer{
  text-align: center;
  padding-bottom: 30px;
}
.red{
  background-color: #bb2423;
  color: #fff;
}
.bold{
  font-weight: bold;
}
.underline{
  text-decoration: underline;
}
.csComponent{
  background-color: rgba(20,20,22,255) !important;
}
    .signUp{
      background-color: #BB2423 !important;
      color: #fff;
      border-radius: unset !important;
    }
    .signUp:hover{
      background-color: #fff !important;
      border: 1px solid #BB2423;
      color:#BB2423
    }
    .part2Container{
      margin: 50px 0;
      .title1{
        color: #CB0D11;
        text-align: center;
        font-size: 55px;
        padding-bottom: 40px;
      }
      .backgroundPart2{
        background: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url("../../../images/cpi1/augNfp/backgroundSc.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        align-content: center;
        display: grid;
        padding: 40px 0;
        .yellow{
          color: #FFF86B;
          font-weight: bold;
        }
      }
      .introduction{
        font-size: 25px;
        line-height: 1.4em;
        text-align: start;
        color: #fff;
      }
      .introduction2{
        padding-top: 30px;
      }
      .cfdIntro{
          align-content: center;
          display: grid;
          background-image: url("../../../images/cpi1/cpi-fomc/background2Sc.jpg");
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center center;
        .container{
          .content{
            font-size: 25px;
            color: #fff;
            margin-top: 20px;
            .yellow{
              color: #FFF86B;
            }
          }
          .tradeButtonContainer{
            text-align: center;
            padding-top: 30px;
          }
        }
      }
    }

    .part3Container{
      padding: 20px 0 50px;
      .logoContainer{
        display:grid;
        align-items: center;
        border: 1px solid #fff;
        justify-items: center;
        padding: 30px 0;
      }
      .logo{
        width: 70%;
      }

      .partnerTitle{
        line-height: 1.2em;
        font-size: 40px;
        color: #fff;
        font-weight: 400;
      }
    }
    .part4{
      padding: 0 0 50px;
      .video{
      width: 100%;
      aspect-ratio: 16 / 9;
    }
      .contentType{
        align-items: center;
        display: grid;
        .intro{
          font-size: 18px;
          color: #fff;
          align-self: center;
        }
        .underline{
          text-decoration: underline;
          font-size: bold;
        }
        .buttonContainer{
          padding-top: 30px;

        }
      }
    }
    .learnButton{
            background-color: #CB0D11 !important;
            color: #fff;
            border: 1px solid #fff !important;
            border-radius: 4px !important;
            height: 55px;
            margin-top: 30px;
            font-size: 20px;
            font-weight: bold;
          }
          .learnButton:hover{
            background-color: #fff !important;
            color: #000;
            border: unset !important;
          }
    @media screen and (max-width: 1820px) {
      .cardsContainer{
        .card1{
          left: 130px;
        }
    }
  }
  @media screen and (max-width: 1780px) {
      .cardsContainer{
        .card1{
          left: 100px !important;
        }
    }
  }
  @media screen and (max-width: 1600px) {
      .cardsContainer{
        .card1{
          left: 70px !important;
        }
    }
  }
  @media screen and (max-width: 1480px) {
      .cardsContainer{
        .card1{
          left: 40px !important;
        }
    }
  }
  @media screen and (max-width: 1350px) {
      .cardsContainer{
        .card1{
          left: unset !important;
        }
    }
  }

    @media screen and (max-width: 1548px) {
      .part4{
        .contentType{
          .buttonContainer{
            .register{
              margin-left: 12px;
            }
            .tgButton{
              margin: 20px 0 20px 12px;
            }
          }
        }
      }
    }
    @media screen and (max-width: 1027px) {
      .part2Container{
        .backgroundPart2{
          min-height: 652px;
        }
      }
    }
    @media screen and (max-width: 991px) {
      .part2Container{
        .introduction{
          font-size: 20px !important;
        }
        .backgroundPart2{
          min-height: unset !important;
        }
        .cfdIntro{
          .container{
            .content{
              font-size: 20px !important;
            }
          }
        }
      }
      .part3Container{
        text-align: center;
        .partnerTitle{
          br{
            display: none !important;
          }
        }
        .logoContainer{
          display: unset !important;
          .logo{
            width: 30% !important;
            min-width: 240px;
          }
        }
      }
    }
    .part4{
      padding-top: 50px;
        .contentType{
          .information{
            padding-top: 20px;
            line-height: 1.7em;
          }
        }
      }
</style>
