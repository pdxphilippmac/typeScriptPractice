# General advice

- folders for components, interface, app (all app related files like app.js,index.etc)
- always : ```export const Headline:FC<HeadlineProps> =  ({title,chapterNumber}) => (<h1>{title}{chapterNumber}</h1>) ``` so that the exported function or component can only be imported under the given name. no rename during export so no confusing during developement. if you want to rename it during import : import {Headline as MainHeanline} from ".." 
- 

# Useful Project Stacks
Project Stack:
PostgressSQl
node.js express.js ,typeORM, routing controllers,
restAPI,
next.js, materialUi
pgAdmin



# PostgreSQL 
psql --> start postgres
psql -U postgres --> unter dem user postgres anmelden
\l --> vorhandene databases anzeigen
psql -U svausweis -d svausweis --> svausweis ist einmal der benutzer und das zweite mal der name der database, mit diesem command target man also die database, falls man plugins installieren möchte,
typeORmcomfig beinhaltet password und nutzer etc
psql-U svausweis -> pw aus typeORm config rauskopieren und datenbank starten.



# Gitlab

wenn man ein issue hat, ganz rechts bei issue auf link kopieren und diesen beim branch erstellen angeben:

```
git checkout -b richard-kraft/general-request-server#2-addControllerMethods

```


[WIP]:
feat:
- fix: 
- feat: add new methods, functions like get requests and so on
- docs: updated documentation for like new dependency versions etc.
- chores: clean up etc
- prefixes for commits for better commit-history
- squash commits: add all commits to one, to have a better overview in commit history 

-----------

## Temlate for commit-rules


**Please check these requirements**

* The commit message follows [our guidelines](https://www.conventionalcommits.org/)
* Tests/Stories for the changes have been added (for bug fixes / features)
* Docs have been added / updated (for bug fixes / features)

---

## What is the current behavior? (You can also link to an open Jira issue here)

no controller to get data for health insurances


## What is the new behavior (if this is a feature change)?

get all insurances, get insurance by id, create insurance, update insurance and delete insurance by ID,


## How did you test your changes?

Postman collection updated and successfully tested, post/delete database-entries in "svausweis" watched with pgAdmin without any problems

## What changes might devs need to make due to this PR? (like updating settings or deps with `npm ci`?)

-

### Other information:

- no `@Authorized()`used to achieve task AND no `@Unique([])` so you can post the same insurance multiple times




--------------------
--------------------
# Postman

unter collection ein post/get request etc erstellen


bei der method auf body -> raw -> rechts auf json umstellen -> und dann kann man den body übergeben, bsp. {   "id": 2,
    "name": "Rheinische Versicherung",
    "street": "Neue Straße 2",
    "zip": "20095",
    "city": "Hamburg",
    "email": "rheinische@versicherung.de",
    "created": "2019-06-02T11:12:03.606Z",
    "updated": "2019-06-02T11:12:03.606Z"}



# GitHub 

git reset --soft HEAD~2   --> zwei commits zurückspirngen