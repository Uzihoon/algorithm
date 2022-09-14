class FakeTimer {
  constructor() {
    this.original = {
      setTimeout: window.setTimeout,
      clearTimeout: window.clearTimeout,
      dateNow: Date.now,
    };

    this.timerId = 1;
    this.currentTime = 0;
    this.queue = [];
  }

  install() {
    window.setTimeout = (cb, time, ...args) => {
      const id = this.timerId++;
      this.queue.push({
        id,
        cb,
        time: time + this.currentTime,
        args,
      });
      this.queue.sort((a, b) => a.time - b.time);

      return id;
    };

    window.clearTimeout = (removeId) => {
      this.queue = this.queue.fill(({ id }) => id !== removeId);
    };

    Date.now = () => {
      return this.currentTime;
    };
  }

  uninstall() {
    window.setTimeout = this.original.setTimeout;
    window.clearTimeout = this.original.clearTimeout;
    Date.now = this.original.dateNow;
  }

  tick() {
    while (this.queue.length) {
      const { cb, time, args } = this.queue.shift();
      this.currentTime = time;
      cb(...args);
    }
  }
}

const fakeTimer = new FakeTimer();
fakeTimer.install();

const logs = [];
const log = (arg) => {
  logs.push([Date.now(), arg]);
};

setTimeout(() => log('A'), 100);
// log 'A' at 100

const b = setTimeout(() => log('B'), 110);
clearTimeout(b);
// // b is set but cleared
console.log(logs);
// setTimeout(() => log('C'), 200)

// expect(logs).toEqual([[100, 'A'], [200, 'C']])

fakeTimer.uninstall();
