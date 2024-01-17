<template>
    <div class='win'>
        <el-row style='align-content: center; justify-content: center; background: #000;'>
            <el-col
                class='row1column'
                :lg='5'
                :md='12'
                :sm='12'
                style='text-align: center'
                :xl='5'
                :xs='24'
            >
                <img alt='logo' class='logo' src='../../../images/cpi1/non-event/reject.png' />
                <p class='title'>
                    KYC-FREE
                </p>
                <p class='content'>
                    Skip KYC and start trading faster
                </p>
            </el-col>
            <el-col
                class='row1column'
                :lg='5'
                :md='12'
                :sm='12'
                style='text-align: center'
                :xl='5'
                :xs='24'
            >
                <img alt='logo' class='logo' src='../../../images/cpi1/non-event/moneyIcon.png' />
                <p class='title'>
                    Crypto-Friendly
                </p>
                <p class='content'>
                    Trade CFDs with Crypto and Fiat
                </p>
            </el-col>
            <el-col
                class='row1column'
                :lg='5'
                :md='12'
                :sm='12'
                style='text-align: center'
                :xl='5'
                :xs='24'
            >
                <img alt='logo' class='logo' src='../../../images/cpi1/non-event/checklist.png' />
                <p class='title'>
                    Event-Driven Trading
                </p>
                <p class='content'>
                    Focus on financial events to win big
                </p>
            </el-col>
            <el-col
                class='row1column'
                :lg='5'
                :md='12'
                :sm='12'
                style='text-align: center'
                :xl='5'
                :xs='24'
            >
                <img alt='logo' class='logo' src='../../../images/cpi1/non-event/rocket.png' />
                <p class='title'>
                    Keep Your Profits Tax-Free
                </p>
                <p class='content'>
                    Avoid European Taxes
                </p>
            </el-col>
        </el-row>

        <div class='container'>
            <div style='justify-content: center; display: grid;'>
                <p class='title'>
                    Do you encounter these challenges when trading CFDs with fiat currencies?
                </p>
            </div>

            <el-row :gutter='60' style='align-content: center; justify-content: center; padding: 50px 0;'>
                <el-col
                    :lg='10'
                    :md='11'
                    :sm='22'
                    :xl='9'
                    :xs='22'
                >
                    <div class='textContainer'>
                        <img alt='no' class='noIcon' src='../../../images/cpi1/non-event/noIcon.svg' />
                        <p class='text'>
                            1. Lagging speeds, hefty fees, and concerns about fund security?
                        </p>
                    </div>
                    <div class='textContainer textContainer1'>
                        <img alt='no' class='noIcon' src='../../../images/cpi1/non-event/noIcon.svg' />
                        <p class='text'>
                            2. Limited trading options and restricted volumes holding you back?
                        </p>
                    </div>
                    <div class='textContainer textContainer1'>
                        <img alt='no' class='noIcon' src='../../../images/cpi1/non-event/noIcon.svg' />
                        <p class='text'>
                            3. Economic turmoil and excessive fiscal interventions causing fluctuations in fiat exchange rates, impacting your costs and profits?
                        </p>
                    </div>
                    <div class='buttonContainer'>
                        <el-button class='registerButton lp_btn lp_btn_register' plain text @click='jumpPage(1)'>
                            <p class='lp_btn lp_btn_register'>
                                Conquer the obstacles
                            </p>
                        </el-button>
                    </div>
                </el-col>
                <el-col
                    :lg='10'
                    :md='11'
                    :sm='22'
                    :xl='9'
                    :xs='22'
                >
                    <div class='imgContainer'>
                        <iframe
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                            allowfullscreen
                            class='videoPlayer'
                            frameborder='0'
                            src='https://www.youtube.com/embed/6yv0C1TMFRQ'
                            title='YouTube video player'
                        ></iframe>
                    </div>
                </el-col>
            </el-row>
        </div>

        <div class='container2'>
            <p class='title'>
                Investing in Virtual Assets<br />with CFDs
            </p>
            <el-row :gutter='60' style='align-content: center; justify-content: center;'>
                <el-col
                    class='container2Col'
                    :lg='9'
                    :md='10'
                    :sm='22'
                    :xl='8'
                    :xs='22'
                >
                    <div class='background2'>
                        <img alt='cfd' class='cfd' src='../../../images/cpi1/non-event/cfdImg2EH.png' />
                    </div>
                </el-col>
                <el-col
                    class='container2Col container2Col2'
                    :lg='9'
                    :md='10'
                    :sm='22'
                    :xl='8'
                    :xs='22'
                >
                    <p class='titleCol'>
                        Make Your Investments More Efficient, Flexible, and Rewarding
                    </p>
                    <div class='container1'>
                        <el-row>
                            <el-col
                                class='container1Col'
                                :lg='12'
                                :md='12'
                                :sm='12'
                                :xl='12'
                                :xs='12'
                            >
                                <img alt='star' class='star' src='../../../images/cpi1/non-event/star.jpg' />
                                <p class='point'>
                                    Easy and Fast
                                </p>
                            </el-col>
                            <el-col
                                class='container1Col'
                                :lg='12'
                                :md='12'
                                :sm='12'
                                :xl='12'
                                :xs='12'
                            >
                                <img alt='star' class='star' src='../../../images/cpi1/non-event/star.jpg' />
                                <p class='point'>
                                    Wider Market Selection
                                </p>
                            </el-col>
                        </el-row>
                        <el-row class='container1Row2'>
                            <el-col
                                class='container1Col'
                                :lg='12'
                                :md='12'
                                :sm='12'
                                :xl='12'
                                :xs='12'
                            >
                                <img alt='star' class='star' src='../../../images/cpi1/non-event/star.jpg' />
                                <p class='point'>
                                    Leverage Advantage
                                </p>
                            </el-col>
                            <el-col
                                class='container1Col'
                                :lg='12'
                                :md='12'
                                :sm='12'
                                :xl='12'
                                :xs='12'
                            >
                                <img alt='star' class='star' src='../../../images/cpi1/non-event/star.jpg' />
                                <p class='point'>
                                    Hedge against Fiat Intervention
                                </p>
                            </el-col>
                        </el-row>
                    </div>
                    <div class='buttonContainer'>
                        <el-button class='registerButton lp_btn lp_btn_register' plain text @click='jumpPage(1)'>
                            <p class='lp_btn lp_btn_register'>
                                Begin a New Chapter
                            </p>
                        </el-button>
                    </div>
                </el-col>
            </el-row>
        </div>

        <div class='container3'>
            <el-row style='justify-content: center;' />
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
                        The benefits of trading on Headline.net
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
                            Telegram-based
                        </h1>
                        <p>Trade directly on Telegram Bot</p>
                    </el-card>
                </el-col>
            </el-row>

            <el-row class='buttonContainer' style='justify-content: center; text-align: center'>
                <el-col
                    :lg='6'
                    :md='8'
                    :sm='8'
                    :xl='4'
                    :xs='20'
                >
                    <el-button class='claim lp_btn lp_btn_register' plain text @click='jumpPage(1)'>
                        <p class='lp_btn lp_btn_register'>
                            Updated insight
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
        <cardContainer2 />
    </div>
</template>

<script>
import cardContainer2 from './nonEventEhCard2.vue'
export default {
    name: 'Win',
    components: {
        cardContainer2,
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
.row1column{
  border: 1px solid #fff;
  padding: 60px 20px;
  background-color: #000;
  position: relative;
  bottom: 30px;
  .logo{
    width: 60px;
    height: 60px;
  }
  .title{
    color: #fff;
    font-size: 28px;
  }
  .content{
    font-size: 17px;
    color: #fff;
  }
}
          .container{
                  .content{
                    font-size: 35px;
                    text-align: center;
                    padding-top: 50px;
                    }
                  .title{
                    font-size: 55px;
                    text-align: center;
                    max-width: 750px;
                    padding-top: 50px;
                    }
                  .textContainer{
                    display: flex;
                    align-items: center;
                    .noIcon{
                      width: 25px;
                      height: 25px;
                      }
                    .text{
                      font-size: 21px;
                      padding-left: 10px;
                      }
                    }
                    .textContainer1{
                      padding-top: 50px;
                      align-items: center;
                    }
                  }

.registerButton{
  background-color: #000 !important;
  border: unset !important;
  border-radius: 8px !important;
  width: 249px;
  height: 50px;
  margin: 50px 0;
  font-size: 18px !important;
  color: #fff !important;
}
.registerButton:hover{
  background-color: rgb(206,242,97) !important;
  color: #000 !important;
  border: 1px #000 solid !important;
}

.container2{
          .title{
            font-size: 55px;
            text-align: center;
            padding-top: 100px;
          }
          .container2Col{
            align-content: center;
            display: grid;
            .background2{
              background-color: rgb(199,199,199);
              padding: 150px;
              position: relative;
              right: 350px;
              width: 650px;
              border-radius: 10px;
              .cfd{
                width: 545px;
                height: 362px;
                position: relative;
                left: 80px;
                border-radius: 10px;
              }
            }
            .titleCol{
              font-size: 30px;
            }
            .container1{
              padding-top: 40px;
              .container1Row2{
                padding-top: 30px;
              }
              .container1Col{
                display: flex;
                align-items: center;
                .point{
                  font-size: 21px;
                }
              }
            }
          }
        }

.imgContainer{
  .videoPlayer{
    width: 100%;
    aspect-ratio: 16 / 9;
  }
}
.star{
  width: 40px;
  height: 40px;
}

.win{
  background: #fff;
}

.container2{
    background: rgb(236,228,232);
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
      position: relative;
      bottom: 20px;
      left: 20px;
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
  .buttonContainer{
    text-align: center;
  }
  .container2Col2{
    padding-top: 30px;
  }
  .container{
    .content{
      font-size: 30px;
    }
    .title{
      font-size: 40px;
    }
    .textContainer{
      display: flex;
    }
    .imgContainer{
      padding-top: 40px;
    }
  }

  .container2{
    .title{
      font-size: 40px;
    }
    .titleCol{
      font-size: 25px;
    }
  }

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
  .container4{
    .title{
      font-size: 25px;
    }
  }
  .buttonContainer{
    .download{
      margin-top: 15px;
    }
    .telegram{
      margin-top: 15px;
    }
  }
}

@media screen and (max-width: 600px) {
  .container{
    .content{
      font-size: 25px;
    }
    .title{
      font-size: 30px;
    }
    .textContainer{
      display: flex;
    }
    .imgContainer{
      padding-top: 40px;
    }
  }

  .container2{
    .title{
      font-size: 30px;
    }
    .titleCol{
      font-size: 25px;
    }
  }
}
</style>
