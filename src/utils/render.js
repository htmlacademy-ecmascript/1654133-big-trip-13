import Abstract from '../view/abstract';

export const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`,
};

export const render = (container, child, place) => {
  container = container instanceof Abstract ? container.getElement() : container;
  child = child instanceof Abstract ? child.getElement() : child;

  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(child);
      break;
    case RenderPosition.BEFOREEND:
      container.append(child);
      break;
  }
};

export const renderTemplate = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

export const replace = (newChild, oldChild) => {
  newChild = newChild instanceof Abstract ? newChild.getElement() : newChild;
  oldChild = oldChild instanceof Abstract ? oldChild.getElement() : oldChild;

  const parent = oldChild.parentElement;

  if (parent === null || newChild === null || oldChild === null) {
    throw new Error(`Cannot replace unexisting element.`);
  }

  parent.replaceChild(newChild, oldChild);
};
