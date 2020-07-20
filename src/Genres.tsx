import React, { FC, useState } from "react";
import { Chip } from "@react-md/chip";
import { Text } from "@react-md/typography";

import styles from "./Genres.module.scss";

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

const Genres: FC = () => {
  const [selectedAmenities, setSelected] = useState<string[]>([]);
  return (
    <>
      <Text type="headline-5" className={styles.header}>
        Genres:
      </Text>
      <div className={styles.container}>
        {genres.map((genres) => {
          const selected = selectedAmenities.includes(genres);

          return (
            <Chip
              key={genres}
              selected={selected}
              className={styles.chip}
              selectedThemed
              onClick={() =>
                setSelected((prevSelected) => {
                  if (prevSelected.includes(genres)) {
                    return prevSelected.filter((am) => am !== genres);
                  }

                  return [...prevSelected, genres];
                })
              }
            >
              {genres}
            </Chip>
          );
        })}
      </div>
    </>
  );
};

export default Genres;