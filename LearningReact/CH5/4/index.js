import React, {Component} from 'react';
import {render} from 'react-dom';

class FavoriteColorForm extends Component {
  state = { value: ''}

  newColor = e => {
    console.log({value: e.target.value})
  }

  submit = e => {
    console.log('New color: ${this.state.value}')
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <label>Favorite Color: 
          <input 
            type="color"
            onChange={this.newColor}>
          </input>
        </label>
      </form>
    )
  }
}

render(
  <FavoriteColorForm />,
  document.getElementById('root')
)