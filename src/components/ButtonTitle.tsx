import React,{FC} from "react"

interface ButtonTitleProps {

    name:string
    children?: React.ReactNode
}

export const ButtonTitle: FC<ButtonTitleProps> =(name) => (<h2>{name}</h2>)