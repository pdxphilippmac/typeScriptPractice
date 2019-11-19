import React, {Component} from 'react';
import './App.css';
import Form from './components/Form';
import {Headline} from './components/H1';
import ParagraphDiv from './components/Div';
import {ListItemDivProps} from "./interfaces/ListItemsDivProps";

function handleChange(){
  console.log("test")
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
      <div>
   <Headline title="TypeScript Test"/>

   
        <Form
          task={this.state.newTask}
          onChange={handleChange}
        />
        <ParagraphDiv title="Test Chapter" summary="bla"/>
      </div>
    );
  }
}

export default App;