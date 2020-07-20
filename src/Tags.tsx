import React, { FC, useState } from "react";
import { Chip } from "@react-md/chip";
import { Text } from "@react-md/typography";

import styles from "./Tags.module.scss";

const tags = [
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

const Tags: FC = () => {
  const [selectedAmenities, setSelected] = useState<string[]>([]);
  return (
    <>
      <Text type="headline-5" className={styles.header}>
        Tags:
      </Text>
      <div className={styles.container}>
        {tags.map((tags) => {
          const selected = selectedAmenities.includes(tags);

          return (
            <Chip
              key={tags}
              selected={selected}
              className={styles.chip}
              selectedThemed
              onClick={() =>
                setSelected((prevSelected) => {
                  if (prevSelected.includes(tags)) {
                    return prevSelected.filter((am) => am !== tags);
                  }

                  return [...prevSelected, tags];
                })
              }
            >
              {tags}
            </Chip>
          );
        })}
      </div>
    </>
  );
};

export default Tags;