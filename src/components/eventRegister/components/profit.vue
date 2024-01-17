<template>
    <div class='win'>
        <div class='winPart1'>
            <h1 class='title'>
                Ready to Profit from the FED FOMC Conference?
            </h1>
            <el-row class='row1' :gutter='20'>
                <el-col
                    :lg='4'
                    :md='12'
                    :sm='12'
                    :xl='4'
                    :xs='24'
                >
                    <p class='infoTitle'>
                        Release Date
                    </p>
                    <p class='info'>
                        03/05
                    </p>
                </el-col>
                <el-col
                    class='colInfo competitionContainer'
                    :lg='4'
                    :md='12'
                    :sm='12'
                    :xl='4'
                    :xs='24'
                >
                    <p class='infoTitle'>
                        Actual
                    </p>
                    <img alt='money' class='money' src='../../../images/cpi1/money.png' />
                </el-col>
                <el-col
                    class='colInfo competitionContainer'
                    :lg='4'
                    :md='12'
                    :sm='12'
                    :xl='4'
                    :xs='24'
                >
                    <p class='infoTitle'>
                        Forecast
                    </p>
                    <p class='info'>
                        5.25%
                    </p>
                </el-col>
                <el-col
                    class='colInfo competitionContainer'
                    :lg='4'
                    :md='12'
                    :sm='12'
                    :xl='4'
                    :xs='24'
                >
                    <p class='infoTitle'>
                        Previous
                    </p>
                    <p class='info'>
                        5%
                    </p>
                </el-col>
            </el-row>
            <div class='textBackground'>
                <el-row>
                    <el-col
                        :lg='4'
                        :md='4'
                        :sm='4'
                        style='text-align: end; padding-right: 10px; padding-top: 20px;'
                        :xl='4'
                        :xs='4'
                    >
                        <img alt='box' class='box' src='../../../images/cpi1/landingPage/magic.png' />
                    </el-col>
                    <el-col
                        :lg='16'
                        :md='16'
                        :sm='16'
                        :xl='16'
                        :xs='16'
                    >
                        <p>Traders care about the FED FOMC conference because it provides insights into the monetary policy decisions of the Federal Reserve, which can have a significant impact on financial markets.</p>
                        <p class='secondText'>
                            The decisions made during the conference can affect interest rates, inflation, and overall economic conditions, all of which can impact the profitability of trading positions.
                        </p>
                    </el-col>
                </el-row>
            </div>
            <el-row :gutter='30' style='position: relative; justify-content: center; top: 60px;'>
                <el-col
                    class='newsImgContainer'
                    :lg='6'
                    :md='8'
                    :sm='8'
                    :xl='6'
                    :xs='24'
                >
                    <img alt='news' class='newsImg' src='../../../images/cpi1/landingPage/img1.png' />
                </el-col>
                <el-col
                    class='imgContainer newsImgContainer'
                    :lg='6'
                    :md='8'
                    :sm='8'
                    :xl='6'
                    :xs='24'
                >
                    <img alt='news' class='newsImg' src='../../../images/cpi1/landingPage/img2.jpg' />
                </el-col>
                <el-col
                    class='imgContainer newsImgContainer'
                    :lg='6'
                    :md='8'
                    :sm='8'
                    :xl='6'
                    :xs='24'
                >
                    <img alt='news' class='newsImg' src='../../../images/cpi1/landingPage/img3.jpeg' />
                </el-col>
            </el-row>
        </div>
        <div class='container'>
            <h1 class='title'>
                How to Join The Contest
            </h1>
            <el-row class='row2'>
                <el-col
                    :lg='6'
                    :md='8'
                    :sm='24'
                    :xl='6'
                    :xs='24'
                >
                    <span class='number color1'>
                        01
                    </span>
                    <div class='content'>
                        <p class='text'>
                            Sign up to get
                        </p>
                        <p class='text'>
                            free $50 bonus
                        </p>
                    </div>
                </el-col>
                <el-col
                    :lg='6'
                    :md='8'
                    :sm='24'
                    :xl='6'
                    :xs='24'
                >
                    <span class='number color2'>
                        02
                    </span>
                    <div class='content'>
                        <p class='text'>
                            Follow on FED' move
                        </p>
                        <p class='text'>
                            and Headline's insight
                        </p>
                    </div>
                </el-col>
                <el-col
                    :lg='6'
                    :md='8'
                    :sm='24'
                    :xl='6'
                    :xs='24'
                >
                    <span class='number color3'>
                        03
                    </span>
                    <div class='content'>
                        <p class='text'>
                            Trade on the related
                        </p>
                        <p class='text'>
                            instruments and win big
                        </p>
                    </div>
                </el-col>
            </el-row>
            <el-button class='signUp lp_btn_register lp_btn' plain text @click='jumpPage(1)'>
                <p class='signUp lp_btn_register lp_btn'>
                    Sign Up
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
.win{
  background: #fff;
  overflow: hidden;
  .winPart1{
    background: rgb(22, 22, 63);
    padding: 80px 0 0;

      .title{
        text-align: center;
        color: #fff;
        font-size: 36px;
      }
      .row1{
        justify-content: center;
        color: #fff;
        padding: 40px 0;

        p{
          text-align: center;
        }
        .infoTitle{
          font-size: 22px;
        }
        .info{
          font-size: 80px;
          font-weight: bold;
        }
        .colInfo{
          justify-content: center;
          display: grid;
        }
        .imgRow{
          position: relative;
          justify-content: center;
          top: 60px;
        }
      }
      .textBackground{
        background: rgb(126, 14, 34);
        justify-content: center;
        display: grid;
      p{
        font-size: 18px;
        color: #fff;
        padding-top: 30px;
      }
      .secondText{
        padding-bottom: 20px;
      }
    }
  }
  .container{
    font-size:32px;
    text-align: center;
    padding: 100px 0 40px;
    .title{
      font-size: 32px;
    }

    .row2{
      justify-content: center;
      .number{
        line-height: normal;
        font-size: 176px;
        font-weight: bold;
      }
      .content{
        position: relative;
        bottom: 130px;
        padding-left: 140px;
        z-index: 999;
        text-align: start;
        .text{
          font-size: 19px;
          font-weight: bold;
        }
      }
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
  }
}
.color1{
  color: #FFEAE8;
}
.color2{
  color: #ECDBFF;
}
.color3{
  color: #D4EDEE;
}
.money{
  width: 92px;
}
.newsImg{
  width: 100%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}
.box{
  width: 50px;
  filter: invert(100%) sepia(100%) saturate(8%) hue-rotate(190deg) brightness(102%) contrast(106%);
}

@media screen and (max-width: 991px) {
  .content{
    justify-content: center;
    display: grid;
    padding-left: unset !important;
  }
  .text{
    font-size: 22px !important;
  }
}

@media screen and (max-width: 767px) {
  .newsImgContainer{
    text-align: center;
  }
  .imgContainer{
    padding-top: 20px;
  }
  .newsImg{
    width: 100%;
    max-width: 450px;
  }
  .competitionContainer{
    padding-top: 20px;
  }
}
</style>
