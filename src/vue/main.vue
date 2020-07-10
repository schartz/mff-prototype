<template>
	<div class="vueApp">
		<div id="infobar">Running in Vue! <a href="https://github.com/mildlyautistic/" target="_blank" style="color: rgb(64, 168, 243); text-decoration: none; display: inline-block; padding: 0px 0px 3px; border-bottom: 2px solid rgb(64, 168, 243);">Check out the repo here.</a></div>
		<h1>
			Selected Book Detail
		</h1>
		<h3>
			Select a book in the left to see it's detail
		</h3>



		<div id="bookinfo">
			<h2 v-if="isFirstTime" style="text-align: center">
				Select a book to see it's info
			</h2>
			<h2 v-if="!showBookDetails && !isFirstTime" style="text-align: center">
				Loading book info...
			</h2>
			<table v-if="showBookDetails">
				<tr>
					<td><strong>Title</strong></td>
					<td>{{book.name}}</td>
				</tr>
				<tr>
					<td><strong>Author(s)</strong></td>
					<td><span v-for="author in book.authors">{{author}}, </span></td>
				</tr>

				<tr>
					<td><strong>ISBN</strong></td>
					<td>{{book.isbn}}</td>
				</tr>

				<tr>
					<td><strong>Pages</strong></td>
					<td>{{book.numberOfPages}}</td>
				</tr>
				<tr>
					<td><strong>Publisher</strong></td>
					<td>{{book.publisher}}</td>
				</tr>
				<tr>
					<td><strong>Country</strong></td>
					<td>{{book.country}}</td>
				</tr>
				<tr>
					<td><strong>Media Type</strong></td>
					<td>{{book.mediaType}}</td>
				</tr>
				<tr>
					<td><strong>Release Date</strong></td>
					<td>{{book.released}}</td>
				</tr>
			</table>
		</div>
	</div>
</template>


<script>
	import axios from 'axios';
	const bookDataUrl = 'https://www.anapioficeandfire.com/api/books/';

	export default {
		name: 'hello',
		data: function() {
			return {
				showBookDetails: false,
				isFirstTime: true,
				book: {
					"url": "https://www.anapioficeandfire.com/api/books/1",
					"name": "A Game of Thrones",
					"isbn": "978-0553103540",
					"authors": [
						"George R. R. Martin"
					],
					"numberOfPages": 694,
					"publisher": "Bantam Books",
					"country": "United States",
					"mediaType": "Hardcover",
					"released": "1996-08-01T00:00:00",
					"characters": [
						"https://www.anapioficeandfire.com/api/characters/2",
					],
					"povCharacters": [
						"https://www.anapioficeandfire.com/api/characters/148",
					]
				}
			}
		},

		mounted() {
			let self = this;
			document.addEventListener('awesome', function (event) {
				self.fetchBookDetails(event.detail.index);
				self.$data.isFirstTime = false;
			});
		},

		methods: {
			fetchBookDetails: function (index) {
				this.$data.showBookDetails = false;
				let self = this;
				axios.get(bookDataUrl + index).then(response => {
					self.$data.book = response.data;
					self.$data.showBookDetails = true;
				}).catch(error => {
					console.log(error);
					console.log(error.response.data);
					alert('Error fetching book details. Check console for debug logs.')
				});
			}
		}
	}
</script>


<style>
	.vueApp{
		font-family: Arial, Helvetica, sans-serif;
		text-align: center;
		padding-top: 80px;
		position: relative;
	}

	#infobar{
		position: absolute;
		top: 0px;
		left: 0px;
		right: 0px;
		font-size: 14px;
		padding: 20px 10px;
		background: rgb(51, 51, 51);
		color: rgb(187, 187, 187);
		letter-spacing: 0.5px;
	}

	#bookinfo{
		position: relative;
		border-radius: 5px;
		padding: 20px;
		margin: 10px;
		width: 47%;
		color: #333;
		flex-basis: width;
		background-color: rgb(165, 230, 230);
		margin:auto;
		text-align: left;
	}

	#bookinfo strong{
		margin-right: 1rem;
	}

	table{
		border-collapse:separate;
		border-spacing:0 1em;
	}
</style>
