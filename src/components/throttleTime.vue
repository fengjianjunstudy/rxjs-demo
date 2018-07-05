<template>
  <div>
    <input type="text" id="search" @input="search($event)"/>
    <ul id="search_contanier">
      <li v-for="item of list">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import {fromEvent} from 'rxjs'
import {throttleTime,map} from 'rxjs/operators'
export default {
  data () {
    return {
      list: ['123','456'],
      lastTime:0,
      timer:null
    }
  },
  methods: {
    search (e) {
      let nowtime = new Date().getTime();
      if (nowtime - this.lastTime < 500) {
        clearTimeout(this.timer)
      }
      this.lastTime = nowtime;
      this.timer = setTimeout(() => {
        console.log('开始搜索索引为' + e.target.value + '的列表')
      }, 500)
    }
  },
  mounted () {
    let search = document.getElementById('search');
    let $search = fromEvent(search,'input');
    $search.pipe(throttleTime(1000), map((e) => {
      console.log('map')
      return e.target.value
    })).subscribe((val) => {
      console.log(val)
    })

  }
}
</script>

<style scoped>

</style>
