<template>
    <div class='part2Container'>
        <div class='background'>
            <el-divider class='line1' />
            <el-row class='row1'>
                <el-col
                    :lg='14'
                    :md='16'
                    :sm='17'
                    :xl='12'
                    :xs='18'
                >
                    <p class='titleContainer'>
                        Which markets can I trade with Headline.net CFD service
                    </p>
                    <p class='titleContainer2'>
                        3000+ instruments to trade from leading global markets
                    </p>
                </el-col>
            </el-row>
            <el-row class='row2' style='justify-content: space-evenly'>
                <el-col
                    class='colContainer'
                    :lg='6'
                    :md='6'
                    :sm='6'
                    :xl='5'
                    :xs='22'
                >
                    <h1 class='title'>
                        Commodities<img alt='arrow' class='arrow' src='../../../images/cpi1/nfp08/arrow.png' />
                    </h1>
                    <img alt='fotor' class='fotor' src='../../../images/cpi1/nfp08/icon1.png' />
                    <p class='content'>
                        Trade on a range of hard and soft commodities
                    </p>
                </el-col>
                <el-col
                    class='colContainer'
                    :lg='6'
                    :md='6'
                    :sm='6'
                    :xl='5'
                    :xs='22'
                >
                    <h1 class='title'>
                        Forex<img alt='arrow' class='arrow' src='../../../images/cpi1/nfp08/arrow.png' />
                    </h1>
                    <img alt='fotor' class='fotor' src='../../../images/cpi1/nfp08/icon2.png' />
                    <p class='content'>
                        Get low spreads and fast excution on our award leading winning platforms
                    </p>
                </el-col>
                <el-col
                    class='colContainer col1'
                    :lg='6'
                    :md='6'
                    :sm='6'
                    :xl='5'
                    :xs='22'
                >
                    <h1 class='title'>
                        Cryptocurrencies<img alt='arrow' class='arrow' src='../../../images/cpi1/nfp08/arrow.png' />
                    </h1>
                    <img alt='fotor' class='fotor' src='../../../images/cpi1/nfp08/icon3.png' />
                    <p class='content'>
                        Take your position on the price of eight major cryptocurrencies including bitcoin and ether
                    </p>
                </el-col>
            </el-row>
            <el-row class='row3'>
                <el-col
                    :lg='14'
                    :md='16'
                    :sm='17'
                    :xl='12'
                    :xs='18'
                >
                    <div class='regContainer'>
                        <el-button class='trade lp_btn lp_btn_register' plain text @click='jumpPage(1)'>
                            <p class='lp_btn lp_btn_register'>
                                Start NOW
                            </p>
                        </el-button>
                    </div>
                </el-col>
            </el-row>
            <el-divider class='line1' />
            <div class='container3'>
                <h1 class='container3Title'>
                    Why Headline.net?
                </h1>
            </div>
            <el-row class='container3Row2' :gutter='10'>
                <el-col
                    class='container3Col'
                    :lg='4'
                    :md='4'
                    :sm='12'
                    :xl='4'
                    :xs='22'
                >
                    <div>
                        <img alt='fotor' class='fotor' src='../../../images/cpi1/nfp08/icon4.svg' />
                        <h1>KYC-FREE</h1>
                        <p class='container3ColContent'>
                            No personal information is needed during deposit. Start trading faster
                        </p>
                    </div>
                </el-col>
                <el-col
                    class='container3Col'
                    :lg='4'
                    :md='4'
                    :sm='12'
                    :xl='4'
                    :xs='22'
                >
                    <div>
                        <img alt='fotor' class='fotor' src='../../../images/cpi1/nfp08/icon3.png' />
                        <h1>Crypto-Friendly</h1>
                        <p class='container3ColContent'>
                            Trade CFDs with Crypto and Fiat
                        </p>
                    </div>
                </el-col>
                <el-col
                    class='container3Col'
                    :lg='4'
                    :md='4'
                    :sm='12'
                    :xl='4'
                    :xs='22'
                >
                    <div>
                        <img alt='fotor' class='fotor' src='../../../images/cpi1/nfp08/icon5.png' />
                        <h1>Event-Driven Trading</h1>
                        <p class='container3ColContent'>
                            Focus on financial events to win big
                        </p>
                    </div>
                </el-col>
                <el-col
                    class='container3Col'
                    :lg='4'
                    :md='4'
                    :sm='12'
                    :xl='4'
                    :xs='22'
                >
                    <div>
                        <img alt='fotor' class='fotor' src='../../../images/cpi1/nfp08/icon6.png' />
                        <h1>Keep Your Profits Tax-Free</h1>
                        <p class='container3ColContent'>
                            Avoid European Taxes & Maximize your earnings that are not taxed
                        </p>
                    </div>
                </el-col>
                <el-col
                    class='container3Col'
                    :lg='4'
                    :md='4'
                    :sm='12'
                    :xl='4'
                    :xs='22'
                >
                    <div>
                        <img alt='fotor' class='fotor' src='../../../images/cpi1/nfp08/icon7.png' />
                        <h1>Trade with Telegram Bot</h1>
                        <p class='container3ColContent'>
                            Invest Anytime, anywhere
                        </p>
                    </div>
                </el-col>
            </el-row>
            <el-row class='container3Row3' :gutter='10'>
                <el-col
                    :lg='14'
                    :md='16'
                    :sm='18'
                    :xl='12'
                    :xs='22'
                >
                    <h1>Put Your Knowledge to the Test<br />Ready to take the next step in your journey? </h1>
                    <div class='regContainer'>
                        <el-button class='trade lp_btn lp_btn_deposit' plain text @click='handleSkip()'>
                            <p class='lp_btn lp_btn_deposit'>
                                Trade Now
                            </p>
                        </el-button>
                        <el-button class='trade1 lp_btn lp_btn_infoDetail' plain text @click='jumpPage(2)'>
                            <p class='lp_btn lp_btn_infoDetail'>
                                Learn More
                            </p>
                        </el-button>
                    </div>
                    <p class='demo'>
                        Or Try a <span class='lp_btn lp_btn_register' @click='jumpPage(1)'>
                            FREE DEMO Account
                        </span>
                    </p>
                </el-col>
            </el-row>
            <el-divider class='line1' />
            <div class='container5'>
                <p class='text5'>
                    Start Earning Today
                </p>
                <thirdLogin style='max-width: 500px;' />
            </div>
            <el-divider class='line1' />
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import { computed, reactive, toRefs, watch, Mounted, onMounted, ref } from 'vue'
import thirdLogin from '@/themeCommon/components/thirdLoginEvent.vue'
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
                case 2 :
                    window.open('https://www.headline.net/en-US/infoDetail?id=34602')
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
  border-top: 3px #fff solid !important;
}
.container5{
  padding: 30px 0;
  text-align: -webkit-center;
  .text5{
    color: #fff;
    font-size: 60px;
  }
}
.part2Container{
  position: relative;
  color: #fff;
  text-align: center;
  background-color: #000;
    .background{
      .row1{
        justify-content: center;
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
          border: 1px solid #fff;
          padding: 50px 20px;
          text-align: center;
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
            min-height: 150px;
          }
          .fotor{
          width: 100px;
          padding: 20px 0;
       }
        }
      }
    }
    .titleContainer{
      font-size: 60px;
      padding-top: 20px;
    }
    .titleContainer2{
      font-size: 28px;
      padding-top: 10px;
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
          text-align: center;
          justify-content: center;
          display: flex;
          .arrow{
            width: 50px;
            margin-left: 10px;
          }
       }
        .content{
          font-size: 20px;
          padding-top: 20px;
        }
        .fotor{
          width: 150px;
          padding: 20px 0;
        }
      }
    }
    .row3{
      justify-content: center;
      .regContainer{
        .trade{
            background-color: #BB2423 !important;
            color: #fff;
            border-radius: 50px !important;
            width: 250px;
            height: 45px;
            margin: 30px 0;
        }
        .trade:hover{
            background-color: #3D9BE9 !important;
        }
      }
    }
  }
  .container3Row3{
    justify-content: center;
    padding: 30px;
    h1{
      font-size: 40px;
      font-weight: 400;
    }
    .demo{
      color: #fff;
      font-size: 28px;
      padding-top: 30px;
      span{
        color: rgb(232,31,39);
        cursor: pointer;
      }
    }
    .regContainer{
      .trade{
            background-color: #BB2423 !important;
            color: #fff;
            border-radius: 50px !important;
            width: 250px;
            height: 45px;
            margin-top: 20px;
        }
        .trade:hover{
            background-color: #3D9BE9 !important;
        }
        .trade1{
            background-color: #3D9BE9 !important;
            color: #fff;
            border-radius: 50px !important;
            width: 250px;
            height: 45px;
            margin-top: 20px;
        }
        .trade1:hover{
            background-color: #BB2423 !important;
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
@media screen and (max-width: 900px) {
  .container5{
    .text5{
      font-size: 45px;
    }
  }
}
@media screen and (max-width: 767px) {
  .titleContainer{
    font-size: 25px !important;
  }
  .titleContainer2{
    font-size: 18px !important;
  }
  .col1{
    padding-top: 60px;
  }
  .container3Title{
    font-size: 35px !important;
  }
  .container3Row3{
    h1{
      font-size: 25px !important;
    }
  }
  .container3Row2{
    .container3Col{
      max-width: 350px;
    }
  }
}
@media screen and (max-width: 550px) {
  .container5{
    .text5{
      font-size: 35px;
    }
  }
}
</style>
