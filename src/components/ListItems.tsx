import React,{FC} from "react"


interface ListItemProps {
data?: {}
item?:string


}

export const ListItem: FC<ListItemProps> = (item) => (<p>Props{item}</p>)