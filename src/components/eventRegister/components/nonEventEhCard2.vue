<template>
    <div class='cpiPart1'>
        <el-row class='imgCardContainer' :gutter='10' style='text-align: center; justify-content: center;'>
            <el-col
                :lg='14'
                :md='16'
                :sm='18'
                :xl='12'
                :xs='20'
            >
                <h1 class='red'>
                    What Can You Trade?
                </h1>
            </el-col>
        </el-row>
        <imgCard />
    </div>
</template>

<script>
import imgCard from './nonEventImgCardEh.vue'
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
.red{
  color: #BB2423;
}

.imgCardContainer{
  background-color: #fff;
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

@media screen and (max-width: 767px) {
  .imgCardContainer{
    h1 {
      font-size: 38px;
    }
  }
}
</style>
