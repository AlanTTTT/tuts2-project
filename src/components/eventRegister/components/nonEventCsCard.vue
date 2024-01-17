<template>
    <div class='cpiPart1'>
        <div class='part2'>
            <el-row>
                <el-col
                    :lg='6'
                    :md='6'
                    :sm='0'
                    :xl='6'
                    :xs='0'
                >
                    <img alt='bear' class='animals' src='../../../images/cpi1/bull.png' />
                </el-col>
                <el-col
                    class='challenge'
                    :lg='12'
                    :md='12'
                    :sm='24'
                    :xl='12'
                    :xs='24'
                >
                    <div class='challenge'>
                        <h1 class='green'>
                            Why Choose Headline?
                        </h1>
                        <h1 style='color: #fff;'>
                            Trade with Information, Master the Markets
                        </h1>
                    </div>
                </el-col>
                <el-col
                    class='animalTwo'
                    :lg='6'
                    :md='6'
                    :sm='0'
                    :xl='6'
                    :xs='0'
                >
                    <img alt='bull' class='animals' src='../../../images/cpi1/bear.png' />
                </el-col>
            </el-row>
        </div>
        <el-row class='cards' :gutter='60'>
            <el-col
                class='cardContainer'
                :lg='7'
                :md='7'
                :sm='22'
                :xl='6'
                :xs='22'
            >
                <el-card class='box-card'>
                    <h1 class='green'>
                        Faster Trading Journey
                    </h1>
                    <p>
                        Directly trade on Headline telegram bot can help you seize all the important chances to win big in the fluctuating markets.
                    </p>
                </el-card>
            </el-col>
            <el-col
                class='cardContainer'
                :lg='7'
                :md='7'
                :sm='22'
                :xl='6'
                :xs='22'
            >
                <el-card class='box-card'>
                    <h1 class='green'>
                        Faster Information
                    </h1>
                    <p>With multiple API and innovative system, you can be the first one to get the latest market news with your favorite channels.</p>
                </el-card>
            </el-col>
            <el-col
                class='cardContainer'
                :lg='7'
                :md='7'
                :sm='22'
                :xl='6'
                :xs='22'
            >
                <el-card class='box-card'>
                    <h1 class='green'>
                        Faster Fund Management
                    </h1>
                    <p>Experience the future of financial transactions with digital money deposit and withdrawal, enabling you to swiftly manage your funds.</p>
                </el-card>
            </el-col>
        </el-row>
        <div class='containerPart2'>
            <p>
                Are you ready to take your trading <span class='green'>
                    next level?
                </span>
            </p>
            <div class='part2Button'>
                <el-button class='home lp_btn lp_btn_register' plain @click='jumpPage(1)'>
                    <span class='lp_btn lp_btn_register'>
                        Register with No KYC
                    </span>
                </el-button>
                <el-button class='download lp_btn lp_btn_register' plain @click='jumpPage(1)'>
                    <span class='lp_btn lp_btn_register'>
                        Try Free Demo
                    </span>
                </el-button>
            </div>
        </div>

        <el-row class='imgCardContainer' :gutter='10' style='text-align: center; justify-content: center;'>
            <el-col
                :lg='14'
                :md='16'
                :sm='18'
                :xl='12'
                :xs='20'
            >
                <h1 class='green'>
                    What Can You Trade?
                </h1>
                <p>
                    As an event-driven trading platform, we hope traders can make informed trading decisions and seize all the important trading opportunities. Therefore, <span class='underline'>
                        Headline.net
                    </span> provides multiple financial instruments in the global markets and the variety will become more and more.
                </p>
            </el-col>
        </el-row>
        <imgCard />
    </div>
</template>

<script>
import imgCard from './nonEventImgCardCs.vue'
export default {
    name: 'CPI2',
    components: {
        imgCard,
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
                    window.open('https://t.me/Headline_admin')
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
.green{
  color: #4BD1A0;
}
.underline{
  text-decoration: underline;
}

.cpiPart1{
  background-color: #000;
  .background1{
    display: flex;
    .animals{
      width: 550px;
      transform: rotateY(180deg);
      filter: invert(0%) sepia(0%) saturate(0%) hue-rotate(68deg) brightness(103%) contrast(105%);
    }
    .bear{
      position: relative;
      right: 50px;
    }
    .bull{
      position: relative;
      right: 50px;
    }
    .bullContainer1{
      align-self: end;
    }
    .heading{
      text-align: center;
      padding: 120px 0;
      z-index: 999;
      h1{
        font-weight: bold;
        font-size: 80px;
        color: #fff;
      }
      p{
        font-size: 35px;
        text-align: center;
        color: #fff;
      }
      .yellow{
        color: #FFF86B;
      }
      .bold{
        font-size: 50px;
      }
      .signUpButton{
        justify-content: center;
        display: flex;
        padding: 40px 0 10px;
      }

      .terms{
        color: #FFF86B;
        font-size: 16px;
      }
      .terms:hover{
        color: #BB2423;
      }
      .part2Button{
        justify-content: center;
        display: flex;
        .part2Button{
          padding: 30px 0;
        }
      }
    }
  }
  .part2{
    display: flex;
    justify-content: center;
    padding: 20px 0;
    .challenge{
      align-self: center;
      text-align: center;
      align-self: center;
      h1{
        font-weight: 700;
        font-size: 43px;
      }
    }
    .animals{
      width: 100%;
    }
  }
  .cards{
    justify-content: center;
    .box-card{
      min-height: 270px;
      border-radius: 25px;
      h1{
        font-weight: bold;
        font-size: 35px;
      }
      p{
        padding-top: 20px;
        font-size: 21px;
        .bold{
          font-weight: bold;
        }
      }
    }
  }
}
.container1{
  text-align: center;
  padding: 20px 0;
}
.sub-heading{
  font-size: 20px;
  padding: 0 0 20px;
}
.row{
  justify-content: center;
  color: #000;
  word-wrap: break-word;
}
.youtubeVideo{
  text-align: -webkit-center;
  padding: 30px 0;
  display: flex;
}
.iframe-player{
  width: 100%;
  aspect-ratio: 16 / 9;
}

.containerPart2{
  text-align: center;
  p{
    font-size: 30px;
    padding-top: 50px;
    color: #fff;
  }
  .part2Button{
    padding: 40px 0;
  }
    .home{
      background-color: #fff !important;
      color: #4BD1A0;
      border-radius: 25px;
      width: 255px;
      height: 45px;
      font-weight: bold;
      font-size: 18px;
      border: 1px solid #4BD1A0;
    }
    .home:hover{
      background-color: #BB2423 !important;
      color: #fff;
      border: unset !important;
    }
    .download{
      background-color: #4BD1A0 !important;
      color: #fff;
      border-radius: 25px;
      width: 255px;
      height: 45px;
      font-weight: bold;
      font-size: 18px;
      border: unset !important;
    }
    .download:hover{
      background-color: #BB2423 !important;
    }
    .telegram{
      background-color: #3D9BE9 !important;
      color: #fff;
      border-radius: 25px;
      width: 255px;
      height: 45px;
    }
    .telegram:hover{
      background-color: unset !important;
      border: 1px solid #3D9BE9;
      color:#3D9BE9
    }
}

.imgCardContainer{
  background-color: #000;
  padding-top: 80px;
  h1{
    font-size: 56px;
  }
  p{
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    text-align: start;
    padding-top: 20px;
  }
}

@media screen and (max-width: 1715px) {
  .box-card{
    min-height: 323px !important;
  }
}
@media screen and (max-width: 1500px) {
  .heading{
    h1{
      font-size: 60px !important;
    }
    .bold{
      font-size: 30px !important;
    }
    p{
      font-size: 20px !important;
    }
  }
}
@media screen and (max-width: 1400px) {
    .cpiPart1{
    .background1{
      .animals{
        width: 450px;
      }
    }
  }
}
@media screen and (max-width: 1300px) {
    .cpiPart1{
    .background1{
      .animals{
        width: 430px;
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .box-card{
    min-height: 417px !important;
  }
}

@media screen and (max-width: 991px) {
  .heading{
    padding: unset !important;
  }
    .animals{
      width: 100%;
      max-width: 350px;
    }

  .bullContainer1{
    text-align: end;
  }

  .cardContainer{
    padding-top: 20px;
  }
  .box-card{
    height: auto !important;
    min-height: unset !important;
    h1{
      font-size: 32px !important;
    }
  }
  .part2{
    .animals{
      max-width: 400px;
    }
    .animalTwo{
      text-align: end !important;
    }
  }
}

@media screen and (max-width: 900px) {
  .part2Button{
        display: inline-grid;
        .home{
          margin-left: 10px;
        }
        .download{
          margin-top: 20px;
        }
        .telegram{
          margin-top: 20px;
        }
      }
}

@media screen and (max-width: 767px) {
  .imgCardContainer{
    h1 {
      font-size: 38px;
    }
  }
}

@media screen and (max-width: 650px) {

  .signUpButton{
    .startNow{
      width: 120px !important;
    }
  }
  .heading{
    h1{
      font-size: 35px !important;
    }
    .bold{
      font-size: 24px !important;
    }
    p{
      font-size: 14px !important;
    }
    .terms{
      font-size: 12px !important;
    }
  }

    .animals{
      max-width: 250px;
    }

  .part2{
    .challenge{
      h1{
        font-size: 30px !important;
      }
    }
    .animals{
      max-width: 300px;
    }
  }
}
</style>
