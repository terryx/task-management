'use strict';
import React from 'react'
import ReactDOM from 'react-dom';
import InputBox from 'components/InputBox';
import TotalCounter from 'components/TotalCounter';
import Task from 'components/Task';
import '../css/app.css';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <InputBox/>
        <TotalCounter/>
        <div className="project-wrap">
          <Task title="Todo" section="todos"/>
          <Task title="Investigation" section="investigation"/>
          <Task title="In Progress" section="inprogress"/>
          <Task title="In Staging" section="instaging"/>
          <Task title="Done" section="done"/>
        </div>
      </div>
    )
  }

}
ReactDOM.render(
  <App/>, document.getElementById('app'));
