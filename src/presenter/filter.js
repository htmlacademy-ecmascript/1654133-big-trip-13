import FilterView from '../view/filter';
import {FilterType} from '../const';
import {render, replace, remove, RenderPosition} from '../utils/render';

export default class Filter {
  constructor(filterContainer, filterModel, pointsModel) {
    this._filterContainer = filterContainer;
    this._filterModel = filterModel;
    this._pointsModel = pointsModel;

    this._currentFilter = null;

    this._filterComponent = null;
  }

  init() {
    this._currentFilter = this._filterModel.getFilter();

    const prevFilterComponent = this._filterComponent;
    this._filterComponent = new FilterView(this._getFilters(), this._currentFilter);

    if (prevFilterComponent === null) {
      render(this._filterContainer, this._filterComponent, RenderPosition.BEFOREEND);
      return;
    }

    replace(this._filterComponent, prevFilterComponent);
    remove(prevFilterComponent);
  }

  _getFilters() {
    return [FilterType.EVERYTHING, FilterType.FUTURE, FilterType.PAST];
  }
}
