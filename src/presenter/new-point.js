import dayjs from 'dayjs';
import EditPointView from '../view/edit-point';
import {render, remove, RenderPosition} from '../utils/render';
import {getRandomOffers, getRandomImages} from '../utils/tools';
import {TRIP_POINT_TYPES, UserAction, UpdateType} from '../const';
import {nanoid} from 'nanoid';

const BLANK_POINT = {
  type: TRIP_POINT_TYPES[0],
  city: ``,
  description: ``,
  offers: getRandomOffers(TRIP_POINT_TYPES[0]),
  price: ``,
  images: getRandomImages(),
  dates: [dayjs().toDate(), dayjs().toDate()],
  isFavorite: false,
};

export default class NewPoint {
  constructor(pointListContainer, changeData) {
    this._pointListContainer = pointListContainer;
    this._changeData = changeData;

    this._pointEditComponent = null;
    this._destroyCallback = null;

    this._handleFormSubmit = this._handleFormSubmit.bind(this);
    this._handleDeleteClick = this._handleDeleteClick.bind(this);
  }

  init() {
    if (this._pointEditComponent === null) {
      this._pointEditComponent = new EditPointView(BLANK_POINT);

      this._pointEditComponent.setSubmitFormClick(this._handleFormSubmit);
      this._pointEditComponent.setDeleteClick(this._handleDeleteClick);
      this._pointEditComponent.setCloseFormClick(this._handleDeleteClick);

      render(this._pointListContainer, this._pointEditComponent, RenderPosition.AFTERBEGIN);
    }
  }

  destroy() {
    if (this._pointEditComponent !== null) {
      if (this._destroyCallback !== null) {
        this._destroyCallback();
      }

      remove(this._pointEditComponent);
      this._pointEditComponent = null;
    }
  }

  _handleFormSubmit(point) {
    this._changeData(
        UserAction.ADD_POINT,
        UpdateType.MINOR,
        Object.assign({id: nanoid()}, point)
    );

    this.destroy();
  }

  _handleDeleteClick() {
    this.destroy();
  }
}
