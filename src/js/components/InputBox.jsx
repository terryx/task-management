import React from 'react';
import DataStream from 'streams/DataStream';

class InputBox extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    DataStream.addItem(this.refs.projectName.value);
    this.refs.addProject.reset();
    this.refs.projectName.blur();
  }

  render() {
    return (
      <form ref="addProject" className="inputbox" onSubmit={this.handleSubmit} autoComplete="off">
        <label for="add-project">Add project</label>
        <input id="add-project" ref="projectName" type="text"/>
      </form>
    )
  }
}

InputBox.defaultProps = {
  callback: () => {}
};

export default InputBox;
