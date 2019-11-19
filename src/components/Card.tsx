import React, {FC} from "react"
interface CardProps {
    title: string,
    paragraph: string
  }
  
  
  export const Card: FC<CardProps> = ({ title, paragraph, children }) => <aside>
    <h2>{ title }</h2>
    <p>
      { paragraph }
    </p>
    { children }
  </aside>