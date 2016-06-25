import React from 'react'
import DataStream from 'streams/DataStream';
import CounterBox from 'components/CounterBox';

class TotalCounter extends React.Component {
  constructor() {
    super();

    this.state = DataStream.totalItems
  }

  componentDidMount() {
    DataStream.subject.subscribe(response => {
      this.setState(DataStream.totalItems);
    });
  }

  componentWillUnmount() {
    DataStream.subject.dispose();
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
