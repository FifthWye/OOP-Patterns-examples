//Only integers are allowed

var Calculator = function(num) {
  this.num = num;
  log.addToLog(num + "\n");
};

Calculator.prototype = {
  add: function(n) {
    const result = Math.floor(this.num + n);
    log.addToLog(this.num + " + " + n + " result:" + result);
    this.num = result;
    return this;
  },
  subtract: function(n) {
    const result = Math.floor(this.num - n);
    log.addToLog(this.num + "-" + n + " result:" + result);
    this.num = result;
    return this;
  },
  multiply: function(n) {
    const result = Math.floor(this.num * n);
    log.addToLog(this.num + "*" + n + " result:" + result);
    this.num = result;
    return this;
  },
  divide: function(n) {
    var result = Math.floor(this.num / n);
    log.addToLog(this.num + "/" + n + " result:" + result);
    return this;
  },
  clear: function() {
    this.num = 0;
    log.addToLog(this.num + "\n");
    return this;
  }
};

var log = (function() {
  var log = "";

  return {
    addToLog: function(msg) {
      log += msg + "\n";
    },
    show: function() {
      console.log(log);
      log = "";
    }
  };
})();

var request = new Calculator(0);

request
  .add(100)
  .subtract(50)
  .add(20)
  .add(10)
  .subtract(5)
  .add(1)
  .multiply(2)
  .divide(2);

log.show();