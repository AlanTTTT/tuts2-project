<template>
    <div class='container3'>
        <el-divider class='line1' />
        <el-divider class='line2' />
        <el-row style='justify-content: center;'>
            <el-col
                class='row1'
                :lg='22'
                :md='22'
                :sm='22'
                :xl='22'
                :xs='22'
            >
                <h1 class='title1'>
                    Unleash the Power of Informed Trading!
                </h1>
                <h1 class='title2'>
                    Let Us Handle the Analysis for You
                </h1>
                <p class='content'>
                    No more overnight analysis required - It's time to reap the rewards while we handle it all for you.​ Streamline Your Trading with One-Click Power!  Trade like a Pro - Effortlessly Execute Orders, Set Stops and Take Profits, and Place Pending Orders with Just a Few Clicks! Simplify Your Trading Journey and Take Control of Your Success!
                </p>
            </el-col>
        </el-row>
        <el-row class='container3Row2' :gutter='10'>
            <el-col
                class='container3Col lp_btn lp_btn_register'
                :lg='5'
                :md='5'
                :sm='12'
                :xl='5'
                :xs='22'
                @click='jumpPage(1)'
            >
                <div>
                    <img alt='point' class='point' src='../../../images/cpi1/nfp07/pointCw.png' />
                    <h1>One-Click Trading</h1>
                    <p class='container3ColContent'>
                        Invest Anytime, Anywhere. Register for Your User Account in Just THREE Seconds - Get Started in No Time!
                    </p>
                </div>
            </el-col>
            <el-col
                class='container3Col lp_btn lp_btn_register'
                :lg='5'
                :md='5'
                :sm='12'
                :xl='5'
                :xs='22'
                @click='jumpPage(1)'
            >
                <div>
                    <img alt='point' class='point' src='../../../images/cpi1/g7-summit/fotor3.png' />
                    <h1>Trade CFD with Crypto</h1>
                    <p class='container3ColContent'>
                        Gets easy to transfer your money without any involvement of banks and other financial institutions for CFDs trading
                    </p>
                </div>
            </el-col>
            <el-col
                class='container3Col lp_btn lp_btn_register'
                :lg='5'
                :md='5'
                :sm='12'
                :xl='5'
                :xs='22'
                @click='jumpPage(1)'
            >
                <div>
                    <img alt='point' class='point' src='../../../images/cpi1/g7-summit/fotor1.png' />
                    <h1>Non-KYC</h1>
                    <p class='container3ColContent'>
                        No personal information such as their name, address, and ID card during DEPOSIT
                    </p>
                </div>
            </el-col>
            <el-col
                class='container3Col lp_btn lp_btn_register'
                :lg='5'
                :md='5'
                :sm='12'
                :xl='5'
                :xs='22'
                @click='jumpPage(1)'
            >
                <div>
                    <img alt='point' class='point' src='../../../images/cpi1/g7-summit/fotor2.png' />
                    <h1>Tax FREE</h1>
                    <p class='container3ColContent'>
                        Maximise your earnings that are not taxed
                    </p>
                </div>
            </el-col>
        </el-row>
        <div class='tradeButtonContainer'>
            <el-button class='learnButton lp_btn lp_btn_infoDetail' plain text @click='jumpPage(2)'>
                <p class='lp_btn lp_btn_infoDetail'>
                    Learn More
                </p>
            </el-button>
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
.line1{
  margin: 5px 0 !important;
  border-top: 6px #A80C0C solid !important;
}
.line2{
  margin: 0 0 20px  !important;
  border-top: 1px #A80C0C solid !important;
}
.tradeButtonContainer{
  text-align: center;
  .learnButton{
      background-color: #A80C0C !important;
      color: #fff;
      border-radius: 60px !important;
      width: 250px;
      height: 42px;
      font-size: 18px;
      margin: 30px 0  50px !important;
    }
    .learnButton:hover{
      background-color: #fff !important;
      color: #000;
    }
}

.container3{
  background-image: url("../../../images/cpi1/non-event2/background1Sc.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 20% 25%;
  .row1{
    text-align: center;
    padding-top: 30px;
    .title1{
      font-size: 70px;
      color: #fff;
    }
    .title2{
      font-size: 70px;
      color: #fff86b;
    }
    .content{
      font-style: italic;
      font-size: 22px;
      color: #fff;
    }
  }
  .title{
    color: #2A3679 !important;
    font-size: 60px;
    padding-top: 50px;
  }

  .container3Row2{
    justify-content: center;
    padding: 30px 0;
    .container3Col{
      background-color: rgba(236,228,232,0.5);
      padding: 50px 20px;
      text-align: center;
      margin: 10px;
      max-width: 450px;
      cursor: pointer;

      .point{
        width:  126px;
        height: auto;
        object-fit: cover;
      }
      h1{
        font-size: 28px;
        color: #fff;
        padding-top: 20px;
      }
      .container3ColContent{
        color: #fff;
        font-size: 20px;
        padding-top: 20px;
        min-height: 87px;
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
    }
  }
}
@media screen and (max-width: 1300px) {
  .row1{
    .title1{
      font-size: 50px !important;
    }
    .title2{
      font-size: 50px !important;
      padding: 15px;
    }
  }
}
@media screen and (max-width: 991px) {
  .container3{
    .row1{
      .title1{
        font-size: 40px !important;
      }
      .title2{
        font-size: 40px !important;
      }
    }
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
  .container3{
    .row1{
      .title1{
        font-size: 30px !important;
      }
      .title2{
        font-size: 30px !important;
      }
      .content{
        font-size: 18px !important;
      }
    }
    .title{
      font-size: 30px;
    }
  }
}
</style>
