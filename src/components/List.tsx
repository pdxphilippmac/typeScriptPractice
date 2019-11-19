import React, {FC} from "react"
import {data} from "../api/data"

interface List {

    data?: {}
    children:React.ReactNode
}



export const List: FC<List> = (children) => (<p>{children}</p>)


