var redis = require("async-redis");
var subscriber = redis.createClient();
subscriber.on("message", function (channel, message) {
    if (channel == "notification") {
        console.log({ message })
    }
});
subscriber.subscribe("notification");