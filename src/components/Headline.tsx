import React, { FC } from "react";
interface HeadlineProps {
    title:string
    chapterNumber?:number
}

export const Headline:FC<HeadlineProps> =  ({title,chapterNumber}) => (<h1>{title}{chapterNumber}</h1>) 

