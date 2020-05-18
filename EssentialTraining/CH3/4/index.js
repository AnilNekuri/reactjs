import React, {Component} from 'react';
import {render} from 'react-dom';

let skiDays = {
  total: 50,
  powder: 20,
  backCountry: 10,
  goal: 100
}

class SkiDayCounter extends Component {
  getPercent = decimal => {
    return decimal * 100 + '%'
  }
  calGoalPercent = (total, goal) => {
    return this.getPercent(total/goal)
  }
  render() {
    const {total, powder, backCountry, goal} = this.props
    return (
      <section>
        <div>
          <p>Total : {total}</p>
        </div>
        <div>
          <p>Powder : {powder}</p>
        </div>
        <div>
          <p>BackCountry : {backCountry}</p>
        </div>
        <div>
          <p>Goal progress : {this.calGoalPercent(total,goal)}</p>
        </div>
      </section>
    )
  }
}

render(
  <SkiDayCounter 
  total={skiDays.total}
  powder={skiDays.powder}
  backCountry={skiDays.backCountry}
  goal={skiDays.goal}/>,
  document.getElementById('root')
)