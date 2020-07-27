import { Game } from '../Types'

const axios = require('axios').default;

async function getGame(game:Game):Promise<number> {
    let prediction = 0
    try {
        const gameValues = convertGame(game)
        const response = await axios.get('https://game-oracle.herokuapp.com/game', {
            params: {
                game: gameValues
            }
        });
        prediction = response.data.prediction
    } catch (error) {
        console.error(error);
    }

    return prediction
}

function convertGame(game:Game): string {
    return JSON.stringify(Object.values(game))
}

export default getGame