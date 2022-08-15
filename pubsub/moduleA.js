const pubsub = require('./pubsub');

module.exports = {
  publishEvent() {
    const data = {
      msg: 'TOP SECRET DATA'
    };

    pubsub.publish('anEvent', data);
  }
};
