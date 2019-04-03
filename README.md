# v-vue
<p>原谅我第一次在git上写文档，也原谅我初中语文就及格过两次，同样也原谅我刚开始扒vue文档（去年做小程序太忙，没时间扒vue，本来去年给自己定的目标就是学会小程序和vue），以下描述如有看不懂的，那就看不懂吧！ 手动滑稽←_←</p>
<h1>仿微信小程序路由配置封装的一套原生vue路由配置方法;</h1>
<h3>1、通过pages.json文件配置页面信息,格式与正常配置路由一样</h3>
<p>*<b>router.js</b>文件是我开始仿文档配置的路由，由于习惯了小程序的路由配置方式，强迫症昨天花了点时间自己弄了个vue版的。</p>
<p>*<b>router2.js</b>这个是我最终定稿版本，url最好看的</p>
<p>*<b>router3.js</b>这个是url最难看的版本，可以delete</p>

<b>page.json代码</b>
<pre>
{
	"pages": [
		{
			"path": "/login",
			"name": "login",
			"meta": {
				"title": "登录"
			}
		},
		{
			"path": "/home",
			"name": "home",
			"meta": {
				"title": "主页"
			},
			"redirect": "/home/page1",
			"children": [
				{
					"path": "/nav1/page1",
					"name": "page1",
					"meta": {
						"title": "首页Page1"
					}
				},
				{
					"path": "/nav1/page2",
					"name": "page2",
					"meta": {
						"title": "首页Page2"
					}
				}
			]
		},
		{
			"path": "/about",
			"name": "about",
			"meta": {
				"title": "关于"
			}
		}
	]
}
</pre>

<b>router2.js代码</b>
<pre>
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

</pre>

<h3>2、页面跳转注意</h3>
<p>这里我有一点要说一下：我这里最多只支持两级页面，可以改成N级的，但我的初衷是仿小程序模式，二级页面已经是忍受的极限了，配三级四级的话格式太丑，不能忍！！！</p>
<p>如果配置了子页面，如下：</p>
<pre>
{
			"path": "/home",  //父页面的path
			"name": "home",
			"meta": {
				"title": "主页"
			},
			"redirect": "/home/page1",  //重定向到page1页面
			"children": [
				{
					"path": "/nav1/page1",
					"name": "page1",  //子页面的name
					"meta": {
						"title": "首页Page1"
					}
				},
				{
					"path": "/nav1/page2",
					"name": "page2",
					"meta": {
						"title": "首页Page2"
					}
				}
			]
		},
</pre>
<p>那么跳转子页面的路径是：父页面的path + '/' + 子页面的name</p>
<p>例如：</p>
<pre>
this.$router.push('/home/page1');
</pre>
<p>昨天扒文档不细心，走的/home/nav1/page1,结果白茫茫，特此声明一下</p>

<h1>如果这个东西对您有用，star一下吧，给新人一点鼓励，我会加油的！！！up!up!up!</h1>
<h1>非常感谢！</h1>

