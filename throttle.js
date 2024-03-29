let throttlePause;

const throttle = (callback, time) => {
  if (throttlePause) return;

  throttlePause = true;

  setTimeout(() => {
    callback();

    throttlePause = false;
  }, time);
};
