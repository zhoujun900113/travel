<template>
    <div>
        <div class="search">
            <input class = "search-input" v-model="keyword" type="text" placeholder="输入城市么或拼音" />
        </div>
        <div class="search-content" ref="search" v-show="keyword">
            <ul>
                <li class="search-item border-bottom"
                v-for="(item,key) in list" 
                :key="key"
                @click="handleCityClick(item.name)">
                    {{item.name}}
                </li>
                <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
            </ul>
        </div>    
    </div>
</template>
<script>
import BScroll from 'better-scroll'
import { mapMutations} from 'vuex'
export default {
    name: 'CitySearch',
    data(){
        return {
            keyword:'',
            list: [],
            timer: null
        }
    },
    props:{
        cities: Object
    },
    computed:{
        hasNoData(){
            return !this.list.length
        }
    },
    methods:{
        handleCityClick(city){
            //组件可以直接调用mutations
            //this.$store.dispatch('changeCity',city)
            //this.$store.commit('changeCity',city)
            this.changeCity(city)
            //页面跳转
            this.$router.push('/')
        },
        ...mapMutations(['changeCity'])
    },
    watch:{
        keyword(){
            if(this.timer){
                clearTimeout(this.timer)
            }
            if(!this.keyword){
                this.list = []
                return
            }
            this.timer = setTimeout(() => {
                const result = []
                for(let i in this.cities){
                    this.cities[i].forEach((value) => {
                        if (value.spell.indexOf(this.keyword) > -1 || 
                            value.name.indexOf(this.keyword) > -1){
                            result.push(value)
                        }
                    });
                }
                this.list = result
            }, 100)
        }
    },
    mounted(){
        this.scroll = new BScroll(this.$refs.search)
    }
}
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .search
        height: .72rem
        padding: 0 .1rem 
        background: $bgColor
        .search-input
            box-sizing: border-box
            width: 100%
            height: 0.62rem
            line-height:.62rem
            text-align: center
            border-radius: .06rem
            color: #666
    .search-content
        z-index: 1
        position: absolute
        overflow: hidden
        left: 0
        right: 0
        bottom: 0
        top: 1.58rem
        background: #eee
        .search-item
            line-height: .62rem
            padding-left: .2rem
            color: #666
            background: #FFF
</style>
