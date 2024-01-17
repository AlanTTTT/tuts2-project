<template>
    <div class='csComponent'>
        <div class='part2Container'>
            <el-row :gutter='10' style='justify-content: center;'>
                <el-col
                    class='backgroundPart2'
                    :lg='10'
                    :md='10'
                    :sm='22'
                    :xl='10'
                    :xs='22'
                />
                <el-col
                    class='cfdIntro'
                    :lg='14'
                    :md='14'
                    :sm='22'
                    :xl='12'
                    :xs='22'
                >
                    <el-row style='justify-content: center;'>
                        <el-col
                            class='container'
                            :lg='18'
                            :md='22'
                            :sm='22'
                            :xl='16'
                            :xs='22'
                        >
                            <p class='content'>
                                The U.S. Federal Reserve's Federal Open Market Committee (FOMC) statement contains the outcome of the vote on interest rates, discusses the economic outlook and offers clues on the outcome of future votes. A more dovish than expected statement could be taken as negative/bearish for the USD, while a more hawkish than expected statement could be taken as positive/bullish for the USD. <span style='color: #CB0D11'>
                                    Headline.net can track the latest news and help you seize the winning chances.
                                </span>
                            </p>
                            <thirdLogin />
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>
        <cardContainer />
    </div>
</template>

<script>
import cardContainer from './cardContainerFomc07Cs.vue'
import thirdLogin from '@/themeCommon/components/thirdLoginEvent6.vue'
export default {
    name: 'Component',
    components: {
        cardContainer,
        thirdLogin,
    },
    setup (props) {
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
        return {
            jumpPage,
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/sass/mixin.scss';
.red{
  background-color: #bb2423;
  color: #fff;
}
.bold{
  font-weight: bold;
}
    .signUp{
      background-color: #BB2423 !important;
      color: #fff;
      border-radius: unset !important;
    }
    .signUp:hover{
      background-color: #fff !important;
      border: 1px solid #BB2423;
      color:#BB2423
    }
    .part2Container{
      margin: 50px 0;
      .title1{
        color: #CB0D11;
        text-align: center;
        font-size: 55px;
        padding-bottom: 40px;
      }
      .backgroundPart2{
        background-image: url("../../../images/cpi1/fomc07/background2Cs.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        align-content: center;
        display: grid;
        border: 1px solid #fff;
        padding: 40px 0;
        min-height: 400px;
      }
      .introduction{
        font-size: 25px;
        line-height: 1.4em;
        text-align: start;
        color: #fff;
      }
      .introduction2{
        padding-top: 30px;
      }
      .cfdIntro{
          align-content: center;
          display: grid;
          border: 1px solid #fff;
          background-color:rgb(240, 233, 218);
        .container{
          padding: 40px 0;
          .content{
            font-size: 20px;
            color: #000;
            margin-top: 20px;
          }
        }
      }
    }
    .learnButton{
            background-color: #fff !important;
            color: #CB0D11;
            border: unset !important;
            border-radius: 4px !important;
            width: 265px;
            height: 55px;
            margin-top: 30px;
          }
          .learnButton:hover{
            color: #000;
          }
    @media screen and (max-width: 991px) {
      .part1Container{
        .buttonContainer{
          padding: 20px 0 !important;
          text-align: center;
        }
        .part1Content{
          padding: 30px 0;
        }
      }
    }
      @media screen and (max-width: 900px) {
        .cfdIntro{
        .container{
          .content{
            font-size: 20px !important;
          }
        }
      }
    }
</style>
