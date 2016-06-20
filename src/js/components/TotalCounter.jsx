'use strict';

import React from 'react'
import ProjectStream from 'streams/ProjectStream';
import CounterBox from 'components/CounterBox';

class TotalCounter extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    ProjectStream.todoSubject.subscribe(response => {
      this.setState({
        count: ++this.state.count
      });
    })
  }

  componentWillUnmount() {
    ProjectStream.todoSubject.dispose();
  }

  render() {
    return (
      <div className="total-counter">
        <div className="counter">
          <div className="label-total">TOTAL</div>
          <CounterBox count={this.state.count}/>
        </div>
        <div className="clearfix"></div>
        <div className="divider"></div>
      </div>
    )
  }
}

module.exports = TotalCounter;
