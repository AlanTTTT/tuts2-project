<template>
    <el-carousel arrow='never' class='carousel1' :interval='6000'>
        <el-carousel-item class='item1'>
            <div class='container2'>
                <h1 class='title'>
                    Testimonials
                </h1>
                <el-row class='row' :gutter='20'>
                    <el-col
                        class='rowCol1'
                        :lg='5'
                        :md='7'
                        :sm='8'
                        :xl='5'
                        :xs='5'
                    >
                        <h1 class='col1Title'>
                            Our Client earn <span class='redTitle'>
                                62% profit
                            </span><br /> in just<br /><span class='redTitle'>
                                14 days
                            </span>
                        </h1>
                    </el-col>
                    <el-col
                        class='rowCol2'
                        :lg='8'
                        :md='9'
                        :sm='10'
                        :xl='8'
                        :xs='8'
                    >
                        <img alt='profit and loss' class='profitNloss' src='../../../images/cpi1/eucpi/img9Sc.png' />
                    </el-col>
                    <el-col
                        :lg='3'
                        :md='4'
                        :sm='5'
                        :xl='3'
                        :xs='5'
                    >
                        <video
                            id='video'
                            autoplay
                            class='iframe-player'
                            disablePictureInPicture
                            loop
                            muted
                            :poster='videoCover'
                            src='https://www.headline.net/wp-content/uploads/2023/06/new-live-income.mp4'
                        ></video>
                        <h1 class='videoTitle'>
                            Live recording
                        </h1>
                    </el-col>
                </el-row>
            </div>
        </el-carousel-item>
        <el-carousel-item class='item2'>
            <div class='testimonials'>
                <h1 class='testimonialsTitle'>
                    Testimonials
                </h1>
                <el-row class='row' :gutter='20'>
                    <el-col
                        :lg='7'
                        :md='8'
                        :sm='24'
                        :xl='6'
                        :xs='24'
                    >
                        <iframe
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                            allowfullscreen
                            class='testimonialsYoutube'
                            frameborder='0'
                            src='https://www.youtube.com/embed/74GGgYn7bHM'
                            title='YouTube video player'
                        ></iframe>
                        <div class='detailsContainer'>
                            <h2 class='name'>
                                Laura, UK
                            </h2>
                            <h2 class='job'>
                                Financal journalism
                            </h2>
                        </div>
                    </el-col>
                    <el-col
                        :lg='7'
                        :md='8'
                        :sm='24'
                        :xl='6'
                        :xs='24'
                    >
                        <iframe
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                            allowfullscreen
                            class='testimonialsYoutube'
                            frameborder='0'
                            src='https://www.youtube.com/embed/6s6H6Qabhp4'
                            title='YouTube video player'
                        ></iframe>
                        <div class='detailsContainer'>
                            <h2 class='name'>
                                Ron, USA
                            </h2>
                            <h2 class='job'>
                                Retired school teacher
                            </h2>
                        </div>
                    </el-col>
                    <el-col
                        :lg='7'
                        :md='8'
                        :sm='24'
                        :xl='6'
                        :xs='24'
                    >
                        <iframe
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                            allowfullscreen
                            class='testimonialsYoutube'
                            frameborder='0'
                            src='https://www.youtube.com/embed/bHg-vHN-UNY'
                            title='YouTube video player'
                        ></iframe>
                        <div class='detailsContainer'>
                            <h2 class='name'>
                                Brigitte, Germany
                            </h2>
                            <h2 class='job'>
                                Housewife
                            </h2>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </el-carousel-item>
    </el-carousel>
    <el-carousel arrow='never' class='carousel2' :interval='600000' style='height: 600px'>
        <el-carousel-item class='item3' style='height: 600px'>
            <h1 class='col1Title'>
                Our Client earn<br /><span class='redTitle'>
                    62% profit
                </span><br /> in just<br /><span class='redTitle'>
                    14 days
                </span>
            </h1>
        </el-carousel-item>
        <el-carousel-item class='item4' style='height: 600px'>
            <img alt='profit and loss' class='profitNloss' src='../../../images/cpi1/eucpi/img9Sc.png' />
        </el-carousel-item>
        <el-carousel-item class='item5' style='height: 600px'>
            <video
                id='video'
                autoplay
                class='iframe-player'
                disablePictureInPicture
                loop
                muted
                :poster='videoCover'
                src='https://www.headline.net/wp-content/uploads/2023/06/new-live-income.mp4'
            ></video>
            <h1 class='videoTitle'>
                Live recording
            </h1>
        </el-carousel-item>
    </el-carousel>
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
.row{
  justify-content: center;
}

.testimonials{
  text-align: center;
  position: relative;
  background: #fff;
  padding: 20px 0;

  .testimonialsTitle{
    padding: 20px 0;
    font-size: 60px;
    font-weight: 800;
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
.container2{
  padding: 50px 0;
  .title{
    text-align: center;
    font-weight: bold;
    font-size: 50px;
  }
  .row{
    .rowCol1{
      align-self: center;
      .col1Title{
          font-weight: bold;
          font-size: 40px;
          text-align: center;
          line-height: 1.5em;
        .redTitle{
          color: #D00B22;
          font-size: 65px;
        }
      }
    }

    .rowCol2{
      align-self: center;
      .profitNloss{
        width: 100%;
      }
    }
    .iframe-player{
      width: 100%;
      aspect-ratio: auto;
    }
    .videoTitle{
      color: #000;
      font-size: 30px;
      text-align: center;
    }
  }
}
.carousel1{
    height: 600px;
  }
  .item1{
    height: 600px;
  }
  .item2{
    height: 600px;
  }
::v-deep .el-carousel__button {
      background-color: #000 !important;
    }
    .carousel2{
      display: none;
    }
@media screen and (max-width: 1590px) {
.container2{
  .row{
    .rowCol1{
      align-self: center;
      .col1Title{
          font-size: 35px !important;
          .redTitle{
            font-size: 55px !important;
          }
        }
      }
    }
  }
  .videoTitle{
    font-size: 25px !important;
  }
}
@media screen and (max-width: 1360px) {
  .carousel1{
    height: 500px !important;
  }
  .item1{
    height: 500px !important;
  }
  .item2{
    height: 500px !important;
  }
.container2{
  .row{
    .rowCol1{
      align-self: center;
      .col1Title{
          font-size: 30px !important;
          .redTitle{
            font-size: 45px !important;
          }
        }
      }
    }
  }
  .videoTitle{
    font-size: 20px !important;
  }
}

@media screen and (max-width: 991px) {
        .carousel1{
            display: none;
        }
        .carousel2{
          display: unset !important;
          .item3{
            padding-top: 50px;
            .col1Title{
              font-weight: bold;
              font-size: 30px;
              text-align: center;
              line-height: 1.5em;
            .redTitle{
              color: #D00B22;
              font-size: 45px;
              }
            }
          }
          .item4{
            padding-top: 50px;
            text-align: center;
            .profitNloss{
              max-width: 425px;
            }
          }
          .item5{
            text-align: center;
            padding-top: 30px;
            .iframe-player{
              max-height: 200px;
              aspect-ratio: auto;
            }
            .videoTitle{
              color: #000;
              font-size: 20px;
              text-align: center;
            }
          }
      }
  }
  @media screen and (max-width: 500px) {
      .item4{
            .profitNloss{
              max-width: 350px !important;
            }
      }
  }
</style>
