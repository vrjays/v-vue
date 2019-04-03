import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login.vue'
import Home from '@/pages/home.vue'
import About from '@/pages/about.vue'
import Page1 from '@/pages/nav1/page1.vue'
import Page2 from '@/pages/nav1/page2.vue'

Vue.use(Router)

const routes = [
	{
		path: '/',
		name: 'login',
		component: Login,
		meta: {
			title: '登录',
		}
	},
	{
		path: '/home',
		name: 'home',
		component: Home,
		redirect: '/home/page1',
		children: [{
			path: 'page1',
			name: 'page1',
			component: Page1,
			meta: {
				title: '首页Page1',
			},
		}, {
			path: 'page2',
			name: 'page2',
			component: Page2,
			meta: {
				title: '首页Page2',
			},
		}]
	},
	{
		path: '/about',
		name: 'about',
		component: About,
		meta: {
			title: '关于',
		}
	},
]

const router = new Router({
	mode: 'hash',
	routes: routes
})
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})


export default router
