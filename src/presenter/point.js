import PointView from '../view/point';
import EditPointView from '../view/edit-point';
import {render, replace, RenderPosition} from '../utils/render';

const Mode = {
  DEFAULT: `DEFAULT`,
  EDITING: `EDITING`,
};

export default class Point {
  constructor(pointListContainer, changeMode) {
    this._pointListContainer = pointListContainer;
    this._changeMode = changeMode;

    this._pointComponent = null;
    this._pointEditComponent = null;
    this._mode = Mode.DEFAULT;

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

  resetView() {
    if (this._mode !== Mode.DEFAULT) {
      this._replaceFormToPoint();
    }
  }

  _replacePointToForm() {
    replace(this._pointEditComponent, this._pointComponent);
    this._changeMode();
    this._mode = Mode.EDITING;
  }

  _replaceFormToPoint() {
    replace(this._pointComponent, this._pointEditComponent);
    this._mode = Mode.DEFAULT;
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
