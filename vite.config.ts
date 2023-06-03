import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	server: {
		https: false,
		host: true,
		port: 25565
	},
	plugins: [sveltekit()]
});
