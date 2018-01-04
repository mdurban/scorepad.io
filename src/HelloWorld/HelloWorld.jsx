import React from 'react'
import TotalScore from '../TotalScore'
import TextField from 'material-ui/TextField'
import { Input, Label } from 'semantic-ui-react'
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
        <Input
          className="score-field"
          placeholder="number of Farm Animals and Dogs"
          label={{ content: "1" }}
          labelPosition="left"
          icon='paw'
          iconPosition='right corner'
        />
        <br />
        <Input
          className="score-field"
          placeholder="missing type of Farm Animal"
          label={{ content: "-2" }}
          labelPosition="left"
          icon='close'
          iconPosition='right corner'
        />
        <br />
        <Input
          className="score-field"
          placeholder="number of Grain (rounded up)"
          label={{ content: "1/2" }}
          labelPosition="left"
          icon='pagelines'
          iconPosition='right corner'
        />
        <br />
        <Input
          className="score-field"
          placeholder="number of Vegetable"
          label={{ content: "1" }}
          labelPosition="left"
          icon='leaf'
          iconPosition='right corner'
        />
        <br />
        <Input
          className="score-field"
          placeholder="number of Rubies"
          label={{ content: "1" }}
          labelPosition="left"
          icon='diamond'
          iconPosition='right corner'
        />
        <br />
        <Input
          className="score-field"
          placeholder="number of Dwarves"
          label={{ content: "1" }}
          labelPosition="left"
          icon='database'
          iconPosition='right corner'
        />
        <br />
        <Input
          className="score-field"
          placeholder="number of unused spaces"
          label={{ content: "-1" }}
          labelPosition="left"
          icon='low vision'
          iconPosition='right corner'
        />
        <br />
        <Input
          className="score-field"
          placeholder="points from Furnishing Tiles, Pastures and Mines"
          label={{ content: "1" }}
          labelPosition="left"
          icon='grid layout'
          iconPosition='right corner'
        />
        <br />
        <Input
          className="score-field"
          placeholder="points from Parlors, Storages and Chambers"
          label={{ content: "1" }}
          labelPosition="left"
          icon='protect'
          iconPosition='right corner'
        />
        <br />
        <Input
          className="score-field"
          placeholder="number of Gold Coins"
          label={{ content: "1" }}
          labelPosition="left"
          icon='credit card alternative'
          iconPosition='right corner'
        />
        <br />
        <Input label={{ icon: 'cubes' }} className="score-field" labelPosition='right corner' placeholder="gold coins" />
        <br />
        <TextField hintText="number of animals" className="score-field" name="numberOfAnimals" id="numberOfAnimalsScore" />
        <TextField hintText="number of dwarves" className="score-field" name="numberOfDwarves" id="numberOfDwarvesScore" />
        <button onClick={ () => { this.calculateTotalScore() }}>Submit</button>

        <TotalScore total={this.state.score} />
      </div>
    )
  }
  
}