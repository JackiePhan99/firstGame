import axios from 'axios'

export async function getGamesFromAPI() {
	const games = await axios.get(`https://api.rawg.io/api/games?key=c7b111b5d46e4a7caf49c4820a3d5ba6&dates=2019-09-01,2019-09-30&platforms=18,1,7`)
		.then(res => {
			return res.data.results
		})
	return games;
}

