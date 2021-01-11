import SortView from '../view/events-sort-form';
import PointListView from '../view/point-list';
import PointPresenter from '../presenter/point';
import {render, RenderPosition} from '../utils/render';
import {updateItem} from '../utils/tools';

export default class Trip {
  constructor(tripContainer) {
    this._tripContainer = tripContainer;
    this._pointsPresenters = {};

    this._sortComponent = new SortView();
    this._pointListComponent = new PointListView();

    this._handleModeChange = this._handleModeChange.bind(this);
    this._handlePointChange = this._handlePointChange.bind(this);
  }

  init(tripPoints) {
    this._tripPoints = tripPoints.slice();

    render(this._tripContainer, this._sortComponent, RenderPosition.BEFOREEND);
    render(this._tripContainer, this._pointListComponent, RenderPosition.BEFOREEND);

    this._renderPoints();
  }

  _handleModeChange() {
    Object.values(this._pointsPresenters)
      .forEach((presenter) => presenter.resetView());
  }

  _handlePointChange(updatedPoint) {
    this._tripPoints = updateItem(this._tripPoints, updatedPoint);
    this._pointsPresenters[updatedPoint.id].init(updatedPoint);
  }

  _renderPoint(point) {
    const pointPresenter = new PointPresenter(this._pointListComponent, this._handleModeChange, this._handlePointChange);
    pointPresenter.init(point);
    this._pointsPresenters[point.id] = pointPresenter;
  }

  _renderPoints() {
    this._tripPoints.forEach((point) => this._renderPoint(point));
  }
}
