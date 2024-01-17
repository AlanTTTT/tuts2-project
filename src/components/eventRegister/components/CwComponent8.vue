<template>
    <div class='part2Container'>
        <div class='background'>
            <el-row class='row1'>
                <el-col
                    :lg='14'
                    :md='16'
                    :sm='17'
                    :xl='12'
                    :xs='18'
                >
                    <h1 class='titleContainer'>
                        Why trade <span style='text-decoration: underline;'>
                            FOMC
                        </span> with Headline.net?
                    </h1>
                    <p>Founded in 2016, Headline is a financial service platform based on the financial event. We provide services to investors by analyzing hot topics in finance and helping you to improve your trading efficiency, build up “the top trading opportunities and trade in accordance with financial essence” investing value conception. Reduce investor's difficulty of obtaining information at the bottom level of capital movement.</p>
                </el-col>
            </el-row>
            <el-row class='row2' style='justify-content: space-evenly'>
                <el-col
                    class='colContainer'
                    :lg='5'
                    :md='10'
                    :sm='10'
                    :xl='5'
                    :xs='22'
                >
                    <img alt='fotor' class='fotor' src='../../../images/cpi1/nfp07/pointCw.png' />
                    <h1 class='title'>
                        One-Click Trading
                    </h1>
                    <p class='content'>
                        Invest Anytime, anywhere. Registering for your user account only takes THREE seconds
                    </p>
                </el-col>
                <el-col
                    class='colContainer'
                    :lg='5'
                    :md='10'
                    :sm='10'
                    :xl='5'
                    :xs='22'
                >
                    <img alt='fotor' class='fotor' src='../../../images/cpi1/g7-summit/fotor3.png' />
                    <h1 class='title'>
                        Trade CFD with Crypto
                    </h1>
                    <p class='content'>
                        Gets easy to transfer your money without any involvement of banks and other financial institutions for CFDs trading
                    </p>
                </el-col>

                <el-col
                    class='colContainer col1'
                    :lg='5'
                    :md='10'
                    :sm='10'
                    :xl='5'
                    :xs='22'
                >
                    <img alt='fotor' class='fotor' src='../../../images/cpi1/g7-summit/fotor1.png' />
                    <h1 class='title'>
                        Non-KYC
                    </h1>
                    <p class='content'>
                        No personal information such as their name, address, and ID card during DEPOSIT
                    </p>
                </el-col>
                <el-col
                    class='colContainer col1'
                    :lg='5'
                    :md='10'
                    :sm='10'
                    :xl='5'
                    :xs='22'
                >
                    <img alt='fotor' class='fotor' src='../../../images/cpi1/g7-summit/fotor2.png' />
                    <h1 class='title'>
                        Tax FREE in European Countries
                    </h1>
                    <p class='content'>
                        Maximise your earnings that are not taxed
                    </p>
                </el-col>
            </el-row>
            <div class='btnContainer'>
                <div style='max-width: 600px;'>
                    <thirdLogin />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import thirdLogin from '@/themeCommon/components/thirdLoginEvent4.vue'
export default {
    components: {
        thirdLogin,
    },
    setup () {
        const jumpPage = (attr) => {
            switch (attr) {
                case 1 :
                    window.open('https://www.headline.net/en-US/register')
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
.btnContainer{
  text-align: -webkit-center;
}
.part2Container{
  position: relative;
  color: #fff;
  text-align: center;
    .background{
      background-color: rgb(0,0,0);
      padding: 50px 0;
      .row1{
        justify-content: center;
        p{
          font-size: 18px;
        }
      }
    }
    .titleContainer{
      font-size: 56px;
    }
    .content{
      font-size: 18px;
      line-height: 1.8em;
    }
    .row2{
      padding: 50px 0 30px;
      .colContainer{
        .title{
          font-size: 30px;
          text-decoration: underline;
       }
        .content{
          font-size: 20px;
          padding-top: 20px;
        }
        .fotor{
          width: 100px;
       }
      }
    }
  }

@media screen and (max-width: 1100px) {
.background{
  .row{
    .intro{
      padding: 40px 0;
        h1{
          font-weight: bold;
          font-size: 60px;
        }
        p{
          font-size: 30px;
        }
      }
    }
}
  .container2{
    .row{
      .heading{
        font-size: 30px;
        padding-top: 30px;
      }
      .text{
        font-size: 18px;
        padding: 40px 0;
      }
    }
        .country{
            width: 100px;
          }
        }

    .background2{
      .socialMedia{
        width: 45px;
      }
      .title{
        font-size: 35px;
      }
      .box-card{
        font-size: 30px;
        width: 300px;
        height: 140px;
      }
    }
}
@media screen and (max-width: 767px) {

  .titleContainer{
    font-size: 35px !important;
  }
  .col1{
    padding-top: 60px;
  }
}
</style>
