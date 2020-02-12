const axios = require("axios");

class Monitor {
  constructor(url) {
    this.url = url;
    this.lastModiefied = null;
    this.observers = [];
  }

  add(observer) {
    this.observers.push(observer);
  }

  remove(observer) {
    const removeIndex = this.observers.findIndex(obs => {
      return observer === obs;
    });

    if (removeIndex !== -1) {
      this.observers = this.observers.slice(removeIndex, 1);
    }
  }

  notify() {
    if (this.observers.length > 0) {
      this.observers.forEach(observer => observer.update());
    }
  }

  check() {
    console.log("Checking last modiefied date of " + this.url);
    getLastModiefied(this.url).then(modiefiedDate => {
      if (modiefiedDate != null) {
        this.lastModiefied = modiefiedDate;
        console.log("Last modification was - " + modiefiedDate);
        this.notify();
      }
    });
  }
}

function getLastModiefied(url) {
  const modiefiedDate = axios
    .get(url)
    .then(function(response) {
      // handle success
      const modifiedDate = new Date(
        response.headers["last-modified"]
      ).toString();
      return modifiedDate;
    })
    .catch(function(error) {
      // handle error
      console.log(error);
      return null;
    });
  return modiefiedDate;
}

module.exports = {
  Monitor: Monitor
};
