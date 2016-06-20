import React from 'react';

const CounterBox = React.createClass({
  render() {
    return (
      <div className="counter-box">
        <div className="count">{this.props.count}</div>
        <div className="label">PROJECTS</div>
      </div>
    )
  }
});

module.exports = CounterBox;
