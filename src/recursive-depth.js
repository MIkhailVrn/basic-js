const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  depth =  0
  calculateDepth(arr) {
    this.depth++;
    if (!Array.isArray(arr))
      return this.depth;
    let newArr = arr.filter(item => Array.isArray(item));
    let newExpArr = newArr.reduce((array, item) => { 
      array.push(...item)
      return array;
    }, [])

    let depth;
    if (newArr.length <= 0){
      depth = this.depth;
      this.depth = 0;
    }
    return newArr.length > 0 ? this.calculateDepth(newExpArr) : depth;
/*     if (newArr.length > 0) {
      this.calculateDepth(newExpArr)
    } else {
      let depth = this.depth;
      this.depth = 0;
      return depth;
    } */

  
  }
};