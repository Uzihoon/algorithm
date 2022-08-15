const pubsub = require('./pubsub');

const subscription = pubsub.subscribe('anEvent', data => {
  console.log(`an Event was published with this data: ${data.msg}`);
  subscription.unsubscribe();
});
