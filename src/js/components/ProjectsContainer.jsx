import React from 'react';
import ProjectStream from 'streams/ProjectStream';
import SortableItem from 'components/SortableItem';

class ProjectsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items,
      section: props.section
    }
  }

  render() {
    return (
      <div className="project-panel">
        {this.state.items.map((value, key) => <SortableItem key={`item-${key}`} index={key} value={value} section={this.props.section}/>)}
      </div>
    )
  }
}

export default ProjectsContainer;
