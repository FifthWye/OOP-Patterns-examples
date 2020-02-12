const monitor = require("./Monitor");
const observer = require("./Observer");

const Monitor = monitor.Monitor;
const Observer = observer.Observer;

const siteUrls = [
  "https://api.github.com/users/mapbox",
  "http://www.pja.edu.pl/"
];

let monitor1 = new Monitor(siteUrls[0]);
let monitor2 = new Monitor(siteUrls[1]);

const observer1 = new Observer("observer1");
const observer2 = new Observer("observer2");
const observer3 = new Observer("observer3");

monitor1.add(observer1);
monitor1.add(observer2);

monitor2.add(observer1);
monitor2.add(observer3);

setInterval(() => {
  monitor1.check();
  monitor2.check();
}, 5000);
