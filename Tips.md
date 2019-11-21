# general advice

- folders for components, interface, app (all app related files like app.js,index.etc)
- always : ```export const Headline:FC<HeadlineProps> =  ({title,chapterNumber}) => (<h1>{title}{chapterNumber}</h1>) ``` so that the exported function or component can only be imported under the given name. no rename during export so no confusing during developement. if you want to rename it during import : import {Headline as MainHeanline} from ".." 
- 


Project Stack:
PostgressSQl
node.js express.js ,typeORM, routing controllers,
restAPI,
next.js, materialUi

pgAdmin



# postgres 
psql --> start postgres
psql -U postgres --> unter dem user postgres anmelden
\l --> vorhandene databases anzeigen
psql -U svausweis -d svausweis --> svausweis ist einmal der benutzer und das zweite mal der name der database, mit diesem command target man also die database, falls man plugins installieren möchte,
typeORmcomfig beinhaltet password und nutzer etc
psql-U svausweis -> pw aus typeORm config rauskopieren und datenbank starten.



# gitlab

wenn man ein issue hat, ganz rechts bei issue auf link kopieren und diesen beim branch erstellen angeben:

```
git checkout -b richard-kraft/general-request-server#2-addControllerMethods

```


# postman

unter collection ein post/get requestetc erstellen


bei der method auf body -> raw -> rechts auf json umstellen -> und dann kann man den body übergeben, bsp. {   "id": 2,
    "name": "Rheinische Versicherung",
    "street": "Neue Straße 2",
    "zip": "20095",
    "city": "Hamburg",
    "email": "rheinische@versicherung.de",
    "created": "2019-06-02T11:12:03.606Z",
    "updated": "2019-06-02T11:12:03.606Z"}