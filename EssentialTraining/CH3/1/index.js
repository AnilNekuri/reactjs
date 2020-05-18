import React from 'react';
import ReactDOM from 'react-dom';

class Message extends React.Component {
  render() {
    return (
      <div >
        <h1 id="heading-element">
          Hello World!
        </h1>
        <p>We're glad you're here!</p>
      </div>
    )
  }
}

ReactDOM.render(
  <Message />,
  document.getElementById('root')
)