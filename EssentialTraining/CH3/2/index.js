import React from 'react';
import ReactDOM from 'react-dom';

class Message extends React.Component {
  render() {
    return (
      <div >
        <h1 id="heading-element" style={{color: this.props.color}}>
          {this.props.msg}
        </h1>
        <p>I'll check back in {this.props.minutes} minutes</p>
      </div>
    )
  }
}

ReactDOM.render(
  <Message color="red" msg="How are you?" minutes={5}/>,
  document.getElementById('root')
)