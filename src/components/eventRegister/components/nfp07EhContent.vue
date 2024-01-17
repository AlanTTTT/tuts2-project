<template>
    <div class='win'>
        <div class='container1'>
            <h1 class='title1'>
                Headline.net: NFP X CFD
            </h1>
            <h1 class='title2'>
                Amplify Your Trading Potential
            </h1>
            <p class='content'>
                Unlock the power of <span class='yellow bold'>
                    NFP and CFD
                </span> convergence with Headline.net.<br />Seize the opportunity to <span class='yellow'>
                    double your earnings
                </span> in <span class='yellow'>
                    just one week
                </span>.
            </p>
            <el-row class='row1'>
                <el-col
                    :lg='4'
                    :md='5'
                    :sm='10'
                    :xl='4'
                    :xs='22'
                >
                    <p class='infoTitle'>
                        Release Date
                    </p>
                    <p class='info'>
                        07/07
                    </p>
                </el-col>
                <el-col
                    class='colInfo1'
                    :lg='4'
                    :md='5'
                    :sm='10'
                    :xl='4'
                    :xs='22'
                >
                    <p class='infoTitle'>
                        Actual
                    </p>
                    <div>
                        <img alt='user' class='user' src='../../../images/cpi1/nfp/user.png' />
                        <img alt='user' class='user' src='../../../images/cpi1/nfp/user.png' />
                        <img alt='user' class='user' src='../../../images/cpi1/nfp/user.png' />
                        <img alt='user' class='user' src='../../../images/cpi1/nfp/user.png' />
                    </div>
                </el-col>
                <el-col
                    class='colInfo'
                    :lg='4'
                    :md='5'
                    :sm='10'
                    :xl='4'
                    :xs='22'
                >
                    <p class='infoTitle'>
                        Forecast
                    </p>
                    <p class='info'>
                        200K
                    </p>
                </el-col>
                <el-col
                    class='colInfo'
                    :lg='4'
                    :md='5'
                    :sm='10'
                    :xl='4'
                    :xs='22'
                >
                    <p class='infoTitle'>
                        Previous
                    </p>
                    <p class='info'>
                        339K
                    </p>
                </el-col>
            </el-row>
            <el-button class='learnMore lp_btn lp_btn_infoDetail' plain text @click='jumpPage(3)'>
                <p class='lp_btn lp_btn_infoDetail'>
                    Learn More
                </p>
            </el-button>
        </div>
        <div class='container2'>
            <el-row class='row1' :gutter='30'>
                <el-col
                    class='row1col1'
                    :lg='4'
                    :md='4'
                    :sm='4'
                    style='justify-content: center;'
                    :xl='4'
                    :xs='4'
                >
                    <img alt='box' class='box' src='../../../images/cpi1/landingPage/magic.png' />
                </el-col>
                <el-col
                    class='row1col2'
                    :lg='10'
                    :md='12'
                    :sm='16'
                    :xl='8'
                    :xs='19'
                >
                    <h1>Why Traders Care About NFP?</h1>
                </el-col>
            </el-row>

            <el-row class='row2' :gutter='30'>
                <el-col
                    class='row2col1'
                    :lg='6'
                    :md='10'
                    :sm='10'
                    style='justify-content: center;'
                    :xl='5'
                    :xs='20'
                >
                    <img alt='banner' class='banner' src='../../../images/cpi1/nfp07/ImgEh2.jpg' />
                </el-col>
                <el-col
                    class='row2col2'
                    :lg='7'
                    :md='10'
                    :sm='12'
                    style='justify-content: center;'
                    :xl='6'
                    :xs='22'
                >
                    <div class='infoContainer'>
                        <h1 class='title'>
                            01
                        </h1>
                        <div class='textContainer'>
                            <p class='heading'>
                                Market Volatility:
                            </p>
                            <p class='info'>
                                It can spark significant price movements in currencies, stocks, and commodities.
                            </p>
                        </div>
                    </div>
                    <el-divider class='line3' />
                    <div class='infoContainer'>
                        <h1 class='title'>
                            02
                        </h1>
                        <div class='textContainer'>
                            <p class='heading'>
                                Interest Rate Implications:
                            </p>
                            <p class='info'>
                                NFP figures influence the Federal Reserve's decisions on interest rates. Strong job growth may indicate inflationary pressures, leading to potential interest rate hikes.
                            </p>
                        </div>
                    </div>
                    <el-divider class='line3' />
                </el-col>
            </el-row>
            <div class='btnContainer'>
                <el-button class='tradeNow lp_btn lp_btn_register' plain text @click='jumpPage(1)'>
                    <p class='lp_btn lp_btn_register'>
                        Trade Now
                    </p>
                </el-button>
            </div>
        </div>

        <div class='container3'>
            <container3 />
            <el-row class='container3Row2'>
                <el-col
                    class='container3Col'
                    :lg='5'
                    :md='5'
                    :sm='12'
                    :xl='5'
                    :xs='22'
                >
                    <div>
                        <img alt='flag' class='flag' src='../../../images/cpi1/eucpi/img6Eh.png' />
                        <h1 class='contentTitle'>
                            EURO/USD
                        </h1>
                        <p class='content'>
                            US dollar strengthens against the Euro
                        </p>
                        <div class='btnContainer'>
                            <el-button class='tradeNow lp_btn lp_btn_register' plain text @click='jumpPage(1)'>
                                <p class='lp_btn lp_btn_register'>
                                    Trade Now
                                </p>
                            </el-button>
                        </div>
                    </div>
                </el-col>
                <el-col
                    class='container3Col'
                    :lg='5'
                    :md='5'
                    :sm='12'
                    :xl='5'
                    :xs='22'
                >
                    <div>
                        <img alt='flag' class='flag' src='../../../images/cpi1/nfp07/ImgEh3.png' />
                        <h1 class='contentTitle'>
                            USD/GBP
                        </h1>
                        <p class='content'>
                            USD shows strong performance
                        </p>
                        <div class='btnContainer'>
                            <el-button class='tradeNow lp_btn lp_btn_register' plain text @click='jumpPage(1)'>
                                <p class='lp_btn lp_btn_register'>
                                    Trade Now
                                </p>
                            </el-button>
                        </div>
                    </div>
                </el-col>
                <el-col
                    class='container3Col'
                    :lg='5'
                    :md='5'
                    :sm='12'
                    :xl='5'
                    :xs='22'
                >
                    <div>
                        <img alt='flag' class='flag' src='../../../images/cpi1/nfp07/ImgEh4.png' />
                        <h1 class='contentTitle'>
                            XAU/USD
                        </h1>
                        <p class='content'>
                            The precious metal could come under pressure
                        </p>
                        <div class='btnContainer'>
                            <el-button class='tradeNow lp_btn lp_btn_register' plain text @click='jumpPage(1)'>
                                <p class='lp_btn lp_btn_register'>
                                    Trade Now
                                </p>
                            </el-button>
                        </div>
                    </div>
                </el-col>
                <el-col
                    class='container3Col'
                    :lg='5'
                    :md='5'
                    :sm='12'
                    :xl='5'
                    :xs='22'
                >
                    <div>
                        <img alt='flag' class='flag' src='../../../images/cpi1/nfp07/ImgEh5.png' />
                        <h1 class='contentTitle'>
                            BTC/USDT
                        </h1>
                        <p class='content'>
                            Still standing after higher rate
                        </p>
                        <div class='btnContainer'>
                            <el-button class='tradeNow lp_btn lp_btn_register' plain text @click='jumpPage(1)'>
                                <p class='lp_btn lp_btn_register'>
                                    Trade Now
                                </p>
                            </el-button>
                        </div>
                    </div>
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
                        Why Trade NFP With Headline.net
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
                        <p>Trade directly on Telegram Bot</p>
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
                            Join Now
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
import container3 from './nfp07flagCardEh.vue'
export default {
    name: 'Win',
    components: {
        container3,
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
                    window.open('https://www.headline.net/en-US/infoDetail?id=33513')
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

.win{
  background: #fff;
}

.container1{
  background-color: rgb(22, 22, 63);
  text-align: center;
  padding: 80px 0;
  .title1{
    color: #FF4040;
    font-size: 38px;
  }
  .title2{
    font-size: 38px;
    color: #fff;
  }
  .content{
    color: #fff;
    font-size: 22px;
    padding: 30px 20px 0;
  }
  .yellow{
    color: #F8D287;
  }
  .bold{
    font-weight: bold;
  }
  .learnMore{
      background-color: #A80C0C !important;
      color: #fff;
      border-radius: unset !important;
      width: 217px;
      height: 42px;
      font-size: 18px;
      margin-top: 30px !important;
    }
    .learnMore:hover{
      background-color: #fff !important;
      color: #000;
    }
  .row1{
        justify-content: center;
        color: #fff;
        padding: 40px 0;
        .money{
          width: 56px;
        }
        p{
          text-align: center;
        }
        .infoTitle{
          font-size: 22px;
          font-weight: bold;
        }
        .info{
          font-size: 38px;
        }
        .imgRow{
          position: relative;
          justify-content: center;
          top: 60px;
        }
        .user{
          width: 40px;
          filter: invert(95%) sepia(12%) saturate(1837%) hue-rotate(348deg) brightness(104%) contrast(104%);
        }
      }
      .row1 {
        display: flex;
        justify-content: center;;
        align-items: center;
        padding: 50px;
    }

    .row1 .el-col {
        position: relative;
        text-align: center;
    }

    .row1 .el-col:not(:last-child)::after {
        content: "";
        position: absolute;
        right: -10px;
        top: 50%;
        transform: translateY(-50%);
        width: 10px;
        height: 10px;
        background-color: #fff;
        border-radius: 50%;

    }
}

.container2{
  background-color: rgb(126, 14, 34);
  padding: 50px 0;
  .row1{
    justify-content: center;
    .row1col1{
      text-align: end;
      .box{
        width: 50px;
        filter: invert(86%) sepia(97%) saturate(3688%) hue-rotate(180deg) brightness(117%) contrast(100%);
      }
    }
    .row1col2{
      h1{
        color: #FFFFFF;
        font-size: 30px;
      }
    }
  }
  .row2{
    justify-content: center;
    padding-top: 50px;
    .row2col1{
      display: grid;
      align-content: center;
      justify-items: center;
      .banner{
        width: 100%;
      }
      .banner1{
        padding-top: 70px;
      }
    }
    .row2col2{
      .infoContainer{
        display: flex;
        align-items: center;
        padding: 10px 0;
        .textContainer{
          padding-left: 20px;
        }
        .title{
          color: #F8D287;
          font-size: 48px;
        }
        .heading{
          color: #FFF86B;
          font-weight: bold;
          font-size: 18px;
        }
        .info{
          font-size: 17px;
          color: #fff;
          padding-top: 10px;
          line-height: 1.4em;
        }
      }
      .line3{
          border-top: 3px rgb(255,255,255) solid !important;
      }
    }
  }
  .btnContainer{
    text-align: center;
    .tradeNow{
      background-color: #000 !important;
      color: #fff;
      border-radius: unset !important;
      width: 217px;
      height: 42px;
      font-size: 18px;
      margin-top: 50px;
    }
    .tradeNow:hover{
      background-color: #fff !important;
      color: #000;
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

  .container3Row2{
    justify-content: center;
    padding-bottom: 30px;
    .container3Col{
      background-color: rgb(199,199,199);
      border: 1px solid #fff;
      padding: 50px 20px;
      .btnContainer{
        text-align: center;
        .tradeNow{
          background-color: #000 !important;
          color: #fff !important;
          border-radius: unset !important;
          height: 42px;
          font-size: 18px;
          margin-top: 50px;
        }
        .tradeNow:hover{
          background-color: #fff !important;
          color: #000;
        }
      }
      .flag{
        width:  126px;
        height: 110px;
        object-fit: cover;
      }
      .contentTitle{
        font-size: 28px;
        color: #7C6944;;
        padding-top: 20px;
      }
      .content{
        color: #7C6944;;
        font-size: 15px;
        padding-top: 30px;
      }
    }
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
      .row1{
        padding: 200px 0 50px;
        .country{
          width: 100%;
        }
        .box-card{
          border-radius:unset !important;
          min-height: 350px;
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
    font-weight: 400;
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
      border-radius: unset !important;
      :deep .el-card__body {
        padding: 20px  10px !important;
      }
      h1{
        font-size: 20px;
      }
      p{
        font-size: 16px;
      }
    }
  }
  .buttonContainer{
    padding-bottom: 50px;
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

@media screen and (max-width: 991px) {
  .container1{
        .row1 .el-col:not(:nth-child(3)):not(:nth-child(1))::after {
            display: none;
        }
        .colInfo{
          padding-top: 20px;
        }
  }

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
  .container1{
    .row1 .el-col::after {
      display: none;
    }
    .colInfo1{
      padding-top: 20px;
    }
    .title1{
      font-size: 30px;
      padding: 0 20px;
    }
    .title2{
      font-size: 30px;
      padding: 0 20px;
    }
    .content{
      font-size: 18px;
    }
  }
  .buttonContainer{
    text-align: center;
    .download{
      margin-top: 15px;
    }
    .telegram{
      margin-top: 15px;
    }
  }

  .container2{
    .row2{
    .row2col1{
      .banner{
        max-width: 400px;
      }
      .banner1{
        padding-top: 30px;
      }
      .tradeNow{
        margin-bottom: 30px !important;
      }
    }
  }
}
  .container3{
  .title{
    font-size: 30px;
  }
}
  .container4{
    .title{
      font-size: 30px;
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
