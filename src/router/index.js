import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import tanqiu from '@/pages/tanqiu'
import tanquan from '@/pages/tanquan'
import tanren from '@/pages/tanren'
import probing from '@/components/probing'
import elite from '@/components/elite'
import library from '@/components/library'
import me from '@/components/me'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/tanqiu',
      name: 'tanqiu',
      component: tanqiu
    },
    {
      path: '/tanquan',
      name: 'tanquan',
      component: tanquan,
      children:[
		{
			path:'/',
			redirect:'probing'
		},
		{
			path:'elite',
			component: elite
		},
		{
			path:'library',
			component:library
		},
		{
			path:'me',
			component:me
		},
		{
			path:'probing',
			component:probing
		}

      ]
    },
    {
      path: '/tanren',
      name: 'tanren',
      component: tanren
    },
  ]
})
