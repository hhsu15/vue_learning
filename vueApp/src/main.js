// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource' //for hitting http
import App from './App'
import Users from './components/Users'
import Mytest from './components/Mytest'
//connect the middleware
Vue.use(vueResource)
Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: [
		{path: '/', component: Users},
		{path: '/Mytest', component: Mytest}
	]
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  template: `
  	<div id='app'>
  		<ul>
  			<li><router-link to="/">Users</router-link></li>
  			<li><router-link to="/Mytest">test</router-link></li>
  		</ul>
  		<router-view></router-view>
  	</div>
  `,
  //el: '#app',
  //components: { App },
  //template: '<App/>'
}).$mount('#app')
