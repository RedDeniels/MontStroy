let SERVICES_LIST = document.querySelector('.services__list');

const addItemAction = (item) => {
  item.classList.add('services__item--active');
};

const onServicesListSecondClick = (item) => {
  item.classList.remove('services__item--active');
};

const onServicesListClick = (evt) => {
  evt.stopPropagation()
  let active = document.querySelector('.services__item--active');
  let target = evt.target.parentElement;
  active ? active.classList.remove('services__item--active') : false;
  active === target ? onServicesListSecondClick(target) : addItemAction(target);
};

SERVICES_LIST.addEventListener('click', onServicesListClick);
