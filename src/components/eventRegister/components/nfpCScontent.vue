<template>
    <div class='csComponent'>
        <div class='part1Container'>
            <el-row class='row' :gutter='10' style='justify-content: center;'>
                <el-col
                    class='background2'
                    :lg='10'
                    :md='10'
                    :sm='10'
                    :xl='10'
                    :xs='20'
                >
                    <el-row style='justify-content: center;'>
                        <el-col
                            class='part1Content'
                            :lg='19'
                            :md='20'
                            :sm='21'
                            :xl='18'
                            :xs='22'
                        >
                            <p class='title cardRow'>
                                A <span class='title red'>
                                    higher-than-expected
                                </span> Nonfarm Payroll should be taken as <span class='bold'>
                                    positive/bullish
                                </span> for the USD, while a <span class='title red'>
                                    lower-than-expected
                                </span> reading should be taken as <span class='bold'>
                                    negative/bearish
                                </span> for the USD.
                            </p>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col
                    class='cardsContainer'
                    :lg='10'
                    :md='10'
                    :sm='10'
                    :xl='10'
                    :xs='20'
                >
                    <el-row class='row cardRow cardRow3' :gutter='10' style='justify-content: center;'>
                        <el-col
                            class='card2'
                            :lg='19'
                            :md='20'
                            :sm='21'
                            :xl='18'
                            :xs='22'
                        >
                            <p class='text'>
                                Nonfarm Payrolls measures <span class='bold'>
                                    the change in the number of people employed excluding the farming industry.
                                </span> Job creation is the foremost indicator of consumer spending, which accounts for the majority of economic activity.
                            </p>
                            <div class='buttonContainer'>
                                <el-button class='details lp_btn lp_btn_infoDetail' plain text @click='jumpPage(2)'>
                                    <p class='lp_btn lp_btn_infoDetail'>
                                        More Details
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
import cardContainer from './nfpCSpartner.vue'
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
                    window.open('https://www.headline.net/en-US/infoDetail?id=27967')
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
    .cardRow{
      padding: 100px 0;
    }
.red{
  background-color: #bb2423;
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
        background-image: url("../../../images/cpi1/g7-summit/increase.jpg");
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
        .cardRow{
          .text{
            font-size: 25px;
            color: #fff;
          }
        }

        .buttonContainer{
            padding: 50px 0;
            text-align: center;
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

    .part3Container{
      padding: 0 0 50px;
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
          .register{
            background-color: #BB2423 !important;
            color: #fff;
            border: 1px solid #fff;
            border-radius: 4px !important;
            width: 142px;
            height: 55px;
          }
          .register:hover{
            background-color: unset !important;
          }
          .tgButton{
            background-color: #3b9Be9 !important;
            color: #fff;
            border: 1px solid #fff;
            border-radius: 4px !important;
            width: 142px;
            height: 55px;
          }
          .tgButton:hover{
            background-color: unset !important;
          }

        }
      }
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

            padding: 100px 20px;
          }
          .cardRow{
            justify-content: space-around !important;
          }
          .card2{
            position: relative;
            bottom: unset !important;
            left: unset !important;
            display: contents;
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
