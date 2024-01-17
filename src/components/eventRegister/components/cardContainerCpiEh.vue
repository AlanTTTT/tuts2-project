<template>
    <div class='win'>
        <div class='container2'>
            <div class='title'>
                <h1 class='heading1'>
                    Headline.net: CPI x FOMC
                </h1>
                <h1 class='heading2 headingContainer'>
                    Amplify Your Trading Potential
                </h1>
                <p class='content'>
                    Unlock the power of <span class='yellow'>
                        CPI and FOMC
                    </span> convergence with Headline.net.<br />Seize the opportunity to <span class='yellow'>
                        double your earnings
                    </span> in <span class='yellow'>
                        just one week
                    </span>.
                </p>
            </div>
            <el-row style='align-content: center; justify-content: center; padding-bottom: 50px;'>
                <el-col
                    class='col1Container2'
                    :lg='10'
                    :md='10'
                    :sm='22'
                    style='align-content: center;'
                    :xl='10'
                    :xs='22'
                >
                    <div style='background-color: rgba(0,0,0,0.3); padding: 80px 50px; text-align: start; height: 100%;'>
                        <el-button class='details cpiButton lp_btn_register lp_btn' plain style='margin-top: 30px' text @click='jumpPage(1)'>
                            <p class='lp_btn_register lp_btn'>
                                CPI
                            </p>
                        </el-button>
                        <h1>Consumer Price Index</h1>
                        <p style='padding-top: 10px;'>
                            A key way to measure changes in purchasing trends and inflation.
                        </p>
                        <p style='padding-top: 10px;'>
                            12/07/2023   8:30AM  UTC-5
                        </p>
                        <p style='padding-top: 10px;'>
                            Previous: 4.0%
                        </p>
                        <el-button class='details lp_btn_register lp_btn' plain style='margin-top: 30px' text @click='jumpPage(1)'>
                            <p class='lp_btn_register lp_btn'>
                                Trading Insight
                            </p>
                        </el-button>
                    </div>
                </el-col>

                <el-col
                    class='col2Container'
                    :lg='10'
                    :md='10'
                    :sm='22'
                    :xl='10'
                    :xs='22'
                >
                    <div style='background-color: rgba(0,0,0,0.3); padding: 80px 50px; text-align: start;'>
                        <el-button class='details lp_btn_register lp_btn' plain style='margin-top: 30px; max-width: 94px' text @click='jumpPage(1)'>
                            <p class='lp_btn_register lp_btn'>
                                FOMC
                            </p>
                        </el-button>
                        <h1>
                            Federal Open Market Committee
                        </h1>
                        <p style='padding-top: 10px;'>
                            It provides insights into the monetary policy decisions of the Federal Reserve
                        </p>
                        <p style='padding-top: 10px;'>
                            26/07/2023   2:00PM  UTC-5
                        </p>
                        <p style='padding-top: 10px;'>
                            Previous: 5.25%
                        </p>
                        <el-button class='details lp_btn_register lp_btn' plain style='margin-top: 30px' text @click='jumpPage(1)'>
                            <p class='lp_btn_register lp_btn'>
                                Trading Insight
                            </p>
                        </el-button>
                    </div>
                </el-col>
            </el-row>
        </div>

        <div class='container3'>
            <el-row style='justify-content: center;'>
                <el-col
                    :lg='20'
                    :md='20'
                    :sm='20'
                    :xl='20'
                    :xs='20'
                >
                    <h1 class='title'>
                        How to Trade on CPI x FOMC
                    </h1>
                </el-col>
            </el-row>
            <el-row class='container3Row1'>
                <el-col
                    class='container3Col'
                    :lg='20'
                    :md='20'
                    :sm='20'
                    :xl='20'
                    :xs='20'
                >
                    <el-row class='row1' style='justify-content: space-evenly;'>
                        <el-col
                            class='cardContainerCol'
                            :lg='6'
                            :md='7'
                            :sm='22'
                            :xl='6'
                            :xs='22'
                        >
                            <img alt='country' class='country' src='../../../images/cpi1/cpi-fomc/1.png' />
                            <el-card class='box-card box-card1'>
                                <h1>Higher CPI</h1>
                                <el-divider class='line1' />
                                <el-divider class='line2' />
                                <ul>
                                    <li>
                                        <span class='red'>
                                            USD:
                                        </span> Fuel U.S. dollar gains
                                    </li>
                                    <li>
                                        <span class='red'>
                                            Gold:
                                        </span>As a safe haven asset, gold prices rise. However, considering the possibility of Fed rate hikes, gold prices may decline.
                                    </li>
                                    <li>
                                        <span class='red'>
                                            Rate hikes:
                                        </span> The rise in CPI may increase the likelihood of central bank rate hikes.
                                    </li>
                                </ul>
                            </el-card>
                        </el-col>

                        <el-col
                            class='cardContainerCol cardContainerCol2'
                            :lg='6'
                            :md='7'
                            :sm='22'
                            :xl='6'
                            :xs='22'
                        >
                            <img alt='country' class='country' src='../../../images/cpi1/cpi-fomc/2.png' />
                            <el-card class='box-card box-card1'>
                                <h1>Forecasted CPI</h1>
                                <el-divider class='line1' />
                                <el-divider class='line2' />
                                <ul>
                                    <li>
                                        <span class='red'>
                                            USD, Gold:
                                        </span> May remain relatively stable or be influenced by other factors such as economic data and market sentiment.
                                    </li>
                                    <li>
                                        <span class='red'>
                                            Rate hikes or Unchange:
                                        </span> Both rate hikes and pauses are possible.
                                    </li>
                                </ul>
                            </el-card>
                        </el-col>

                        <el-col
                            class='cardContainerCol cardContainerCol2'
                            :lg='6'
                            :md='7'
                            :sm='22'
                            :xl='6'
                            :xs='22'
                        >
                            <img alt='country' class='country' src='../../../images/cpi1/cpi-fomc/3.png' />
                            <el-card class='box-card box-card1'>
                                <h1>Lower CPI</h1>
                                <el-divider class='line1' />
                                <el-divider class='line2' />
                                <ul>
                                    <li>
                                        <span class='red'>
                                            USD:
                                        </span> Decline in the value
                                    </li>
                                    <li>
                                        <span class='red'>
                                            Gold:
                                        </span> Potential increase in gold prices
                                    </li>
                                    <li>
                                        <span class='red'>
                                            Interest Rate:
                                        </span> Possibility of the Federal Reserve pausing or delaying interest rate hikes at the FOMC meeting
                                    </li>
                                </ul>
                            </el-card>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            <el-row class='container3Row1'>
                <el-col
                    class='container3Col'
                    :lg='20'
                    :md='20'
                    :sm='20'
                    :xl='20'
                    :xs='20'
                >
                    <el-row class='row1' style='justify-content: space-evenly;'>
                        <el-col
                            class='cardContainerCol'
                            :lg='6'
                            :md='7'
                            :sm='22'
                            :xl='6'
                            :xs='22'
                        >
                            <img alt='country' class='country' src='../../../images/cpi1/cpi-fomc/4.png' />
                            <el-card class='box-card box-card1'>
                                <h1>Rate Hike</h1>
                                <el-divider class='line1' />
                                <el-divider class='line2' />
                                <ul>
                                    <li>
                                        <span class='red'>
                                            USD:
                                        </span> It can potentially strengthen the US dollar.
                                    </li>
                                    <li>
                                        <span class='red'>
                                            Gold:
                                        </span> Exerts downward pressure on gold prices.
                                    </li>
                                </ul>
                            </el-card>
                        </el-col>

                        <el-col
                            class='cardContainerCol cardContainerCol2'
                            :lg='6'
                            :md='7'
                            :sm='22'
                            :xl='6'
                            :xs='22'
                        >
                            <img alt='country' class='country' src='../../../images/cpi1/cpi-fomc/5.png' />
                            <el-card class='box-card box-card1'>
                                <h1>Unchange</h1>
                                <el-divider class='line1' />
                                <el-divider class='line2' />
                                <ul>
                                    <li>
                                        <span class='red'>
                                            USD:
                                        </span> It can potentially weakness the US dollar.
                                    </li>
                                    <li>
                                        <span class='red'>
                                            Gold:
                                        </span> Potential increase in gold prices
                                    </li>
                                </ul>
                            </el-card>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>

        <div class='container4'>
            <el-row style='justify-content: center;'>
                <el-col
                    :lg='20'
                    :md='20'
                    :sm='20'
                    :xl='20'
                    :xs='20'
                >
                    <h1 class='title'>
                        Why Trade CPI x FOMC With Headline.net
                    </h1>
                </el-col>
            </el-row>
        </div>

        <div class='container5'>
            <el-row class='cardContainer' style='justify-content: center;'>
                <el-col
                    :lg='6'
                    :md='11'
                    :sm='11'
                    style='justify-content: center; display: grid;'
                    :xl='5'
                    :xs='20'
                >
                    <img alt='change' class='card' src='../../../images/cpi1/g7-summit/kycImg.jpg' />
                    <el-card class='box-card cardRow5'>
                        <h1>KYC-FREE</h1>
                        <p>Skip KYC and start trading faster</p>
                    </el-card>
                </el-col>
                <el-col
                    :lg='6'
                    :md='11'
                    :sm='11'
                    style='justify-content: center; display: grid;'
                    :xl='5'
                    :xs='20'
                >
                    <img alt='change' class='card' src='../../../images/cpi1/g7-summit/cryptoImg.png' />
                    <el-card class='box-card cardRow5'>
                        <h1>Crypto-Friendly</h1>
                        <p>Trade CFDs with Crypto and Fiat</p>
                    </el-card>
                </el-col>
                <el-col
                    :lg='6'
                    :md='11'
                    :sm='11'
                    style='justify-content: center; display: grid;'
                    :xl='5'
                    :xs='20'
                >
                    <img alt='change' class='card' src='../../../images/cpi1/g7-summit/tradingImg.jpg' />
                    <el-card class='box-card cardRow5'>
                        <h1>
                            Event-Driven Trading
                        </h1>
                        <p>Focus on financial events to win big</p>
                    </el-card>
                </el-col>
                <el-col
                    :lg='6'
                    :md='11'
                    :sm='11'
                    style='justify-content: center; display: grid;'
                    :xl='5'
                    :xs='20'
                >
                    <img alt='change' class='card' src='../../../images/cpi1/g7-summit/prizeImg.jpg' />
                    <el-card class='box-card cardRow5'>
                        <h1>
                            Telegram-based
                        </h1>
                        <p>Trade directly on Telegram Bot.</p>
                    </el-card>
                </el-col>
            </el-row>
            <el-row class='buttonContainer' style='justify-content: center;'>
                <el-col
                    :lg='5'
                    :md='6'
                    :sm='7'
                    style='text-align: center;'
                    :xl='4'
                    :xs='20'
                >
                    <el-button class='claim lp_btn lp_btn_register' plain text @click='jumpPage(1)'>
                        <p class='lp_btn lp_btn_register'>
                            Learn More
                        </p>
                    </el-button>
                </el-col>
                <el-col
                    :lg='5'
                    :md='6'
                    :sm='7'
                    style='text-align: center;'
                    :xl='4'
                    :xs='20'
                >
                    <el-button class='download lp_btn_appDownload lp_btn' plain text @click='jumpPage(2)'>
                        <p class='lp_btn_appDownload lp_btn'>
                            Download APP
                        </p>
                    </el-button>
                </el-col>
                <el-col
                    :lg='5'
                    :md='6'
                    :sm='7'
                    style='text-align: center;'
                    :xl='4'
                    :xs='20'
                >
                    <el-button class='telegram lp_btn lp_btn_tgBot' plain text @click='jumpPage(3)'>
                        <p class='lp_btn lp_btn_tgBot'>
                            Telegram Bot
                        </p>
                    </el-button>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Win',
    components: {
    },
    setup (props) {
        const jumpPage = (attr) => {
            switch (attr) {
                case 1 :
                    window.open('https://www.headline.net/en-US/register')
                    break
                case 2 :
                    window.open('https://www.headline.net/en-US/download')
                    break
                case 3 :
                    window.open('https://t.me/Headline_OfficialBot')
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
.el-divider--horizontal{
  margin: unset !important;
  border-top: 1px #000 solid;
}

.usDollar{
  width: 100%;
}

.win{
  background: #fff;
  overflow: hidden;
  .container{
    font-size:32px;
    text-align: center;
    padding: 50px 0 40px;
    .title{
      font-size: 44px;
      color: #C11237;
    }
    p{
      font-size: 22px;
      font-weight: bold;
      color: #000;
    }

    .row2{
      justify-content: center;
      .number{
        line-height: normal;
        font-size: 176px;
        font-weight: bold;
      }
      .content{
        position: relative;
        bottom: 130px;
        padding-left: 250px;
        z-index: 999;
        text-align: start;
        .text{
          font-size: 19px;
          font-weight: bold;
        }
      }
    }
  }
}
.container2{
  background-color: #000;
  text-align: center;
  .title{
    padding:  50px 30px;
  }
  .headingContainer{
    padding-bottom: 30px;
  }
  .heading1{
    color: #FF4040;
    font-size: 38px;
  }
  .heading2{
    color: #FFF;
    font-size: 38px;
  }
  .content{
    font-size: 22px;
    color: #fff;
  }
  .yellow{
    color: #EACE56;
  }
  .col1Container2{
        background-image: url("../../../images/cpi1/cpi-fomc/background3Eh.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        color: #fff;
    h1{
      font-size: 28px;
      color: #EACE56;
    }
    p{
      font-size: 19px;
      max-width: 305px;
    }
    .cpiButton{
      width: 94px !important;
      height: 34px !important;
    }
    .details{
      background-color: #BB2423 !important;
      color: #fff;
      border-radius: unset !important;
      width: 217px;
      height: 42px;
    }
    .details:hover{
      background-color: #fff;
      color: #000;
      border: 1px solid #000;
    }
  }
  .col2Container{
        background-image: url("../../../images/cpi1/cpi-fomc/background2Eh.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        color: #fff;
        h1{
          font-size: 28px;
          color: #EACE56;
        }
        p{
          font-size: 19px;
          max-width: 400px;
        }
        .cpiButton{
          width: 94px !important;
          height: 34px !important;
        }
        .user{
          width: 40px;
          filter: invert(12%) sepia(87%) saturate(2791%) hue-rotate(347deg) brightness(107%) contrast(112%);
        }
        .details{
          background-color: #BB2423 !important;
          color: #fff;
          border-radius: unset !important;
          width: 217px;
          height: 42px;
        }
        .details:hover{
          background-color: #fff;
          color: #000;
          border: 1px solid #000;
        }
    }
}

.container3{
  text-align: center;
  background-color: rgb( 236,228,232);
  ul{
    list-style: disc;
  }
  .title{
    color: #7D1817 !important;
    font-size: 40px;
    padding-top: 50px;
  }
  .timeLine{
    width: 100%;
  }
  .container3Row1{
    justify-content: center;
    .container3Col{
      .bannerBackground{
        margin: auto;
        left: 0;
        right: 0;
        text-align: center;
        position: absolute;
        width: 100%;
      }
      .red{
      color: #A80C0C;
    }
      .row1{
        .country{
          width: 100%;
          position: relative;
          z-index: 5;
        }
        .box-card{
          border-radius:unset !important;
          min-height: 450px;
          position: relative;
          bottom: 50px;
        }
        h1{
          color: #A80C0C;
          font-size: 26px;
        }
        li{
          color: #0B2F5B;
          font-size: 19px;
          text-align: start;
          margin: 10px 20px;
        }
        p{
          color: #0B2F5B;
          font-size: 19px;
          padding-top: 10px;
          text-align: start;
        }
        .line1{
          margin: 5px 0 !important;
          border-top: 9px rgb(255,87,0) solid !important;
        }
        .line2{
          margin: 0 0 20px  !important;
          border-top: 1px rgb(255,87,0) solid !important;
        }
      }
    }
  }
}

.container4{
  background-color: #8B0000;
  text-align: center;
  .title{
    font-size: 40px;
    font-weight: 800;
    color: #fff;
    padding: 50px 0;
  }
}

.container5{
  background-color: rgb(236,228,232);
  .cardContainer{
    padding-top: 50px;
    .card{
      width:  286px;
      height: 335px;
      object-fit: cover;
    }
    .cardRow5{
      position: relative;
      bottom: 50px;
      left: 30px;
    }
    .box-card{
      max-width: 286px;
      height: 118px;
      border-radius: unset !important;
      h1{
        font-size: 20px;
      }
      p{
        font-size: 16px;
      }
    }
  }
  .buttonContainer{
    padding: 50px 0;
    font-size: 16px;
    .claim{
      background-color: #7D1817 !important;
      color: #fff;
      border-radius: 25px;
      width: 255px;
      height: 45px;
    }
    .claim:hover{
      background-color: #BB2423 !important;
    }
    .download{
      background-color: #000 !important;
      color: #fff;
      border-radius: 25px;
      width: 255px;
      height: 45px;
    }
    .download:hover{
      background-color: #BB2423 !important;
    }
    .telegram{
      background-color: #3D9BE9 !important;
      color: #fff;
      border-radius: 25px;
      width: 255px;
      height: 45px;
    }
    .telegram:hover{
      background-color: unset !important;
      border: 1px solid #3D9BE9;
      color:#3D9BE9
    }
  }
}

.color1{
  color: #FFEAE8;
}
.color2{
  color: #ECDBFF;
}
.color3{
  color: #D4EDEE;
}
@media screen and (max-width: 1600px) {
  .row2{
      .content{
        padding-left: 200px !important;
      }
    }
}
@media screen and (max-width: 1550px) {
  .box-card1{
    min-height: 500px !important;
  }
}
@media screen and (max-width: 1300px) {
  .box-card1{
    min-height: 630px !important;
  }
  .container2{
  .col2Container{
    .title{
      font-size: 30px;
    }
    .subTitle{
      font-size: 26px;
    }
    .content{
      font-size: 16px;
    }
    .user{
      width: 30px;
    }
  }
}
}

@media screen and (max-width: 1250px) {
  .buttonContainer{

    .claim{
      width: 200px !important;
    }
    .download{
      width: 200px !important;
    }
    .telegram{
      width: 200px !important;
    }
  }
}

@media screen and (max-width: 1200px) {
  .row2{
      .content{
        padding-left: 150px !important;
      }
    }
}

@media screen and (max-width: 1000px) {
  .container2{
  .col2Container{
    .user{
      width: 25px;
     }
    }
  }
}

@media screen and (max-width: 991px) {
  .usDollar{
    max-width: 250px;
  }
  .bannerBackground{
    display: none !important;
  }
  .container3{
    .container3Row1{
      .container3Col{
        .row1{
          padding: 50px 0 !important;
          .cardContainerCol{
            justify-content: center;
            display: grid;
          }
          .cardContainerCol2{
            margin-top: 60px;
          }
          .country{
            max-width: 400px !important;
          }
          .box-card{
            max-width: 400px !important;
            min-height: unset !important;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .buttonContainer{
    text-align: center;
    .download{
      margin-top: 15px;
    }
    .telegram{
      margin-top: 15px;
    }
  }
}

@media screen and (max-width: 500px) {
  .cardRow5{
    width: 250px !important;
  }
  .container5{
    .cardContainer{
      .card{
        width: 250px !important;
        }
      }
    }
  }
</style>
