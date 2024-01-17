<template>
    <div class='cpiPart1'>
        <div class='part1'>
            <h1 class='part1Title'>
                Good Time to Trade
            </h1>
            <el-row class='cards' :gutter='60'>
                <el-col
                    class='cardContainer'
                    :lg='9'
                    :md='12'
                    :sm='22'
                    :xl='7'
                    :xs='22'
                >
                    <img alt='bull and bear' class='animals' src='../../../images/cpi1/eucpi/bullBear.jpg' />
                </el-col>
                <el-col
                    class='cardContainer'
                    :lg='9'
                    :md='10'
                    :sm='22'
                    :xl='6'
                    :xs='22'
                >
                    <p class='content'>
                        <span class='bold'>
                            The Euro CPI release presents a good trading opportunity for several reasons.
                        </span> Firstly, it is a key economic indicator that results in <span class='underline'>
                            increased market volatility
                        </span>, creating more <span class='underline'>
                            significant price movements and trading opportunities.
                        </span> Additionally, traders can use the CPI data for fundamental analysis, helping them assess the health of the Eurozone economy and <span class='underline'>
                            make informed trading decisions
                        </span> about potential future interest rate changes.
                    </p>
                    <p class='bold content content2'>
                        Headline.net can track the latest news and help you seize the winning chances.
                    </p>
                </el-col>
            </el-row>
            <div class='buttonContainer'>
                <el-button class='infoDetail lp_btn lp_btn_infoDetail' plain @click='jumpPage(3)'>
                    <span class='lp_btn lp_btn_infoDetail'>
                        Learn More
                    </span>
                </el-button>
            </div>
        </div>

        <div class='headlineInfo'>
            <h1 class='title'>
                How to Grab Trading Opportunity
            </h1>
            <div class='textContainer'>
                <p class='content'>
                    Trade smarter and faster with Headline.net! Get real-time market news and be the first to make winning trades. <span class='bold'>
                        Join now and stay one step ahead!
                    </span>
                </p>
            </div>
            <img alt='Headline' class='trading' src='../../../images/cpi1/eucpi/headline.jpg' />
            <el-row class='cards' :gutter='60'>
                <el-col
                    class='cardContainer'
                    :lg='4'
                    :md='5'
                    :sm='10'
                    :xl='3'
                    :xs='10'
                >
                    <p class='cardContent'>
                        Release<br />Eurozone CPI
                    </p>
                </el-col>
                <el-col
                    class='cardContainer'
                    :lg='4'
                    :md='5'
                    :sm='10'
                    :xl='3'
                    :xs='10'
                >
                    <p class='cardContent'>
                        Merge<br />Market News
                    </p>
                </el-col>
                <el-col
                    class='cardContainer cardContainer1'
                    :lg='4'
                    :md='5'
                    :sm='10'
                    :xl='3'
                    :xs='10'
                >
                    <p class='cardContent'>
                        Select<br />Related Contracts
                    </p>
                </el-col>
                <el-col
                    class='cardContainer cardContainer1'
                    :lg='4'
                    :md='5'
                    :sm='10'
                    :xl='3'
                    :xs='10'
                >
                    <p class='cardContent'>
                        One Click<br />Trade to Win
                    </p>
                </el-col>
            </el-row>
            <div class='buttonContainer'>
                <el-button class='register lp_btn lp_btn_register' plain @click='jumpPage(1)'>
                    <span class='lp_btn lp_btn_register'>
                        Register
                    </span>
                </el-button>
            </div>
        </div>

        <div class='part2'>
            <div class='challenge'>
                <h1 class='red'>
                    Boost Your Profits with Headline
                </h1>
                <h1 class='title2'>
                    3 Advantages
                </h1>
            </div>
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
                    <h1 class='red'>
                        Trade CFDs In Crypto
                    </h1>
                    <p>
                        Allows traders to harness the potential of this dynamic asset class, and diversify your investment portfolio.
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
                    <h1 class='red'>
                        Non-KYC
                    </h1>
                    <p>Potentially expedite the onboarding process and seize investment opportunities promptly.</p>
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
                    <h1 class='red'>
                        Tax-Free
                    </h1>
                    <p>Safeguard investment portfolios and potentially enhance overall returns. Enjoy higher net profits from their investments.</p>
                </el-card>
            </el-col>
        </el-row>
        <div class='containerPart2'>
            <div class='part2Button'>
                <el-button class='register lp_btn lp_btn_register' plain @click='jumpPage(1)'>
                    <span class='lp_btn lp_btn_register'>
                        Register
                    </span>
                </el-button>
            </div>
        </div>
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
                    window.open('https://www.headline.net/en-US/infoDetail2?id=25762')
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
  color: #CB0D11;
}
.underline{
  text-decoration: underline;
}

.cpiPart1{
  .part1{
    .part1Title{
      text-align: center;
      font-size: 55px;
      color: #CB0D11;
      padding: 50px 0;
    }
    .cardContainer{
      align-self: center;
      .animals{
        width: 100%;
      }
      .bold{
        font-weight: bold;
      }
      .underline{
        text-decoration: underline;
      }
      .content{
        font-size: 19px;
      }
      .content2{
        padding-top: 30px;
      }
    }
    .buttonContainer{
      text-align: center;
      padding-top: 30px;
      .infoDetail{
      background-color: #fff !important;
      color: #000;
      border-radius: 25px;
      width: 255px;
      height: 45px;
      font-weight: bold;
      font-size: 18px;
      border: 1px solid #000;
      }
      .infoDetail:hover{
      background-color: #000 !important;
      color: #fff;
      border: unset !important;
      }

    }
  }

  .headlineInfo{
    text-align: center;
    .title{
    font-size: 55px;
    color: #cd0d11;
    padding-top: 30px;
    }
    .textContainer{
      justify-content: center;
      display: grid;
      .content{
        font-size: 21px;
        padding: 20px 20px;
        max-width: 750px;
      }
    }
    .bold{
      font-weight: bold;
    }
    .trading{
      border-radius: 10px;
      width: 100%;
      max-width: 650px;
      padding: 30px 20px;
    }
    .cardContainer{
      .cardContent{
        font-size: 20px;
        font-weight: bold;
      }
    }
    .buttonContainer{
      padding-top: 50px;
      .register{
      background-color: #000 !important;
      color: #fff;
      border-radius: 10px;
      width: 255px;
      height: 45px;
      font-weight: bold;
      font-size: 18px;
      border: unset;
      }
      .register:hover{
      background-color: #CEF261 !important;
      color: #000;
      border: 1px solid #000 !important;
      }
    }
  }

  .part2{
    display: flex;
    justify-content: center;
    padding: 50px 20px 30px;
    .challenge{
      align-self: center;
      text-align: center;
      align-self: center;
      h1{
        font-weight: 700;
        font-size: 43px;
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
.containerPart2{
  text-align: center;
  .part2Button{
    padding: 50px 20px 20px;
  }
    .register{
      background-color: #000 !important;
      color: #fff;
      border-radius: 10px;
      width: 255px;
      height: 45px;
      font-weight: bold;
      font-size: 18px;
      border: unset;
    }
    .register:hover{
      background-color: #CEF261 !important;
      color: #000;
      border: 1px solid #000 !important;
    }
}

.imgCardContainer{
  background-color: #000;
  padding-top: 80px;
  h1{
    font-size: 56px;
  }
  p{
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    text-align: start;
    padding-top: 20px;
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

@media screen and (max-width: 1200px) {
  .box-card{
    min-height: 417px !important;
  }
}

@media screen and (max-width: 991px) {
  .cardContainer1{
    padding-top: 30px;
  }
  .cpiPart1{
    .part1{
      .part1Title{
        font-size: 45px;
        padding: 30px 20px;
      }
  }
}
.headlineInfo{
    .title{
    font-size: 45px !important;
    padding-top: 60px !important;
    }
  }
  .heading{
    padding: unset !important;
  }

  .bullContainer1{
    text-align: end;
  }

  .cardContainer{
    text-align: center;
    .content{
      text-align: start !important;
    }
    .animals{
      max-width: 500px;
    }
  }
  .cards{
    .box-card{
      margin-top: 20px;
      p{
        text-align: start;
      }
    }
  }
  .box-card{
    height: auto !important;
    min-height: unset !important;
    h1{
      font-size: 30px !important;
    }
  }
  .part2{
    .challenge{
      h1{
        font-size: 35px !important;
      }
      .title2{
        padding-top: 20px;
      }
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

@media screen and (max-width: 767px) {
  .imgCardContainer{
    h1 {
      font-size: 38px;
    }
  }
  .box-card{
    h1{
      font-size: 26px !important;
    }
    p{
      font-size: 18px !important;
    }
  }
}

@media screen and (max-width: 650px) {
  .cpiPart1{
    .part1{
      .part1Title{
        font-size: 35px;
      }
  }
}

.headlineInfo{
    .title{
    font-size: 35px !important;
    }
  }
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
  .box-card{
    h1{
      font-size: 25px !important;
    }
  }
}
</style>
