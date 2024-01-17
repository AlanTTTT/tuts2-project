<template>
    <div class='partners'>
        <h1 class='partnersTitle'>
            The Forecasting of NFP
        </h1>
        <el-row class='row cardRow' :gutter='20'>
            <el-col
                class='col-logo'
                :lg='3'
                :md='3'
                :sm='22'
                :xl='3'
                :xs='22'
            >
                <img alt='point' class='point' src='../../../images/cpi1/nfp/up.jpg' />
                <img alt='point' class='point point2' src='../../../images/cpi1/nfp/down.jpg' />
            </el-col>
            <el-col
                class='col-logo'
                :lg='11'
                :md='12'
                :sm='22'
                :xl='10'
                :xs='22'
            >
                <p class='text'>
                    A higher-than-expected Nonfarm Payroll should be taken as positive/bullish for the USD, while a lower-than-expected reading should be taken as negative/bearish for the USD.
                </p>
                <p class='text text2'>
                    Nonfarm Payrolls measure the change in the number of people employed excluding the farming industry. Job creation is the foremost indicator of consumer spending, which accounts for the majority of economic activity.
                </p>
                <p class='text text2'>
                    NFP can trigger significant price movements in currencies, stocks, and commodities, presenting trading opportunities.
                </p>
                <p class='text text2'>
                    NFP data plays a crucial role in the Federal Reserve's decision-making process regarding interest rates.
                </p>
            </el-col>
            <el-col
                class='col-logo'
                :lg='3'
                :md='3'
                :sm='22'
                :xl='3'
                :xs='22'
            >
                <img alt='point' class='job' src='../../../images/cpi1/nfp/moneyImg.jpg' />
                <img alt='point' class='job job2' src='../../../images/cpi1/nfp/loseJob.png' />
                <img alt='point' class='job job2' src='../../../images/cpi1/nfp/productImg.jpg' />
                <img alt='point' class='job job2' src='../../../images/cpi1/nfp/rate.png' />
            </el-col>
        </el-row>
    </div>

    <div class='strategy'>
        <h1 class='testimonialsTitle'>
            Revolutionize Trading Strategy
        </h1>
        <el-row class='row' :gutter='50'>
            <el-col
                :lg='10'
                :md='11'
                :sm='11'
                style='text-align: left'
                :xl='9'
                :xs='22'
            >
                <el-card class='box-card'>
                    <h1 class='heading'>
                        Legit market insight
                    </h1>
                    <p class='content'>
                        Discover timely and accurate market insights that can empower your investment decisions. Our comprehensive analysis and expert research provide you with the knowledge and tools to navigate the dynamic financial landscape effectively.
                    </p>
                </el-card>
            </el-col>
            <el-col
                class='row2col2Padding'
                :lg='10'
                :md='11'
                :sm='11'
                style='text-align: left'
                :xl='9'
                :xs='22'
            >
                <el-card class='box-card'>
                    <h1 class='heading'>
                        Crypto friendly
                    </h1>
                    <p class='content'>
                        Potential Tax Exemptions: In certain jurisdictions, there may be tax exemptions or allowances for specific cryptocurrency-related activities. These exemptions can further reduce or eliminate tax obligations for traders.
                    </p>
                </el-card>
            </el-col>
        </el-row>

        <el-row class='row2' :gutter='50'>
            <el-col
                class='row2col2'
                :lg='10'
                :md='11'
                :sm='11'
                style='text-align: left'
                :xl='9'
                :xs='22'
            >
                <el-card class='box-card card2'>
                    <h1 class='heading'>
                        KYC-FREE
                    </h1>
                    <p class='content'>
                        KYC requirements can vary across different jurisdictions, and some traders may face challenges if they reside in regions with stricter identification regulations. A KYC-free trading option can provide a global platform where individuals from various locations can participate without barriers.
                    </p>
                </el-card>
            </el-col>
            <el-col
                class='row2col2 row2col2Padding'
                :lg='10'
                :md='11'
                :sm='11'
                style='text-align: left'
                :xl='9'
                :xs='22'
            >
                <el-card class='box-card card2'>
                    <h1 class='heading'>
                        Community-Based
                    </h1>
                    <p class='content'>
                        Our community-based initiatives are changing the game by harnessing the collective strength of local knowledge and context. With a focus on ownership and empowerment, providing tailored solutions that respond to evolving needs. Our initiatives have a lasting impact, building sustainable communities and fostering long-term growth.
                    </p>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'PA',
    components: {
    },
    setup () {
        const jumpPage = (attr) => {
            switch (attr) {
                case 1 :
                    window.open('https://www.headline.net/en-US/order?name=EUR/USD&symbolId=1437&tradeType=1')
                    break
                case 2 :
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
.box-card{
  min-height: 250px;
  border-radius: 25px;
  .heading{
    font-size: 50px;
    color: #000;
    font-weight: 400;
  }
  .content{
    font-size: 18px ;
    color: #000;
    padding: 20px 0;
  }
}
.row2{
  padding-top: 50px;
  justify-content: center;
  .row2col2{
    .card2{
      min-height: 300px;
    }
  }
}
.cardRow{
  padding-top: 50px;
}
.row{
  justify-content: center;
}
.partners{
  text-align: center;
  padding: 70px 0;
  position: relative;
  background-color: #fff;
  .partnersTitle{

    font-size: 60px;
    font-weight: 700;
  }
  .step{
    width: 100%;
  }
  .arrow{
    width: 100%;
  }
  .col-logo{
  align-self: center;
  .point{
    width: 100%;
  }
  .point2{
    padding-top: 80px;
  }
  .job{
    width: 100%;
    max-width: 120px;
  }
  .job2{
    padding-top: 30px;
  }
  .text{
    text-align: start;
    font-size: 18px;
  }
  .text2{
    padding-top: 50px;
  }
  }
}

.strategy{
  text-align: center;
  background-color: rgb(236, 228, 232);
  position: relative;
  padding: 50px 0;
  .animals{
    width: 100%;
  }
  .testimonialsTitle{
    padding: 20px 0;
    font-size: 60px;
    font-weight: 700;
  }
  .testimonialsYoutube{
    width: 100%;
    aspect-ratio: 16 / 9;
  }
  .detailsContainer{
    padding: 20px 0;
    .name{
      font-size: 26px;
    }
  }
}
@media screen and (max-width: 1700px) {
  .box-card{
    min-height: 270px;
  }
}
@media screen and (max-width: 1550px) {
  .box-card{
    min-height: 290px;
  }
  .row2{
    .row2col2{
      .card2{
        min-height: 320px;
      }
    }
  }
}

@media screen and (max-width: 1300px) {
  .box-card{
    .heading{
      font-size: 35px !important;
    }
  }
}

@media screen and (max-width: 1050px) {
  .row2{
    .row2col2{
      .card2{
        min-height: 375px;
      }
    }
  }
}

@media screen and (max-width: 991px) {
  .col-logo{
    .point{
      max-width: 200px;
      padding: 30px 0;
    }
    .job{
      max-width: 200px;
    }
  }
  .cardRow{
    padding-top: unset !important;
  }
}

@media screen and (max-width: 900px) {
  .box-card{
    min-height: 410px;
  }
  .row2{
    .row2col2{
      .card2{
        min-height: 482px;
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .row2col2Padding{
    padding-top: 50px;
  }
  .step{
    max-width: 400px !important;
  }
  .cardAdv{
    padding: 0 30px !important;
  }
  .cardAdv2{
    margin-top: 20px;
  }
  .money{
    font-size: 60px !important;
  }
  .cardRow{
    padding-top: 70px;
  }
.strategy{
  .animals{
    max-width: 300px;
  }
}
.strategy{
  .testimonialsTitle{
    font-size: 40px !important;
  }
}
.box-card{
    min-height: unset !important;
    .heading{
      font-size: 25px !important;
    }
  }
  .row2{
    .row2col2{
      .card2{
        min-height: unset !important;
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .partnersTitle{
    font-size: 40px !important;
  }
  .col-logo{
    .point{
      max-width: 150px;
    }
    .job{
      max-width: 100px;
    }
  }
  .col-logo{
    .job{
      width: 100%;
      max-width: 80px !important;
    }
  }
}
</style>
