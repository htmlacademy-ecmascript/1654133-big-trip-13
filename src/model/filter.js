import {FilterType} from '../const';

export default class Filter {
  constructor() {
    this._activeFilter = FilterType.EVERYTHING;
  }

  setFilter(filter) {
    this._activeFilter = filter;
  }

  getFilter() {
    return this._activeFilter;
  }
}
