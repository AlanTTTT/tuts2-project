<template>
    <div class='win'>
        <div class='container1'>
            <h1 class='title1'>
                Headline.net: EU CPI X FOREX
            </h1>
            <p class='title2'>
                Maximize Your Trading Potential
            </p>
            <p class='content'>
                Harness CPI and FOREX Convergence with Headline.net<br />
                <span class='yellow'>
                    Double your earnings in just one week.
                </span>
            </p>
            <el-row class='row1'>
                <el-col
                    :lg='4'
                    :md='4'
                    :sm='10'
                    :xl='4'
                    :xs='22'
                >
                    <img alt='icon' class='icon1' src='../../../images/cpi1/eucpi/icon1Sc.png' />
                    <p class='infoTitle'>
                        Release Date
                    </p>
                    <p class='info'>
                        30 June, 2023
                    </p>
                </el-col>
                <el-col
                    class='colInfo1'
                    :lg='4'
                    :md='4'
                    :sm='10'
                    :xl='4'
                    :xs='22'
                >
                    <div class='col2info'>
                        <img alt='icon' class='icon2' src='../../../images/cpi1/eucpi/icon2Sc.png' />
                        <p class='infoTitle'>
                            Actual
                        </p>
                        <p class='infoContent'>
                            ?
                        </p>
                    </div>
                </el-col>
                <el-col
                    class='colInfo'
                    :lg='4'
                    :md='4'
                    :sm='10'
                    :xl='4'
                    :xs='22'
                >
                    <img alt='icon' class='icon3' src='../../../images/cpi1/eucpi/icon3Sc.png' />
                    <p class='infoTitle'>
                        Forecast
                    </p>
                    <p class='info'>
                        5.50%
                    </p>
                </el-col>
                <el-col
                    class='colInfo'
                    :lg='4'
                    :md='4'
                    :sm='10'
                    :xl='4'
                    :xs='22'
                >
                    <img alt='icon' class='icon4' src='../../../images/cpi1/eucpi/icon4Sc.png' />
                    <p class='infoTitle'>
                        Previous
                    </p>
                    <p class='info'>
                        6.10%
                    </p>
                </el-col>
            </el-row>
            <el-button class='learnMore lp_btn lp_btn_infoDetail' plain text @click='jumpPage(3)'>
                <p class='lp_btn lp_btn_infoDetail'>
                    More insight
                </p>
            </el-button>
            <p class='container1Title'>
                Exclusive Insights Await You as Our Member
            </p>
        </div>
        <div class='container2'>
            <el-row class='row1' :gutter='30'>
                <el-col
                    class='row1col2'
                    :lg='10'
                    :md='12'
                    :sm='16'
                    :xl='8'
                    :xs='19'
                >
                    <h1>Why Traders Care About EU CPI?</h1>
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
                    <img alt='banner' class='banner' src='../../../images/cpi1/eucpi/img1Sc.jpg' />
                    <img alt='banner' class='banner banner1' src='../../../images/cpi1/eucpi/img2Sc.jpg' />
                    <el-button class='tradeNow lp_btn lp_btn_register' plain text @click='jumpPage(1)'>
                        <p class='lp_btn lp_btn_register'>
                            Trade Now
                        </p>
                    </el-button>
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
                                Measure of Inflation:
                            </p>
                            <p class='info'>
                                A Vital Indicator for Eurozone Purchasing Trends and Inflation.
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
                                Impact on Monetary Policy:
                            </p>
                            <p class='info'>
                                It provides insights into the potential actions of the European Central Bank (ECB) regarding interest rates.
                            </p>
                        </div>
                    </div>
                    <el-divider class='line3' />
                    <div class='infoContainer'>
                        <h1 class='title'>
                            03
                        </h1>
                        <div class='textContainer'>
                            <p class='heading'>
                                Currency Valuation:
                            </p>
                            <p class='info'>
                                Rising inflation rates can diminish the Euro's purchasing power, resulting in its devaluation.
                            </p>
                        </div>
                    </div>
                    <el-divider class='line3' />
                    <div class='infoContainer'>
                        <h1 class='title'>
                            04
                        </h1>
                        <div class='textContainer'>
                            <p class='heading'>
                                Market Volatility and Opportunities:
                            </p>
                            <p class='info'>
                                This phenomenon can induce market volatility, creating favorable circumstances for traders to capitalize on price fluctuations across diverse financial instruments such as currency pairs, commodities, and indices.
                            </p>
                        </div>
                    </div>
                    <el-divider class='line3' />
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
                        How to Trade on EU CPI
                    </h1>
                </el-col>
            </el-row>
            <el-row class='container3Row1' :gutter='20'>
                <el-col
                    class='container3Col'
                    :lg='22'
                    :md='24'
                    :sm='24'
                    :xl='20'
                    :xs='24'
                >
                    <el-row class='row1' style='justify-content: space-evenly;'>
                        <el-col
                            class='cardContainerCol'
                            :lg='7'
                            :md='7'
                            :sm='22'
                            :xl='6'
                            :xs='22'
                        >
                            <img alt='country' class='country' src='../../../images/cpi1/eucpi/img3Sc.jpg' />
                            <el-card class='box-card box-card1'>
                                <h1>Higher CPI</h1>
                                <el-divider class='line1' />
                                <el-divider class='line2' />
                                <ul class='boxCardInfoContainer'>
                                    <li>
                                        <span class='red'>
                                            Euro:
                                        </span> Fuel Euro gains
                                    </li>
                                    <li>
                                        <span class='red'>
                                            Gold:
                                        </span> As a safe haven asset, gold prices rise.
                                    </li>
                                    <li>
                                        <span class='red'>
                                            Rate hikes:
                                        </span> The rise in CPI may increase the likelihood of central bank rate hikes.
                                    </li>
                                </ul>
                                <el-button class='learnMore lp_btn lp_btn_register' plain text @click='jumpPage(1)'>
                                    <p class='lp_btn lp_btn_register'>
                                        Trade Now
                                    </p>
                                </el-button>
                            </el-card>
                        </el-col>

                        <el-col
                            class='cardContainerCol cardContainerCol2'
                            :lg='7'
                            :md='7'
                            :sm='22'
                            :xl='6'
                            :xs='22'
                        >
                            <img alt='country' class='country' src='../../../images/cpi1/eucpi/img4Sc.png' />
                            <el-card class='box-card box-card1'>
                                <h1>Forecasted CPI</h1>
                                <el-divider class='line1' />
                                <el-divider class='line2' />
                                <ul class='boxCardInfoContainer'>
                                    <li>
                                        <span class='red'>
                                            Euro, Gold:
                                        </span> May remain relatively stable or be influenced by other factors such as economic data and market sentiment.
                                    </li>
                                    <li>
                                        <span class='red'>
                                            Rate hikes
                                        </span> Both rate hikes and pauses are possible.
                                    </li>
                                </ul>
                                <el-button class='learnMore lp_btn lp_btn_register' plain text @click='jumpPage(1)'>
                                    <p class='lp_btn lp_btn_register'>
                                        Trade Now
                                    </p>
                                </el-button>
                            </el-card>
                        </el-col>

                        <el-col
                            class='cardContainerCol cardContainerCol2'
                            :lg='7'
                            :md='7'
                            :sm='22'
                            :xl='6'
                            :xs='22'
                        >
                            <img alt='country' class='country' src='../../../images/cpi1/eucpi/img5Sc.jpeg' />
                            <el-card class='box-card box-card1'>
                                <h1>Lower CPI</h1>
                                <el-divider class='line1' />
                                <el-divider class='line2' />
                                <ul class='boxCardInfoContainer'>
                                    <li>
                                        <span class='red'>
                                            Euro:
                                        </span> Decline in the value
                                    </li>
                                    <li>
                                        <span class='red'>
                                            Gold:
                                        </span> Potential increase
                                    </li>
                                    <li>
                                        <span class='red'>
                                            Interest Rate:
                                        </span> Possibility of the ECB pausing or delaying interest rate hikes.
                                    </li>
                                </ul>
                                <el-button class='learnMore lp_btn lp_btn_register' plain text @click='jumpPage(1)'>
                                    <p class='lp_btn lp_btn_register'>
                                        Trade Now
                                    </p>
                                </el-button>
                            </el-card>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>

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
                        <img alt='flag' class='flag' src='../../../images/cpi1/eucpi/img6Eh.png' @click='jumpPage(4)' />
                        <h1 @click='jumpPage(4)'>
                            EURO/USD
                        </h1>
                        <p class='information'>
                            Euro strengthens against the US dollar
                        </p>
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
                        <img alt='flag' class='flag' src='../../../images/cpi1/eucpi/img7Eh.png' @click='jumpPage(5)' />
                        <h1 @click='jumpPage(5)'>
                            EURO/AUD
                        </h1>
                        <p class='information'>
                            AUD rebounds and breaks recent highs
                        </p>
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
                        <img alt='flag' class='flag' src='../../../images/cpi1/eucpi/img8Eh.png' @click='jumpPage(6)' />
                        <h1 @click='jumpPage(6)'>
                            EURO/GBP
                        </h1>
                        <p class='information'>
                            GBP shows strong performance
                        </p>
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
                        <img alt='flag' class='flag' src='../../../images/cpi1/eucpi/img9Eh.png' @click='jumpPage(7)' />
                        <h1 @click='jumpPage(7)'>
                            EURO/JPY
                        </h1>
                        <p class='information'>
                            The Japanese yen has become one of our targeted trading assets.
                        </p>
                    </div>
                </el-col>
            </el-row>
        </div>

        <div class='container5'>
            <h1 class='title'>
                Headline.net Cutting - Edge Platform
            </h1>
            <el-row class='cardContainer' style='justify-content: center;'>
                <el-col
                    :lg='6'
                    :md='11'
                    :sm='11'
                    style='justify-content: center; display: grid;'
                    :xl='5'
                    :xs='20'
                >
                    <img alt='change' class='card' src='../../../images/cpi1/eucpi/img6Sc.png' />
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
                    <img alt='change' class='card' src='../../../images/cpi1/eucpi/img7Sc.jpeg' />
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
                    <img alt='change' class='card' src='../../../images/cpi1/eucpi/img8Sc.png' />
                    <el-card class='box-card cardRow5'>
                        <h1>
                            Unlimited Prize Pool
                        </h1>
                        <p>Join trading contest to win bonus</p>
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
        <testimony1 />
    </div>
</template>

<script>
import testimony1 from './eucpiScTestimonials.vue'
export default {
    name: 'Win',
    components: {
        testimony1,
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
                    window.open('https://www.headline.net/en-US/infoDetail2?id=22356')
                    break
                case 4 :
                    window.open('https://www.headline.net/en-US/order?symbolId=1437&tradeType=1&name=EUR/USD')
                    break
                case 5 :
                    window.open('https://www.headline.net/en-US/order?symbolId=1448&tradeType=1&name=EUR/AUD')
                    break
                case 6 :
                    window.open('https://www.headline.net/en-US/order?symbolId=1446&tradeType=1&name=EUR/GBP')
                    break
                case 7 :
                    window.open('https://www.headline.net/en-US/order?symbolId=1445&tradeType=1&name=EUR/JPY')
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
  overflow: hidden;
}

.container1{
  background-color: #000;
  text-align: center;
  padding: 60px 0;
  .title1{
    color: #fff;
    font-size: 50px;
  }
  .title2{
    font-size: 38px;
    color: #fff;
  }
  .content{
    color: #fff;
    font-size: 22px;
    padding: 20px 20px 0;
  }
  .yellow{
    color: #FFD600;
  }
  .bold{
    font-weight: bold;
  }
  .colInfo1{
      .col2info{
        .infoContent{
          font-weight: bold;
          font-size: 38px;
        }
      }
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
    .container1Title{
      padding-top: 10px;
      color: #fff;
      font-size: 15px;
      font-style: italic;
    }
  .row1{
        justify-content: center;
        color: #fff;
        padding: 40px 0;
        .icon1{
          width: 67px;
          padding-top: 10px;
        }
        .icon2{
          width: 120px;
          padding-top: 15px;
        }
        .icon3{
          width: 63px;
        }
        .icon4{
          width: 55px;
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
  background-color: rgb(128,128,128);
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
    padding: 20px 0;
    .container3Col{
      background-color: rgb(199,199,199);
      border: 1px solid #fff;
      padding: 50px 20px;
      .flag{
        width:  126px;
        height: 110px;
        object-fit: cover;
        cursor: pointer;
      }
      .flag:hover{
        margin-top: 5vh;
        margin-bottom: 2vh;
        transition: all .5s;
        -moz-transition: all .5s;
        -o-transition: all .5s;
        -ms-transition: all .5s;
      }
      h1{
        font-size: 28px;
        color: rgb(85,26,58);
        padding-top: 20px;
        cursor: pointer;
      }
      h1:hover{
        color: rgb(0,0,0);
      }
      .information{
        color: rgb(85,26,58);
        font-size: 15px;
        padding-top: 20px;
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
      .red{
      color: #A80C0C;
    }
      .row1{
        .country{
          width: 100%;
          position: relative;
          z-index: 5;
          max-height: 262px;
          height: 200px;
          object-fit: cover;
        }
        .box-card{
          border-radius:unset !important;
          min-height: 450px;
          .boxCardInfoContainer{
            min-height: 200px
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
                background-color: #000 !important;
                color: #fff;
            }
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
        .information{
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

.container5{
  background-color: rgb(236,228,232);
  .title{
    font-size: 50px;
    text-align: center;
    padding: 50px 0;
  }
  .cardContainer{
    padding-top: 30px;
    .card{
      width:  289px;
      height: 252px;
      object-fit: cover;
    }
    .cardRow5{
      position: relative;
      bottom: 20px;
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
@media screen and (max-width: 1365px) {
  .container3Row1{
    .container3Col{
      .row1{
        .box-card{
          .boxCardInfoContainer{
            min-height: 280px !important;
          }
        }
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
    .container5{
      .title{
        font-size: 40px !important;
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
            .boxCardInfoContainer{
              min-height: unset !important;
            }
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
      padding-top: 50px;
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
.container5{
      .title{
        font-size: 30px !important;
      }
      .cardContainer{
        padding-top: unset;
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
