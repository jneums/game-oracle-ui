import React, { FC, useState } from "react";
import { Chip } from "@react-md/chip";
import { Text } from "@react-md/typography";

import styles from "./Genres.module.scss";
import { UpdateGame, Game } from "./Types";

const genres = [
    'Action',
    'Free to Play',
    'Adventure',
    'Massively Multiplayer',
    'RPG',
    'Indie',
    'Simulation',
    'Strategy',
    'Early Access',
    'Racing',
    'Sports',
    'Casual'
];

type Props = {
  game:Game,
  updateGame:UpdateGame
}

const Genres: FC<Props> = ({game, updateGame}) => {
  const [selectedAmenities, setSelected] = useState<string[]>([]);
  return (
    <>
      <Text type="headline-5" className={styles.header}>
        Genres:
      </Text>
      <div className={styles.container}>
        {genres.map((genre) => {
          const selected = selectedAmenities.includes(genre);

          return (
            <Chip
              key={genre}
              selected={!!game[genre]}
              className={styles.chip}
              selectedThemed
              onClick={() => {
                updateGame(genre, Number(!selected))
                setSelected((prevSelected) => {
                  if (prevSelected.includes(genre)) {
                    return prevSelected.filter((am) => am !== genre);
                  }

                  return [...prevSelected, genre];
                })
              }}
            >
              {genre}
            </Chip>
          );
        })}
      </div>
    </>
  );
};

export default Genres;