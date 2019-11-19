import React, {FC} from "react"
import styles from '../Div.module.css';
interface ParagraphProps {


    title:string
    release?:number
    summary:string
    coverUrl?:string
    children?: React.ReactNode
}

export const ParagraphDiv: FC<ParagraphProps> = ({title,summary,children})=> (<div className={styles.divElement}>{title}{summary} </div>)


export default ParagraphDiv

