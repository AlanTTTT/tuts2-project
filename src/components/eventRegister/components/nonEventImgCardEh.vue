<template>
    <div class='win'>
        <div class='container5'>
            <el-row class='cardContainer' style='justify-content: center;'>
                <el-col
                    :lg='6'
                    :md='11'
                    :sm='11'
                    style='justify-content: center; display: grid;'
                    :xl='5'
                    :xs='20'
                >
                    <img alt='change' class='card' src='../../../images/cpi1/non-event/csImg1.jpg' />
                    <el-card class='box-card'>
                        <el-link class='register lp_btn lp_btn_register' href='https://www.headline.net/en-US/register' target='_blank'>
                            Forex
                        </el-link>
                    </el-card>
                </el-col>
                <el-col
                    :lg='6'
                    :md='11'
                    :sm='11'
                    style='justify-content: center; display: grid;'
                    :xl='5'
                    :xs='20'
                >
                    <img alt='change' class='card' src='../../../images/cpi1/non-event/csImg2.jpg' />
                    <el-card class='box-card'>
                        <el-link class='register lp_btn lp_btn_register' href='https://www.headline.net/en-US/register' target='_blank'>
                            Commodities
                        </el-link>
                    </el-card>
                </el-col>
                <el-col
                    :lg='6'
                    :md='11'
                    :sm='11'
                    style='justify-content: center; display: grid;'
                    :xl='5'
                    :xs='20'
                >
                    <img alt='change' class='card' src='../../../images/cpi1/non-event/csImg3.jpg' />
                    <el-card class='box-card'>
                        <el-link class='register lp_btn lp_btn_register' href='https://www.headline.net/en-US/register' target='_blank'>
                            Crypto
                        </el-link>
                    </el-card>
                </el-col>
                <el-col
                    :lg='6'
                    :md='11'
                    :sm='11'
                    style='justify-content: center; display: grid;'
                    :xl='5'
                    :xs='20'
                >
                    <img alt='change' class='card' src='../../../images/cpi1/non-event/csImg4.jpg' />
                    <el-card class='box-card'>
                        <el-link class='register lp_btn lp_btn_register' href='https://www.headline.net/en-US/register' target='_blank'>
                            Indices
                        </el-link>
                    </el-card>
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
.win{
  background: #fff;
  overflow: hidden;
}
.el-card ::v-deep .el-card__body {
  padding: 0px;
}

.container5{
  background-color: #000;
  margin: 0 40px;
  .cardContainer{
    padding-top: 50px;
    .card{
      width:  286px;
      height: 335px;
      object-fit: cover;
    }
    .box-card{
      max-width: 286px;
      border-radius: unset !important;
      background-color: #BB2423;
      position: relative;
      left: 30px;
      bottom: 20px;
      border: unset !important;
      padding: unset !important;
      text-align: center;
      .register{
        font-size: 34px;
        color: #fff;
        text-align: center;
      }
    }
  }
  .buttonContainer{
    padding: 50px 0;
    font-size: 16px;
    .claim{
      background-color: #7D1817 !important;
      color: #fff;
      border-radius: 25px;
      width: 255px;
      height: 45px;
    }
    .claim:hover{
      background-color: #BB2423 !important;
    }
    .download{
      background-color: #000 !important;
      color: #fff;
      border-radius: 25px;
      width: 255px;
      height: 45px;
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

@media screen and (max-width: 1600px) {
  .row2{
      .content{
        padding-left: 200px !important;
      }
    }
}

@media screen and (max-width: 1200px) {
  .row2{
      .content{
        padding-left: 150px !important;
      }
    }
}

@media screen and (max-width: 991px) {
  .content{
    justify-content: center;
    display: grid;
    padding-left: unset !important;
  }
  .text{
    font-size: 22px !important;
  }
}
</style>
