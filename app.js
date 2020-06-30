var arr = [];

var caffeine = 100;

var time = new Date();
// // create caffeine drink

//check if time object exists
function findObjectByKey(array, key, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
            return i;
        }
    }
    return null;
}

//generate timestamp
function timeStamp(){
    return String(time.getMonth().toString() + "-" + time.getDate().toString() + "-" + time.getHours().toString());
};

//add caffeine drink
function addDrink(caffeine){
    var index = findObjectByKey(arr, "time", timeStamp());
    if(index != null){
        arr[index]["caffAdd"] += caffeine
    } else{
        arr.push({
        time: timeStamp(),
        caffAdd: caffeine,
        caffCalc: 0
        });
    };
    console.log(arr);
};




//calculate arr

function calCaffeine(){
    var hours = time.getHours();
    var day = time.getDate();
    var month = time.getMonth();
    for(i=0; i < 24; i++){
        //add hours
        if(hours<24){
            console.log(hours);
            var timestamp = String(month.toString() + "-" + day.toString() + "-" + hours.toString());
            //check if there is already a time value
            var index = findObjectByKey(arr, "time", timestamp);
            console.log(index);
            //if there is a value
            if(index !== null){
                //check previous value
                previous = String(month.toString() + "-" + day.toString() + "-" + (hours-1).toString());
                previousIndex = findObjectByKey(arr, "time", previous);
                //if previous value, retreive value and calculate
                if(previousIndex !== null){
                    caffeine = arr[previousIndex]["caffAdd"];
                    arr[index]["caffCalc"] = arr[previousIndex]["caffAdd"] * 0.89089 +  arr[index]["caffAdd"];
                } else {
                    //if no previous value, calc is same as add
                    arr[index]["caffCalc"] = arr[index]["caffAdd"];
                }
            //if no value yet
            } else{
                //check previous value
                previous = String(month.toString() + "-" + day.toString() + "-" + (hours-1).toString());
                previousIndex = findObjectByKey(arr, "time", previous);
                caffeine = arr[previousIndex]["caffCalc"] * 0.89089;
                arr.push({
                    time: timestamp,
                    caffAdd: 0,
                    caffCalc: caffeine
                    });
                };
            
            hours++

        //do day switch
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
    console.log(arr);
}

addDrink(200, "5-29-21");
calCaffeine();


