<template>
    <div class='part2Container'>
        <div class='background'>
            <el-row class='row1'>
                <el-col
                    :lg='18'
                    :md='20'
                    :sm='22'
                    :xl='16'
                    :xs='22'
                >
                    <p class='titleContainer'>
                        Why choose Headline.net? Our numbers speak for themselves
                    </p>
                </el-col>
            </el-row>
            <el-row class='row2' style='justify-content: space-evenly'>
                <el-col
                    class='colContainer'
                    :lg='5'
                    :md='5'
                    :sm='22'
                    :xl='5'
                    :xs='22'
                >
                    <p class='title'>
                        7 Years
                    </p>
                    <p class='content'>
                        Safety Operation
                    </p>
                </el-col>
                <el-col
                    class='colContainer col1'
                    :lg='5'
                    :md='5'
                    :sm='22'
                    :xl='5'
                    :xs='22'
                >
                    <p class='title'>
                        160,000+
                    </p>
                    <p class='content'>
                        Registered Accounts
                    </p>
                </el-col>
                <el-col
                    class='colContainer col1'
                    :lg='5'
                    :md='5'
                    :sm='22'
                    :xl='5'
                    :xs='22'
                >
                    <p class='title'>
                        110+ Million
                    </p>
                    <p class='content'>
                        Trades Executed
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
                    <el-button class='trade lp_btn lp_btn_register' plain text @click='jumpPage(1)'>
                        <p class='lp_btn lp_btn_register'>
                            Create An Account
                        </p>
                    </el-button>
                </el-col>
            </el-row>
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
.part2Container{
  position: relative;
  color: #fff;
  text-align: center;
  background-color: #000;
    .background{
      .row1{
        justify-content: center;
      }
    }
    .titleContainer{
      font-size: 45px;
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
          font-size: 60px;
          text-decoration: underline;
       }
        .content{
          font-size: 28px;
          padding-top: 20px;
        }
        .fotor{
          width: 100px;
       }
      }
    }
    .row3{
      justify-content: center;
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
@media screen and (max-width: 991px) {
.row2{
    .colContainer{
      .title{
        font-size: 50px !important;
     }
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
  .row2{
      .colContainer{
        .title{
          font-size: 40px !important;
       }
      }
    }
}
</style>
