- folders for components, interface, app (all app related files like app.js,index.etc)
- always : ```export const Headline:FC<HeadlineProps> =  ({title,chapterNumber}) => (<h1>{title}{chapterNumber}</h1>) ``` so that the exported function or component can only be imported under the given name. no rename during export so no confusing during developement. if you want to rename it during import : import {Headline as MainHeanline} from ".." 
- 


Project Stack:
PostgressSQl
node.js express.js ,typeORM, routing controllers,
restAPI,
next.js, materialUi

pgAdmin