import _ from 'lodash';
import Rx from 'rxjs';

class ProjectStream {
  constructor() {
    this.todoSubject = new Rx.ReplaySubject();
    this.dropSubject = new Rx.ReplaySubject();
    this.sortSubject = new Rx.ReplaySubject();

    this.dragData = {};
    this.dropData = {};

    this.action = null;

    this.data = {
      todo: [],
      inProgress: [],
      done: []
    };
  }

  addProject(name) {
    this.todoSubject.next(name);
  }

  drag(data) {
    this.dragData = data;
  }

  drop(data, to) {
    this.dropData = data;
    this.action = to;
    this.dropSubject.next(data);
  }

  sort(data) {
    const project = data.section;

    this.data[project][this.dragData.index] = data.value;
    this.data[project][data.index] = this.dragData.value;
    this.sortSubject.next(this.data[project]);
  }

  deleteData(project) {
    _.remove(this.data[project.section], (data) => {
      return data === project.value;
    });
  }
}

export default new ProjectStream();
