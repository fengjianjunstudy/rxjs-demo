<template>
  <div class="hello">
    <h1>rxjs - observable</h1>
    <ul>
      <li><router-link to="/observable/amb">amb</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import {of} from 'rxjs'
of(1,2,3).subscribe(console.log)
export default {
  name: 'Hello',
  data () {
    return {
      msg: 'hello rxjs'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
