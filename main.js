//vue-dischi - 09/04/2021
// Author: Lore
/*$(document).ready(function () {

});*/
var app = new Vue({
	el: '#root',
	data: {
		album: [],
		generi: [],
		currentGenre: ''
	},
	mounted () {
		axios.get('https://flynn.boolean.careers/exercises/api/array/music')
			.then((risposta) => {
				this.album = risposta.data.response;
				this.album.forEach((item)=>{
					if (!this.generi.includes(item.genre)) {
						this.generi.push(item.genre)
					}

				})

			});

	},
	computed: {},
	methods: {}
});