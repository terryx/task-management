'use strict';

import React from 'react'
import ReactDOM from 'react-dom';
import ProjectStream from 'streams/ProjectStream';
import InputBox from 'components/InputBox';
import TotalCounter from 'components/TotalCounter';
import TaskTodo from 'components/TaskTodo';
import TaskInProgress from 'components/TaskInProgress';
import TaskDone from 'components/TaskDone';
import '../css/app.css';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <InputBox/>
        <TotalCounter />
          <div className="project-wrap">
          <TaskTodo />
          <TaskInProgress />
          <TaskDone />
          </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>, document.getElementById('app'));
