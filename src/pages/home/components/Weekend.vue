<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
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
    data: function(){
        return{
            recommendList:[{
                id:"0001",
                imgUrl:"http://img1.qunarzz.com/sight/source/1505/4e/3e87ee62e59cdb.jpg_r_640x214_fe6cc902.jpg",
                title:"杭州必打卡",
                desc:"杭州，前世今生与你有一场美丽约会"
            },{
                id:"0002",
                imgUrl:"http://img1.qunarzz.com/sight/source/1505/4e/3e87ee62e59cdb.jpg_r_640x214_fe6cc902.jpg",
                title:"杭州必打卡",
                desc:"杭州，前世今生与你有一场美丽约会"
            },{
                id:"0003",
                imgUrl:"http://img1.qunarzz.com/sight/source/1505/4e/3e87ee62e59cdb.jpg_r_640x214_fe6cc902.jpg",
                title:"杭州必打卡",
                desc:"杭州，前世今生与你有一场美丽约会"
            },{
                id:"0004",
                imgUrl:"http://img1.qunarzz.com/sight/source/1505/4e/3e87ee62e59cdb.jpg_r_640x214_fe6cc902.jpg",
                title:"杭州必打卡",
                desc:"杭州，前世今生与你有一场美丽约会"
            }]
        }
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
