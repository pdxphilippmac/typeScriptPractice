import React, { Component } from 'react';
import styles from './App.module.css';


import { Headline } from './components/Headline';
import ParagraphDiv from './components/Div';
import { ListItemDivProps } from "./interfaces/ListItemsDivProps";
import { Button } from './components/Button';
import { ButtonAlert } from './components/ButtonAlert';
import { List } from './components/List';
import { data, data2 } from "./api/data"
import { ListItem } from './components/ListItems';
import { Card } from './components/Card';


function handleClick() {
  alert(data)
}


interface State {
  newTask: ListItemDivProps;
  tasks: ListItemDivProps[];
}
interface Data {

  data: []
}

class App extends Component<{}, State> {
  state = {
    newTask: {
      id: 1,
      name: ""
    },
    tasks: []
  };


  
  render() {
    return (
      <div className={styles.appBody}>
        <Headline title="TypeScript Test" />
        <ButtonAlert><Headline title="Alert Me" /></ButtonAlert>

        <ParagraphDiv title="Test Divider" summary=" Test" />
        <Button onClick={handleClick}>Show me fruits</Button>
        {/* <List  data={data}><ListItem/></List> */}
        <Card title="Title" paragraph="Paragraph">
          

        </Card>
      </div>
    );
  }
}

export default App;