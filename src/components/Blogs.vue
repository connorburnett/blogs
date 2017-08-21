<template>
  <div>
    <h1>Blogs VUE</h1>

    <ul>
      <li v-for="blog in blogs">
        <router-link :to="{name: 'Blog', params: { blogTitle: blog.title } }">{{blog.body}}</router-link>
      </li>
    </ul>

  </div>
</template>

<script>
  export default {
    data(){
      return {
        blogs:[{
          title: 'dsjkaf903j',
          body: 'My mom took away my phone cause she thought I was selling drugs so now all I have is my burner phone'
        },{
          title: 'dsfkj90322930',
          body: 'Nippon is best country, Evangelion is best anime'
        }]
      }
    },
    beforeCreate(){
      console.log("WHAT IS THIS?", this.name)
    },
    mounted(){
      console.log('ABOUT IS READY')
      console.log("WHAT IS THIS?", this.name)
    }
  }
</script>

<style></style>