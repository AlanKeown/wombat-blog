import {resolve} from 'path';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			resolve: {
				alias: {
					$component: resolve('./src/component'),
					// $store: resolve('./src/store'),
					// $action: resolve('./src/action')
				}
			}
		},
		paths: {
			base: '/wombat-blog',
			assets: '/wombat-blog'
		},
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		})
	}
};

export default config;
