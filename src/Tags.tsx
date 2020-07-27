import React, { FC, useState } from "react";
import { Chip } from "@react-md/chip";
import { Text } from "@react-md/typography";

import styles from "./Tags.module.scss";
import { UpdateGame, Game } from "./Types";

const tags:string[] = [
    '2D',
    'Anime',
    'Arcade',
    'Atmospheric',
    'Classic',
    'Co-op',
    'Colorful',
    'Comedy',
    'Cute',
    'Difficult',
    'Exploration',
    'FPS',
    'Family Friendly',
    'Fantasy',
    'Female Protagonist',
    'First-Person',
    'Funny',
    'Gore',
    'Great Soundtrack',
    'Horror',
    'Multiplayer',
    'Nudity',
    'Open World',
    'Pixel Graphics',
    'Platformer',
    'Point & Click',
    'Puzzle',
    'Relaxing',
    'Replay Value',
    'Retro',
    'Sandbox',
    'Sci-fi',
    'Sexual Content',
    'Shooter',
    'Singleplayer',
    'Story Rich',
    'Survival',
    'Turn-Based',
    'Violent',
    'Visual Novel'
];

type Props = {
  game:Game,
  updateGame:UpdateGame
}

const Tags: FC<Props> = ({game, updateGame}) => {
  const [selectedAmenities, setSelected] = useState<string[]>([]);
  
  return (
    <>
      <Text type="headline-5" className={styles.header}>
        Tags:
      </Text>
      <div className={styles.container}>
        {tags.map(tag => {
          const selected = selectedAmenities.includes(tag);

          return (
            <Chip
              key={tag}
              selected={!!game[tag]}
              className={styles.chip}
              selectedThemed
              onClick={() => {
                updateGame(tag, Number(!selected))
                setSelected((prevSelected) => {
                  if (prevSelected.includes(tag)) {
                    return prevSelected.filter((am) => am !== tag);
                  }

                  return [...prevSelected, tag];
                })
              }}
            >
              {tag}
            </Chip>
          );
        })}
      </div>
    </>
  );
};

export default Tags;