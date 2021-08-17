export default class Section {
  constructor({items, renderer}, containerSelector){
    this._items = items;
    this.renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
  renderItems() {
    this._items.forEach((item) => {
      this.renderer(item);
    });
  }

  addNewCard(item){
    this._container.prepend(item);
  }

  addItem(item) {
    this._container.append(item);
  }
}