var redis = require("redis")
var publisher = redis.createClient();

const main =  async (key, value, notification = "notification") => {
    return new Promise((resolve, reject) => {
        publisher.publish(notification, JSON.stringify({
            key,
            value
        }), function(){
            resolve();
        });

    }).then( _ =>  {
        process.exit(0)
    })
    
}


main("temp", "Hello World!");