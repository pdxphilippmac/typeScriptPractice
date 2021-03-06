import React, {FC} from "react"
import styles from '../App.module.css';
interface ParagraphProps {


    title:string
    release?:number
    summary:string
    coverUrl?:string
    children?: React.ReactNode
}

export const ParagraphDiv: FC<ParagraphProps> = ({title,summary,children})=> (<div className={styles.divElement}>{title}{summary} {children}</div>)


export default ParagraphDiv

