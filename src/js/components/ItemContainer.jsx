import React from 'react';
import SortableItem from 'components/SortableItem';

class ItemContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="project-panel">
        {this.props.items.map((item, index) => {
          return <SortableItem key={index} index={index} item={item} section={this.props.section}/>
        })}
      </div>
    )
  }
}

ItemContainer.defaultProps = {
  items: [],
  section: ''
}

export default ItemContainer;
