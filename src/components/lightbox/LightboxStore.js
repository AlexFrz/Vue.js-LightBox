class LightboxStore {
  constructor() {
    this.state = {
      images: [],
      index: false
    };
  }

  addImage(url) {
    return this.state.images.push(url);
  }

  open(index) {
    return (this.state.index = index);
  }
}
export default new LightboxStore();
