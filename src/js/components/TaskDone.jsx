import React from 'react';
import ProjectStream from 'streams/ProjectStream';
import CounterBox from 'components/CounterBox';
import ProjectsContainer from 'components/ProjectsContainer';

class TaskDone extends React.Component {
  constructor() {
    super();
    this.state = {
      items: ProjectStream.data.done
    }

    this.handleDrop = this.handleDrop.bind(this);
  }

  componentDidMount() {
    ProjectStream.dropSubject.subscribe(() => {
      const data = ProjectStream.dropData;
      const items = this.state.items;
      if (ProjectStream.action === 'done') {
          items.unshift(data.value);
      }

      //incoming new data
      if (!data.index) {
        ProjectStream.deleteData(data);
      }

      this.setState(items);

    });
  }

  componentWillUnmount() {
    ProjectStream.dropSubject.dispose();
    ProjectStream.sortSubject.dispose();
  }

  allowDrop(e) {
    e.preventDefault();
  }

  handleDrop(e) {
    const project = {
      value: e.dataTransfer.getData('item'),
      section: e.dataTransfer.getData('section')
    };

    if (project.section === 'done') {
      return;
    }

    ProjectStream.drop(project, 'done');
  }

  render() {
    return (
      <div className="section" onDrop={this.handleDrop} onDragOver={this.allowDrop}>
        <div className="header">
          <h3>Done</h3>
          <div className="counter">
            <CounterBox count={this.state.items.length}/>
          </div>
          <div className="clearfix"></div>
        </div>
        <ProjectsContainer section="done" items={this.state.items}/>
      </div>
    )
  }
}

module.exports = TaskDone;
