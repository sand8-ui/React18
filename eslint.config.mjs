import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';
import jest from 'eslint-plugin-jest/lib/index.js';

export default defineConfig([
	{
		files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
		plugins: { js, jest },
		extends: ['js/recommended', 'plugin:jest/recommended'],
		languageOptions: { globals: globals.node, ...globals.jest }
	},
	tseslint.configs.recommended
]);
