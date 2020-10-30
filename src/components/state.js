class State {
    static state = {};
  
    static get(key) {
      if (this.state[key] === undefined) {
        this.state[key] = 0; // default
      }
  
      return this.state[key];
    }
  
    static next(key) {
      if (this.state[key] === undefined) {
        this.state[key] = 0; // default
      } 
      else {
        this.state[key] = this.state[key] + 1; // increment
      }
  
      return this.state[key];
    }
}

export default State