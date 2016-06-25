import React from 'react';
import _ from 'lodash';
import DataStream from 'streams/DataStream';
import CounterBox from 'components/CounterBox';
import ItemContainer from 'components/ItemContainer';


const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

class Task extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: DataStream[this.props.section]
    }

    this.handleDrop = this.handleDrop.bind(this);
  }

  componentDidMount() {
    DataStream.subject.subscribe(response => {
      this.setState(DataStream[this.props.section]);
    });
  }

  componentWillUnmount() {
    DataStream.subject.dispose();
  }

  allowDrop(e) {
    e.preventDefault();
  }

  handleDrop(e) {
    const data = DataStream.dndData.drag;
    if (data.section === this.props.section) {
      DataStream.sort(data);
      return;
    }

    DataStream.dnd(data, this.props.section);
  }

  render() {
    return (
      <div className="section" onDrop={this.handleDrop} onDragOver={this.allowDrop}>
        <div className="header">
          <h3>{capitalizeFirstLetter(this.props.section)}</h3>
          <div className="counter">
            <CounterBox count={this.state.items.length}/>
          </div>
          <div className="clearfix"></div>
        </div>
        <ItemContainer section={this.props.section} items={this.state.items}/>
      </div>
    )
  }
}

Task.defaultProps = {
  section: ''
};

module.exports = Task;
