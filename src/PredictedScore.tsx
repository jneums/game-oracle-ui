import React, { useState, useEffect, FC } from 'react'
import getPredictions from './API/GetPredictions'
import { Game } from './Types'
import { Text } from "@react-md/typography";
import {
    Card,
    CardContent
} from "@react-md/card";
import styles from "./PredictedScore.module.scss";
import { TextField, Link } from 'react-md';

type Props = {
    game:Game,
    setScore: (score:number) => void
}

const PredictedScore: FC<Props> = ({game, setScore}) => {

    const [prediction, setPrediction] = useState(0)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getPredictions(game)
            .then(prediction => {
                setPrediction(prediction)
                setLoading(false)
                setScore(prediction)
            })
        });

    if (loading) {
        return (
            <>Loading...</>
        )
    } else {
        return (
            <div className={styles.container}>
                <Card bordered>
                <CardContent>
                <TextField 
                    id="prediction"  
                    label="Predicted Score"
                    type='number'
                    value={String(prediction)}
                    readOnly
                />
                    <Text>
                    Represents the predicted position on the {'  '}
                    <Link href="https://store.steampowered.com/search/?term=">Steam Store</Link> search results, ordered by popularity.
                    </Text>
                </CardContent>
                </Card>
            </div>
        )
    } 
}

export default PredictedScore