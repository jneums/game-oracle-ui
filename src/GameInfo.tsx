import React, { FC } from 'react'
import Genres from './Genres'
import Languages from './Languages'
import Tags from './Tags'
import OriginalCost from './OriginalCost'

import styles from "./GameInfo.module.scss";
import { UpdateGame, Game } from './Types'

type Props = {
    game:Game,
    updateGame:UpdateGame
}

const GameInfo: FC<Props> = ({game, updateGame}) => {
    return (
        <div className={styles.container}>
            <OriginalCost game={game} updateGame={updateGame} />
            <Genres game={game} updateGame={updateGame} />
            <Languages game={game} updateGame={updateGame} />
            <Tags game={game} updateGame={updateGame} />
        </div>

    )
}

export default GameInfo