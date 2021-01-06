import PointView from '../view/point';
import EditPointView from '../view/edit-point';
import {render, replace, RenderPosition} from '../utils/render';

export default class Point {
  constructor(pointListContainer) {
    this._pointListContainer = pointListContainer;

    this._pointComponent = null;
    this._pointEditComponent = null;

    this._handleFormSubmit = this._handleFormSubmit.bind(this);
    this._handleEditClick = this._handleEditClick.bind(this);
    this._handleCloseFormClick = this._handleCloseFormClick.bind(this);
  }

  init(point) {
    this._point = point;

    this._pointComponent = new PointView(point);
    this._pointEditComponent = new EditPointView(point);

    this._pointComponent.setEditClickHandler(this._handleEditClick);
    this._pointEditComponent.setSubmitFormClick(this._handleFormSubmit);
    this._pointEditComponent.setCloseFormClick(this._handleCloseFormClick);

    render(this._pointListContainer, this._pointComponent, RenderPosition.BEFOREEND);
  }

  _replacePointToForm() {
    replace(this._pointEditComponent, this._pointComponent);
  }

  _replaceFormToPoint() {
    replace(this._pointComponent, this._pointEditComponent);
  }

  _handleFormSubmit() {
    this._replaceFormToPoint();
  }

  _handleEditClick() {
    this._replacePointToForm();
  }

  _handleCloseFormClick() {
    this._replaceFormToPoint();
  }
}