<template>
    <div class="header">
        城市选择
        <router-link to='/'>
            <div class="iconfont header-back">&#xe624;</div>
        </router-link>
    </div>

</template>
<script>
export default {
    name: 'CityHeader'
}
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .header
        overflow: hidden
        position: relative
        height: $headerHeight
        line-height:$headerHeight
        text-align:center
        color:#FFF
        background : $bgColor
        font-size :.32rem
        .header-back
            position:absolute
            width: .64rem
            text-align : center
            color:#FFF
            top: 0
            left: 0
            font-size: .4rem
</style>
