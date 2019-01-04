<template>
    <div class = "header">
        <div class = "header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class = "header-input">
            <span class="iconfont ">&#xe632;</span>
            输入城市/景点/游玩主题
        </div>
        <div class = "header-right">
            城市
            <span class="iconfont arrow-icon">&#xe62d;</span>
        </div>
    </div>
</template>
<script>

export default {
    name: 'HomeHeader',
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
            width: 1.24rem
            float: right
            text-align : center
            .arrow-icon
                font-size: 0.24rem
                margin-left: -0.04rem
</style>