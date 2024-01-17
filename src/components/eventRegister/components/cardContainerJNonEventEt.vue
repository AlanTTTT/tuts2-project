<template>
    <div class='win'>
        <div class='container2'>
            <el-row class='row1'>
                <img alt='Banner' class='banner' src='../../../images/cpi1/non-event2/backgroundEt.jpg' />
                <el-col
                    class='col1'
                    :lg='6'
                    :md='6'
                    :sm='12'
                    :xl='6'
                    :xs='24'
                >
                    <div class='container container1'>
                        <img alt='No Kyc' class='KYC' src='../../../images/cpi1/cpi-fomc/noKYC.png' />
                        <h1>NO KYC</h1>
                        <p class='content'>
                            No personal information such as their name, address, and ID card during DEPOSIT
                        </p>
                        <!--<el-button class='tryNow lp_btn_register lp_btn' plain style='margin-top: 85px' text @click='jumpPage(1)'>
                            <p class='lp_btn_register lp_btn'>
                                TRY NOW
                            </p>
                        </el-button>-->
                    </div>
                </el-col>
                <el-col
                    class='col2'
                    :lg='6'
                    :md='6'
                    :sm='12'
                    :xl='6'
                    :xs='24'
                >
                    <div class='container container1'>
                        <img alt='No Tax' class='Tax' src='../../../images/cpi1/cpi-fomc/Tax_Free.png' />
                        <h1>​NO TAX</h1>
                        <p class='content'>
                            Maximise your earnings that are not taxed
                        </p>
                        <!--<el-button class='tryNow lp_btn_register lp_btn' plain style='margin-top: 95px' text @click='jumpPage(1)'>
                            <p class='lp_btn_register lp_btn'>
                                TRY NOW
                            </p>
                        </el-button>-->
                    </div>
                </el-col>
                <el-col
                    class='col3'
                    :lg='6'
                    :md='6'
                    :sm='12'
                    :xl='6'
                    :xs='24'
                >
                    <div class='container'>
                        <img alt='crypto' class='crypto' src='../../../images/cpi1/cpi-fomc/crypto.png' />
                        <h1>CRYPTO TRADING</h1>
                        <p class='content'>
                            Gets easy to transfer your money without any involvement of banks and other financial institutions for CFDs trading
                        </p>
                        <!--<el-button class='tryNow lp_btn_register lp_btn' plain style='margin-top: 40px' text @click='jumpPage(1)'>
                            <p class='lp_btn_register lp_btn'>
                                TRY NOW
                            </p>
                        </el-button>-->
                    </div>
                </el-col>
                <el-col
                    class='col4'
                    :lg='6'
                    :md='6'
                    :sm='12'
                    :xl='6'
                    :xs='24'
                >
                    <div class='container'>
                        <img alt='consulting' class='consulting' src='../../../images/cpi1/cpi-fomc/consulting.png' />
                        <h1>CONSULTING</h1>
                        <p class='content'>
                            Supporting team 24h stand by
                        </p>
                        <!--<el-button class='tryNow lp_btn_register lp_btn' plain style='margin-top: 85px' text @click='jumpPage(1)'>
                            <p class='lp_btn_register lp_btn'>
                                TRY NOW
                            </p>
                        </el-button>-->
                    </div>
                </el-col>
            </el-row>
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
                    window.open('https://www.headline.net/en-US/download')
                    break
                case 3 :
                    window.open('https://t.me/Headline_OfficialBot')
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
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');
  .banner{
    width: 100%;
    max-height: 95vh;
    height: 100%;
    object-fit: cover;
  }

.container2{
  text-align: center;
  .row1{
    .container{
      padding: 30px 50px;
      .tryNow{
      background-color: #B6F3E8 !important;
      color: #000 !important;
      border-radius: 5px;
      width: 168px;
      height: 35px;
      font-weight: bold;
      }
      .tryNow:hover{
      background-color: #fff;
      color: #000;
      border: 1px solid #000;
    }
    }
    h1{
      font-size: 18px;
      padding-top: 10px;
    }
    .content{
      font-size: 16px;
      padding-top: 30px;
    }
    .col1{
      background-color: #000;
      h1{
        color: #fff;
        font-weight: 800;
      }
      .content{
        color: #fff;
      }
    }
    .col2{
      background-color: #BB2423;
      h1{
        color: #4BD1A0;
        font-weight: 800;
      }
      .content{
        color: #fff;
      }
    }
    .col3{
      background-color: #EEEDED;
      h1{
        color: #4BD1A0;
        font-weight: 800;
      }
      p{
        color: #000;
      }
    }
    .col4{
      background-color: #4BD1A0;
      h1{
        color: #fff;
        font-weight: 800;
      }
      p{
        color: #000;
      }
    }
    .KYC{
      width: 130px;
    }
    .Tax{
      width: 150px;
    }
    .crypto{
      width: 150px;
    }
    .consulting{
      width: 150px;
    }
  }
}
</style>
