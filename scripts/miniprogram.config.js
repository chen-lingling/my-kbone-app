/**
 * 配置参考：https://wechat-miniprogram.github.io/kbone/docs/config/
 */

module.exports = {
	origin: 'https://test.miniprogram.com',
	entry: '/test/aaa',
	router: {
		index: [
			'/test/aaa',
			'/test/bbb',
		],
		log: [
			'/test/aaa',
			'/test/bbb',
		]
	},
	redirect: {
		notFound: 'entry',
		accessDenied: 'entry',
	},
	generate: {
		autoBuildNpm: 'npm',
		tabBar: {
			color: '#000000',
			selectedColor: '#07c160',
			backgroundColor: '#ffffff',
			list: [{
				pageName: 'index',
				text: '主页',
			}, {
				pageName: 'index',
				text: '个人页',
			}],
		},
	},
	app: {
		navigationBarTitleText: '8888',
	},
	appExtraConfig: {
		sitemapLocation: 'sitemap.json',
	},
	global: {},
	pages: {},
	optimization: {
		domSubTreeLevel: 10,

		elementMultiplexing: true,
		textMultiplexing: true,
		commentMultiplexing: true,
		domExtendMultiplexing: true,

		styleValueReduce: 5000,
		attrValueReduce: 5000,
	},
	projectConfig: {
		projectname: 'kbone-template-react',
		appid: '',
	},
}