<template>
    <div class='part2Container'>
        <div class='background'>
            <el-divider class='line1' />
            <el-divider class='line2' />
            <el-row class='row1'>
                <el-col
                    :lg='14'
                    :md='16'
                    :sm='17'
                    :xl='12'
                    :xs='18'
                >
                    <h1 class='titleContainer'>
                        See Why Serious Trader choose Headline.net?
                    </h1>
                    <p>We are a leading online trading solutions for traders, investors and advisors</p>
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
            <el-divider class='line1' />
            <el-divider class='line2' />
            <div class='container3'>
                <h1 class='container3Title'>
                    Headlne.net Offers Traders Numerous Deposit Methods
                </h1>
            </div>
            <el-row class='container3Row2' :gutter='10'>
                <el-col
                    class='container3Col'
                    :lg='5'
                    :md='5'
                    :sm='12'
                    :xl='5'
                    :xs='22'
                >
                    <div>
                        <img alt='point' class='point' src='../../../images/cpi1/remarketing/bitcoin.png' />
                        <h1>Cryptocurrency</h1>
                        <p class='container3ColContent'>
                            Funding your trading account with the addition of cryptocurrency deposits.
                        </p>
                        <el-button class='trade lp_btn lp_btn_deposit' plain text @click='handleSkip()'>
                            <p class='lp_btn lp_btn_deposit'>
                                DEPOSIT NOW
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
                        <img alt='point' class='point' src='../../../images/cpi1/remarketing/creditCard.png' />
                        <h1>Credit Card</h1>
                        <p class='container3ColContent'>
                            Deposit funds immediately with all major credit and debit cards to fund your account easily.
                        </p>
                        <el-button class='trade lp_btn lp_btn_deposit' plain text @click='handleSkip()'>
                            <p class='lp_btn lp_btn_deposit'>
                                DEPOSIT NOW
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
                        <img alt='point' class='point' src='../../../images/cpi1/remarketing/coin.png' />
                        <h1>US Dollar</h1>
                        <p class='container3ColContent'>
                            A widely used currency in international trade
                        </p>
                        <el-button class='trade lp_btn lp_btn_deposit' plain text @click='handleSkip()'>
                            <p class='lp_btn lp_btn_deposit'>
                                DEPOSIT NOW
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
                        <img alt='point' class='point' src='../../../images/cpi1/remarketing/wallet.png' />
                        <h1>100+ Wallets</h1>
                        <p class='container3ColContent'>
                            An alternate method for fast and secure payment transfers using e-wallet users.
                        </p>
                        <el-button class='trade lp_btn lp_btn_deposit' plain text @click='handleSkip()'>
                            <p class='lp_btn lp_btn_deposit'>
                                DEPOSIT NOW
                            </p>
                        </el-button>
                    </div>
                </el-col>
            </el-row>
            <el-row class='container3Row3' :gutter='10'>
                <el-col
                    :lg='12'
                    :md='14'
                    :sm='16'
                    :xl='10'
                    :xs='20'
                >
                    <h1>How to Trade on Headline.net</h1>
                    <video
                        id='video-id'
                        class='iframe-player'
                        controls
                        controlsList='nodownload footbar noplaybackrate'
                        disablePictureInPicture
                        loop
                        :poster='videoCover'
                        src='https://www.headline.net/wp-content/uploads/2023/07/remarketingCw.mp4'
                        @play='handlePlayEvent'
                    ></video>
                </el-col>
            </el-row>
            <el-divider class='line1' />
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import { computed, reactive, toRefs, watch, Mounted, onMounted, ref } from 'vue'
import thirdLogin from '@/themeCommon/components/thirdLoginEvent10.vue'
export default {
    components: {
        thirdLogin,
    },
    setup () {
        const store = useStore()
        const route = useRoute()
        const router = useRouter()
        // 获取账户信息
        const customerInfo = computed(() => store.state._user?.customerInfo)
        const jumpPage = (attr) => {
            switch (attr) {
                case 1 :
                    window.open('https://www.headline.net/en-US/register')
                    break
            }
        }
        const state = reactive({
            plansList: [],
            items: {},
            lists: [],
            show: false
        })
        const handleSkip = (flag) => {
            if (!customerInfo.value?.customerNo) {
                router.push('/login')
            } else if (!flag && route.path === '/assets') {
                // Toast('已经在资产页面')
            } else if (!flag) {
                router.push('/assets')
            } else {
                state.show = !state.show
            }
        }

        const dataLayer = window.dataLayer || []

        const video = ref()

        const handlePlayEvent = () => {
            dataLayer.push({
                'event': 'video_play',
                'videoName': 'remarketingCw.mp4',
                'gtm.elementId': 'video-id'
            })
        }
        return {
            jumpPage,
            handleSkip,
            handlePlayEvent,
            video,
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/sass/mixin.scss';
.btnContainer{
  text-align: -webkit-center;
  padding-bottom: 20px;
}
.line1{
  margin: 5px 0 !important;
  border-top: 6px #A80C0C solid !important;
}
.line2{
  margin: 0 0 10px  !important;
  border-top: 1px #A80C0C solid !important;
}
.part2Container{
  position: relative;
  color: #fff;
  text-align: center;
  background-image: url("../../../images/cpi1/remarketing/background2Cw.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
    .background{
      .row1{
        justify-content: center;
        p{
          font-size: 18px;
        }
      }
      .container3{
        justify-content: center;
        display: grid;
        .container3Title{
          max-width: 850px;
          font-size: 56px;
          color: #fff;
          padding-top: 20px;
        }
      }
      .container3Row2{
        justify-content: center;
        padding: 30px 0;
        .container3Col{
          background-color: rgba(255,255,255,0.7);
          border-radius: 20px;
          padding: 50px 20px;
          text-align: center;
          margin: 5px;
          max-width: 450px;
          cursor: pointer;

          .point{
            width:  126px;
            height: auto;
            object-fit: cover;
          }
          h1{
            font-size: 28px;
            color: #000;
            padding-top: 20px;
          }
          .container3ColContent{
            color: #000;
            font-size: 20px;
            padding-top: 20px;
            min-height: 150px;
          }
          .trade{
            background-color: #FFFFFF !important;
            color: rgb(95, 91, 205);
            width: 230px;
            height: 42px;
            margin: 30px 0;
            border-radius: 50px;
            border: 0px solid rgb(95, 91, 205);
            box-shadow: 0 0 6px rgba(95, 91, 205,0.7)
          }
          .trade:hover{
            box-shadow: 0 0 10px rgba(95, 91, 205,0.7)
          }
        }
      }
      .container3Row3{
        justify-content: center;
        h1{
          font-size: 56px;
          padding: 20px;
        }
        .iframe-player{
          width: 100%;
          aspect-ratio: 16 / 9;
          padding-bottom: 20px;
        }
      }
    }
    .titleContainer{
      font-size: 56px;
      padding-top: 20px;
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
  .container3Title{
    font-size: 35px !important;
  }
  .container3Row3{
    h1{
      font-size: 35px !important;
    }
  }
  .container3Row2{
    .container3Col{
      max-width: 350px;
    }
  }
}
</style>
