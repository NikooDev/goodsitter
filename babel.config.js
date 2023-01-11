module.exports = function(api) {
	api.cache(true)
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			'nativewind/babel',
			[
				'module-resolver',
				{
					root: ['./'],
					extensions: [
						'.ios.js',
						'.android.js',
						'.js',
						'.jsx',
						'.json',
						'.tsx',
						'.ts',
						'.native.js',
					],
					alias: {
						'@Action': './src/actions',
						'@Asset': './src/assets',
						'@Component': './src/components',
						'@Container': './src/containers',
						'@Helper': './src/helpers',
						'@Hook': './src/hooks',
						'@Stack': './src/stack/screens.tsx',
						'@Screen': './src/screens',
						'@Service': './src/services',
						'@Store': './src/store',
						'@Type': './src/types'
					}
				}
			]
		]
	}
}