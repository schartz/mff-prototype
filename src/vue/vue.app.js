import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import Hello from './main.vue';

const vueLifeCycles = singleSpaVue({
	Vue,
	appOptions: {
		el: '#vue',
		render: r => r(Hello)
	}
});


export const bootstrap = [
	vueLifeCycles.bootstrap
];

export const mount = [
	vueLifeCycles.mount
];

export const unmount = [
	vueLifeCycles.unmount
]