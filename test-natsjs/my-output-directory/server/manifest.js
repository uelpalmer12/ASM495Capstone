export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"start-68754abe.js","js":["start-68754abe.js","chunks/index-5cfe7503.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "a/gps",
				pattern: /^\/a\/gps\/?$/,
				names: [],
				types: [],
				path: "/a/gps",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "a/test",
				pattern: /^\/a\/test\/?$/,
				names: [],
				types: [],
				path: "/a/test",
				shadow: null,
				a: [0,4],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
