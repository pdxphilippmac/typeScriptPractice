import React, {FC} from "react"
import styles from "../App.module.css"

interface ButtonProps {

    onClick?: (e: React.MouseEvent) => void
    buttonTitle?:string
    children?: React.ReactNode
}

export const Button: FC<ButtonProps> = ()=> (<button className={styles.btn}/>)