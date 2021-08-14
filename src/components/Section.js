export default class Section {
  constructor({items, renderer}, containerSelector){
    this._items = items;
    this.renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
  renderer(){
    this._items.forEach(item => {
      this._renderer(item);
    });
  }
  addItem(item) {
    this._container.append(item);
  }
}