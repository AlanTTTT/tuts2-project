<template>
    <div class='layout1'>
        <el-row class='row1' style='justify-content: center;'>
            <el-col
                :lg='6'
                :md='6'
                :sm='24'
                style='text-align: start;'
                :xl='6'
                :xs='24'
            >
                <img alt='bear' class='animals' src='../../../images/cpi1/bull.png' />
            </el-col>
            <el-col
                class='challenge'
                :lg='12'
                :md='12'
                :sm='22'
                style='justify-content: center;'
                :xl='12'
                :xs='22'
            >
                <div class='headingContainer'>
                    <h1 class='heading'>
                        Unmissable opportunities at the NFP Release
                    </h1>
                    <p class='text'>
                        Important report such as the CPI can cause fluctuations in the markets, creating opportunities for traders to capitalize on short-term price movements.
                    </p>
                </div>
            </el-col>
            <el-col
                class='animalTwo'
                :lg='6'
                :md='6'
                :sm='24'
                style='text-align: end;'
                :xl='6'
                :xs='24'
            >
                <img alt='bull' class='animals' src='../../../images/cpi1/bear.png' />
            </el-col>
        </el-row>

        <el-row class='row' :gutter='30'>
            <el-col
                :lg='10'
                :md='12'
                :sm='24'
                :xl='8'
                :xs='24'
            >
                <div class='col'>
                    <el-row :gutter='10'>
                        <el-col
                            :lg='10'
                            :md='12'
                            :sm='12'
                            :xl='10'
                            :xs='12'
                        >
                            <img alt='index' class='layoutImg' src='../../../images/cpi1/g7-summit/index.jpg' />
                        </el-col>
                        <el-col
                            class='reportTexting'
                            :lg='14'
                            :md='12'
                            :sm='12'
                            :xl='14'
                            :xs='12'
                        >
                            <h1 class='reportTitle'>
                                Volatility in the markets
                            </h1>
                            <p>NFP reports reflect markets situlation, creating opportunities for traders to capitalize on short-term price movements.</p>
                        </el-col>
                    </el-row>
                    <div class='buttonContainer'>
                        <el-button class='readMore lp_btn' plain text @click='open'>
                            <p class='readMore lp_btn'>
                                Read More
                            </p>
                        </el-button>
                    </div>
                </div>
            </el-col>
            <el-col
                class='card2'
                :lg='10'
                :md='12'
                :sm='24'
                :xl='8'
                :xs='24'
            >
                <div class='col col2'>
                    <el-row :gutter='10'>
                        <el-col
                            :lg='10'
                            :md='12'
                            :sm='12'
                            :xl='10'
                            :xs='12'
                        >
                            <img alt='US Dollar' class='layoutImg' src='../../../images/cpi1/g7-summit/usFlag.jpg' />
                        </el-col>
                        <el-col
                            class='reportTexting'
                            :lg='14'
                            :md='12'
                            :sm='12'
                            :xl='14'
                            :xs='12'
                        >
                            <h1 class='reportTitle'>
                                Exchange rate movements
                            </h1>
                            <p>NFP reports include some of the world's largest economies, so any significant announcements or agreements made during the summit could impact exchange rates, providing opportunities for currency traders.</p>
                        </el-col>
                    </el-row>
                    <div class='buttonContainer'>
                        <el-button class='readMore lp_btn' plain text @click='open1'>
                            <p class='readMore lp_btn'>
                                Read More
                            </p>
                        </el-button>
                    </div>
                </div>
            </el-col>
        </el-row>
        <el-row class='row' :gutter='30'>
            <el-col
                :lg='10'
                :md='12'
                :sm='24'
                :xl='8'
                :xs='24'
            >
                <div class='col card1'>
                    <el-row :gutter='10'>
                        <el-col
                            :lg='10'
                            :md='12'
                            :sm='12'
                            :xl='10'
                            :xs='12'
                        >
                            <img alt='gold' class='layoutImg' src='../../../images/cpi1/g7-summit/gold.jpg' />
                        </el-col>
                        <el-col
                            class='reportTexting'
                            :lg='14'
                            :md='12'
                            :sm='12'
                            :xl='14'
                            :xs='12'
                        >
                            <h1 class='reportTitle'>
                                Industry-specific trends
                            </h1>
                            <p>The NFP report often addresses major economic, particularly in commodities market and inflation, which could lead to trends in specific industries. Traders who are knowledgeable about these industries could benefit from the opportunities presented.</p>
                        </el-col>
                    </el-row>
                    <div class='buttonContainer'>
                        <el-button class='readMore lp_btn' plain text @click='open3'>
                            <p class='readMore lp_btn'>
                                Read More
                            </p>
                        </el-button>
                    </div>
                </div>
            </el-col>
            <el-col
                class='card2'
                :lg='10'
                :md='12'
                :sm='24'
                :xl='8'
                :xs='24'
            >
                <div class='col col2 card1'>
                    <el-row :gutter='10'>
                        <el-col
                            :lg='10'
                            :md='12'
                            :sm='12'
                            :xl='10'
                            :xs='12'
                        >
                            <img alt='crypto' class='layoutImg' src='../../../images/cpi1/g7-summit/cryptocurrencies.jpg' />
                        </el-col>
                        <el-col
                            class='reportTexting'
                            :lg='14'
                            :md='12'
                            :sm='12'
                            :xl='14'
                            :xs='12'
                        >
                            <h1 class='reportTitle'>
                                Cryptocurrencies
                            </h1>
                            <p>NFP can also have an impact on cryptocurrencies. As cryptocurrency trading becomes more mainstream, regulators are increasingly looking to establish guidelines for their use. The report may reveal some indication like: taxation, regulation, and adoption of cryptocurrencies, which could have an impact on the value of these assets. </p>
                        </el-col>
                    </el-row>
                    <div class='buttonContainer'>
                        <el-button class='readMore lp_btn' plain text @click='open4'>
                            <p class='lp_btn'>
                                Read More
                            </p>
                        </el-button>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>

    <span class='insights'>
        <h1 class='title'>
            Increase your trading returns <br />
            with insights from NFP
        </h1>
        <h1 class='red underline title'>
            $3,585 in 2 days
        </h1>
        <el-row class='row' :gutter='30'>
            <el-col
                :lg='6'
                :md='6'
                :sm='6'
                style='align-self: flex-end; display: inline-flex;'
                :xl='6'
                :xs='24'
            >
                <img alt='index' class='layoutImg people' src='../../../images/cpi1/g7-summit/impressed.jpg' />
            </el-col>

            <el-col
                :lg='12'
                :md='12'
                :sm='12'
                style='align-self: center;'
                :xl='12'
                :xs='24'
            >
                <p class='record'>
                    26-28 April, 2023
                </p>
                <img alt='index' class='layoutImg' src='../../../images/cpi1/nfp/record-3.jpg' />
            </el-col>

            <el-col
                :lg='6'
                :md='6'
                :sm='6'
                style='align-self: flex-end;  display: inline-flex; justify-content: flex-end;'
                :xl='6'
                :xs='24'
            >
                <img alt='index' class='layoutImg people people2' src='../../../images/cpi1/g7-summit/holdingMoney.jpg' />
            </el-col>
        </el-row>
    </span>
</template>

<script>
import { h, ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
export default {
    name: 'Cpi1',
    components: {
        ElMessage,
        ElMessageBox,
    },
    setup () {
        const open = () => {
            ElMessageBox({
                title: 'Message',
                message: h('p', null, [
                    h('span', null, "Volatility in the markets refers to the degree of variation or fluctuation in the prices of financial instruments such as stocks, bonds, commodities, and currencies. It is a measure of the market's instability or uncertainty during a specific period. Major events, including the G7 Summit, can indeed have a significant impact on market volatility."),
                    h('br', null,),
                    h('span', null, "The G7 Summit is an annual meeting of leaders from seven of the world's largest advanced economies, including the United States, Canada, the United Kingdom, France, Germany, Italy, and Japan. During this summit, global economic and political issues are discussed, and important decisions are made. As a result, the outcomes and announcements made during the G7 Summit can have far-reaching implications for financial markets."),
                    h('br', null,),
                    h('span', null, 'When the market participants, such as traders, investors, and financial institutions, anticipate or react to the decisions or statements made at the G7 Summit, it can lead to increased volatility. This is because market participants adjust their positions, buying or selling assets based on their expectations of how the decisions or statements will impact the economy and individual companies.'),
                    h('br', null,),
                    h('span', null, 'For example, if the leaders at the G7 Summit announce policies that are favorable for economic growth or trade relations, it may boost investor confidence and lead to increased buying activity in the markets. Conversely, if there are negative announcements, such as trade tensions or geopolitical uncertainties, it can lead to a decline in market sentiment and increased selling pressure.'),
                    h('br', null,),
                    h('span', null, 'Increased volatility in the markets creates opportunities for traders to capitalize on short-term price movements. Traders who specialize in short-term trading strategies, such as day trading or swing trading, may seek to profit from the rapid price fluctuations that occur during these periods. They can take advantage of the volatility by making quick buy or sell decisions based on technical analysis, market trends, or news releases related to the G7 Summit.'),
                    h('br', null,),
                    h('span', null, 'It is important to note that trading during periods of high volatility also carries increased risk. Volatile markets can be unpredictable, and prices can change rapidly, leading to potential losses if trades are not executed carefully. Traders need to have a solid understanding of market dynamics, risk management techniques, and a well-defined trading strategy to navigate these volatile periods effectively.'),
                    h('br', null,),
                    h('span', null, 'Overall, major events like the G7 Summit have the potential to create fluctuations in the markets, and traders can seize opportunities during these periods. However, it is crucial to approach trading with caution, taking into account the inherent risks associated with volatile market conditions.'),
                ]),
                confirmButtonClass: 'btnConfirm',
            })
        }
        const open1 = () => {
            ElMessageBox({
                title: 'Message',
                message: h('p', null, [
                    h('p', null, 'Exchange rate movements refer to the fluctuations in the value of one currency relative to another in the foreign exchange market. Major events such as the G7 Summit can have a significant impact on exchange rates due to the potential policy decisions, economic announcements, or agreements made during the summit.'),
                    h('br', null,),
                    h('p', null, 'The G7 countries, which consist of the United States, Canada, the United Kingdom, France, Germany, Italy, and Japan, are influential players in the global economy. Therefore, any significant announcements or agreements made during the G7 Summit can have far-reaching implications for currency markets.'),
                    h('br', null,),
                    h('p', null, 'Exchange rates are influenced by a variety of factors, including interest rates, economic growth, inflation, political stability, and market sentiment. When leaders at the G7 Summit make statements or reach agreements related to these factors, it can create volatility in currency markets and lead to changes in exchange rates.'),
                    h('br', null,),
                    h('p', null, 'For example, if the G7 leaders announce coordinated efforts to stimulate economic growth, it can lead to expectations of increased investment and higher interest rates in the countries involved. These expectations can attract foreign investors and cause an appreciation in the currency of those countries.'),
                    h('br', null,),
                    h('p', null, 'On the other hand, if there are disagreements or tensions among G7 countries regarding trade policies or geopolitical issues, it can create uncertainty and lead to a depreciation in their currencies. Market participants may perceive higher risks associated with investing in these currencies, leading to selling pressure.'),
                    h('br', null,),
                    h('p', null, 'Currency traders closely monitor the announcements and outcomes of the G7 Summit to assess the potential impact on exchange rates. They analyze the statements made by leaders, economic indicators, and other relevant factors to make informed trading decisions.'),
                    h('br', null,),
                    h('p', null, 'Currency traders can capitalize on exchange rate movements during and after the G7 Summit by taking positions in currency pairs. For example, if a trader expects the currency of a G7 country to appreciate based on positive outcomes from the summit, they may buy that currency against another currency that is expected to weaken.'),
                    h('br', null,),
                    h('p', null, 'It is important to note that trading currencies involves inherent risks. Exchange rates can be highly volatile, and unexpected developments can lead to rapid and significant price movements. Currency traders need to have a thorough understanding of the factors influencing exchange rates, employ risk management strategies, and utilize appropriate trading techniques to navigate the foreign exchange market effectively.'),
                    h('br', null,),
                    h('p', null, 'In summary, the G7 Summit can impact exchange rates due to the potential policy decisions, economic announcements, or agreements made by the participating countries. Currency traders actively monitor these events to identify opportunities for profit by capitalizing on exchange rate movements. However, it is crucial to exercise caution and manage risks when engaging in currency trading, as the market can be highly volatile.'),
                ]),
                confirmButtonClass: 'btnConfirm',
            })
        }
        const open3 = () => {
            ElMessageBox({
                title: 'Message',
                message: h('p', null, [
                    h('p', null, 'The G7 Summit, being a gathering of leaders from major global economies, addresses a wide range of issues, including climate change, energy policies, trade agreements, and more. These discussions and decisions can have a profound impact on specific industries, creating trends and opportunities for traders who possess industry-specific knowledge.'),
                    h('br', null,),
                    h('p', null, 'Here are some examples of how the G7 Summit can influence industry-specific trends:'),
                    h('br', null,),
                    h('p', null, 'Renewable Energy: As the leaders at the G7 Summit focus on climate change and sustainable development, there is often an emphasis on renewable energy sources and reducing greenhouse gas emissions. This can lead to increased investments in renewable energy technologies such as solar, wind, and hydroelectric power. Traders who are well-versed in the renewable energy sector can identify potential investment opportunities and benefit from the growing demand for clean energy solutions.'),
                    h('br', null,),
                    h('p', null, 'Environmental Technologies: The discussions around climate change and environmental protection at the G7 Summit can also promote the development and adoption of environmental technologies. These technologies encompass a wide range of industries, including waste management, water treatment, air pollution control, and sustainable transportation. Traders who specialize in these sectors can leverage their knowledge to identify companies with innovative technologies and products that are likely to benefit from government support or policy changes resulting from the summit.'),
                    h('br', null,),
                    h('p', null, 'International Trade: The G7 Summit often addresses trade policies, tariffs, and market access. Discussions related to trade agreements, protectionism, or regional economic integration can impact specific industries depending on the sectors involved. For example, if there are indications of easing trade tensions or the potential for new trade agreements, it can benefit industries heavily reliant on international trade, such as manufacturing, agriculture, or technology. Traders who understand the dynamics of these industries and track the progress of trade negotiations can identify investment opportunities accordingly.'),
                    h('br', null,),
                    h('p', null, 'Financial Services: The decisions made at the G7 Summit can also impact the financial services industry. Discussions related to banking regulations, fiscal policies, or economic stability can influence the performance of banks, insurance companies, or other financial institutions. Traders with expertise in the financial sector can analyze the potential implications of policy changes and make informed investment decisions.'),
                    h('br', null,),
                    h('p', null, "It is worth noting that industry-specific trends arising from the G7 Summit are not limited to the examples mentioned above. The nature and scope of discussions can vary from summit to summit, depending on the prevailing global issues and priorities. Traders who closely follow the summit's outcomes, analyze the potential impact on specific industries, and stay informed about relevant news and developments can identify opportunities and make informed trading decisions."),
                    h('br', null,),
                    h('p', null, 'However, it is important to remember that trading carries risks, and traders should exercise due diligence, conduct thorough research, and employ risk management strategies to mitigate potential losses. Industry-specific trends resulting from the G7 Summit can create opportunities, but traders should approach them with a well-defined trading plan and a comprehensive understanding of the associated risks.'),
                ]),
                confirmButtonClass: 'btnConfirm',
            })
        }
        const open4 = () => {
            ElMessageBox({
                title: 'Message',
                message: h('p', null, [
                    h('p', null, 'During the G7 Summit can have implications for cryptocurrencies. As the popularity and adoption of cryptocurrencies continue to grow, regulators around the world, including those from G7 countries, are actively considering how to address various aspects related to their use, including taxation, regulation, and adoption.'),
                    h('br', null,),
                    h('p', null, 'Here are some ways in which G7 Summit decisions can impact cryptocurrencies:'),
                    h('br', null,),
                    h('p', null, 'Regulation and Compliance: Cryptocurrencies operate in a decentralized and often cross-border manner, posing challenges for regulators who seek to ensure consumer protection, prevent illegal activities, and maintain financial stability. Discussions during the G7 Summit may focus on establishing guidelines and frameworks for regulating cryptocurrencies. The adoption of consistent regulatory measures across G7 countries can bring clarity and legitimacy to the cryptocurrency market, potentially boosting investor confidence and attracting institutional investors.'),
                    h('br', null,),
                    h('p', null, 'Taxation: Taxation policies regarding cryptocurrencies are still evolving in many jurisdictions. The G7 leaders may discuss approaches to taxation, such as how to treat cryptocurrencies for capital gains tax purposes or how to ensure compliance with anti-money laundering (AML) and know-your-customer (KYC) regulations. Decisions or agreements reached during the summit regarding taxation of cryptocurrencies can impact the overall market sentiment and investor behavior.'),
                    h('br', null,),
                    h('p', null, 'Central Bank Digital Currencies (CBDCs): The G7 Summit could also include discussions on central bank digital currencies. Several central banks around the world, including those from G7 countries, are exploring the possibility of issuing their own digital currencies. Decisions or progress made in this area can have an impact on the broader cryptocurrency market. The introduction of CBDCs may bring competition to existing cryptocurrencies, influence their adoption rates, and potentially affect their value.'),
                    h('br', null,),
                    h('p', null, "Market Sentiment: The G7 Summit can influence market sentiment regarding cryptocurrencies. Statements or discussions around the recognition of cryptocurrencies as a legitimate asset class or their potential role in the future of finance can significantly impact investor confidence. Positive sentiment generated by the summit's outcomes may lead to increased demand for cryptocurrencies, potentially driving up their value. Conversely, negative sentiment or regulatory concerns could lead to a decline in cryptocurrency prices."),
                    h('br', null,),
                    h('p', null, 'It is important to note that the cryptocurrency market is highly volatile, and the impact of G7 Summit decisions on cryptocurrencies may vary. Traders and investors in the cryptocurrency space should closely monitor the outcomes of the summit, follow regulatory developments, and stay informed about any policy decisions or statements that could affect the industry. Additionally, risk management strategies and a thorough understanding of the cryptocurrency market are crucial when engaging in cryptocurrency trading or investing.'),
                    h('br', null,),
                    h('p', null, 'As with any investment, it is essential to conduct thorough research, understand the associated risks, and consider seeking professional advice before making any financial decisions related to cryptocurrencies.'),
                ]),
                confirmButtonClass: 'btnConfirm',
            })
        }
        const jumpPage = (attr) => {
            switch (attr) {
                case 1 :
                    window.open('https://www.headline.net/en-US/register')
                    break
            }
        }
        return {
            open,
            open1,
            open3,
            open4,
            jumpPage,
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/sass/mixin.scss';
.red{
    color: #FF4040;
  }
.layout1{
  text-align: center;
  padding: 40px 0;
  position: relative;
  background: #fff;
}
.heading{
  font-size: 70px;
  font-weight: bold;
  color: #000;
}
.text{
  font-size: 18px;
}
.row{
  justify-content: center;
  padding-top: 30px;
}

.col{
  background: rgb(236,228,232);
  text-align: left;
  min-height: 353px !important;
}
.layoutImg{
  width: 100%;
}

.buttonContainer{
  padding: 30px 0;
  justify-content: center;
  display: flex;
}
.readMore{
  background-color: #000 !important;
  color: #fff;
  border-radius: unset !important;
}
.readMore:hover{
  background-color: #fff !important;
  border: 1px solid #000;
  color:#000
}
.reportTexting{
  align-self: center;
  padding: 0 20px !important;
  p{
    color: #000;
    font-size: 15px;
  }
}
.reportTitle{
  font-size: 24px;
  color: #000;
}

.money{
  width: 95px;
}

.row1{
  .animals{
    width: 100%;
  }
}
.cfd{
  text-align: center;
  padding: 40px 0;
  background-color: rgb(236,228,232);
  position: relative;

  .content{
    text-align: start;
  }
  .rewards{
    font-size: 26px;
  }
  .guide{
    font-size: 30px;
  }
  .profits{
    font-size: 50px;
  }
  .info{
    font-size: 40px;
    line-height: normal;
  }
  .yellow{
    color: #FFC92C;
  }
  .link{
    font-size: 23px;
  }
  .remind{
    font-size: 23px;
  }
  .bold{
    font-weight: bold;
    font-size: 30px;
  }
  .buttonContainer{
    justify-content: left;
    .claim{
        background-color: #000 !important;
        color: #fff;
        border-radius: unset !important;
        width: 200px;
        font-size: 25px;
        height: 50px;
        font-weight: bold;
    }
    .claim:hover{
        background-color: #fff !important;
        border: 1px solid #000;
        color:#000
    }
  }
}

.underline{
  text-decoration: underline;
}

.insights{
  text-align: center;
  padding: 40px 0 0;
  background-color: #fff;
  position: relative;
  .title{
    font-size: 60px;
    font-weight: 700;
  }
  .record{
    text-align: end;
    font-size: 20px;
  }
}
@media screen and (max-width: 1600px) {
  .headingContainer{
    .heading{
      font-size: 50px;
    }
  }
}
@media screen and (max-width: 1228px) {
  .layout1{
    .card1{
      min-height: 375px !important;
    }
  }
}

@media screen and (max-width: 1100px) {
  .headingContainer{
    .heading{
      font-size: 40px;
    }
  }
}

@media screen and (max-width: 1040px) {
  .layout1{
    .card1{
      min-height: 420px !important;
    }
  }
}

@media screen and (max-width: 991px) {
  .row1{
  .animals{
    max-width: 300px;
  }
  .challenge{
    .heading{
      font-size: 40px;
    }
  }
}
  .layout1{
    .heading{
      font-size: 50px;
    }
    .text{
      font-size: 16px;
    }
    .card2{
      margin-top: 30px;
    }
  }
  .cfd{
    .heading{
      font-size: 55px;
    }
    .rewards{
      font-size: 22px;
    }
    .info{
      font-size: 40px;
    }
    .link{
      font-size: 18px;
    }
    .remind{
      font-size: 18px;
    }
    .claim{
      width: 180px !important;
    }
  }
}

@media screen and (max-width: 767px) {
  .cfd{
    .content{
      padding: 0 30px !important;
    }
  }
  .insights{
    .title{
      font-size: 45px !important;
    }
    .people{
      max-width: 250px;
    }
  }
}

</style>
