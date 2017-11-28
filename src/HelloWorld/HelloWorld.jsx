import React from 'react'
import ChildComponent from '../ChildComponent'
 
export default class HelloWorld extends React.Component {
  constructor(props) {
    super(props)
    this.state = {score: 'default'}
  }

  render() {
    return (
      <div>
        parent component
        <input type="text" name="score" id="score" />
        <button onClick={ () => {this.setState({score: document.getElementById('score').value})} }>Submit</button>
        <ChildComponent valueFromParent={this.state.score} />
      </div>
    )
  }
  
}