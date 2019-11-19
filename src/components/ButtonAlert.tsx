import React, { Component, MouseEvent } from 'react';
import styles from "../App.module.css"

// interface HTMLButtonElement {

//   onClick: () => void
// }

export class ButtonAlert extends Component {
  
  handleClick(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    alert("Test")
    // alert(event.currentTarget.tagName);
  }

  handleAnotherClick(event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) {
    event.preventDefault();
    alert('Yeah!');
  }

  render() {
    return <button className={styles.btnAlert} onClick={this.handleClick}>
      {this.props.children} 
    </button>
  }
}
