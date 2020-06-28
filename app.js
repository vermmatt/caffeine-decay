mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/restful_blog_app", {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

var caffeineSchema = new mongoose.Schema({
    time: String,
    value: Number,
});
var Caffeine = mongoose.model("Caffeine", caffeineSchema);

var data = [];
var caffeine = 100;


var time = new Date();
var month = Number(time.getMonth());
var day = Number(time.getDate());
var hours =  Number(time.getHours());


// loop through array
for(i=0; i < 24; i++){
    //add hours
    var obj = [];
    if(hours<24){
        var timestamp = month.toString() + "-" + day.toString() + "-" + hours.toString()
        obj.push(timestamp, caffeine);
        data.push(obj);
        hours++
        caffeine = caffeine * 0.89089;
    } else {
        hours = 0;
        day += 1;
        var timestamp = month.toString() + "-" + day.toString() + "-" + hours.toString()
        obj.push(timestamp, caffeine);
        data.push(obj);
        hours++;
        caffeine = caffeine * 0.89089;
    };
}
console.log(data);

