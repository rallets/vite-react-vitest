import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
	// This will keep running your existing tests.
	// If you don't need to run those in Node.js anymore,
	// You can safely remove it from the workspace file
	// Or move the browser test configuration to the config file.
	//   'vite.config.ts',
	
	{
		// extends: 'vite.config.ts',
		// Non-Browser mode tests are here:
		test: {
			include: ['src/**/*.test.ts'],
			name: 'unit',
			environment: 'node',
		},
	},
	{
		// extends: 'vite.config.ts',
		test: {
			// Tests for browser mode are here
			setupFiles: ['./vitest.setup.ts'],
			include: ['vitest-example/**/*.test.tsx', 'src/**/*.test.tsx'],
			name: 'browser',
			browser: {
				enabled: true,
				name: 'chromium',
				provider: 'playwright',
				// https://playwright.dev
				providerOptions: {
					launch: {
						devtools: true,
					}
				},
			},
		},
	},
])
