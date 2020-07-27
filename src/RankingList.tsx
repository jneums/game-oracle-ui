import React, {FC, useEffect, useState} from 'react'
import styles from './RankingList.module.scss'
import getGames from './API/GetGames'
import { Card, CardContent, CardTitle, CardHeader, Divider } from 'react-md'
import { GameInfo } from './Types'

type Props = {
    score: number
}

const RankingList: FC<Props> = ({score}) => {
    const initialGameList:GameInfo[] = []
    const [gameList, setGameList] = useState(initialGameList)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getGames(score, 10)
            .then(results => {
                setGameList(results)
                setLoading(false)
            })
    }, [score])

    if (loading) {
        return (<>Loading...</>)
    } else {
        return (
            <div className={styles.container}>
                <Card bordered className={styles.card}>
                    <CardHeader className={styles.header}>
                    <CardTitle>
                        Similar Games:
                    </CardTitle>
                    <Divider />
                    </CardHeader>
                    <CardContent className={styles.cardContent}>
                        <ul className={styles.list}>
                            {gameList.map((game:GameInfo) => formatGameInfo(game))}
                        </ul>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

function formatGameInfo(gameInfo:GameInfo): JSX.Element {
    const id:number = Number(gameInfo.id)
    const idWithCommas:string = numberWithCommas(id)
    let name:string = gameInfo.name
    const maxLetters = 20
    if (name == null) {
        name = 'No Name'
    } else if (idWithCommas.length + name.length > maxLetters) {
        name = name.slice(0, maxLetters - idWithCommas.length) + '...'
    }
    return (<li key={id} className={styles.gameInfo}><b>{idWithCommas}</b>: <i>{name}</i></li>)
}

function numberWithCommas(x:number):string {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default RankingList