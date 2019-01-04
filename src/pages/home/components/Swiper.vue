<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item of swiperList" :key="item.id"><img class = "swiper-img" :src="item.srcUrl" /></swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
            
        </swiper>
    </div>
</template>
<script>
export default {
    name: "HomeSwiper",
    data: function(){
        return {
            swiperOption:{
                pagination: '.swiper-pagination',
                loop:true
            },
            swiperList:[{
                id:'000001',
                srcUrl:"http://img1.qunarzz.com/piao/fusion/1712/51/36632b2cb850e902.jpg_750x200_fa4120db.jpg"
                },{
                id:'000002',
                srcUrl:"http://img1.qunarzz.com/piao/fusion/1806/8b/2680212fadf30002.jpg_750x200_f85409ac.jpg"
                }
            ]
        }
    }
}
</script>
<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background :#FFF
    .wrapper
        overflow: hidden
        width: 100%
        height: 0
        padding-bottom: 26.67%
        background :#eee
        .swiper-img
            width:100%
</style>
