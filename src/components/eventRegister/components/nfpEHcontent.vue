<template>
    <div class='win'>
        <div class='container2'>
            <el-row style='align-content: center; justify-content: center;'>
                <el-col
                    class='col1Container2'
                    :lg='12'
                    :md='12'
                    :sm='24'
                    style='justify-content: center; display: grid; align-content: center;'
                    :xl='12'
                    :xs='24'
                >
                    <div style='max-width: 600px; padding: 80px 20px;'>
                        <h1>Why Traders Care?</h1>
                        <p style='padding-top: 30px'>
                            NFP can trigger significant price movements in <span class='red'>
                                currencies, stocks, and commodities
                            </span>, presenting trading opportunities.
                        </p>
                        <p class='red' style='padding-top: 30px'>
                            1. Leading Indicator of Consumer Spending:
                        </p>
                        <p>Job creation is a key indicator of consumer spending, which drives a majority of economic activity.</p>
                        <p class='red' style='padding-top: 30px'>
                            2. Influence on Interest Rates:
                        </p>
                        <p>NFP data plays a crucial role in the Federal Reserve's decision-making process regarding interest rates. </p>
                        <el-button class='details lp_btn_register lp_btn' plain style='margin-top: 30px' text @click='jumpPage(1)'>
                            <p class='lp_btn_register lp_btn'>
                                Learn More
                            </p>
                        </el-button>
                    </div>
                </el-col>

                <el-col
                    class='col2Container'
                    :lg='12'
                    :md='12'
                    :sm='22'
                    style='justify-content: center; display: grid;'
                    :xl='12'
                    :xs='22'
                >
                    <el-row :gutter='20' style='padding: 80px 20px;'>
                        <el-col
                            :lg='14'
                            :md='14'
                            :sm='14'
                            style='align-self: center; justify-content: center;'
                            :xl='12'
                            :xs='22'
                        >
                            <h1 class='title'>
                                Ready to Profit from NFP
                            </h1>
                            <el-row :gutter='20' style='padding-top: 20px'>
                                <el-col
                                    :lg='12'
                                    :md='12'
                                    :sm='12'
                                    :xl='12'
                                    :xs='12'
                                >
                                    <div>
                                        <p class='content'>
                                            Release Date
                                        </p>
                                        <el-divider />
                                        <h1 class='subTitle'>
                                            03/05
                                        </h1>
                                    </div>
                                </el-col>
                                <el-col
                                    :lg='12'
                                    :md='12'
                                    :sm='12'
                                    :xl='12'
                                    :xs='12'
                                >
                                    <div>
                                        <p class='content'>
                                            Actual
                                        </p>
                                        <el-divider />
                                        <div>
                                            <img alt='user' class='user' src='../../../images/cpi1/nfp/user.png' />
                                            <img alt='user' class='user' src='../../../images/cpi1/nfp/user.png' />
                                            <img alt='user' class='user' src='../../../images/cpi1/nfp/user.png' />
                                            <img alt='user' class='user' src='../../../images/cpi1/nfp/user.png' />
                                        </div>
                                    </div>
                                </el-col>
                            </el-row>

                            <el-row :gutter='20' style='padding-top: 20px'>
                                <el-col
                                    :lg='12'
                                    :md='12'
                                    :sm='12'
                                    :xl='12'
                                    :xs='12'
                                >
                                    <div>
                                        <p class='content'>
                                            Forecast
                                        </p>
                                        <el-divider />
                                        <h1 class='subTitle'>
                                            180K
                                        </h1>
                                    </div>
                                </el-col>
                                <el-col
                                    :lg='12'
                                    :md='12'
                                    :sm='12'
                                    :xl='12'
                                    :xs='12'
                                >
                                    <div>
                                        <p class='content'>
                                            Previous
                                        </p>
                                        <el-divider />
                                        <h1 class='subTitle'>
                                            253K
                                        </h1>
                                    </div>
                                </el-col>
                            </el-row>
                        </el-col>

                        <el-col
                            :lg='8'
                            :md='8'
                            :sm='10'
                            style='align-self: center;'
                            :xl='8'
                            :xs='0'
                        >
                            <img alt='USD' class='usDollar' src='../../../images/cpi1/nfp/usDollar.png' />
                        </el-col>
                    </el-row>
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
                        3 Possible Readings On The NFP
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
                    <img alt='background' class='bannerBackground' src='../../../images/cpi1/nfp/background.png' />
                    <el-row class='row1' style='justify-content: space-evenly;'>
                        <el-col
                            class='cardContainerCol'
                            :lg='6'
                            :md='7'
                            :sm='22'
                            :xl='6'
                            :xs='22'
                        >
                            <img alt='country' class='country' src='../../../images/cpi1/nfp/country1.png' />
                            <el-card class='box-card'>
                                <h1>Higher Payroll Value</h1>
                                <ul>
                                    <li>More Job Additions</li>
                                    <li>Robust Economic Growth</li>
                                    <li>Increased Spending Power</li>
                                </ul>
                                <el-divider class='line1' />
                                <el-divider class='line2' />
                                <h1>Higher Payroll Value</h1>
                                <p>A release above figures would help to fuel U.S. dollar gains</p>
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
                            <img alt='country' class='country' src='../../../images/cpi1/nfp/country2.png' />
                            <el-card class='box-card'>
                                <h1>Forecasted Payroll Value</h1>
                                <ul>
                                    <li>Mixed Reaction in the Forex Marke</li>
                                    <li>Will Shift to Other Indicators</li>
                                    <el-divider class='line1' />
                                    <el-divider class='line2' />
                                    <h1>Market Trend</h1>
                                    <p>Drop the U.S. dollar for other currencies.</p>
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
                            <img alt='country' class='country' src='../../../images/cpi1/nfp/country3.png' />
                            <el-card class='box-card'>
                                <h1>Lower Payroll Value</h1>
                                <ul>
                                    <li> Lower Employment is A Negative Sign for the World's Largest Economy & for the Dollar</li>
                                    <el-divider class='line1' />
                                    <el-divider class='line2' />
                                    <h1>Market Trend</h1>
                                    <p>Opt for higher yielding currencies against the U.S. dollar</p>
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
  .col1Container2{
    background: rgb(49, 43, 43);
    color: #fff;
    h1{
      font-size: 40px;
    }
    p{
      line-height: 1.7em;
      font-size: 18px;
    }
    .details{
      background-color: #BB2423 !important;
      color: #fff;
      border-radius: unset !important;
    }
    .details:hover{
      background-color: unset !important;
      border: 1px solid #fff;
    }
  }
  .col2Container{
    .title{
      font-size: 40px;
      color: #A80C0C !important;
      font-weight: bold;
    }
    .subTitle{
      color: #233699;
      font-size: 36px;
    }
    .content{
      color: #233699;
      font-size: 22px;
      font-weight: bold;
    }
    .user{
      width: 40px;
      filter: invert(12%) sepia(87%) saturate(2791%) hue-rotate(347deg) brightness(107%) contrast(112%);
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
    color: #D00B22 !important;
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
@media screen and (max-width: 1300px) {
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

  @media screen and (max-width: 1700px) {
    .row1{
        .box-card{
          min-height: 403px !important;
        }
      }
  }

  @media screen and (max-width: 1420px) {
    .row1{
        .box-card{
          min-height: 509px !important;
        }
      }
  }
</style>
