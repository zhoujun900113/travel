<template>
    <div>
        <router-link
        tag="div"
        to='/'
        class="header-abs"
        v-show="showAbs">
            <span class="iconfont header-abs-back">&#xe624;</span>
        </router-link>
        <div 
        class="header-fixed" 
        v-show="!showAbs"
        :style="opacityStyle">
            景点详情
            <router-link to='/'>
                <div class="iconfont header-fixed-back">&#xe624;</div>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    name: "DetailHeader",
    data(){
        return{
            showAbs: true,
            opacityStyle:{
                opacity: 0
            }
        }
    },
    methods:{
        handleScroll(){
            const top = document.documentElement.scrollTop
            if(top > 60){
                let opacity = top/140
                opacity = opacity > 1 ? 1 : opacity
                this.opacityStyle = {
                    opacity
                }
                this.showAbs = false
            }
            else{
                this.showAbs = true
            }
        }
    },
    activated(){
        window.addEventListener("scroll",this.handleScroll)
    },
    deactivated(){
        window.removeEventListener("scroll",this.handleScroll)
    }
}
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .header-abs
        position:absolute
        left: .2rem
        top: .2rem
        width: .8rem
        height: .8rem
        line-height: .8rem
        height: .8rem
        border-radius: .4rem
        background: rgba(0,0,0,0.8)
        text-align: center
        .header-abs-back
            color: #ffffff
            font-size: .4rem
    .header-fixed
        position: fixed
        top: 0
        left: 0
        width: 100%
        overflow: hidden
        height: $headerHeight
        line-height:$headerHeight
        text-align:center
        color:#FFF
        background : $bgColor
        font-size :.32rem
        .header-fixed-back
            position:absolute
            width: .64rem
            text-align : center
            color:#FFF
            top: 0
            left: 0
            font-size: .4rem
</style>
