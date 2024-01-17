<template>
    <div class='win'>
        <div class='container1'>
            <el-row style='justify-content: center;'>
                <el-col
                    class='col1Container1'
                    :lg='10'
                    :md='11'
                    :sm='22'
                    :xl='10'
                    :xs='22'
                >
                    <img alt='computer' class='computer' src='../../../images/cpi1/fomc07/computer.png' />
                </el-col>
                <el-col
                    class='col2Container1'
                    :lg='11'
                    :md='10'
                    :sm='22'
                    :xl='10'
                    :xs='22'
                >
                    <p class='title1'>
                        Headline.net: Live FOMC Meeting Coverage
                    </p>
                    <p class='title2'>
                        Amplify Your Trading Potential
                    </p>
                    <p class='content1'>
                        Seize the opportunity to <span>double your earnings</span> in <span>just one week.</span>
                    </p>
                    <p class='point'>
                        > Event Predictions<br />
                        > Live Results<br />
                        > Actionable Analysis
                    </p>
                    <el-divider class='line1' />
                    <p class='content1'>
                        2PM GMT-4, Wednesday, Jul 26, 2023
                    </p>
                    <div class='btnContainer'>
                        <img alt='youtube' class='youtube' src='../../../images/cpi1/fomc07/youtube.png' />
                        <el-button class='details lp_btn_infoDetail lp_btn' plain text @click='jumpPage(2)'>
                            <p class='lp_btn_infoDetail lp_btn'>
                                Experience the Live
                            </p>
                        </el-button>
                    </div>
                </el-col>
            </el-row>
        </div>
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
                    <div style='max-width: 600px; padding: 50px 20px;'>
                        <h1>Why Traders Care?</h1>
                        <p style='padding-top: 30px'>
                            The Federal Open Market Committee (FOMC) can trigger significant price movements in <span class='yellow'>
                                currencies, stocks, and commodities,
                            </span> presenting trading opportunities.
                        </p>
                        <p class='yellow' style='padding-top: 30px'>
                            1. Policy Decision:
                        </p>
                        <p>Interest rate decisions announced by the FOMC have far-reaching implications.</p>
                        <p class='yellow' style='padding-top: 30px'>
                            2. Economic Outlook:
                        </p>
                        <p>FOMC discussions shed light on the overall economic conditions and future projections.</p>
                        <el-button class='details lp_btn_infoDetail lp_btn' plain style='margin-top: 30px' text @click='jumpPage(2)'>
                            <p class='lp_btn_infoDetail lp_btn'>
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
                    <el-row :gutter='20' style='padding: 40px 20px 20px;'>
                        <el-col
                            :lg='14'
                            :md='14'
                            :sm='14'
                            style='align-self: center; justify-content: center;'
                            :xl='12'
                            :xs='22'
                        >
                            <h1 class='title'>
                                Ready to Profit from FOMC
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
                                            26/07
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
                                            <img alt='user' class='user' src='../../../images/cpi1/money.png' />
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
                                            5.50%
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
                                            5.25%
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
                    <el-button class='details lp_btn_register lp_btn' plain text @click='jumpPage(1)'>
                        <p class='lp_btn_register lp_btn'>
                            Trade Now
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
                    window.open('https://www.headline.net/en-US/infoDetail?id=30713')
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
.container1{
  background-image: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("../../../images/cpi1/fomc07/banner2Eh.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  .col1Container1{
    text-align: center;
    .computer{
      width: 100%;
      max-width: 750px;
    }
  }
  .col2Container1{
    align-self: center;
    .title1{
      color: #FF4040;
      font-size: 38px;
    }
    .title2{
      color: #fff;
      font-size: 38px;
    }
    .content1{
      font-size: 20px;
      color: #fff;
      span{
        color: #FFD600;
        font-weight: bold;
      }
    }
    .point{
      font-size: 20px;
      color: #fff;
      padding: 50px 0;
    }
    .line1{
      margin: 5px 0 !important;
      border-top: 2px rgb(255,255,255) solid !important;
      max-width: 80%;
    }
    .btnContainer{
      display: flex;
      align-items: center;
      padding: 30px 0;
      .youtube{
        width: 60px;
        height: 60px;
      }
    .details{
      background-color: #A80C0C !important;
      color: #fff;
      border-radius: unset !important;
      height: 40px;
      font-size: 20px;
      margin-left: 15px;
    }
    .details:hover{
      background-color: unset !important;
      border: 1px solid #fff;
    }
    }
  }
}
.container2{
  .col1Container2{
    background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("../../../images/cpi1/fomc07/banner3Eh.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    color: #fff;
    .yellow{
      color: #FFD600;
      font-weight: bold;
    }
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
      width: 56px;
    }
    .details{
      background-color: #000 !important;
      color: #fff;
      border-radius: unset !important;
      width: 200px;
      height: 40px;
      margin-left: 20px;
      margin-bottom: 30px;
    }
    .details:hover{
      background-color: unset !important;
      color: #000;
      border: 1px solid #000;
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
@media screen and (max-width: 991px) {
  .usDollar{
    max-width: 250px;
  }
  .bannerBackground{
    display: none !important;
  }
  .container1{
    .col1Container1{
      .computer{
        max-width: 500px !important;
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
@media screen and (max-width: 600px) {
  .container1{
    .col2Container1{
      .title1{
        font-size: 30px !important;
      }
      .title2{
        font-size: 30px !important;
      }
    }
  }
}
</style>
