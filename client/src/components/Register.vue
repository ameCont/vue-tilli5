/*eslint no-multiple-empty-lines: ["error", { "max": 2, "maxEOF": 1 }]*/
<template>
  <div>
    <h1>Register</h1>

    <input
    type="email"
    name="email"
    v-model="email"
    placeholder="email"/>
    <br>
    <input
    type="password"
    name="password"
    v-model="password"
    placeholder="password"/>
    <br>
    <button>Register</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: 'abc',
      password: '123'
    }
  },
  watch: {
    email (value) {
      console.log('email has changed', value)
    }
  },
  mounted () {
    setTimeout(() => {
      this.email = 'hello world'
    }, 1000)
  }
}
</script>

<style scoped>

</style>
