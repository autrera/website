import posts from '../_posts.js';

let categories = {};
posts.forEach(post => {
	categories[post.category] = [];
});
posts.forEach(post => {
	categories[post.category].push(post);
});

export function get(req, res, next) {
	// the `category` parameter is available because
	// this file is called [category].json.js
	const { category } = req.params;

	if (categories[category]) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify(categories[category]));
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `Category not found`
		}));
	}
}

// const contents = JSON.stringify(posts.filter(post => {
// 	if (post.active) {
// 		return post;
// 	}
// }));

// export function get(req, res) {
// 	res.writeHead(200, {
// 		'Content-Type': 'application/json'
// 	});

// 	res.end(contents);
// }