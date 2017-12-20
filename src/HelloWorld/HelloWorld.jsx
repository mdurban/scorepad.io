import React from 'react'
import TotalScore from '../TotalScore'
 
export default class HelloWorld extends React.Component {
  constructor(props) {
    super(props)
    this.state = {score: 0}
  }

  calculateTotalScore() {
    return this.setState({
      score: this.getScoreFromElement("numberOfDwarvesScore")
        + this.getScoreFromElement('numberOfAnimalsScore')
    })
  }

  getScoreFromElement(id) {
    return parseInt(document.getElementById(id).value)
  }

  render() {
    return (
      <div>
        parent component
        <input type="text" name="numberOfAnimals" id="numberOfAnimalsScore" />
        <input type="text" name="numberOfDwarves" id="numberOfDwarvesScore" />
        <button onClick={ () => { this.calculateTotalScore() }}>Submit</button>

        <TotalScore total={this.state.score} />
      </div>
    )
  }
  
}