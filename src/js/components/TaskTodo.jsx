import React from 'react';
import _ from 'lodash';
import ProjectStream from 'streams/ProjectStream';
import CounterBox from 'components/CounterBox';
import ProjectsContainer from 'components/ProjectsContainer';

class TaskTodo extends React.Component {
  constructor() {
    super();
    this.state = {
      items: ProjectStream.data.todo
    }

    this.handleDrop = this.handleDrop.bind(this);
  }

  componentDidMount() {
    ProjectStream.todoSubject.subscribe(response => {
      const items = this.state.items;

      items.unshift(response);

      this.setState({items});
    });

    ProjectStream.dropSubject.subscribe(() => {
      const data = ProjectStream.dropData;
      const items = this.state.items;

      if (ProjectStream.action === 'todo') {
        items.unshift(data.value);
      }

      //incoming new data
      if (!data.index) {
        ProjectStream.deleteData(data);
      }

      this.setState(items);
    });

    ProjectStream.sortSubject.subscribe((response) => {
      this.setState(response)
    });
  }

  componentWillUnmount() {
    ProjectStream.todoSubject.dispose();
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

    if (project.section === 'todo') {
      return;
    }

    ProjectStream.drop(project, 'todo');
  }

  render() {
    return (
      <div className="section" onDrop={this.handleDrop} onDragOver={this.allowDrop}>
        <div className="header">
          <h3>Todo</h3>
          <div className="counter">
            <CounterBox count={this.state.items.length}/>
          </div>
          <div className="clearfix"></div>
        </div>
        <ProjectsContainer section="todo" items={this.state.items}/>
      </div>
    )
  }
}

module.exports = TaskTodo;
