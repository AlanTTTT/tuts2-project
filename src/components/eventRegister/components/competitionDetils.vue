<template>
    <div class='win'>
        <el-row>
            <el-col
                :lg='12'
                :md='12'
                :sm='24'
                :xl='12'
                :xs='24'
            >
                <img alt='Trading View' class='computer' src='../../../images/cpi1/landingPage/computer.png' />
            </el-col>
            <el-col
                class='contentInformation'
                :lg='12'
                :md='12'
                :sm='24'
                :xl='12'
                :xs='24'
            >
                <p class='title'>
                    Beat the FED's Move, Win Big
                </p>
                <p class='content'>
                    Trade your way to the top and win big with Headline's FED Competition
                </p>
                <el-row class='row1' :gutter='20'>
                    <el-col
                        :lg='12'
                        :md='12'
                        :sm='12'
                        :xl='12'
                        :xs='12'
                    >
                        <p class='infoTitle'>
                            2nd-15 May
                        </p>
                        <el-divider />
                        <p class='text'>
                            Contest runs
                        </p>
                    </el-col>
                    <el-col
                        :lg='12'
                        :md='12'
                        :sm='12'
                        :xl='12'
                        :xs='12'
                    >
                        <p class='infoTitle'>
                            $5,000
                        </p>
                        <el-divider />
                        <p class='text'>
                            Prize in Pool
                        </p>
                    </el-col>
                </el-row>
                <el-row class='row1'>
                    <el-col
                        :lg='12'
                        :md='12'
                        :sm='12'
                        :xl='12'
                        :xs='12'
                    >
                        <p class='infoTitle'>
                            Gold, EUR/USD
                        </p>
                        <el-divider />
                        <p class='text'>
                            Eligible Trading Pair
                        </p>
                    </el-col>
                    <el-col
                        :lg='12'
                        :md='12'
                        :sm='12'
                        :xl='12'
                        :xs='12'
                    >
                        <p class='infoTitle'>
                            Top 1
                        </p>
                        <el-divider />
                        <p class='text'>
                            Highest Profit
                        </p>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
        <div class='buttonContainer'>
            <el-button class='signUp lp_btn lp_btn_register' plain text @click='jumpPage(1)'>
                <p class='lp_btn lp_btn_register'>
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
  .computer{
    width: 100%;
  }
  .contentInformation{
    align-self: center;
  }

  .title{
    color: #C11237;
    font-size: 44px;
  }
  .content{
    font-size: 18px;
  }
  .buttonContainer{
    justify-content: center;
    display: grid;
    padding: 30px 0;
    .signUp{
    width: 245px;
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
  .row1{
    .infoTitle{
      font-size: 40px;
    }
    .text{
      padding-top: 10px;
      font-size: 14px;
    }
    .el-divider--horizontal{
      width: 70%;
      margin: unset !important;
    }
  }
}

@media screen and (max-width: 1350px) {
  .row1{
    .infoTitle{
      font-size: 30px !important;
    }
  }
}

@media screen and (max-width: 991px) {
  .contentInformation{
    justify-content: center;
    display: grid;
  }

  .row1{
    .infoTitle{
      font-size: 30px;
    }
    .text{
      font-size: 14px;
    }
  }
}
</style>
