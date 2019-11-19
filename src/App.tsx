import React, {Component} from 'react';
import styles from './App.module.css';


import {Headline} from './components/Headline';
import ParagraphDiv from './components/Div';
import {ListItemDivProps} from "./interfaces/ListItemsDivProps";
import { Button } from './components/Button';
import { ButtonAlert } from './components/ButtonAlert';


function handleChange(){
  console.log("clicked")
}
function handleClick(){
  alert("Here is Test")
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
        <ButtonAlert><Headline title="Alert Me"/></ButtonAlert>
       
        <ParagraphDiv title="Test Divider" summary=" Test"/>
        <Button onClick={handleClick}>Show me "Test"</Button>
      </div>
    );
  }
}

export default App;