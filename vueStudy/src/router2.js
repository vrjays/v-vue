import Vue from 'vue'
import Pages from '../pages.json'
import Router from 'vue-router'
Vue.use(Router)

let routes = [];
for(let i = 0,len = Pages.pages.length;i < len;i++){
	let page = Pages.pages[i];
	let cpath = 'pages' + page.path;
	page.path = '/'+page.name;
	page.component = ()=> import(`@/${cpath}`);
	let children = page.children;
	if(children && children.length > 0){
		children.forEach((item,idx)=>{
			let childpath = 'pages' + item.path;
			item.path = item.name;
			item.component = ()=> import(`@/${childpath}`);
		})
		page.children = children;
	}
	routes.push(page);
}
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
