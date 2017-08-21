<template>
  <div>
    <h1>VUE IS BOOL {{ test }}</h1>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        test: 'THIS IS A TEST'
      }
    },
    //LIFECYCLE HOOKS
    mounted(){
      console.log("WE ARE ON THE HOME PAGE NOW")
    },
    beforeDestroy(){
      console.log("GOOD BYE HOME")
    },
    destroyed(){
      console.log("THE HOME COMPONENT IS GONE")
    }
  }
</script>

<style></style>