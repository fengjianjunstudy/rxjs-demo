<template>
  <div>
    <input id="input1" type="text">
    <input id="input2" type="text">
    <div class="text" id="text"></div>
  </div>
</template>

<script>
import {fromEvent, race} from 'rxjs'
import { map , scan} from 'rxjs/operators';
console.log(fromEvent)
console.log(race)
export default {
  data () {
    return {msg: 'amb'}
  },
  mounted () {
    let input1 = document.getElementById('input1')
    let input2 = document.getElementById('input2')
    let $source1 = fromEvent(input1, 'input')
    let $source2 = fromEvent(input2, 'input')
    let text = document.getElementById('text')
    $source1.pipe(map((e) => {
      console.log('input1')
      console.log(e)
      return e.data + 'abc'
    }))
    $source2.pipe(map((e) => {
      console.log('input2')
      console.log(e)
      return e.data + 'efg'
    }))
    race([$source1, $source2]).pipe(map((e) => {
      return e.data
    }), scan((cur, result) => { return cur + result}, '')).subscribe((value) => {
      text.innerText = value
    })
  }
}
</script>

<style scoped>

</style>
