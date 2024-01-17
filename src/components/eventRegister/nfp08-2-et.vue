<template>
    <div id='eventReg' ref='content' class='register'>
        <topNav />
        <div class='part1Container'>
            <el-row class='part1Row' :gutter='10' style='justify-content: center;'>
                <el-col
                    :lg='16'
                    :md='16'
                    :sm='22'
                    :xl='16'
                    :xs='22'
                >
                    <h1>
                        Uncover Valuable Insights For Your Trading Strategy
                    </h1>
                    <p class='text'>
                        Through Our Expert Analysis Of The Influential <span>U.S. Nonfarm Payrolls</span>
                    </p>
                </el-col>
                <el-col
                    :lg='4'
                    :md='5'
                    :sm='22'
                    style='align-self: center;'
                    :xl='4'
                    :xs='22'
                >
                    <el-button class='learnButton lp_btn lp_btn_infoDetail' plain text @click='jumpPage(1)'>
                        <p class='lp_btn lp_btn_infoDetail'>
                            Watch Our Analysis
                        </p>
                    </el-button>
                </el-col>
            </el-row>
        </div>

        <div class='container'>
            <el-row class='row1' :gutter='40' style='justify-content: space-evenly'>
                <el-col
                    class='col1Container'
                    :lg='16'
                    :md='24'
                    :sm='24'
                    style='align-self: center;'
                    :xl='16'
                    :xs='24'
                >
                    <div class='containerDiv'>
                        <h1 class='titleContent'>
                            <span>Guess The Nonfarm Payrolls</span>
                        </h1>
                        <div class='textContainer'>
                            <p class='text1'>
                                Uncover Valuable Insights For Your Trading Strategy
                            </p>
                            <p class='text2'>
                                Through Our Expert Analysis Of The Influential U.S. Nonfarm Payrolls
                            </p>
                        </div>
                    </div>
                    <h1 class='title'>
                        <span>Are</span><br /><span>You</span><br /><span>Ready?</span>
                    </h1>
                    <div class='containerDiv2'>
                        <span class='span1'>
                            <p class='content1'>
                                Follow us for updates:
                            </p>
                            <div class='newDiv'>
                                <el-link class='link lp_btn lp_btn_facebook' href='https://www.facebook.com/headline.offical/' :underline='false'>
                                    Facebook
                                </el-link><el-divider class='line1' direction='vertical' />
                                <el-link class='link lp_btn lp_btn_youtube' href='https://www.youtube.com/@Headline.net_offical' :underline='false'>
                                    YouTube
                                </el-link><el-divider class='line1' direction='vertical' />
                                <el-link class='link lp_btn lp_btn_register' href='https://www.headline.net/en-US/register' :underline='false'>
                                    <span>JOIN US</span>
                                </el-link>
                            </div>
                        </span>
                    </div>
                </el-col>
                <el-col
                    class='col2Container'
                    :lg='6'
                    :md='22'
                    :sm='22'
                    style='align-self: center; padding: 30px 30px;'
                    :xl='6'
                    :xs='22'
                >
                    <div class='container2'>
                        <p class='text1'>
                            The next NFP data release is<br />scheduled for:
                        </p>
                        <p class='text2'>
                            <span>August 4, 2023,<br />at 8:30 AM Eastern Time (ET)</span>
                        </p>
                        <div class='contentContainer'>
                            <div
                                class='content'
                                :class="inAnimation ? 'anim' : ''"
                                @animationend='inAnimation = false'
                            >
                                <div class='pageTitle'>
                                    <h5 v-if='openAccountType === 1' class='opentype1'>
                                        {{ $t("register.businessOpen") }}
                                    </h5>
                                </div>
                                <div class='to-login'>
                                    <p>Register to watch our analysis</p>
                                </div>
                                <third-login v-if='openAccountType === 0' />
                                <div
                                    v-if='companyCountryVisible'
                                    class='businessOpen'
                                    :class='{ openType2: openAccountType === 1 }'
                                    @click='changeOpentype'
                                >
                                    <a class='businessOpenBtn' href='javascript:;'>
                                        {{
                                            openAccountType === 0
                                                ? $t("register.businessOpen")
                                                : $t("register.openAccount")
                                        }}
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class='btnContainer'>
                            <el-button class='learnButton lp_btn lp_btn_infoDetail' plain text @click='jumpPage(1)'>
                                <p class='lp_btn lp_btn_infoDetail'>
                                    Watch Our Analysis
                                </p>
                            </el-button>
                        </div>
                        <p class='text3'>
                            Investors are weighing whether the Federal Reserve and the European Central Bank have <span>ended their interest rate hike cycles.</span>
                        </p>
                        <img alt='arrow' class='arrow' src='../../images/cpi1/nfp08/arrow2.png' />
                        <p class='text4'>
                            <span class='lp_btn lp_btn_register' @click='jumpPage(2)'>
                                Register now
                            </span>and check out our analysis of the Nonfarm Payrolls
                        </p>
                    </div>
                </el-col>
            </el-row>
        </div>
        <!--<userLayoutFooter />-->
        <router-view />
        <Loading :show='loading' />
        <AwsCaptcha ref='awsCaptchaRef' @onCallback='handleCaptcha' />
        <partner />
        <footerMenu />
    </div>
</template>

<script>
import partner from './components/nfp08EtContent2.vue'
import userLayoutFooter from '@planspc/components/userLayoutFooter'
import Schema from 'async-validator'
// import Top from '@/components/top'
import Loading from '@/components/loading'
import CheckCode from '@/components/form/checkCode'
import compInput from '@planspc/components/form/input'
import areaInputPc from '@/components/form/areaInputPc'
import AwsCaptcha from '@/components/form/awsCaptcha'
// import CurrencyAction from './components/currencyAction'
// import TradeTypeAction from './components/tradeTypeAction'
import {
    getDevice,
    getQueryVariable,
    setToken,
    getArrayObj,
    sessionGet,
    localSet,
    guid,
    getCookie,
    getDefaultZoneIndex,
    pwdReg
} from '@/utils/util'
import { register, checkUserStatus } from '@/api/user'
import { verifyCodeSend } from '@/api/base'
import { useStore } from 'vuex'
import {
    reactive,
    toRefs,
    computed,
    getCurrentInstance,
    onMounted,
    onUnmounted,
    watch,
    ref,
    h
} from 'vue'
import md5 from 'js-md5'
import { useRoute, useRouter } from 'vue-router'
import { Toast } from 'vant'
import { unescape } from 'lodash'
import RuleFn, { checkCustomerExistRule } from './rule'
import { setQuoteService } from '@/plugins/socket/socket'
// import { pageConfig } from '@/api/wpApi'
import { useI18n } from 'vue-i18n'
import hooks from './hooks'
import { ElMessage, ElMessageBox } from 'element-plus'
import thirdLogin from '@/themeCommon/components/thirdLoginEvent.vue'
import thirdLoginButton from '@/themeCommon/components/thirdLoginEvent2.vue'
import { CaretBottom, CaretTop } from '@element-plus/icons'
import topNav from '@planspc/layout/topNav'
import footerMenu from '@planspc/modules/footer/footer'
import { firebaseAnalytics } from '@/utils/firebase'

export default {
    components: {
        areaInputPc,
        CheckCode,
        Loading,
        compInput,
        userLayoutFooter,
        thirdLogin,
        CaretBottom,
        CaretTop,
        AwsCaptcha,
        ElMessage,
        ElMessageBox,
        topNav,
        footerMenu,
        partner,
        thirdLoginButton,
        // CurrencyAction,
        // TradeTypeAction,
    },
    setup () {
        const instance = getCurrentInstance()
        const delayer = null
        const store = useStore()
        const router = useRouter()
        const route = useRoute()
        const awsCaptchaRef = ref(null)
        const entrySearch = sessionGet('entrySearch')
        const { t, locale } = useI18n({ useScope: 'global' })
        const { getCustomerGroupIdByCountry, getPlansByCountry } = hooks()
        const { openAccountType } = route.query
        const businessConfig = computed(() => store.state.businessConfig)
        const state = reactive({
            options: [{ country: 'Canada', code: 'CA' }],
            zone: '',
            pwd: '',
            customerNo: '', // 推荐人客户编号
            countryZone: '86',
            countryCode: 'ISO_3166_156',
            loading: false,
            verifyCodeLoading: false,
            mobileCheckCode: '',
            emailCheckCode: '',
            mobile: '',
            openType: 'email', // mobile 手机号开户， email 邮箱开户
            currency: 'USD',
            tradeType: 1,
            email: '',
            pageui: '',
            protocol: true,
            visited: false, // 是否已点击过获取验证码
            countryVal: '',
            openAccountType: 0, // 开户类型 0:个人 1.企业 默认为个人
            emailToken: '',
            mobileToken: '',
            filterValue: '', // 搜索内容
            ipCountry: '', // 当前IP对应的国家
            defaultCountry: '', // 根据语言获取到的默认国家
            filterList: [], // 搜索列表
            inviteVis: false,
            inAnimation: false,
            inviteEnable: false
        })
        // 设置默认开户类型
        if (businessConfig.value.enterpriseLogin && openAccountType) {
            state.openAccountType = openAccountType
        }

        // if (businessConfig.value.inviteEnable) {
        //     state.inviteEnable = businessConfig.value.inviteEnable
        // }

        // pageConfig('Register').then(res => {
        //     state.pageui = res
        // })
        // 获取国家区号
        watch(
            [
                () => store.state.countryList,
                () => store.state._base.wpCompanyInfo?.defaultZone
            ],
            (value) => {
                if (value[0] && value[0].length) {
                    const countryList = value[0]
                    const defaultZone = value[1]
                    const index = getDefaultZoneIndex(
                        countryList,
                        defaultZone?.code
                    )
                    const defaultZoneConfig =
                        index === -1 ? countryList[0] : countryList[index]
                    if (defaultZoneConfig?.code) {
                        state.defaultCountry = defaultZoneConfig
                        state.countryVal = defaultZoneConfig.code
                        state.zone = `${defaultZoneConfig.countryCode}`
                        state.countryCode = defaultZoneConfig.code
                        state.countryZone = defaultZoneConfig.countryCode
                    }
                    // findCountryByIP()
                }
            },
            { immediate: true }
        )

        const countryList = computed(() => {
            const countryList = store.state.countryList
            return state.openAccountType === 0
                ? countryList
                : store.getters.companyCountryList
        })

        const style = computed(() => store.state.style)
        // 手机正则表达式
        const mobileReg = computed(
            () =>
                getArrayObj(countryList.value, 'countryCode', state.countryZone)
                    .extend || ''
        )
        // 开户须知内容
        const instructions = computed(() => {
            const lang = locale.value
            const wpCompanyInfo = store.state._base.wpCompanyInfo || {}
            const protocol = wpCompanyInfo[lang]
            return protocol ? decodeURIComponent(unescape(protocol)) : ''
        })
        // 是否显示企业开户的入口
        const companyCountryVisible = computed(() => {
            if (!businessConfig.value.enterpriseLogin) return false
            if (state.openAccountType === 0) {
                return store.getters.companyCountryList.find(
                    (el) => el.code === state.countryVal
                )
            } else {
                return countryList.value.find(
                    (el) => el.code === state.countryVal
                )
            }
        })

        // 选择国家
        const zoneOnSelect = (val) => {
            const country = countryList.value.find((el) => el.code === val)
            if (country) {
                state.zone = country.countryCode
                state.countryZone = country.countryCode
                state.countryCode = country.code
            }
        }

        const zoneOnBlur = (visible) => {
            if (visible === false) {
                state.filterValue = ''
            }
        }

        const registerSubmit = (params) => {
            state.loading = true
            // firebase
            const fbvalue = {}
            if (state.openType === 'email') {
                fbvalue.email = params.loginName
            } else {
                fbvalue.phone = params.loginName
            }
            // firebase
            firebaseAnalytics('sign_up_summit', {
                key: 'sign_up_summit',
                value: state.openType === 'email' ? 'email' : 'phone',
            }, fbvalue)
            // 系统注册成功的操作
            const successful = (res) => {
                firebaseAnalytics('sign_up_success', {
                    key: 'sign_up_success',
                    value: JSON.stringify({
                        sign_up_success: state.openType === 'email' ? 'email' : 'phone',
                        ...fbvalue
                    })
                }, res.data)
                // 注册成功
                sessionStorage.setItem(
                    'RegisterParams',
                    JSON.stringify({ ...params, openType: state.openType })
                )
                sessionStorage.setItem('RegisterData', JSON.stringify(res))
                if (state.openType === 'mobile') {
                    localSet('loginZone', state.countryZone)
                }
                // 缓存注册信息
                localSet(
                    'loginInfo',
                    JSON.stringify({
                        accountType: params.type,
                        loginName: params.loginName,
                        phoneArea: params.phoneArea || params.emailArea || ''
                    })
                )
                if (res.data.token) setToken(res.data.token)

                // 注册成功重新获取客户信息
                store.dispatch('_user/findCustomerInfo')
                // 重新登录清除账户信息
                store.commit('_user/Update_accountAssets', {})
                // 登录websocket
                instance.appContext.config.globalProperties.$MsgSocket.login()

                // 切换登录后的行情websocket
                setQuoteService()

                if (res.data.list.length > 0) {
                    // 需要KYC认证
                    sessionStorage.setItem(
                        'kycList',
                        JSON.stringify(res.data.list)
                    )
                    // 判断是个人KYC还是企业KYC
                    if (params.openAccountType === 0) {
                        router.replace({
                            path: '/register/regKyc',
                            query: { levelCode: res.data.list[0].levelCode }
                        })
                    } else {
                        router.replace({
                            path: '/businessKYC'
                        })
                    }
                } else {
                    router.replace({ name: 'RegisterSuccess' })
                }
            }

            register(params)
                .finally(() => {
                    state.loading = false
                })
                .then((res) => {
                    if (res?.code === 'CUSTOMER_API_00010001') {
                        // 人工审核
                        router.replace({ name: 'RegisterHandler' })
                        if (res?.data?.customerNo) {
                            firebaseAnalytics('sign_up_success', {
                                key: 'sign_up_success',
                                value: JSON.stringify({
                                    sign_up_success: state.openType === 'email' ? 'email' : 'phone',
                                    ...fbvalue
                                })
                            }, { ...res.data, auditType: 'artificial' })
                        }
                    } else if (res.check()) {
                        successful(res)
                    } else {
                        res.toast()
                    }
                })
        }

        const delayWait = ref(false)

        // 提交注册
        const registerHandler = () => {
            if (delayWait.value) return
            delayWait.value = true
            setTimeout(() => delayWait.value = false, 1000)
            clearTimeout(delayer)
            if (!state.visited) {
                return Toast(t('common.getVerifyCode'))
            }
            if (
                (state.openType === 'email' && !state.emailToken) ||
                (state.openType === 'mobile' && !state.mobileToken)
            ) {
                return Toast(t('common.inputRealVerifyCode'))
            }
            if (!state.pwd) {
                return Toast(t('register.newPassword'))
            }
            if (!pwdReg.test(state.pwd)) {
                return Toast(t('forgot.pwdRule'))
            }
            let params = {}
            const countryCode =
                state.openType === 'email'
                    ? state.defaultCountry.code
                    : state.countryCode
            params = {
                type: state.openType === 'email' ? 1 : 2,
                loginName:
                    state.openType === 'email' ? state.email : state.mobile,
                registerSource: getDevice(),
                verifyCode:
                    state.openType === 'email'
                        ? state.emailCheckCode
                        : state.mobileCheckCode,
                // currency: state.currency,
                // tradeType: state.tradeType,
                sendToken:
                    state.openType === 'email'
                        ? state.emailToken
                        : state.mobileToken,
                utmSource: getQueryVariable('utm_source', entrySearch),
                utmMedium: getQueryVariable('utm_medium', entrySearch),
                utmCampaign: getQueryVariable('utm_campaign', entrySearch),
                utmContent: getQueryVariable('utm_content', entrySearch),
                utmTerm: getQueryVariable('utm_term', entrySearch),
                protocol: state.protocol,
                tradeTypeCurrencyList: getPlansByCountry(countryCode),
                customerGroupId: getCustomerGroupIdByCountry(countryCode),
                pwd: md5(state.pwd),
                country: countryCode,
                // customerNo: state.customerNo,
                openAccountType: state.openAccountType
            }

            if (state.openType === 'mobile') {
                params.phoneArea = String(state.countryZone)
            } else {
                params.emailArea = String(state.defaultCountry.countryCode)
            }

            if (sessionGet('b_superiorAgent')) {
                params.thirdServerCode = sessionGet('b_superiorAgent')
                params.thirdServerSource = 'agent'
            }

            const validator = new Schema(RuleFn(t))
            validator.validate(
                { ...params, mobileReg: new RegExp(mobileReg.value) },
                { first: true },
                (errors, fields) => {
                    if (errors) {
                        return Toast(errors[0].message)
                    }
                    registerSubmit(params)
                }
            )
        }

        // 发送验证码
        const verifyCodeSendHandler = (callback) => {
            state.visited = true
            const verifyParams = {
                type: state.openType === 'mobile' ? 2 : 1,
                loginName:
                    state.openType === 'mobile' ? state.mobile : state.email,
                protocol: state.protocol,
                mobileReg: new RegExp(mobileReg.value)
            }

            if (state.openType === 'mobile') {
                verifyParams.phoneArea = String(state.zone)
            } else {
                verifyParams.emailArea = String(
                    state.defaultCountry.countryCode
                )
            }

            const validator = new Schema(checkCustomerExistRule(t))
            state.verifyCodeLoading = true
            validator
                .validate(verifyParams, { first: true })
                .then((res) => {
                    // 检测客户是否存在,同时获取区号
                    checkUserStatus(verifyParams).then((res) => {
                        if (res.check()) {
                            if (Number(res.data.status) === 1) {
                                state.verifyCodeLoading = false
                                const msg = t(
                                    verifyParams.type === 1
                                        ? 'common.existEmail'
                                        : 'common.existPhone'
                                )
                                callback && callback(false)
                                return Toast(msg)
                            } else {
                                // state.zone = res.data.phoneArea
                                const countryCode =
                                    state.openType === 'email'
                                        ? state.defaultCountry.code
                                        : state.countryCode
                                const params = {
                                    bizType:
                                        state.openType === 'mobile'
                                            ? 'SMS_REGISTER_VERIFICATION_CODE'
                                            : 'EMAIL_REGISTER_VERIFICATION_CODE',
                                    toUser:
                                        state.openType === 'mobile'
                                            ? state.countryZone +
                                                ' ' +
                                                state.mobile
                                            : state.email,
                                    country: countryCode
                                }
                                verifyCodeSend(params)
                                    .then((res) => {
                                        state.verifyCodeLoading = false
                                        if (res.check()) {
                                            state.openType === 'mobile'
                                                ? (state.mobileToken =
                                                    res.data.token)
                                                : (state.emailToken =
                                                    res.data.token)
                                            callback && callback()
                                        } else {
                                            callback && callback(false)
                                        }
                                    })
                                    .catch((err) => {
                                        // const { response = {} } = err
                                        // awsCaptchaRef.value.showCaptcha(
                                        //     response
                                        // )
                                    })
                            }
                        }
                    })
                })
                .catch(({ errors, fields }) => {
                    callback && callback(false)
                    state.verifyCodeLoading = false
                    if (errors) {
                        Toast(errors[0].message)
                    }
                })
        }

        const handleCaptcha = () => {
            verifyCodeSendHandler()
        }

        const zoneSelect = (data) => {
            state.countryVal = data.countryCode
            zoneOnSelect(data.countryCode)

            // state.countryZone = data.code
            // state.countryCode = data.countryCode
        }

        const filterZone = (value) => {
            value = value.toUpperCase()
            state.filterValue = value
        }

        const changeOpentype = () => {
            state.inAnimation = true
            state.openAccountType = state.openAccountType === 0 ? 1 : 0
        }

        watch(
            [() => state.filterValue, countryList],
            (newVal) => {
                const value = newVal[0]
                const currentCountryList = newVal[1]
                const list = !value
                    ? currentCountryList
                    : currentCountryList.filter((el) => {
                        if (
                            (el.code &&
                                el.code.toUpperCase().indexOf(value) !==
                                -1) ||
                            (el.countryCode &&
                                el.countryCode
                                    .toUpperCase()
                                    .indexOf(value) !== -1) ||
                            (el.displayName &&
                                el.displayName
                                    .toUpperCase()
                                    .indexOf(value) !== -1)
                        ) {
                            return true
                        } else {
                            return false
                        }
                    })
                state.filterList = list
            },
            { immediate: true }
        )

        const content = ref()
        let hasScrolled30 = false
        let hasScrolled50 = false
        let hasScrolled80 = false
        const handleScroll = (event) => {
            const scrollPosition = event.target.scrollTop
            const scrollHeight = event.target.scrollHeight
            const windowHeight = event.target.clientHeight
            const scrollThreshold = Math.round((scrollHeight - windowHeight) * 0.3)
            const scrollThreshold2 = Math.round((scrollHeight - windowHeight) * 0.5)
            const scrollThreshold3 = Math.round((scrollHeight - windowHeight) * 0.8)

            if (scrollPosition >= scrollThreshold && !hasScrolled30) {
                hasScrolled30 = true
                const data = {
                    event: 'scroll',
                    scrollPercentage: 30
                }

                // Push data to data layer
                dataLayer.push(data)
            }
            if (scrollPosition >= scrollThreshold2 && !hasScrolled50) {
                hasScrolled50 = true
                const data2 = {
                    event: 'scroll-50%',
                    scrollPercentage: 50
                }

                // Push data to data layer
                dataLayer.push(data2)
            }
            if (scrollPosition >= scrollThreshold3 && !hasScrolled80) {
                hasScrolled80 = true
                const data3 = {
                    event: 'scroll-80%',
                    scrollPercentage: 80
                }

                // Push data to data layer
                dataLayer.push(data3)
            }
        }

        onMounted(() => {
            content.value.addEventListener('scroll', handleScroll)
        })

        onUnmounted(() => {
            content.value.removeEventListener('scroll', handleScroll)
        })

        onMounted(() => {
            const { mobile, email } = route.query
            if (mobile) {
                state.mobile = mobile
                state.openType = 'mobile'
            } else if (email) {
                state.email = email
                state.openType = 'email'
            }
            // 获取支持企业注册国家
            store.dispatch('getCompanyCountry')
            // 获取国家区号
            store.dispatch('getCountryListByParentCode')
        })
        const jumpPage = (attr) => {
            switch (attr) {
                case 1 :
                    window.open('https://www.headline.net/en-US/infoDetail?id=33513')
                    break
                case 2 :
                    window.open('https://www.headline.net/en-US/register')
                    break
            }
        }

        return {
            ...toRefs(state),
            registerHandler,
            verifyCodeSendHandler,
            style,
            instructions,
            countryList,
            zoneOnSelect,
            zoneOnBlur,
            zoneSelect,
            companyCountryVisible,
            filterZone,
            businessConfig,
            changeOpentype,
            awsCaptchaRef,
            content,
            jumpPage
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/sass/mixin.scss";

#eventReg{
  overflow-x: hidden;
}
.part1Container{
  background-color: rgb(187,36,35);
  text-align: center;
  padding: 30px 0;
  h1{
    font-size: 40px;
    font-weight: 400;
    color: #fff;
  }
  .text{
    font-size: 18px;
    color: #fff;
    padding: 15px 0;
    span{
      background: #000;
    }
  }
  .learnButton{
            background-color: #fff !important;
            color: #CB0D11;
            max-width: 269px;
            width: 100%;
            height: 56px;
            font-size: 20px;
            font-weight: bold;
          }
  .learnButton:hover{
            color: #fff;
            background-color: #000 !important;
  }
}

.register {
    //padding-top: 80px;
    position: relative;
    display: flex;
    flex-flow: column;
    min-height: 100%;
    height: 100%;
    @include scroll-bar-vertical;

    .container2{
      position: relative;
      .text1{
        font-size: 20px;
        color: #fff;
        font-weight: bold;
        text-align: center;
      }
      .text2{
        font-size: 20px;
        color: #000;
        font-weight: bold;
        text-align: center;
        padding-top: 20px;
        span{
          background: #FFF86B;
        }
      }
      .text3{
        font-size: 20px;
        color: #fff;
        padding-top: 30px;
        span{
          background: #BB2423;
          text-decoration: underline;
        }
      }
      .text4{
        color: #fff;
        font-weight: bold;
        font-size: 20px;
        span{
          color: #000;
          background: #FFF86B;
          cursor: pointer;
          text-decoration: underline;
        }
      }
      .btnContainer{
        text-align: center;
        .learnButton{
            background-color: #fff !important;
            color: #CB0D11;
            width: 269px;
            height: 56px;
            font-size: 20px;
            font-weight: bold;
            border: 3px solid #CB0D11;
            border-radius: unset !important;
          }
          .learnButton:hover{
            color: #fff;
            background-color: #000 !important;
          }
      }
      .arrow{
        width: 100%;
        margin: 10px 0;
      }
    }
    .container {
      background-color: #141416;
        .row1{
          .col1Container{
            background-image: url("../.././images/cpi1/nfp08/backgrounndEt.jpg");
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center center;
            padding: 50px 50px 0!important;
            .containerDiv{
              display: flex;
              justify-content: space-between;
              .titleContent{
                color: #000;
                font-size: 35px;
                font-weight: bold;
                span{
                  background: #FFF86B;
                }
              }
              .textContainer{
                max-width: 400px;
                .text1{
                  font-weight: bold;
                  color: #fff;
                  font-size: 20px;
                }
                .text2{
                  color: #fff;
                  font-size: 20px;
                }
              }
            }
            .title{
              font-size: 138px;
              color: #BB2423;
              line-height: 1.3;
              padding-top: 80px;
              span{
                background: #000;
              }
            }
            .containerDiv2{
              max-width: 450px;
              position: relative;
              top: 25px;

              .span1{
                background: #BB2423;
                display: flex;
                padding: 10px;
                justify-content: center;
                font-weight: bold;
              }
              .content1{
                font-size: 14px;
                color: #000;
              }
              .newDiv{
                display: flex;
                align-items: center;
                .link{
                  font-size: 14px;
                  color: #000;
                  padding-left: 10px;
                  font-weight: bold;
                  text-decoration: underline;
                  span{
                    background: #FFF86B !important;
                  }
                }
                .line1{
                  border: 1px #000 solid !important;
                  font-weight: 400;
                }
              }
            }
          }
        }
        .text{
          font-size: 30px;
          font-weight: bold;
          color: #fff;
        }

        .content {
            padding: 20px 20px;
            //border-radius: 10px;
            box-shadow: 0px 6px 19px 2px rgba(0,0,0,0.08);
            /* 3D变形 */
            transform-style: preserve-3d;
            -webkit-perspective: 1000;
            -moz-perspective: 1000;
            -ms-perspective: 1000;
            perspective: 1000;
            border: 7px solid #fff;
            margin: 30px;
            &.anim {
                animation: showMsg 0.6s;
            }

            @keyframes showMsg {
                0% {
                    transform: rotateY(0deg);
                    opacity: 1;
                }
                50% {
                    transform: rotateY(65deg);
                    opacity: 0;
                }
                100% {
                    transform: rotateY(0deg);
                    opacity: 1;
                }
            }
            .logo {
                width: 100px;
                img {
                    width: 100%;
                }
            }
            .businessOpen {
                cursor: pointer;
                margin-top: 30px;
                border: solid 1px var(--primary);
                display: inline-block;
                width: 100%;
                line-height: 40px;
                text-align: center;
                border-radius: 5px;
                &.openType2 {
                    border: solid 1px var(--color);
                    .businessOpenBtn {
                        color: var(--color);
                    }
                }
                &:hover {
                    opacity: 0.5;
                }
                .businessOpenBtn {
                    display: inline-block;
                    color: var(--primary);
                    line-height: 1;
                }
            }
        }
    }
    .footerBtn {
        //height: 100px;
        margin-bottom: 20px;
        padding:0 36px;
    }
    .to-login {
        text-align: center;
        color: #fff;
        font-size: 18px;
        span{
          color: #E00A0A;
          font-weight: bold;
        }
        > a {
            color: var(--primary);
        }
    }
}
.pageTitle {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    padding: 0;
    h5 {
        font-weight: bold;
        color: var(--color);
        font-size: 24px;
        font-family: Microsoft YaHei;
        margin-bottom: 20px;
        &.opentype1 {
            color: var(--primary);
        }
    }
    a {
        color: var(--color);
        font-size: 14px;
    }
}
.form {
    margin-top: rem(30px) 0;
}
.invite-item {
    cursor: pointer;
    > span {
        vertical-align: middle;
        margin-right: 5px;
    }
    .el-icon {
        vertical-align: -4px;
    }
}
.cell {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 20px 0;
    div {
        flex: 1;
    }
    .zone {
        flex: none;
        width: 152px;
        margin-right: 10px;
    }
    &.customNo_cell {
        margin: 10px 0;
        .customNo {
            border: solid 1px var(--lineColor);
            border-radius: 5px;
            :deep(input) {
                height: 48px;
                background: none;
            }
        }
    }

    :deep {
        .mobileBar{
            background: #FBFBFB;
            border:1px solid var(--lineColor);
            border-radius: 5px;
            &:hover{
                border: solid 1px var(--primary);
            }
            .inputWrapper{
                border: solid 1px transparent;
            }
        }
        .inputWrapper {
            border: solid 1px var(--lineColor);
            border-radius: 5px;
            background: #FBFBFB;
            &:hover {
                //border: solid 1px var(--primary);
            }
            .input {
                width: 100%;
                height: 36px;
                padding: 0 16px;
                font-size: 14px;
            }
        }
        .pcInputBar {
            border-radius: 5px;
            background: #FBFBFB;
            border: solid 1px var(--lineColor);
            &:hover,
            &:focus {
                border: solid 1px var(--primary);
            }
        }
        .pcInput {
            font-size: 14px;
            height: 36px;

        }
        .van-hairline--bottom {
            &::after {
                border-bottom: none;
            }
        }
    }
    .select-conuntry {
        .el-input {
            font-size: 16px;
        }
        :deep(.el-input__inner) {
            height: 48px;
            font-size: 16px;
            line-height: 48px;
        }
    }
}
.openTypeTab {
    --van-padding-md: 0px;
    --van-tabs-card-height: 40px;
    :deep(.van-tab){
        flex:none
    }
    :deep(.van-tabs__nav--line) {
        background-color: var(--contentColor);
    }
    :deep(.van-tabs__nav) {
        justify-content: center;
        border: none;
        .van-tabs__line{
            background: var(--primary);
        }
    }
    :deep(.van-tab) {
        margin-right: 20px;
        border-radius: 5px;
        line-height: 40px;
        border: none;
        .van-tab__text {
            color: var(--minorColor);
            font-size: 16px;
        }
        &.van-tab--active {
            .van-tab__text {
                color: var(--primary);
            }
        }

    }
}
:deep(.cellRow) {
    padding-top: rem(24px);
    padding-bottom: rem(24px);
}
.openTypeWrapper {
    :deep(.van-tabs__nav--card) {
        margin: 0;
        overflow: hidden;
        border-radius: rem(10px);
    }
}
.input {
    display: block;
    width: 100%;
    height: rem(75px);
    padding: 0 5px;
    font-size: rem(30px);
    line-height: 1;
    border: 1px solid var(--lineColor);
    border-radius: rem(10px);
}
.registerBtn {
    height: 36px;
    color: #fff;
    font-size: 16px;
    background: var(--primary);
    border-color: var(--primary);
    border-width: 1px 0 0;
    border-radius: 18px;
    &:hover {
        opacity: 0.8;
    }
}
.checkbox {
    //align-items: flex-start;
    :deep(.van-badge__wrapper) {
        width: 16px;
        height: 16px;
        overflow: hidden;
        font-size: 14px;
    }
    :deep(.van-checkbox__icon) {
        flex: none;
        height: 16px;
        font-size: 12px;
        line-height: 16px;
        background-color: var(--primary);
        border-color: var(--primary);
        border-radius: 5px;
        cursor: pointer;
    }
    :deep(.van-checkbox__label) {
        color: var(--placeholdColor);
        font-size: 14px;
    }
}
.verifyCodeCell {
    :deep {
        .checkCodeBar {
            border: solid 1px var(--lineColor);
            background: #FBFBFB;
            &:hover {
                border: solid 1px var(--primary);
            }
            border-radius: 5px;
            .checkCodeInput {
                font-size: 14px;
            }
            .getCodeBtn {
                margin: 0 18px;
                color: var(--primary);
                font-size: 14px;
                cursor: pointer;
            }
            .input {
                width: 100%;
                height: 36px;
                padding: 0 5px;
                padding-left: 18px;
            }
        }
    }
}

@media screen and (max-width: 1199px) {
  .container2{
    justify-content: center;
    padding: unset !important;
    position: relative;
    display: grid;
  }
  .col2Container{
    padding-top: 50px !important;
  }
}
@media screen and (max-width: 991px) {
  .part1Container{
    .learnButton{
      margin-top: 20px;
    }
  }
  .contentContainer{
    justify-content: center;
    display: grid;
    .content{
      max-width: 500px;
    }
  }
}
@media screen and (max-width: 900px) {
  .container {
        .row1{
          .col1Container{
            .containerDiv{
              .titleContent{
                font-size: 25px;
              }
            }
            .title{
                font-size: 100px !important;
            }
          }
        }
      }
}
@media screen and (max-width: 730px) {
  .register{
    .container{
      .col1Container{
        .containerDiv{
          display: unset !important;
          .textContainer{
            padding-top: 20px;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 700px) {
  .part1Container{
    h1{
      font-size: 30px;
    }
  }
}
@media screen and (max-width: 500px) {
  .container {
        .row1{
          .col1Container{
            .title{
                font-size: 80px !important;
            }
          }
        }
      }
  .register{
    .container{
      .row1{
        .col1Container{
          .containerDiv2{
            .span1{
              display: inline-block;
            }
          }
        }
      }
    }
  }
}
</style>
