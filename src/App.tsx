import React, {Component} from 'react';
import styles from './App.module.css';

import Form from './components/Form';
import {Headline} from './components/H1';
import ParagraphDiv from './components/Div';
import {ListItemDivProps} from "./interfaces/ListItemsDivProps";
import { Button } from './components/Button';

function handleChange(){
  console.log("clicked")
}

interface State {
  newTask: ListItemDivProps;
  tasks: ListItemDivProps[];
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
   <Headline title="TypeScript Test"/>

   
        <Form
          task={this.state.newTask}
          onChange={handleChange}
        />
        <ParagraphDiv title="Test Chapter" summary="bla"/>
        <Button/>
      </div>
    );
  }
}

export default App;