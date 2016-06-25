import _ from 'lodash';
import Rx from 'rxjs';

const _data = {
  todos: [],
  investigation: [],
  inprogress: [],
  instaging: [],
  done: []
}

//drag and drop
const dndData = {
  drag: {},
  drop: {}
}

//swap array position
const swap = (data, index_a, index_b) => {
  const temp = data[index_a];

  data[index_a] = data[index_b];
  data[index_b] = temp;

  return data;
}

const streams = () => {
  const subject = new Rx.ReplaySubject();
  const totalItems = {
    count: 0
  };

  const addItem = (name) => {
    const d = new Date();
    const t = d.getTime();
    const entry = {
      id: t,
      name: name
    };

    _data.todos.push(entry);
    totalItems.count += 1;

    return subject.next(entry);
  }

  const drag = (data) => {
    dndData.drag = data;
  }

  const drop = (data) => {
    dndData.drop = data;
  }

  const sort = (data) => {
    _data[data.section] = swap(_data[data.section], dndData.drag.index, dndData.drop.index);

    return subject.next(data);
  }

  //drop and drop
  const dnd = (data, dropTo) => {

    //swap current data out of streams
    _.remove(_data[data.section], result => {
      return result.id === data.item.id
    });

    _data[dropTo].push(data.item);

    return subject.next(data);
  }

  return {
    subject,
    addItem,
    totalItems,
    todos: _data.todos,
    inprogress: _data.inprogress,
    done: _data.done,
    investigation: _data.investigation,
    instaging: _data.instaging,
    drag,
    drop,
    dndData,
    sort,
    dnd
  };
}

module.exports = streams();
