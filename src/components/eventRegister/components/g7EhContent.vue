<template>
    <div class='win'>
        <div class='container'>
            <h1 class='title'>
                G7 Power Moves: Trade for Big Wins!
            </h1>
            <p>How to Join The Contest</p>
            <el-row class='row2'>
                <el-col
                    :lg='7'
                    :md='8'
                    :sm='24'
                    :xl='7'
                    :xs='24'
                >
                    <span class='number color1'>
                        01
                    </span>
                    <div class='content'>
                        <p class='text'>
                            Sign up and No KYC
                        </p>
                    </div>
                </el-col>
                <el-col
                    :lg='7'
                    :md='8'
                    :sm='24'
                    :xl='7'
                    :xs='24'
                >
                    <span class='number color2'>
                        02
                    </span>
                    <div class='content'>
                        <p class='text'>
                            Follow on G7' move and Headline's insight
                        </p>
                    </div>
                </el-col>
                <el-col
                    :lg='7'
                    :md='8'
                    :sm='24'
                    :xl='7'
                    :xs='24'
                >
                    <span class='number color3'>
                        03
                    </span>
                    <div class='content'>
                        <p class='text'>
                            Trade and rack up the highest profit
                        </p>
                    </div>
                </el-col>
            </el-row>
        </div>

        <div class='container2'>
            <el-row style='align-content: center;'>
                <el-col
                    class='col1Container2'
                    :lg='12'
                    :md='12'
                    :sm='24'
                    style='justify-content: center;justify-content: center; display: grid; align-content: center;'
                    :xl='12'
                    :xs='24'
                >
                    <div style='max-width: 600px'>
                        <h1>Why Traders Care?</h1>
                        <p>Looking to make informed trading decisions?</p>
                        <p>
                            Don't overlook the G7, the global powerhouse that can shape <span class='red'>
                                forex, commodity, metal markets
                            </span> with their policies and initiatives.
                        </p>
                        <p>Although not an institution, the G7 is a highly influential policy-making body that operates at the highest level.</p>
                        <el-button class='details lp_btn lp_btn_register' plain text @click='jumpPage(1)'>
                            <p class='lp_btn lp_btn_register'>
                                Learn More
                            </p>
                        </el-button>
                    </div>
                </el-col>

                <el-col
                    class='col2Container'
                    :lg='12'
                    :md='12'
                    :sm='24'
                    :xl='12'
                    :xs='24'
                >
                    <el-row>
                        <el-col
                            :lg='12'
                            :md='12'
                            :sm='12'
                            style='align-self: center;'
                            :xl='12'
                            :xs='12'
                        >
                            <h1 class='title'>
                                Crucial Topics
                            </h1>
                            <el-row>
                                <el-col
                                    :lg='12'
                                    :md='12'
                                    :sm='12'
                                    :xl='12'
                                    :xs='12'
                                >
                                    <div>
                                        <img alt='change' class='icon' src='../../../images/cpi1/g7-summit/increase.png' />
                                        <h1>Global Economy</h1>
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
                                        <img alt='change' class='icon' src='../../../images/cpi1/g7-summit/oil.png' />
                                        <h1>Energy</h1>
                                    </div>
                                </el-col>
                            </el-row>

                            <el-row>
                                <el-col
                                    :lg='12'
                                    :md='12'
                                    :sm='12'
                                    :xl='12'
                                    :xs='12'
                                >
                                    <div>
                                        <img alt='change' class='icon' src='../../../images/cpi1/g7-summit/bread.png' />
                                        <h1>Food Security</h1>
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
                                        <img alt='change' class='icon' src='../../../images/cpi1/g7-summit/earthGlobe.png' />
                                        <h1>Geopolitical Issues</h1>
                                    </div>
                                </el-col>
                            </el-row>
                        </el-col>

                        <el-col
                            :lg='12'
                            :md='12'
                            :sm='12'
                            :xl='12'
                            :xs='12'
                        >
                            <img alt='change' class='g7Image' src='../../../images/cpi1/g7-summit/g7Img.png' />
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
                        2023 G7 Summits Timeline
                    </h1>
                    <img alt='timeLine' class='timeLine' src='../../../images/cpi1/g7-summit/timeline.jpg' />
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
                        Headline.net：Smart Trading Choice
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
                    <el-card class='box-card'>
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
                    <el-card class='box-card'>
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
                    <el-card class='box-card'>
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
                    <el-card class='box-card'>
                        <h1>
                            Unlimited Prize Pool
                        </h1>
                        <p>Join trading contest to win bonus</p>
                    </el-card>
                </el-col>
            </el-row>
            <el-row class='buttonContainer' style='justify-content: center;'>
                <el-col
                    :lg='6'
                    :md='8'
                    :sm='8'
                    :xl='4'
                    :xs='20'
                >
                    <el-button class='claim lp_btn lp_btn_register' plain text @click='jumpPage(1)'>
                        <p class='lp_btn lp_btn_register'>
                            Claim $50 Bonus
                        </p>
                    </el-button>
                </el-col>
                <el-col
                    :lg='6'
                    :md='8'
                    :sm='8'
                    :xl='4'
                    :xs='20'
                >
                    <el-button class='download lp_btn lp_btn_appDownload' plain text @click='jumpPage(2)'>
                        <p class='lp_btn lp_btn_appDownload'>
                            Download APP
                        </p>
                    </el-button>
                </el-col>
                <el-col
                    :lg='6'
                    :md='8'
                    :sm='8'
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
  .g7Image{
    width: 100%;
  }
}

.container3{
  text-align: center;
  .title{
    color: #3e0c0c;
    font-size: 40px;
  }
  .timeLine{
    width: 100%;
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

@media screen and (max-width: 1200px) {
  .row2{
      .content{
        padding-left: 150px !important;
      }
    }
}

@media screen and (max-width: 991px) {
  .content{
    justify-content: center;
    display: grid;
    padding-left: unset !important;
  }
  .text{
    font-size: 22px !important;
  }
}

@media screen and (max-width: 767px) {

}
</style>
