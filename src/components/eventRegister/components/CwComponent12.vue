<template>
    <div class='part2Container'>
        <div class='background'>
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
                            No personal information  is needed during deposit. Start trading faster
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
                    <h1>Put Your Knowledge to the Test<br />Ready to take the next step in your journey?</h1>
                    <div class='regContainer'>
                        <el-button class='trade lp_btn lp_btn_deposit' plain text @click='handleSkip()'>
                            <p class='lp_btn lp_btn_deposit'>
                                Trade Now
                            </p>
                        </el-button>
                        <el-button class='trade1 lp_btn lp_btn_register' plain text @click='jumpPage(1)'>
                            <p class='lp_btn lp_btn_register'>
                                Telegram Bot
                            </p>
                        </el-button>
                    </div>
                    <p class='textContainer'>
                        Or Try a <a class='lp_btn lp_btn_register' href='https://www.headline.net/en-US/register'>
                            <span class='lp_btn lp_btn_register'>
                                FREE DEMO Account
                            </span>
                        </a>
                    </p>
                </el-col>
            </el-row>
            <div class='row4'>
                <h1 class='title'>
                    How Do I Deposit Money?
                </h1>
                <el-row class='container3Row4' :gutter='10'>
                    <el-col
                        :lg='7'
                        :md='7'
                        :sm='22'
                        style='align-self: center; max-width: 400px'
                        :xl='6'
                        :xs='22'
                    >
                        <p class='point'>
                            <img alt='tick' class='tick' src='../../../images/cpi1/remarketing/tick.png' />1. Cryptocurrency
                        </p>
                        <p class='point'>
                            <img alt='tick' class='tick' src='../../../images/cpi1/remarketing/tick.png' />2. Credit Card
                        </p>
                        <p class='point'>
                            <img alt='tick' class='tick' src='../../../images/cpi1/remarketing/tick.png' />3. US Dollar
                        </p>
                        <p class='point'>
                            <img alt='tick' class='tick' src='../../../images/cpi1/remarketing/tick.png' />4. 100+ Wallet
                        </p>
                        <div class='regContainer'>
                            <el-button class='trade lp_btn lp_btn_deposit' plain text @click='handleSkip()'>
                                <p class='lp_btn lp_btn_deposit'>
                                    DEPOSIT NOW
                                </p>
                            </el-button>
                        </div>
                    </el-col>
                    <el-col
                        :lg='12'
                        :md='12'
                        :sm='22'
                        :xl='12'
                        :xs='22'
                    >
                        <p class='subTitle'>
                            Here's a quick demonstration of making a deposit:
                        </p>
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
            </div>
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
  border-top: 3px #fff solid !important;
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
            min-height: 110px;
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
    .textContainer{
      color: #fff;
      font-size: 28px;
      padding: 50px 20px;
      span{
        color: #E81F27;
      }
    }
  }
  .row4{
    .title{
      font-size: 60px;
      padding: 50px 20px;
    }
  }
  .container3Row4{
        justify-content: center;
        h1{
          font-size: 56px;
          padding: 20px;
        }
        .regContainer{
          text-align: center;
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
        }
        .subTitle{
          text-align: flex-start;
          font-size: 28px;
          padding-left: 15px;
        }
        .iframe-player{
          width: 100%;
          aspect-ratio: 16 / 9;
          padding-bottom: 20px;
        }
        .point{
          color: #fff;
          font-size: 30px;
          justify-content: flex-start;
          display: flex;
          align-items: center;
          .tick{
            width: 30px;
            height: 30px;
            margin-right: 20px;
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
@media screen and (max-width: 991px) {
  .row4{
    .title{
      font-size: 40px;
    }
  }
  .container3Row4{
        .subTitle{
          padding-top: 30px;
        }
      }
}
@media screen and (max-width: 767px) {

  .titleContainer{
    font-size: 25px !important;
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
</style>
