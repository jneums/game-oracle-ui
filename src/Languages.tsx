import React, { FC, useState } from "react";
import { Chip } from "@react-md/chip";
import { Text } from "@react-md/typography";

import styles from "./Languages.module.scss";

const languages = ['French', 'German', 'Italian', 'Japanese', 'Russian'];

const Languages: FC = () => {
  const [selectedAmenities, setSelected] = useState<string[]>([]);
  return (
    <>
      <Text type="headline-5" className={styles.header}>
        Languages:
      </Text>
      <div className={styles.container}>
        {languages.map((languages) => {
          const selected = selectedAmenities.includes(languages);

          return (
            <Chip
              key={languages}
              selected={selected}
              className={styles.chip}
              selectedThemed
              onClick={() =>
                setSelected((prevSelected) => {
                  if (prevSelected.includes(languages)) {
                    return prevSelected.filter((am) => am !== languages);
                  }

                  return [...prevSelected, languages];
                })
              }
            >
              {languages}
            </Chip>
          );
        })}
      </div>
    </>
  );
};

export default Languages;