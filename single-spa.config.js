import {registerApplication, start} from 'single-spa';


// register vue app but not react
registerApplication(
	'vue',
	() => import('./src/vue/vue.app.js'),
	() => location.pathname === '/react' ? false : true
);



// register react app but not vue
registerApplication(
	'react',
	() => import('./src/react/main.app.js'),
	() => location.pathname === '/vue' ? false: true
);

start();