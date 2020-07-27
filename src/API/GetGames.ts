import { GameInfo } from "../Types";

const axios = require('axios').default;

async function getGames(score:number, amount:number): Promise<GameInfo[]> {
    let games:GameInfo[] = []
    try {
        const response = await axios.get('/games', {
            params: {
                score,
                amount
            }
        })
        games = JSON.parse(response.data.games)

    } catch (error) {
        console.log(error)
    }

    return games
}

export default getGames


