import PointView from '../view/point';
import EditPointView from '../view/edit-point';
import {render, replace, remove, RenderPosition} from '../utils/render';

const Mode = {
  DEFAULT: `DEFAULT`,
  EDITING: `EDITING`,
};

export default class Point {
  constructor(pointListContainer, changeMode, changeData) {
    this._pointListContainer = pointListContainer;
    this._changeMode = changeMode;
    this._changeData = changeData;

    this._pointComponent = null;
    this._pointEditComponent = null;
    this._mode = Mode.DEFAULT;

    this._handleFormSubmit = this._handleFormSubmit.bind(this);
    this._handleEditClick = this._handleEditClick.bind(this);
    this._handleCloseFormClick = this._handleCloseFormClick.bind(this);
    this._handleFavoriteClick = this._handleFavoriteClick.bind(this);
  }

  init(point) {
    this._point = point;

    const prevPointComponent = this._pointComponent;
    const prevPointEditComponent = this._pointEditComponent;

    this._pointComponent = new PointView(point);
    this._pointEditComponent = new EditPointView(point);

    this._pointComponent.setEditClickHandler(this._handleEditClick);
    this._pointEditComponent.setSubmitFormClick(this._handleFormSubmit);
    this._pointEditComponent.setCloseFormClick(this._handleCloseFormClick);
    this._pointComponent.setFavoriteClickHandler(this._handleFavoriteClick);

    if (prevPointComponent === null || prevPointEditComponent === null) {
      render(this._pointListContainer, this._pointComponent, RenderPosition.BEFOREEND);
      return;
    }

    this._replaceIfExist(this._pointComponent, prevPointComponent);
    this._replaceIfExist(this._pointEditComponent, prevPointEditComponent);

    remove(prevPointComponent);
    remove(prevPointEditComponent);
  }

  resetView() {
    if (this._mode !== Mode.DEFAULT) {
      this._replaceEditToView();
    }
  }

  _replaceIfExist(newComponent, oldComponent) {
    if (this._pointListContainer.getElement().contains(oldComponent.getElement())) {
      replace(newComponent, oldComponent);
    }
  }

  _replaceViewToEdit() {
    replace(this._pointEditComponent, this._pointComponent);
    this._changeMode();
    this._mode = Mode.EDITING;
  }

  _replaceEditToView() {
    replace(this._pointComponent, this._pointEditComponent);
    this._mode = Mode.DEFAULT;
  }

  _handleFormSubmit() {
    this._replaceEditToView();
  }

  _handleEditClick() {
    this._replaceViewToEdit();
  }

  _handleCloseFormClick() {
    this._pointEditComponent.reset(this._point);
    this._replaceEditToView();
  }

  _handleFavoriteClick() {
    this._changeData(Object.assign({}, this._point, {isFavorite: !this._point.isFavorite}));
  }
}
