import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import path, { join } from 'path';

const envs = dotenv.config({ path: join(__dirname, '.env') });
const domain = envs.parsed?.API_DOMAIN || 'jsonplaceholder.typicode.com';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		host: true,
		port: 3000,
		proxy: {
			'/api': {
				target: `https://${domain}`,
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ''),
			},
		},
	},
	resolve: {
		alias: [{ find: '@', replacement: path.resolve('src') }],
	},
	css: {
		modules: {
			generateScopedName: '[name]__[local]__[hash:8]',
		},
	},
});
