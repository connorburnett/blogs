<template>
  <div class="create">
    <form @submit.prevent="createBlog()">
      <input type="text" v-model="blog.title" placeholder="Title">
      <wysiwyg v-model="blog.body" />
      <button class="btn btn-primary" type="submit">Submit</button>
    </form>
  </div>

  <!--<div>
    <h1>Blogs in VUE</h1>

    <wysiwyg v-model="createdBlog.body" />

    <div>
      <button @click="createBlog">Create New Blog</button>
    </div>

    <ul>
      <li v-for="blog in blogs">
        <router-link :to="{name: 'Blog', params: { blogTitle:  blog.title, blogBody: blog.body } }">{{blog.title}}</router-link>
      </li>
    </ul>

  </div>-->
</template>

<script>
  export default {
    name: 'blog',
    data() {
      return {
        blog: {
          title: '',
          body: ''
        }
      }
    },
    computed: {
      blogs() {
        return this.$store.state.blogs
      }
    },
    // beforeCreate() {
    //   //store.getBlogs();
    // },

    methods: {
      createBlog() {
        this.$store.dispatch("createBlog", this.blog)
      }
    },

    mounted() {
      this.$store.dispatch('getBlogs')
    }

  }

</script>

<style></style>