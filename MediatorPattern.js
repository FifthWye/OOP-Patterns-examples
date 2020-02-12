class Participant {
  constructor(name) {
    this.name = name;
    this.chat = null;
  }

  send(message, to) {
    this.chat.send(message, this, to);
  }

  receive(message, from) {
    log.addToLog(from.name + " to " + this.name + ": " + message);
  }
}

const Chat = function() {
  let participants = {};

  return {
    register: function(participant) {
      participants[participant.name] = participant;
      participant.chat = this;
    },

    send: function(message, from, to) {
      if (to) {
        // single message
        to.receive(message, from);
      } else {
        // broadcast message
        for (let key in participants) {
          if (participants[key] !== from) {
            participants[key].receive(message, from);
          }
        }
      }
    }
  };
};

// log helper
const log = (function() {
  let log = "";

  return {
    addToLog: msg => {
      log += msg + "\n";
    },
    show: () => {
      console.log(log);
      log = "";
    }
  };
})();

function run() {
  let jhon = new Participant("Jhon"),
    mike = new Participant("Mike"),
    max = new Participant("Max"),
    julia = new Participant("Julia"),
    chat = new Chat();

  chat.register(jhon);
  chat.register(mike);
  chat.register(max);
  chat.register(julia);

  jhon.send("Hello");
  jhon.send("I need some help with HW");
  mike.send("Try this out - https://medium.com/@andrewMacmurray/exploring-the-mediator-pattern-eadaebc871b4", jhon);
  max.send("Dunno, I have not finished it yet");
  julia.send("I guess you can skip this homework coz you was absent", max);

  log.show();
}

run();
