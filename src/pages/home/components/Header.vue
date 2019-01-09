<template>
    <div class = "header">
        <div class = "header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class = "header-input">
            <span class="iconfont ">&#xe632;</span>
            输入城市/景点/游玩主题
        </div>
        <router-link to='/city'>
            <div class = "header-right" >
                {{this.city}}
                <span class="iconfont arrow-icon">&#xe64a;</span>
            </div>
        </router-link>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    name: 'HomeHeader',
    computed:{
        ...mapState(['city'])
    }
}
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .header
        display: flex
        line-height: .86rem
        background : $bgColor
        color: #FFF
        .header-left
            width: .64rem
            float: left
            .back-icon
                text-align : center
                font-size :0.4rem 
        .header-input
            flex: 1
            background :#FFF
            margin-top: 0.12rem
            height: 0.64rem
            line-height : 0.64rem
            margin-left: 0.2rem
            padding-left: 0.2rem
            border-radius : 0.1rem
            color : #CCC
        .header-right
            min-width: 1.04rem
            padding-left: .1rem
            padding-right: .1rem
            float: right
            text-align : center
            color: #ffffff
            .arrow-icon
                font-size: 0.24rem
                margin-left: -0.04rem
</style>