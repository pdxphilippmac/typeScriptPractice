import React, {FC, MouseEvent} from "react"
import styles from "../App.module.css"

interface ButtonProps {

    buttonTitle?:string
    children?: React.ReactNode
    onClick(e: MouseEvent<HTMLElement>): void
    handleClick?:() => void
}


export const Button: FC<ButtonProps> = ({ onClick: handleClick, children }) => (
    <button className={styles.btnAlert} onClick={handleClick}>
      {children}
    </button>
  )

 