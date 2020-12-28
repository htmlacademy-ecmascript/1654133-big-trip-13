import Point from './view/point'
import EditPoint from './view/edit-point';

export const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

export const renderElement = (container, element, place) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
  }
};

export const renderTemplate = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

export const renderPoint = (container, point) => {
  const pointComponent = new Point(point);
  const pointEditComponent = new EditPoint(point);

  const replacePointToForm = () => {
    container.replaceChild(pointEditComponent.getElement(), pointComponent.getElement());
  }

  const replaceFormToPoint = () => {
    container.replaceChild(pointComponent.getElement(), pointEditComponent.getElement());
  }

  pointComponent.getElement()
    .querySelector(`.event__rollup-btn`)
    .addEventListener(`click`, () => {
      replacePointToForm();
  });

  pointEditComponent.getElement()
    .querySelector(`form`)
    .addEventListener(`submit`, () => {
      replaceFormToPoint();
    });

  pointEditComponent.getElement()
    .querySelector(`.event__rollup-btn`)
    .addEventListener(`click`, () => {
      replaceFormToPoint();
    });

  renderElement(container, pointComponent.getElement(), RenderPosition.BEFOREEND);
}

export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};
