const CustomError = require("../extensions/custom-error");

const chainMaker = {

  chain : [],

  getLength() {
    return this.chain.length
  },

  addLink(value) {
    this.chain.push(value)
    return this;
  },

  removeLink(position) {
    if (typeof +position !== 'number' || position < 0 || position > this.chain.lenth - 1){
      this.chain = [];
      throw 'Error'
    }
    this.chain.splice(position - 1 , 1)
    return this;
  },
  reverseChain() {
    this.chain.reverse()
    return this;
  },
  finishChain() {
    let str = `( ${this.chain[0]} )`;
    this.chain.shift();
    for (let value of this.chain) {
      str+= `~~( ${value} )`
    }
    this.chain = [];
    return str;
  }
};

module.exports = chainMaker;
