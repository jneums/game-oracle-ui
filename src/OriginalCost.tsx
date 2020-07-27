import React, { FC } from "react";
import { Text } from "@react-md/typography";
import { TextField } from "@react-md/form";

import styles from './OriginalCost.module.scss'
import { UpdateGame, Game } from "./Types";

type Props = {
  game:Game,
  updateGame:UpdateGame
}

const OriginalCost: FC<Props> = ({game, updateGame}) => {
  function handleChange(e:React.ChangeEvent<HTMLInputElement>):void {
    updateGame(e.target.id, Number(e.target.value))
  }
  return (
    <>
      <Text type="headline-5" className={styles.header}>
        General Info:
      </Text>
      <div className={styles.container}>
        <TextField 
            id="Original_Cost"  
            label="Sell Price"
            type='number'
            value={game['Original_Cost'].toString()}
            onChange={handleChange}
        />
        <TextField 
            id="Achievements"  
            label="Num Achievements"
            type='number'
            value={game['Achievements'].toString()}
            onChange={handleChange}
        />
        <TextField 
            id="Presence"  
            label="Social Media Posts"
            type='number'
            value={game['Presence'].toString()}
            onChange={handleChange}
        />
      </div>
    </>
  );
};

export default OriginalCost

