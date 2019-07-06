import { h } from 'preact';
import style from './style';

const axios = require('axios');

// Make a request for a user with a given ID
axios.get('http://localhost:3000/admin')
	.then(function (response) {
		console.log(response);
	})
	.catch(function (error) {
		console.log(error);
	})
	.finally(function () {
	});

const Home = () => (
	<div class={style.home}>
		<h1>Home</h1>
		<p>This is the Home component.</p>
	</div>
);

export default Home;
