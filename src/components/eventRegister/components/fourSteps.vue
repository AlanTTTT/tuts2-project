<template>
    <div class='partners'>
        <h1 class='partnersTitle'>
            Three Steps to success
        </h1>
        <el-row class='row cardRow' :gutter='20'>
            <el-col
                class='col-logo'
                :lg='4'
                :md='4'
                :sm='4'
                :xl='4'
                :xs='24'
            >
                <img alt='step' class='step' src='../../../images/cpi1/g7-summit/step1.png' />
            </el-col>
            <el-col
                class='col-logo'
                :lg='1'
                :md='1'
                :sm='1'
                :xl='1'
                :xs='0'
            >
                <img alt='arrow' class='arrow' src='../../../images/cpi1/g7-summit/arrow.png' />
            </el-col>
            <el-col
                class='col-logo'
                :lg='4'
                :md='4'
                :sm='4'
                :xl='4'
                :xs='24'
            >
                <img alt='step' class='step' src='../../../images/cpi1/g7-summit/step2.png' />
            </el-col>
            <el-col
                class='col-logo'
                :lg='1'
                :md='1'
                :sm='1'
                :xl='1'
                :xs='0'
            >
                <img alt='arrow' class='arrow' src='../../../images/cpi1/g7-summit/arrow.png' />
            </el-col>
            <el-col
                class='col-logo'
                :lg='4'
                :md='4'
                :sm='4'
                :xl='4'
                :xs='24'
            >
                <img alt='step' class='step' src='../../../images/cpi1/g7-summit/step3.png' />
            </el-col>
        </el-row>
    </div>

    <div class='strategy'>
        <h1 class='testimonialsTitle'>
            Revolutionize Trading Strategy
        </h1>
        <el-row class='row' :gutter='20'>
            <el-col
                :lg='6'
                :md='6'
                :sm='6'
                style='text-align: left'
                :xl='6'
                :xs='24'
            >
                <img alt='bull' class='animals bull' src='../../../images/cpi1/g7-summit/bull.png' />
            </el-col>
            <el-col
                :lg='12'
                :md='12'
                :sm='12'
                :xl='12'
                :xs='24'
            >
                <iframe
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    allowfullscreen
                    class='testimonialsYoutube'
                    frameborder='0'
                    src='https://www.youtube.com/embed/qULycVp4mhQ'
                    title='YouTube video player'
                ></iframe>
            </el-col>
            <el-col
                :lg='6'
                :md='6'
                :sm='6'
                style='align-self:flex-end; text-align: right'
                :xl='6'
                :xs='24'
            >
                <img alt='bear' class='animals bear' src='../../../images/cpi1/g7-summit/bear.png' />
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

@media screen and (max-width: 767px) {
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
}
</style>
