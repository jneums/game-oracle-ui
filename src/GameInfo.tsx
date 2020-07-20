import React from 'react'
import Genres from './Genres'
import Languages from './Languages'
import Tags from './Tags'
import OriginalCost from './OriginalCost'

import styles from "./GameInfo.module.scss";

const game = {}

function GameInfo() {
    return (
        <div className={styles.container}>
            <OriginalCost />
            <Genres />
            <Languages />
            <Tags />
        </div>

    )
}

export default GameInfo