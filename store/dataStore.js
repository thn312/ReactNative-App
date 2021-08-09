import {makeAutoObservable} from 'mobx';

class DataSore {
  title = '';
  data = {};
  listF = [
    {name: 'Fi', data: 1},
    {name: 'Fi 2', data: 2},
    {name: 'Fi 3', data: 3},
    {name: 'Fi 4', data: 5},
    {name: 'Fi 5', data: 2},
    {name: 'Fi 6', data: 9},
  ];
  constructor() {
    makeAutoObservable(this);
    this.title = 'initial data from data store';
  }

  setTitle(value) {
    this.title = value;
  }
}

export default new DataSore();
