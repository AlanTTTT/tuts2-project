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
                        <h1 class='title1'>
                            Why Choose Headline?
                        </h1>
                        <h1>Unlock the Power of Trading</h1>
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
                    <h1>Web3-friendly</h1>
                    <p>
                        Headline.net allows traders to deposit and withdraw with all forms of currencies. Your funds will be kept in segregates accounts and all transactions are traceable.
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
                    <h1>Information Service</h1>
                    <p>Headline.net offers various ways to keep traders informed of latest global events and market information so that they can grab great trading opportunities.</p>
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
                    <h1>Community-based</h1>
                    <p>You can sign up with a telegram account, trade with headline telegram bot, receive timely market information or ask for any instruments you want in telegram group.</p>
                </el-card>
            </el-col>
        </el-row>
        <thirdLogin />
    </div>
</template>

<script>
import thirdLogin from '@/themeCommon/components/thirdLoginEvent6.vue'
export default {
    name: 'CPI2',
    components: {
        thirdLogin,
    },
    setup (props) {
        const jumpPage = (attr) => {
            switch (attr) {
                case 1 :
                    window.open('https://www.headline.net/en-US/home')
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

.cpiPart1{
  padding-bottom: 30px;
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
        color: #000;
      }
      .title1{
        color: #BB2423;
      }
    }
    .animals{
      width: 100%;
      filter: invert(100%) sepia(80%) saturate(4518%) hue-rotate(352deg) brightness(78%) contrast(100%);
    }
  }
  .cards{
    justify-content: center;
    .box-card{
      min-height: 270px;
      border-radius: 25px;
      h1{
        color: #BB2423;
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
