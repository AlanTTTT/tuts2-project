<template>
    <div class='partners'>
        <h1 class='partnersTitle'>
            Our Partners
        </h1>
        <el-row class='row partnersRow' :gutter='20'>
            <el-col
                class='col-logo'
                :lg='5'
                :md='6'
                :sm='8'
                :xl='4'
                :xs='24'
            >
                <img alt='Trading View' class='partnersLogo' src='../../../images/cpi1/TradingView.jpg' />
            </el-col>
            <el-col
                class='col-logo'
                :lg='5'
                :md='6'
                :sm='8'
                :xl='4'
                :xs='24'
            >
                <img alt='Magic Compass' class='partnersLogo' src='../../../images/cpi1/MagicCompass.jpg' />
            </el-col>
            <el-col
                class='col-logo'
                :lg='5'
                :md='6'
                :sm='8'
                :xl='4'
                :xs='24'
            >
                <img alt='Investing.com' class='partnersLogo' src='../../../images/cpi1/investing.jpg' />
            </el-col>
        </el-row>
    </div>
    <div class='testimonials'>
        <h1 class='testimonialsTitle'>
            Testimonials
        </h1>
        <el-row class='row' :gutter='20'>
            <el-col
                :lg='6'
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
                :lg='6'
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
                :lg='6'
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
.partners{
  text-align: center;
  padding: 50px 0;
  background-color: rgb(236,228,232);
  position: relative;
  .partnersTitle{
    font-size: 60px;
    font-weight: 800;
  }
  .partnersLogo{
    width: 100%;
  }
  .col-logo{
  align-self: center;
  }
}

.testimonials{
  text-align: center;
  position: relative;
  background: #fff;
  padding: 70px 0;

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

@media screen and (max-width: 767px) {
  .cardAdv{
    padding: 0 30px !important;
  }
  .cardAdv2{
    margin-top: 20px;
  }
  .money{
    font-size: 60px !important;
  }
  .partnersRow{
    padding-top: 50px;
    .partnersLogo{
      width: 250px !important;
    }
  }

}
</style>
