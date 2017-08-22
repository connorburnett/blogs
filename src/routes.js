import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Blogs from '@/components/Blogs'
import Blog from '@/components/Blog'
// import Create from '@/components/Create'

Vue.use(Router)

var routes = new Router({
    routes: [
        { name: 'Home', component: Home, path: '/' },
        { name: 'Blogs', component: Blogs, path: '/blogs' },
        { name: 'Blog', component: Blog, path: '/blogs/:blogTitle'}
        // { name: 'Create', component: Create, path: '/create' }
    ]
})

export default routes