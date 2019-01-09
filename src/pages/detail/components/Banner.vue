<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1810/cc/cc47164357acbeb5a3.water.jpg_600x330_aed5d0a5.jpg" />
            <div class="banner-info">
                <div class="banner-title">杭州云曼温泉</div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe692;</span>  
                    14
                </div>
            </div>
        </div>
        <common-gallary 
        :imgs="imgs" 
        v-show="showGallary"
        @close="handleGallaryClick"></common-gallary>

    </div>
</template>
<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
    name: "DetailBanner",
    components:{
        CommonGallary
    },
    data(){
        return {
            showGallary: false,
            imgs: ["http://img1.qunarzz.com/sight/p0/1810/54/54a97e731330c416a3.water.jpg_350x240_dd786cb7.jpg",
                   "http://img1.qunarzz.com/sight/p0/1810/db/dbbb0185c540908ba3.water.jpg_350x240_ebdb27d2.jpg"]
        }
    },
    methods:{
        handleBannerClick(){
            this.showGallary = true
        },
        handleGallaryClick(){
            console.log(2)
            this.showGallary = false
        }
    }

}
</script>
<style lang="stylus" scoped>
    .banner
        position: relative
        overflow: hidden
        height: 0
        padding-bottom: 55%
        .banner-img
            width:100%
        .banner-info
            display: flex
            position: absolute
            left: 0
            right: 0
            bottom: 0
            line-height: .6rem
            color: #FFF
            background-image:linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
            .banner-title
                flex:1
                font-size: .32rem
                padding:0 .2rem
            .banner-number
                padding 0 .4rem
                line-height: .32rem
                height: .32rem
                margin-top: .14rem
                border-radius: .2rem
                background: rgba(0,0,0,.8)
                font-size: .24rem
                .banner-icon
                    font-size: .24rem
</style>
