<template>
    <div class='win'>
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
                        How to Trade on FOMC News
                    </h1>
                    <p class='content'>
                        How does the FOMC announcement usually affect the dollar?
                    </p>
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
                            class='cardContainerCol cardContainerCol2'
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
                        <h1>EURO/USD</h1>
                        <p class='container3ColContent'>
                            US dollar strengthens against the Euro
                        </p>
                        <el-button class='tradeNow lp_btn lp_btn_register' plain text @click='jumpPage(1)'>
                            <p class='lp_btn lp_btn_register'>
                                Trade Now
                            </p>
                        </el-button>
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
                        <h1>USD/GBP</h1>
                        <p class='container3ColContent'>
                            USD shows strong performance
                        </p>
                        <el-button class='tradeNow lp_btn lp_btn_register' plain text @click='jumpPage(1)'>
                            <p class='lp_btn lp_btn_register'>
                                Trade Now
                            </p>
                        </el-button>
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
                        <h1>XAU/USD</h1>
                        <p class='container3ColContent'>
                            The precious metal could come under pressure
                        </p>
                        <el-button class='tradeNow lp_btn lp_btn_register' plain text @click='jumpPage(1)'>
                            <p class='lp_btn lp_btn_register'>
                                Trade Now
                            </p>
                        </el-button>
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
                        <h1>BTC/USDT</h1>
                        <p class='container3ColContent'>
                            Still standing after higher rate
                        </p>
                        <el-button class='tradeNow lp_btn lp_btn_register' plain text @click='jumpPage(1)'>
                            <p class='lp_btn lp_btn_register'>
                                Trade Now
                            </p>
                        </el-button>
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
                        Why Trade FOMC With Headline.net
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
                <!--<el-col
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
                </el-col>-->
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
                    window.open('https://t.me/Headline_admin')
                    break
                case 4 :
                    window.open('https://www.headline.net/en-US/infoDetail?id=29205')
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
.container3{
  text-align: center;
  background-color: rgb( 236,228,232);
  ul{
    list-style: disc;
  }
  .title{
    color: rgb(125,24,23) !important;
    font-size: 40px;
    padding-top: 50px;
  }
  .content{
    color: rgb(125,24,23) !important;
    font-size: 20px;
  }

  .container3Row2{
    justify-content: center;
    padding-bottom: 30px;
    .container3Col{
      background-color: rgb(199,199,199);
      border: 1px solid #fff;
      padding: 50px 20px;
      .flag{
        width:  126px;
        height: 110px;
        object-fit: cover;
      }
      h1{
        font-size: 28px;
        color: #7C6944;
        padding-top: 20px;
      }
      .container3ColContent{
        color: #7C6944;
        font-size: 15px;
        padding-top: 20px;
        min-height: 87px;
      }
      .tradeNow{
        background-color: #000 !important;
        color: #fff;
        border-radius: unset !important;
        width: 170px;
        height: 42px;
        font-size: 18px;
        margin-top: 10px;
      }
      .tradeNow:hover{
        background-color: #fff !important;
        color: #000;
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
        }
        .box-card{
          border-radius:unset !important;
          min-height: 320px;
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

@media screen and (max-width: 1300px) {
  .box-card1{
    min-height: 400px !important;
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
