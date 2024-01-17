<template>
    <div class='csComponent'>
        <div class='part1Container'>
            <el-row class='row' :gutter='10' style='justify-content: center;'>
                <el-col
                    class='background2'
                    :lg='7'
                    :md='6'
                    :sm='20'
                    :xl='8'
                    :xs='20'
                >
                    <el-row style='justify-content: center;'>
                        <el-col
                            class='part1Content'
                            :lg='14'
                            :md='16'
                            :sm='18'
                            :xl='12'
                            :xs='20'
                        >
                            <p class='title'>
                                Why G7 Summit Is
                            </p>
                            <p class='title red'>
                                Great Trading Chance
                            </p>
                            <p class='info'>
                                G7 Summit is an organization consisting of the world's seven most powerful economies and is held once a year. The summit not only focuses on issues concerning the seven countries but also global issues. Therefore, <span class='bold'>
                                    the decisions made during the summit will affect the development and future of the global market
                                </span>. In recent years, the G7 Summit has become the focus of the world, especially in politics and economics.
                            </p>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col
                    class='cardsContainer'
                    :lg='13'
                    :md='14'
                    :sm='20'
                    :xl='12'
                    :xs='20'
                >
                    <el-row class='row cardRow cardRow3' :gutter='10' style='justify-content: center;'>
                        <el-col
                            class='card1'
                            :lg='10'
                            :md='11'
                            :sm='12'
                            :xl='6'
                            :xs='12'
                        >
                            <el-card class='box-card'>
                                <div>
                                    <img alt='change' class='icon' src='../../../images/cpi1/g7-summit/change.png' />
                                    <p class='title'>
                                        Climate Change
                                    </p>
                                    <p class='text'>
                                        Decisions on climate Issues may greatly affect global commodity markets such as the price of oil.
                                    </p>
                                    <el-divider />
                                </div>
                            </el-card>
                        </el-col>
                        <el-col
                            class='card2'
                            :lg='10'
                            :md='11'
                            :sm='12'
                            :xl='6'
                            :xs='12'
                        >
                            <el-card class='box-card'>
                                <div>
                                    <img alt='health' class='icon' src='../../../images/cpi1/g7-summit/health.png' />
                                    <p class='title'>
                                        Global Health
                                    </p>
                                    <p class='text'>
                                        Health topics have great influences on related industries and companies thus stock markets.
                                    </p>
                                    <el-divider />
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>

                    <el-row class='row cardRow2 cardRow' :gutter='10' style='justify-content: center;'>
                        <el-col
                            class='card1'
                            :lg='10'
                            :md='11'
                            :sm='12'
                            :xl='6'
                            :xs='12'
                        >
                            <el-card class='box-card'>
                                <div>
                                    <img alt='trade' class='icon' src='../../../images/cpi1/g7-summit/trade.png' />
                                    <p class='title'>
                                        Trade
                                    </p>
                                    <p class='text'>
                                        Discussion on Trade topic may lead to the fluctuations of global forex markets.
                                    </p>
                                    <el-divider />
                                </div>
                            </el-card>
                        </el-col>

                        <el-col
                            class='card2'
                            :lg='10'
                            :md='11'
                            :sm='12'
                            :xl='6'
                            :xs='12'
                        >
                            <el-card class='box-card'>
                                <div>
                                    <img alt='cooperation' class='icon' src='../../../images/cpi1/g7-summit/cooperation.png' />
                                    <p class='title'>
                                        Economic Cooperation
                                    </p>
                                    <p class='text'>
                                        Economic cooperation can result in the release of new policies, followed by the change of currency value.
                                    </p>
                                    <el-divider />
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                    <div class='buttonContainer'>
                        <el-button class='details lp_btn lp_btn_register' plain text @click='jumpPage(1)'>
                            <p class='lp_btn lp_btn_register'>
                                More Details
                            </p>
                        </el-button>
                    </div>
                </el-col>
            </el-row>
        </div>

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
                                <el-link class='underline introduction' href='https://www.headline.net/en-US/home' target='_blank' :underline='false'>
                                    Headline.net
                                </el-link> will provide you with the latest G7 Summit updates and market analysis, allowing you to grasp market changes and obtain profits.
                            </p>
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
                                As a professional CFD trading platform, we offer you the fastest and most flexible trading methods, enabling you to achieve maximum profit during market volatility.
                            </p>
                            <p class='content'>
                                We offer <span class='red content'>
                                    cryptocurrency deposits and withdrawals, and KYC is not required
                                </span>, allowing you to trade directly.
                            </p>
                            <p class='content'>
                                On our platform, you can enjoy the best trading experience and the highest quality of service, and we will provide you with support and assistance around the clock. Whether you are a beginner or an experienced investor, we will provide you with the best trading experience.
                            </p>
                            <div class='tradeButtonContainer'>
                                <el-button class='tradeButton lp_btn' plain text @click='jumpPage(2)'>
                                    Trade Now
                                </el-button>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>

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

            <el-row class='row part4' :gutter='10' style='justify-content: center'>
                <el-col
                    :lg='12'
                    :md='12'
                    :sm='20'
                    style='border: 1px solid #fff;'
                    :xl='12'
                    :xs='20'
                >
                    <iframe
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                        allowfullscreen
                        class='video'
                        frameborder='0'
                        src='https://www.youtube.com/embed/qULycVp4mhQ'
                        title='YouTube video player'
                    ></iframe>
                </el-col>
                <el-col
                    class='contentType'
                    :lg='8'
                    :md='8'
                    :sm='20'
                    style='border: 1px solid #fff;'
                    :xl='8'
                    :xs='20'
                >
                    <el-row style='justify-content: center;'>
                        <el-col
                            :lg='14'
                            :md='16'
                            :sm='18'
                            :xl='20'
                            :xs='12'
                        >
                            <p class='intro information'>
                                <el-link class='underline intro' href='https://www.headline.net/en-US/register' target='_blank' :underline='false'>
                                    Sign up
                                </el-link> and join <el-link class='underline intro' href='https://t.me/Headline_Group' target='_blank' :underline='false'>
                                    Headline Telegram group
                                </el-link>. You can receive notifications and be the first one to get latest market information. Furthermore, <el-link class='underline intro' href='https://t.me/Headline_Group' target='_blank' :underline='false'>
                                    Headline Telegram Bot
                                </el-link> provides you the fastest way to trade directly. Start your trading now in <el-link class='underline intro' href='https://www.headline.net/en-US/home' target='_blank' :underline='false'>
                                    Headline.net
                                </el-link> and obtain the maximum profit!
                            </p>
                            <div class='buttonContainer'>
                                <el-button class='register lp_btn lp_btn_register' plain text @click='jumpPage(1)'>
                                    <p class='lp_btn lp_btn_register'>
                                        Get Started
                                    </p>
                                </el-button>
                                <el-button class='tgButton lp_btn lp_btn_tgBot' plain text @click='jumpPage(3)'>
                                    <p class='lp_btn lp_btn_tgBot'>
                                        Join Telegram
                                    </p>
                                </el-button>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Component',
    components: {
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
                case 3 :
                    window.open('https://t.me/Headline_admin')
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
      .backgroundPart2{
        background-image: url("../../../images/cpi1/g7-summit/tradingComputer.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        height: 70vh;
        align-content: center;
        display: grid;
        border: 1px solid #fff;
      }
      .introduction{
        font-size: 30px;
        line-height: 1.4em;
        text-align: center;
        color: #fff;
        font-weight: bold;
      }
      .cfdIntro{
          align-content: center;
          display: grid;
          border: 1px solid #fff;
        .container{
          .content{
            font-size: 18px;
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
