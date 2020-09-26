// function getUsers() {
// 	return fetch('https://jsonplaceholder.typicode.com/users', {
// 		method: 'GET',
// 		headers: { 'Content-Type': 'application/json' },
// 	}).then(res => res.json());
// }

// function getUserPosts(userId) {
// 	return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, {
// 		method: 'GET',
// 		headers: { 'Content-Type': 'application/json' },
// 	}).then(res => res.json());
// }

function getUsers() {
	return getFetchAxios('https://jsonplaceholder.typicode.com/users');
}

function getUserPosts(userId) {
	return getFetchAxios('https://jsonplaceholder.typicode.com/posts', {
		userId,
	});
}

getUsers().then(users => {
	users.forEach(user => {
		getUserPosts(user.id).then(posts => {
			console.log(user.name);
			console.log(posts.length);
		});
	});
});

function getFetch(url, params = {}) {
	const queryString = Object.entries(params)
		.map(param => {
			return `${param[0]}=${param[1]}`;
		})
		.join('&');
	return fetch(`${url}?${queryString}`, {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' },
	}).then(res => res.json());
}

function getFetchAxios(url, params = {}) {
	return axios({
		url,
		method: 'GET',
		params,
	}).then(res => res.data);
}
