
require('./bootstrap');

window.Vue = require('vue');

 import vue from 'vue';

import BootstrapVue from 'bootstrap-vue';
import VueRouter from 'vue-router';

Vue.use(BootstrapVue);
Vue.use(VueRouter);

import mainApp from './components/MainApp.vue';
import beranda from './components/Beranda/beranda.vue';
import Admin from './components/Admin/admin.vue';
import Chat from './components/Chats/chats.vue';
import profile from './components/profile/profile.vue';
import Admin_tambah from './components/Admin/admin_add.vue';

const router = new VueRouter({
	mode: 'history',
  routes: [
  	{
			path: '/',
			name: 'beranda',
			component: beranda
		},
		{
			path: '/chat',
			name: 'chat',
			component: Chat
		},
		{
			path: '/admin',
			name: 'admin',
			component: Admin
		},
		{
			path: '/admin/tambah',
			name: 'admin.tambah',
			component: Admin_tambah
		},
		{
			path: '/profile',
			name: 'profile',
			component: profile
		}
  ]
});

const app = new Vue({
    el: '#app',
    router,
    components: {
    	mainApp
    }
});