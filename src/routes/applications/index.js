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

const Applications = () => (
	<section class={style.card}>
		<div class={style.card_header}>ВСЕ ЗАЯВКИ</div>
		<div class={style.card_table}>
			<table class={style.table}>
				<thead>
					<tr>
						<th style="width:30%;">Улица</th>
						<th style="width:10%;">Дом</th>
						<th style="width:10%;">Подъезд</th>
						<th style="width:10%;">Квартира</th>
						<th style="width:20%;">Дата</th>
						<th style="width:20%;">Статус</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Республики</td>
						<td>777</td>
						<td>5</td>
						<td>7</td>
						<td>20.05.2020</td>
						<td>Открыта</td>
					</tr>
					<tr>
						<td>Республики</td>
						<td>777</td>
						<td>8</td>
						<td>17</td>
						<td>20.03.2020</td>
						<td>Закрыта</td>
					</tr>
				</tbody>
			</table>
		</div>
	</section>
);

export default Applications;
