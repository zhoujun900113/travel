<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src = "item.imgUrl" />
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "HomeWeekend",
    props:{
        weekendList: Array
    }
}
</script>
<style lang="stylus" scoped>
    @import "~styles/mixins.styl"
    .title
        line-height: .8rem
        background: #eeeeee
        text-indent: 0.2rem
    .item-img-wrapper
        overflow: hidden
        height: 0
        padding-bottom: 37%
        .item-img
            width:100%
    .item-info
        flex: 1
        min-width: 0
        padding: .1rem
        .item-title
            font-size: .32rem
            line-height: .5rem
            ellipsis()
        .item-desc
            line-height: .5rem
            color: #CCC
            ellipsis()
</style>
