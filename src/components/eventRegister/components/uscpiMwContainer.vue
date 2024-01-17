<template>
    <div class='win'>
        <div class='container1'>
            <el-row class='row1' :gutter='30'>
                <el-col
                    class='col1'
                    :lg='13'
                    :md='14'
                    :sm='22'
                    :xl='12'
                    :xs='22'
                >
                    <h1 class='title'>
                        Do you seize the trading signal?
                    </h1>
                    <p class='content'>
                        The CPI is a measure of the change in the consumer price level, which reflects the change in the average price of a basket of goods and services.
                    </p>
                    <p class='content'>
                        CPI data can provide information not only about the US's economic situation and may indicate global economic trends.
                    </p>
                </el-col>
                <el-col
                    class='col2'
                    :lg='7'
                    :md='8'
                    :sm='22'
                    :xl='6'
                    :xs='22'
                >
                    <el-button class='tradeNow lp_btn_register lp_btn' plain text @click='jumpPage(1)'>
                        <p class='lp_btn_register lp_btn'>
                            Trade Now
                        </p>
                    </el-button>
                    <h1 class='subTitle'>
                        <span class='underline'>
                            With Headline.net
                        </span><br />
                        - NO KYC needed<br />
                        - Tax free<br />
                        - No Currency limited<br />
                        - Finance event focus(CPI/FED/NFP)
                    </h1>
                </el-col>
            </el-row>
        </div>

        <el-row class='row2'>
            <el-col
                class='col1'
                :lg='12'
                :md='12'
                :sm='12'
                :xl='12'
                :xs='24'
            >
                <img alt='banner2' class='banner2' src='../../../images/cpi1/eucpi/img2MW.jpg' />
            </el-col>
            <el-col
                class='col2'
                :lg='12'
                :md='12'
                :sm='12'
                :xl='12'
                :xs='24'
            >
                <img alt='banner3' class='banner2' src='../../../images/cpi1/uscpi07/backgroundImg2Mw.jpg' />
            </el-col>
        </el-row>

        <el-row class='row3'>
            <el-col
                class='col1'
                :lg='11'
                :md='12'
                :sm='22'
                :xl='10'
                :xs='22'
            >
                <div class='textContainer'>
                    <h1 class='upContent'>
                        When CPI rises<br />
                        - Stock(energy, pharmaceuticals, finance, and real estate)<br />
                        - Real Estate<br />
                        -Commedities
                    </h1>
                    <img alt='arrowUp' class='arrow' src='../../../images/cpi1/eucpi/arrowUp.png' />
                </div>
            </el-col>
            <el-col
                class='col2'
                :lg='11'
                :md='12'
                :sm='22'
                :xl='10'
                :xs='22'
            >
                <div class='textContainer'>
                    <img alt='arrowUp' class='arrow' src='../../../images/cpi1/eucpi/arrowDown.png' />
                    <h1 class='downContent'>
                        When CPI drops:<br />
                        - Bond<br />
                        - Stock (Low Risk)<br />
                        - Forex
                    </h1>
                </div>
            </el-col>
        </el-row>

        <el-row class='row4'>
            <el-col
                class='col1'
                :lg='11'
                :md='12'
                :sm='12'
                :xl='11'
                :xs='22'
            >
                <h1 class='title'>
                    Real-time Trading Tips<br />To grab the best timing
                </h1>
                <div class='buttonContainer'>
                    <el-button class='learnMore lp_btn_infoDetail lp_btn' plain text @click='jumpPage(4)'>
                        <p class='lp_btn_infoDetail lp_btn'>
                            Learn More
                        </p>
                    </el-button>
                </div>
            </el-col>
            <el-col
                class='col2'
                :lg='11'
                :md='12'
                :sm='12'
                :xl='11'
                :xs='22'
            />
        </el-row>
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
                case 4 :
                    window.open('https://www.headline.net/en-US/infoDetail?id=29205')
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
.underline{
  text-decoration: underline;
}

.container1{
  .row1{
    justify-content: center;
    padding: 30px 20px;
    align-items: center;
    .col1{
      .title{
        font-size: 56px;
        font-family: 'Times New Roman', Times, serif;
      }
      .content{
        font-size: 18px;
        padding-top: 15px;
      }
    }
    .col2{
      text-align: center;
      .subTitle{
        color: #993500;
        font-size: 20px;
        padding-top: 15px;
        line-height: 1.5em;
      }
      .tradeNow{
        background-color: #5f5bcd !important;
        color: #fff !important;
        border-radius: 5px;
        width: 200px;
        height: 50px;
        font-weight: bold;
        font-size: 20px;
      }
      .tradeNow:hover{
        background-color: #2823c7 !important;
      }
    }

  }
}
.row2{
    .banner2{
      width: 100%;
    }
}

.row3{
  justify-content: center;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  padding-top: 30px;
  .col1{
    .textContainer{
      display: flex;
      justify-content: space-around;
      .upContent{
        text-align: center;
        color: #0DE44D;
        font-size: 29px;
        font-weight: 400;
        max-width: 500px;
      }
      .arrow{
        width: 100px;
      }
    }
  }
  .col2{
    .textContainer{
      display: flex;
      justify-content: space-around;
      min-height: 217px;
      .downContent{
        text-align: center;
        color: #E41332;
        font-size: 29px;
        font-weight: 400;
        max-width: 500px;
      }
      .arrow{
        width: 100px;
      }
    }
  }
}
.row4{
  justify-content: center;
  margin: 50px 0;
  .col1{
    background-color: rgb( 175,152,196);
    align-content: center;
    display: grid;
    padding: 150px 0;
    .title{
      text-align: center;
      font-size: 50px;
      color: #000;
      font-weight: 400;
      font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    }
    .buttonContainer{
      text-align: center;
      padding-top: 30px;
      .learnMore{
        background: linear-gradient(126deg, #5f5bcd 24%, #ff5700 100%) !important;
        color: #fff !important;
        width: 200px;
        height: 40px;
        font-size: 16px;
        border-radius: unset !important;
      }
      .learnMore:hover{
        background: linear-gradient(126deg, #ff5700 24%, #5f5bcd 100%) !important;
        color: #000;
      }
    }
  }
  .col2{
    background-image: url("../../../images/cpi1/eucpi/img4MW.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
}
@media screen and (max-width: 1100px) {
  .row4{
    .col1{
      .title{
        font-size: 40px !important;
      }
    }
  }
}

@media screen and (max-width: 991px) {
  .row1{
    .col1{
      .title{
        font-size: 40px !important;
        line-height: 1em;
      }
    }
    .col2{
      padding-top: 30px;
    }
  }
  .row3{
    .col1{
      .textContainer{
        justify-content: center !important;
        .upContent{
          font-size: 25px !important;
        }
        .arrow{
          max-height: 217px;
        }
      }
    }
    .col2{
      padding-top: 20px;
      .textContainer{
        justify-content: center !important;
        .downContent{
          font-size: 25px !important;
        }
        .arrow{
          max-height: 217px;
        }
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .row4{
    .col1{
      padding: 80px 0 !important;
      .title{
        font-size: 35px !important;
      }
    }
    .col2{
      min-height: 300px !important;
    }
  }
}
@media screen and (max-width: 500px) {
  .row1{
    .col1{
      .title{
        font-size: 35px !important;
      }
    }
  }
}
</style>
