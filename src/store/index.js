import vue from 'vue'
import vuex from 'vuex'
import $ from 'jquery'

vue.use(vuex);

var store = new vuex.Store({
   state: {
       blogs: [{
           title: '103 Ways to Sink Your Ship',
           body: 'Pull the plug and more'
       }, {
           title: '51 Ways to Float Your Boat',
           body: 'Start with a float'
       }],
       activeBlog: {}
   },
   mutations: {
       //Signature for all mutations
       //MUTATIONS SHOULD ALWAYS BE PURE FUNCTIONS (AKA SETTERS)
       addBlog(state, blog){
           state.blogs.push(blog);
       },
       setActiveBlog(state,blog){
           state.activeBlog = blog;
       },
       updateBlogs(state,blogs){
           state.blogs = blogs;
       }
   },
   actions: {
       //Signature for all Actions. ({Commit, dispatch}, payload)
       createBlog({ commit, dispatch }, blog) {
           $.post('http://localhost:3000/api/blogs', blog).then(createdBlog => {
               commit('addBlog', createdBlog)
           }).fail(err => {
               console.error(err)
           })

       },//stub for future
       removeBlog({ commit, dispatch }, payload) {

       },//stub for future
       updateBlog({ commit, dispatch }, payload) {

       },
       getBlogs({ commit, dispatch }) {
           $.get('http://localhost:3000/api/blogs').then(blogs => {
               commit('updateBlogs', blogs)
           })
       },
       getBlog({ commit, dispatch }, blogId) {
           $.get('http://localhost:3000/api/blogs/' + blogId).then(blog => {
               commit('setActiveBlog', blog)
           })
       }

   }

})


export default store