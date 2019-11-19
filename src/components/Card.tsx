import React, {FC} from "react"
import styles from '../App.module.css';
import {data2} from "../api/data"
interface CardProps {
    title: string,
    paragraph: string
    data2?:{}
  
  }


  
  
  export const Card: FC<CardProps> = ({  title, paragraph, children }) => 
   
   
   
   <div className={styles.card}>
     <p>
      { paragraph }
    </p>

    </div>
  
  