<template>
    <div class='cpiPart1'>
        <div>
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
                        :sm='22'
                        :xl='12'
                        :xs='22'
                    >
                        <div class='challenge'>
                            <h1 class='red'>
                                Why Choose Headline?
                            </h1>
                            <h1 class='white'>
                                Unlock the Power of Trading
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
                    :md='8'
                    :sm='22'
                    :xl='6'
                    :xs='22'
                >
                    <el-card class='box-card'>
                        <h1 class='red'>
                            Web3-friendly
                        </h1>
                        <p>
                            Headline.net allows traders to deposit and withdraw with all forms of currencies. Your funds will be kept in segregates accounts and all transactions are traceable.
                        </p>
                    </el-card>
                </el-col>
                <el-col
                    class='cardContainer'
                    :lg='7'
                    :md='8'
                    :sm='22'
                    :xl='6'
                    :xs='22'
                >
                    <el-card class='box-card'>
                        <h1 class='red'>
                            Information Service
                        </h1>
                        <p>Headline.net offers various ways to keep traders informed of latest global events and market information so that they can grab great trading opportunities.</p>
                    </el-card>
                </el-col>
                <el-col
                    class='cardContainer'
                    :lg='7'
                    :md='8'
                    :sm='22'
                    :xl='6'
                    :xs='22'
                >
                    <el-card class='box-card'>
                        <h1 class='red'>
                            Community-based
                        </h1>
                        <p>You can sign up with a telegram account, trade with headline telegram bot, receive timely market information or ask for any instruments you want in telegram group.</p>
                    </el-card>
                </el-col>
            </el-row>
            <div class='containerPart2'>
                <p class='white content'>
                    Are you ready to take your trading <span class='red'>
                        next level?
                    </span>
                </p>
                <div class='part2Button'>
                    <el-button class='homeButton lp_btn lp_btn_register' plain @click='jumpPage(1)'>
                        <p class='lp_btn lp_btn_register'>
                            Register
                        </p>
                    </el-button>
                    <el-button class='downloadButton lp_btn lp_btn_infoDetail' plain @click='jumpPage(2)'>
                        <p class='lp_btn lp_btn_infoDetail'>
                            Detail
                        </p>
                    </el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CPI2',
    components: {
    },
    setup (props) {
        const jumpPage = (attr) => {
            switch (attr) {
                case 1 :
                    window.open('https://www.headline.net/en-US/register')
                    break
                case 2 :
                    window.open('https://www.headline.net/en-US/infoDetail?id=27967')
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
  color: #CB0D11;
}
.white{
  color: #fff;
}
.cpiPart1{
  padding: 50px 0;
  .background1{
    background: radial-gradient(circle at 50% 50%, #000000 0%, #7D1817 100%);
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
  .content{
    padding-top: 50px;
    font-size: 30px;
  }
  .part2Button{
    padding: 30px 0;
    justify-content: center;
    display: flex;
  }
  .part2Button{
        .homeButton{
          border: none;
          background-color: #fff !important;
          color: #BB2423 !important;
          border-radius: 25px !important;
          width: 150px;
          height: 50px;
          font-size: 20px;
        }
        .homeButton:hover{
          color: #fff !important;
          background-color: #BB2423 !important;
        }
        .downloadButton{
          border: none;
          color: #fff;
          background-color: #bb2423;
          border-radius: 25px !important;
          width: 150px;
          height: 50px;
          font-size: 20px;
        }
        .downloadButton:hover{
          color: #bb2423 !important;
          background-color: #fff !important;
        }
        .tgButton{
          border: none;
          color: #fff;
          background: #3D9BE9;
          border-radius: 25px !important;
          width: 150px;
          height: 50px;
          font-size: 20px;
        }
        .tgButton:hover{
          color: #bb2423 !important;
          background-color: #fff !important;
        }
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
  .background1{
    .animals{
      width: 100%;
      max-width: 350px;
    }
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
  .background1{
    .animals{
      max-width: 250px;
    }
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
@media screen and (max-width: 500px) {
  .containerPart2{
    .part2Button{
      display: inline-grid !important;
      .homeButton{
        margin-left: 10px;
      }
      .downloadButton{
        margin-top: 15px;
      }
      .tgButton{
        margin-top: 15px;
      }
    }
  }
}
</style>
