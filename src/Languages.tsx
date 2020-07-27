import React, { FC, useState } from "react";
import { Chip } from "@react-md/chip";
import { Text } from "@react-md/typography";

import styles from "./Languages.module.scss";
import { UpdateGame, Game } from "./Types";

type Props = {
  game:Game,
  updateGame:UpdateGame
}

const languages = ['French', 'German', 'Italian', 'Japanese', 'Russian'];

const Languages: FC<Props> = ({game, updateGame}) => {
  const [selectedAmenities, setSelected] = useState<string[]>([]);
  return (
    <>
      <Text type="headline-5" className={styles.header}>
        Languages:
      </Text>
      <div className={styles.container}>
        {languages.map((language) => {
          const selected = selectedAmenities.includes(language);

          return (
            <Chip
              key={language}
              selected={!!game[language]}
              className={styles.chip}
              selectedThemed
              onClick={() => {
                updateGame(language, Number(!selected))
                setSelected((prevSelected) => {
                  if (prevSelected.includes(language)) {
                    return prevSelected.filter((am) => am !== language);
                  }

                  return [...prevSelected, language];
                })
              }}
            >
              {language}
            </Chip>
          );
        })}
      </div>
    </>
  );
};

export default Languages;