<template>
    <div class='win'>
        <div class='container3'>
            <el-row style='justify-content: center;'>
                <el-col
                    :lg='20'
                    :md='20'
                    :sm='20'
                    :xl='20'
                    :xs='20'
                >
                    <h1 class='title'>
                        How to Trade On The NFP
                    </h1>
                </el-col>
            </el-row>
            <el-row class='container3Row1'>
                <el-col
                    class='container3Col'
                    :lg='20'
                    :md='20'
                    :sm='20'
                    :xl='20'
                    :xs='20'
                >
                    <img alt='background' class='bannerBackground' src='../../../images/cpi1/nfp/background.png' />
                    <el-row class='row1' style='justify-content: space-evenly;'>
                        <el-col
                            class='cardContainerCol'
                            :lg='6'
                            :md='7'
                            :sm='22'
                            :xl='6'
                            :xs='22'
                        >
                            <img alt='country' class='country' src='../../../images/cpi1/nfp/country1.png' />
                            <el-card class='box-card'>
                                <h1>Higher Payroll Value</h1>
                                <ul style='min-height: 130px;'>
                                    <li>More Job Additions</li>
                                    <li>Robust Economic Growth</li>
                                    <li>Increased Spending Power</li>
                                </ul>
                                <el-divider class='line1' />
                                <el-divider class='line2' />
                                <h1>Market Trend</h1>
                                <p>A release above figures would help to fuel U.S. dollar gains</p>
                            </el-card>
                        </el-col>

                        <el-col
                            class='cardContainerCol cardContainerCol2'
                            :lg='6'
                            :md='7'
                            :sm='22'
                            :xl='6'
                            :xs='22'
                        >
                            <img alt='country' class='country' src='../../../images/cpi1/nfp/country2.png' />
                            <el-card class='box-card'>
                                <h1>Forecasted Payroll Value</h1>
                                <ul>
                                    <div style='min-height: 130px;'>
                                        <li>Mixed Reaction in the Forex Market</li>
                                        <li>Will Shift to Other Indicators</li>
                                    </div>
                                    <el-divider class='line1' />
                                    <el-divider class='line2' />
                                    <h1>Market Trend</h1>
                                    <p>Drop the U.S. dollar for other currencies.</p>
                                </ul>
                            </el-card>
                        </el-col>

                        <el-col
                            class='cardContainerCol cardContainerCol2'
                            :lg='6'
                            :md='7'
                            :sm='22'
                            :xl='6'
                            :xs='22'
                        >
                            <img alt='country' class='country' src='../../../images/cpi1/nfp/country3.png' />
                            <el-card class='box-card'>
                                <h1>Lower Payroll Value</h1>
                                <ul>
                                    <div style='min-height: 130px;'>
                                        <li>Lower Employment is A Negative Sign for the World's Largest Economy & for the Dollar</li>
                                    </div>
                                    <el-divider class='line1' />
                                    <el-divider class='line2' />
                                    <h1>Market Trend</h1>
                                    <p>Opt for higher yielding currencies against the U.S. dollar</p>
                                </ul>
                            </el-card>
                        </el-col>
                    </el-row>
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
.el-divider--horizontal{
  margin: unset !important;
  border-top: 1px #000 solid;
}

.usDollar{
  width: 100%;
}

.win{
  background: #fff;
  overflow: hidden;
  .container{
    font-size:32px;
    text-align: center;
    padding: 50px 0 40px;
    .title{
      font-size: 44px;
      color: #C11237;
    }
    p{
      font-size: 22px;
      font-weight: bold;
      color: #000;
    }
  }
}

.container3{
  text-align: center;
  background-color: rgb( 236,228,232);
  ul{
    list-style: disc;
  }
  .title{
    color: #045184 !important;
    font-size: 40px;
    padding-top: 50px;
  }
  .timeLine{
    width: 100%;
  }
  .container3Row1{
    justify-content: center;
    .container3Col{
      .bannerBackground{
        margin: auto;
        left: 0;
        right: 0;
        text-align: center;
        position: absolute;
        width: 100%;
      }
      .row1{
        padding: 200px 0 50px;
        .country{
          width: 100%;
          position: relative;
          z-index: 2;
        }
        .box-card{
          border-radius:unset !important;
          min-height: 445px;
          position: relative;
          bottom: 70px;
        }
        h1{
          color: #A80C0C;
          font-size: 26px;
          padding-top: 40px;
        }
        li{
          color: #0B2F5B;
          font-size: 19px;
          text-align: start;
          margin: 10px 20px;
        }
        p{
          color: #0B2F5B;
          font-size: 19px;
          padding-top: 10px;
          text-align: start;
        }
        .line1{
          margin: 5px 0 !important;
          border-top: 9px rgb(255,87,0) solid !important;
        }
        .line2{
          margin: 0 0 20px  !important;
          border-top: 1px rgb(255,87,0) solid !important;
        }
      }
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
@media screen and (max-width: 1700px) {
  .box-card{
          min-height: 484px !important;
        }
}
@media screen and (max-width: 1450px) {
  .box-card{
          min-height: 578px !important;
        }
}
@media screen and (max-width: 991px) {
  .bannerBackground{
    display: none !important;
  }
  .container3{
    .container3Row1{
      .container3Col{
        .row1{
          padding: 50px 0 !important;
          .cardContainerCol{
            justify-content: center;
            display: grid;
          }
          .cardContainerCol2{
            margin-top: 60px;
          }
          .country{
            max-width: 400px !important;
          }
          .box-card{
            max-width: 400px !important;
            min-height: unset !important;
          }
        }
      }
    }
  }
}
</style>
