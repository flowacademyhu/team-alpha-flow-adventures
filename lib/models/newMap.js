class NewMap {
  createMap () {
    let matrix = [];
    let n = 0;

    for (let i = 0; i < 10; i++) {
      matrix[i] = [];
      for (let j = 0; j < 10; j++) {
        matrix[i][j] = n;
        n++;
      }
    }
    return matrix;
  }

  constructor () {
    this.map = this.createMap();
  }
}

module.exports = NewMap;
