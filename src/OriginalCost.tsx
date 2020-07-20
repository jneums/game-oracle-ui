import React, { FC } from "react";
import { Text } from "@react-md/typography";
import { TextField } from "@react-md/form";

import styles from './OriginalCost.module.scss'

const OriginalCost: FC = () => {
    return (
        <>
          <Text type="headline-5" className={styles.header}>
            General Info:
          </Text>
          <div className={styles.container}>
            <TextField 
                id="original-cost"  
                label="Sell Price"
            />
            <TextField 
                id="achievements"  
                label="Num Achievements"
            />
            <TextField 
                id="presence"  
                label="Social Media Posts"
            />
          </div>
        </>
    );
};

export default OriginalCost

