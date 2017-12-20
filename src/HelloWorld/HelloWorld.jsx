import React from 'react'
import TotalScore from '../TotalScore'
import TextField from 'material-ui/TextField'
import './hello-world.scss'
 
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
        <TextField hintText="number of animals" className="score-field" name="numberOfAnimals" id="numberOfAnimalsScore" />
        <TextField hintText="number of dwarves" className="score-field" name="numberOfDwarves" id="numberOfDwarvesScore" />
        <button onClick={ () => { this.calculateTotalScore() }}>Submit</button>

        <TotalScore total={this.state.score} />
      </div>
    )
  }
  
}