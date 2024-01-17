<template>
    <div class='part2Container'>
        <el-row style='justify-content: center'>
            <el-col
                :lg='15'
                :md='16'
                :sm='17'
                :xl='14'
                :xs='18'
            >
                <h1 class='titleContainer'>
                    See Why Serious Trader choose Headline.net?
                </h1>
                <p class='content'>
                    Founded in 2016, Headline is a financial service platform based on the financial event. We provide services to investors by analyzing hot topics in finance and helping you to improve your trading efficiency, build up “the top trading opportunities and trade in accordance with financial essence” investing value conception. Reduce investor's difficulty of obtaining information at the bottom level of capital movement.
                </p>
            </el-col>
        </el-row>
        <el-row class='row2' style='justify-content: space-evenly'>
            <el-col
                class='colContainer'
                :lg='6'
                :md='7'
                :sm='8'
                :xl='5'
                :xs='24'
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
                :lg='6'
                :md='7'
                :sm='8'
                :xl='5'
                :xs='24'
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
                :lg='6'
                :md='7'
                :sm='8'
                :xl='5'
                :xs='24'
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
        <el-button class='registerButton lp_btn lp_btn_register' plain text @click='jumpPage(1)'>
            <p class='lp_btn lp_btn_register'>
                Learn More
            </p>
        </el-button>
    </div>
</template>

<script>
export default {
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
          .registerButton{
            background-color: #CB0D11 !important;
            color: #fff;
            border: unset !important;
            border-radius: 30px !important;
            width: 169px;
            height: 55px;
            margin-top: 20px;
            font-weight: bold;
            font-size: 18px;
          }
          .registerButton:hover{
            color: #000;
          }

  .part2Container{
      background-color: #000;
      color: #fff;
      text-align: center;
      padding: 50px 0;
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
