import adapter from '@sveltejs/adapter-static';
import { importAssets } from 'svelte-preprocess-import-assets';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte'],
	preprocess: [
		importAssets({
			sources: (defaultSources) => {
				return [
					...defaultSources,
					{
						tag: 'Icon',
						srcAttributes: ['src']
					},
					{
						tag: 'IconButton',
						srcAttributes: ['src']
					}
				];
			}
		}),
		vitePreprocess()
	],

	compilerOptions: {
		warningFilter: (warning) => {
			if (warning.code === 'attribute_quoted') {
				return false;
			}
			return true;
		}
	},

	kit: {
		adapter: adapter({
			fallback: '200.html'
		}),

		paths: {
			relative: false
		},

		prerender: {}
	}
};

export default config;
