<template>
    <div class='csComponent'>
        <div class='part2Container'>
            <el-row :gutter='10' style='justify-content: center;'>
                <el-col
                    class='backgroundPart2'
                    :lg='10'
                    :md='10'
                    :sm='20'
                    :xl='10'
                    :xs='20'
                >
                    <el-row style='justify-content: center;'>
                        <el-col
                            :lg='15'
                            :md='16'
                            :sm='17'
                            :xl='14'
                            :xs='18'
                        >
                            <p class='introduction'>
                                The latest CPI data showed that <span class='red'>
                                    inflation in the United States rose to <span class='underline'>
                                        8.6%
                                    </span> in May, the highest level in 40 years
                                </span>. This suggests that the Federal Reserve will continue to raise interest rates in an effort to cool the economy and bring inflation under control.
                            </p>
                            <p class='introduction introduction2'>
                                <span class='red'>
                                    Sign up for a free account today
                                </span> and start trading CFDs on Headline.net!
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
                    :lg='10'
                    :md='10'
                    :sm='20'
                    :xl='10'
                    :xs='20'
                >
                    <el-row style='justify-content: center;'>
                        <el-col
                            class='container'
                            :lg='16'
                            :md='17'
                            :sm='18'
                            :xl='15'
                            :xs='19'
                        >
                            <p class='content'>
                                The next FOMC meeting is scheduled for June 14-15, 2023. Market participants are <span class='red'>
                                    expecting the FOMC to raise interest rates by <span class='underline'>
                                        50 basis points
                                    </span>
                                </span> at this meeting. This would be the third consecutive meeting in which the FOMC has raised interest rates in an effort to combat inflation.
                            </p>
                            <p class='content'>
                                <span class='red underline'>
                                    Open a free account
                                </span> on Headline.net and start trading CFDs today.
                            </p>
                            <div class='tradeButtonContainer'>
                                <el-button class='tradeButton lp_btn lp_btn_register' plain text @click='jumpPage(1)'>
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
import cardContainer from './cardContainerCpiEt.vue'
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

    .part1Container{
      padding-top: 50px;
      .background2{
        background-image: url("../../../images/cpi1/cpi-fomc/background1.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        align-content: center;
        display: grid;
        border: 1px solid #fff;
        .title{
          font-size: 30px;
          color: #fff;
        }
        .info{
          font-size: 16px;
          color: #fff;
        }
      }
      .cardsContainer{
        border: 1px solid #fff;
        .cardRow2{
          padding-top: 30px;
        }
        .card1{
          position: relative;
          bottom: 90px;
          left: 150px;
        }
        .card2{
          position: relative;
          bottom: 40px;
        }
        .box-card{
          background-color: #1b1c1e;
          width: 240px;
          border: unset !important;
          .title{
            font-size: 18px;
            color: #E21C21;
            padding-top: 50px;
          }
          .text{
            font-size: 18px;
            color: #fff;
          }
          .icon{
            width: 50px;
            filter: invert(19%) sepia(62%) saturate(3147%) hue-rotate(344deg) brightness(97%) contrast(97%);
          }
        }
        .buttonContainer{
            padding: 0px 0 30px 140px;
            .details{
              background-color: #BB2423 !important;
              color: #fff;
              border: 1px solid #fff;
              border-radius: 4px !important;
              width: 240px;
              height: 55px;
              font-size: 20px;
            }
            .details:hover{
              background-color: unset !important;
            }
          }
      }
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
        background-image: url("../../../images/cpi1/cpi-fomc/background1Sc.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        align-content: center;
        display: grid;
        border: 1px solid #fff;
        padding: 40px 0;
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
          border: 1px solid #fff;
          background-image: url("../../../images/cpi1/cpi-fomc/background2Sc.jpg");
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center center;
        .container{
          padding: 30px 0;
          .content{
            font-size: 25px;
            color: #fff;
            margin-top: 20px;
          }
          .tradeButtonContainer{
            text-align: center;
            padding-top: 30px;
            .tradeButton{
              background-color: #BB2423 !important;
              color: #fff;
              border: 1px solid #fff;
              border-radius: 4px !important;
              width: 265px;
              height: 55px;
            }
            .tradeButton:hover{
              background-color: unset !important;
            }
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
      }
      .logo{
        width: 100%;
      }
      .partnerTitle{
        font-weight: bold;
        line-height: 1.2em;
        font-size: 50px;
        color: #fff;
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
            background-color: #fff !important;
            color: #CB0D11;
            border: unset !important;
            border-radius: 4px !important;
            width: 265px;
            height: 55px;
            margin-top: 30px;
          }
          .learnButton:hover{
            color: #000;
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
        .cfdIntro{
          .tradeButtonContainer{
            .tradeButton{
              margin-bottom: 20px;
            }
          }
        }
      }
    }
    @media screen and (max-width: 991px) {
      .part1Container{
        .buttonContainer{
          padding: 20px 0 !important;
          text-align: center;
        }
        .part1Content{
          padding: 30px 0;
        }
        .cardsContainer{
          .cardRow3{

            padding-top: 20px;
          }
          .cardRow{
            justify-content: space-around !important;
          }
          .card1{
            position: relative;
            bottom: unset !important;
            left: unset !important;
            display: contents;
          }
          .card2{
            position: relative;
            bottom: unset !important;
            left: unset !important;
            display: contents;
          }
        }
    }
      .part2Container{
        .backgroundPart2{
          min-height: unset !important;
        }
        .cfdIntro{
          .tradeButtonContainer{
            .tradeButton{
              width: 200px !important;
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

      @media screen and (max-width: 600px) {
        .part1Container{
          .cardsContainer{
            .box-card{
              width: unset !important
            }
            .cardRow2{
              padding-top: unset !important;
            }
          }
        }
      }
</style>
