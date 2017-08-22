<template>
 <div>
   <h1>Blog: {{ blog.title }}</h1>
   <h3>Post: {{ blog.body }}</h3>
 </div>
</template>

<script>
 export default {
   data(){
     return {
       // title: this.$route.params.blogTitle,
       // body: this.$route.params.blogBody
     }
   },
   mounted(){
     // console.log('ABOUT IS READY')
     // console.log("WHAT IS THIS?", this.$route.params.blogTitle)
     this.$store.dispatch('getBlog', this.$route.params.blogId);
   },
   computed:{
     blog(){
       return this.$store.state.activeBlog;
     }
   }
 }
</script>

<style></style>