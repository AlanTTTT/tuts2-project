<template>
    <div class='csComponent'>
        <div class='part2Container'>
            <el-row :gutter='10' style='justify-content: center; border-top: 1px solid #fff;'>
                <el-col
                    class='backgroundPart2'
                    :lg='12'
                    :md='12'
                    :sm='24'
                    :xl='12'
                    :xs='24'
                >
                    <el-row style='justify-content: center;'>
                        <el-col
                            :lg='20'
                            :md='22'
                            :sm='22'
                            :xl='20'
                            :xs='22'
                        >
                            <p class='introduction'>
                                Exclusive offer
                            </p><p class='introduction2'>
                                Market Signal
                            </p>
                            <img alt='record' class='record' src='../../../images/cpi1/non-event2/record.png' />
                            <h1>
                                <span class='backgroundContent'>
                                    Our client tracking record
                                </span>
                            </h1>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col
                    class='cfdIntro'
                    :lg='12'
                    :md='12'
                    :sm='24'
                    :xl='12'
                    :xs='24'
                >
                    <el-row style='justify-content: center;'>
                        <el-col
                            class='container'
                            :lg='19'
                            :md='20'
                            :sm='22'
                            :xl='18'
                            :xs='22'
                        >
                            <p class='content'>
                                To ensure your genuine interest in earning money with our strategies, we kindly request a deposit of a certain amount for quick trading purposes following your registration. Your cooperation would be greatly appreciated.
                            </p>
                            <p class='content'>
                                Once completed, you will be added to our exclusive community group. Please note that this page will be closing soon. We look forward to seeing you in our exclusive Telegram (TG) group.
                            </p>
                            <p class='content'>
                                We are implementing a classification system for our exclusive members. After confirmation, we will share a special market signal with you.
                            </p>
                            <el-divider class='line1' />
                            <div class='tradeButtonContainer'>
                                <el-button class='learnButton lp_btn lp_btn_deposit' plain text @click='handleSkip()'>
                                    <p class='lp_btn lp_btn_deposit'>
                                        Get Ready
                                    </p>
                                </el-button>
                            </div>
                            <p class='terms'>
                                * This information is not financial advice; it is solely intended for sharing and reference purposes. Please be aware that trading CFDs carries a high risk, with over 80% resulting in losses. Traders should exercise their own judgment and take full responsibility for their actions
                            </p>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import { computed, reactive, toRefs, watch } from 'vue'
export default {
    name: 'Component',
    components: {
    },
    setup (props) {
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
                    window.open('https://www.headline.net/en-US/order?symbolId=1416&tradeType=1')
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
        return {
            jumpPage,
            handleSkip,
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/sass/mixin.scss';
    .part2Container{
      .backgroundPart2{
        background-image: url("../../../images/cpi1/non-event2/background2Sc.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        align-content: center;
        display: grid;
        padding: 40px 0;
        .backgroundContent{
          font-size: 30px;
          color: #fff;
          background-color: #1D67CD;
          padding: 20px;
        }
      }
      .introduction{
        font-size: 90px;
        line-height: 1.4em;
        text-align: start;
        color: #fff;
      }
      .introduction2{
        padding-top: 30px;
        font-size: 90px;
        color: #FFF86B;
      }
      .record{
        width: 100%;
        max-width: 750px;
      }
      .cfdIntro{
          align-content: center;
          display: grid;
          background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url("../../../images/cpi1/non-event2/background3Sc.jpg");
          background-repeat: no-repeat;
          background-position: 90% 50%;
        .container{
          .content{
            font-size: 30px;
            color: #fff;
            margin-top: 20px;
          }
          .line1{
            margin: 5px 0 !important;
            border-top: 2px rgb(255,255,255) solid !important;
            max-width: 40%;
          }
          .tradeButtonContainer{
            text-align: start;
            padding: 20px 0;
          }
          .learnButton{
            background-color: #282626 !important;
            color: #fff;
            border-radius: unset !important;
            font-size: 18px;
            width: 250px;
            height: 50px;
          }
          .learnButton:hover{
            background-color: #fff !important;
            color:#000;
            border: 1px solid #000;
          }
          .terms{
            font-size: 15px;
            color: #fff;
            max-width: 650px;
            padding-bottom: 30px;
          }
        }
      }
    }
    @media screen and (max-width: 1600px) {
      .introduction{
        font-size: 70px !important;
      }
      .introduction2{
        font-size: 70px !important;
      }
      .cfdIntro{
        .container{
          .content{
            font-size: 25px !important;
          }
        }
      }
    }
    @media screen and (max-width: 1100px) {
      .introduction{
        font-size: 50px !important;
      }
      .introduction2{
        font-size: 50px !important;
      }
    }
    @media screen and (max-width: 600px) {
      .cfdIntro{
        .container{
          .content{
            font-size: 20px !important;
          }
        }
      }
    }
    @media screen and (max-width: 500px) {
      .introduction{
        font-size: 40px !important;
      }
      .introduction2{
        font-size: 40px !important;
      }
      .backgroundContent{
          font-size: 20px !important;
        }
    }
</style>
