import React from 'react';
import ProjectStream from 'streams/ProjectStream';

class SortableItem extends React.Component {
  constructor() {
    super();
    this.handleDragStart = this.handleDragStart.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
  }

  handleDragStart(e) {
    e.dataTransfer.effectAllowed = 'move';
    ProjectStream.drag({
      index: this.props.index,
      value: this.props.value,
      section: this.props.section
    });

    e.dataTransfer.setData('item', this.props.value);
    e.dataTransfer.setData('section', this.props.section);
  }

  handleDrop(e) {
    const project = {
      index: this.props.index,
      value: this.props.value,
      section: this.props.section
    };

    if (project.section !== ProjectStream.dragData.section) {
      return;
    }

    ProjectStream.sort(project);
  }

  render() {
    return (
      <div draggable="true" className="project" onDragStart={this.handleDragStart} onDrop={this.handleDrop}>
        {this.props.value}
      </div>
    )
  }
}

export default SortableItem;
