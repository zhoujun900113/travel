<template>
    <div>
        <div class="title">热销推荐</div>
            <ul>
                <router-link 
                tag="li" 
                :to="'/detail/' + item.id"
                class="item border-bottom" 
                v-for="item of recommendList" 
                :key="item.id">
                    <img class="item-img" :src = "item.imgUrl" />
                    <div class="item-info">
                        <p class="item-title">{{item.title}}</p>
                        <p class="item-desc">{{item.desc}}</p>
                        <button class = "item-button">查看详情</button>
                    </div>
                </router-link>
            </ul>
    </div>
</template>
<script>
export default {
    name: "HomeRecommend",
    props:{
        recommendList: Array
    }
}
</script>
<style lang="stylus" scoped>
    @import "~styles/mixins.styl"
    .title
        margin-top: .2rem
        line-height: .8rem
        background: #eeeeee
        text-indent: 0.2rem
    .item
        overflow: hidden
        display: flex
        height: 1.9rem
        .item-img
            width:1.7rem
            height: 1.7rem
            padding: .1rem
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
            .item-button
                line-height: .44rem
                margin-top: .16rem
                background #ff9300
                padding: 0 .1rem
                border-radius: 0.06rem 
                color: #ffffff
</style>
