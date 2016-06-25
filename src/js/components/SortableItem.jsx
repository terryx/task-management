import React from 'react';
import DataStream from 'streams/DataStream';

class SortableItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDragStart = this.handleDragStart.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
  }

  handleDragStart(e) {
    e.dataTransfer.effectAllowed = 'move';

    // e.dataTransfer.setData('index', this.props.index);
    // e.dataTransfer.setData('item', this.props.value);
    // e.dataTransfer.setData('section', this.props.section);
    DataStream.drag(this.props);
  }

  handleDrop(e) {
    // const project = {
    //   index: this.props.index,
    //   value: this.props.value,
    //   section: this.props.section
    // };
    //
    // if (project.section !== ProjectStream.dragData.section) {
    //   return;
    // }
    //
    // ProjectStream.sort(project);

    DataStream.drop(this.props);
  }

  render() {
    return (
      <div
        draggable="true"
        className="project"
        onDragStart={this.handleDragStart}
        onDrop={this.handleDrop}>
        {this.props.item.name}
      </div>
    )
  }
}

export default SortableItem;
