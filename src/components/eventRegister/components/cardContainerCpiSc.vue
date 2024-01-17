<template>
    <div class='cpiPart1'>
        <div class='part2'>
            <el-row>
                <el-col
                    :lg='6'
                    :md='6'
                    :sm='24'
                    :xl='6'
                    :xs='24'
                >
                    <img alt='bear' class='animals' src='../../../images/cpi1/bull.png' />
                </el-col>
                <el-col
                    class='challenge'
                    :lg='12'
                    :md='12'
                    :sm='24'
                    :xl='12'
                    :xs='24'
                >
                    <div class='challenge'>
                        <h1 class='title1'>
                            Why Headline.net?
                        </h1>
                        <h1>Exclusive Uniqueness </h1>
                    </div>
                </el-col>
                <el-col
                    class='animalTwo'
                    :lg='6'
                    :md='6'
                    :sm='24'
                    :xl='6'
                    :xs='24'
                >
                    <img alt='bull' class='animals' src='../../../images/cpi1/bear.png' />
                </el-col>
            </el-row>
        </div>
        <el-row class='cards' :gutter='60'>
            <el-col
                class='cardContainer'
                :lg='7'
                :md='7'
                :sm='22'
                :xl='6'
                :xs='22'
            >
                <el-card class='box-card'>
                    <h1>Trade CFDs In Crypto</h1>
                    <p>
                        Increased liquidity and accessibility to enhanced flexibility and risk management
                    </p>
                </el-card>
            </el-col>
            <el-col
                class='cardContainer'
                :lg='7'
                :md='7'
                :sm='22'
                :xl='6'
                :xs='22'
            >
                <el-card class='box-card'>
                    <h1>Non-KYC</h1>
                    <p>Allowing traders to start trading quickly and sizeable the proftable promptly</p>
                </el-card>
            </el-col>
            <el-col
                class='cardContainer'
                :lg='7'
                :md='7'
                :sm='22'
                :xl='6'
                :xs='22'
            >
                <el-card class='box-card'>
                    <h1>Tax-Free</h1>
                    <p>Safeguard investment portfolios and potentially enhance overall returns. Enjoy higher net profits from their investments.</p>
                </el-card>
            </el-col>
        </el-row>
        <p>June: A Turning Point of the Year. Don't Miss the Trade!</p>
        <div class='containerPart2'>
            <div class='part2Button'>
                <el-button class='home lp_btn lp_btn_register' plain @click='jumpPage(1)'>
                    <span class='lp_btn lp_btn_register'>
                        Register with No KYC
                    </span>
                </el-button>
                <el-button class='download lp_btn lp_btn_register' plain @click='jumpPage(1)'>
                    <span class='lp_btn lp_btn_register'>
                        Try Free Demo
                    </span>
                </el-button>
            </div>
        </div>
    </div>
    <div class='cpiPart2'>
        <div class='contentContainer'>
            <h1 class='yellow'>
                Register and seize<br />opportunities
            </h1>
            <p class='text'>
                Predict June's Best Trading Prospects with Headline
            </p>
        </div>
        <el-row class='cardRow' :gutter='60' style='justify-content: center;'>
            <el-col
                class='cardContainer'
                :lg='10'
                :md='10'
                :sm='22'
                :xl='10'
                :xs='22'
            >
                <el-card class='box-card'>
                    <h1>USD/JPY</h1>
                    <p>
                        USD/JPY turned lower at the beginning of the week when news of a provisional agreement to raise the debt ceiling filtered into the market. Since then, interest rate expectations have reversed course.
                    </p>
                </el-card>
                <el-button class='betButton lp_btn lp_btn_register' round @click='jumpPage(1)'>
                    <p class='lp_btn lp_btn_register'>
                        Trade
                    </p>
                </el-button>
            </el-col>
            <el-col
                class='cardContainer'
                :lg='10'
                :md='10'
                :sm='22'
                :xl='10'
                :xs='22'
            >
                <el-card class='box-card'>
                    <h1>USD/Crude Oil</h1>
                    <p>
                        As of 15 May, the Dutch bank saw a barrel of the commodity trading at $82 in the first quarter of 2023, rising to $84, $93 and $99 in the following quarters of the year, respectively, and averaging at $90.
                    </p>
                </el-card>
                <el-button class='betButton lp_btn lp_btn_register' round @click='jumpPage(1)'>
                    <p class='lp_btn lp_btn_register'>
                        Trade
                    </p>
                </el-button>
            </el-col>
        </el-row>
        <el-row class='cardRow' :gutter='60' style='justify-content: center;'>
            <el-col
                class='cardContainer'
                :lg='10'
                :md='10'
                :sm='22'
                :xl='10'
                :xs='22'
            >
                <el-card class='box-card'>
                    <h1>Crypto currency</h1>
                    <p>
                        With prices remaining low, now is a perfect time to buy a cryptocurrency and increase your chances of making profits during the next bull run. The cryptocurrency market is currently valued at more than $1.1 trillion.
                    </p>
                </el-card>
                <el-button class='betButton lp_btn lp_btn_register' round @click='jumpPage(1)'>
                    <p class='lp_btn lp_btn_register'>
                        Trade
                    </p>
                </el-button>
            </el-col>
            <el-col
                class='cardContainer'
                :lg='10'
                :md='10'
                :sm='22'
                :xl='10'
                :xs='22'
            >
                <el-card class='box-card'>
                    <h1>USD/Gold</h1>
                    <p>
                        In early May, it surged to near all-time highs, reaching the $2,067 mark for the first time since March 2022. The world's largest economy faces the risk of running out of cash as early as June 1st. We need a hedge to protect against this potential outcome.
                    </p>
                </el-card>
                <el-button class='betButton lp_btn lp_btn_register' round @click='jumpPage(1)'>
                    <p class='lp_btn lp_btn_register'>
                        Trade
                    </p>
                </el-button>
            </el-col>
        </el-row>
        <el-row style='justify-content: center; padding: 20px 0 40px;'>
            <el-col
                :lg='16'
                :md='18'
                :sm='20'
                :xl='14'
                :xs='22'
            >
                <p class='content'>
                    * Register as early as possible and catch up with the trend. lucrative return will be given to the instrument with the highest performance after the completion of CPI and FOMC.
                </p>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'CPI2',
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

.cpiPart1{
  .background1{
    background: radial-gradient(circle at 50% 50%, #000000 0%, #7D1817 100%);
    display: flex;
    .animals{
      width: 550px;
      transform: rotateY(180deg);
      filter: invert(0%) sepia(0%) saturate(0%) hue-rotate(68deg) brightness(103%) contrast(105%);
    }
    .bear{
      position: relative;
      right: 50px;
    }
    .bull{
      position: relative;
      right: 50px;
    }
    .bullContainer1{
      align-self: end;
    }
    .heading{
      text-align: center;
      padding: 120px 0;
      z-index: 999;
      h1{
        font-weight: bold;
        font-size: 80px;
        color: #fff;
      }
      p{
        font-size: 35px;
        text-align: center;
        color: #fff;
      }
      .yellow{
        color: #FFF86B;
      }
      .bold{
        font-size: 50px;
      }
      .signUpButton{
        justify-content: center;
        display: flex;
        padding: 40px 0 10px;
      }

      .terms{
        color: #FFF86B;
        font-size: 16px;
      }
      .terms:hover{
        color: #BB2423;
      }
      .part2Button{
        justify-content: center;
        display: flex;
        .part2Button{
          padding: 30px 0;
        }
      }
    }
  }
  .part2{
    display: flex;
    justify-content: center;
    padding: 20px 0;
    .challenge{
      align-self: center;
      text-align: center;
      align-self: center;
      h1{
        font-weight: 700;
        font-size: 43px;
        color: #fff;
      }
      .title1{
        color: #BB2423;
      }
    }
    .animals{
      width: 100%;
    }
  }
  .cards{
    justify-content: center;
    .box-card{
      min-height: 270px;
      border-radius: 25px;
      h1{
        color: #BB2423;
        font-weight: bold;
        font-size: 35px;
      }
      p{
        padding-top: 20px;
        font-size: 21px;
        .bold{
          font-weight: bold;
        }
      }
    }
  }
}
.container1{
  text-align: center;
  padding: 20px 0;
}
.sub-heading{
  font-size: 20px;
  padding: 0 0 20px;
}
.row{
  justify-content: center;
  color: #000;
  word-wrap: break-word;
}
.youtubeVideo{
  text-align: -webkit-center;
  padding: 30px 0;
  display: flex;
}
.iframe-player{
  width: 100%;
  aspect-ratio: 16 / 9;
}

.containerPart2{
  text-align: center;
  p{
    font-size: 30px;
    padding-top: 50px;
  }
  .part2Button{
    padding: 30px 0;
  }
    .home{
      background-color: #fff !important;
      color: #BB2423;
      border-radius: 25px;
      width: 255px;
      height: 45px;
      border: unset;
      font-size: 16px;
      font-weight: bold;
    }
    .home:hover{
      background-color: #BB2423 !important;
    }
    .download{
      background-color: #BB2423 !important;
      color: #fff;
      border-radius: 25px;
      width: 255px;
      height: 45px;
      border: unset;
      font-size: 16px;
      font-weight: bold;
    }
    .download:hover{
      background-color: #BB2423 !important;
    }
}

.cpiPart2{
    background-image: url("../../../images/cpi1/cpi-fomc/backgroundSc.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    align-content: center;
    justify-content: center;
    display: grid;
    text-align: center;
    .contentContainer{
      padding: 50px 0;
      .yellow{
        font-size: 56px;
        color: #fff86B;
      }
    }
    .content{
      font-size: 20px;
      color: #fff;
      font-weight: bold;
    }
    .terms{
      font-size: 18px;
      color: #fff;
      text-decoration: underline;
    }
    .text{
      font-size: 25px;
      color: #fff;
    }
  .box-card{
    width: 462px !important;
    min-height: 188px !important;
    text-align: start !important;
    h1{
      color: #BB2423;
      font-size: 35px;
    }
    p{
      font-size: 15px;
    }
  }
  .cardContainer{
    display: inline-grid;
    justify-items: center;
    .betButton{
      width: 142px;
      height: 55px;
      background-color: #3F7652;
      color: #fff;
      position: relative;
      bottom: 25px;
    }
  }
}

@media screen and (max-width: 1715px) {
  .box-card{
    min-height: 323px !important;
  }
}
@media screen and (max-width: 1500px) {
  .heading{
    h1{
      font-size: 60px !important;
    }
    .bold{
      font-size: 30px !important;
    }
    p{
      font-size: 20px !important;
    }
  }
}
@media screen and (max-width: 1400px) {
    .cpiPart1{
    .background1{
      .animals{
        width: 450px;
      }
    }
  }
}
@media screen and (max-width: 1300px) {
    .cpiPart1{
    .background1{
      .animals{
        width: 430px;
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .box-card{
    min-height: 417px !important;
  }
}

@media screen and (max-width: 991px) {
  .heading{
    padding: unset !important;
  }
    .animals{
      width: 100%;
      max-width: 350px;
    }

  .bullContainer1{
    text-align: end;
  }

  .cardContainer{
    padding-top: 20px;
  }
  .box-card{
    height: auto !important;
    min-height: unset !important;
  }
  .part2{
    .animals{
      max-width: 400px;
    }
    .animalTwo{
      text-align: end !important;
    }
  }
}

@media screen and (max-width: 900px) {
  .part2Button{
        display: inline-grid;
        .home{
          margin-left: 10px;
        }
        .download{
          margin-top: 20px;
        }
        .telegram{
          margin-top: 20px;
        }
      }
}

@media screen and (max-width: 650px) {

  .signUpButton{
    .startNow{
      width: 120px !important;
    }
  }
  .heading{
    h1{
      font-size: 35px !important;
    }
    .bold{
      font-size: 24px !important;
    }
    p{
      font-size: 14px !important;
    }
    .terms{
      font-size: 12px !important;
    }
  }

    .animals{
      max-width: 250px;
    }

  .part2{
    .challenge{
      h1{
        font-size: 30px !important;
      }
    }
    .animals{
      max-width: 300px;
    }
  }
}

@media screen and (max-width: 1100px) {
  .cpiPart2{
    .box-card {
      width: 400px !important;
    }
  }
}

@media screen and (max-width: 991px) {
  .cpiPart2{
    .box-card {
      width: unset !important;
      max-width: 500px;
    }
  }
}
</style>
