//vue-dischi - 09/04/2021
// Author: Lore
/*$(document).ready(function () {

});*/
var app = new Vue({
	el: '#root',
	data: {
		album: [],
		generi: []
	},
	mounted () {
		axios.get('https://flynn.boolean.careers/exercises/api/array/music')
			.then((risposta) => {
				this.album = risposta.data.response;
				this.album.forEach((elemento) => {

					this.generi.push(elemento.genre);
				});
			});
		console.log(this.generi);
	},
	computed: {},
	methods: {}
});