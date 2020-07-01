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

//function to get current week of year
function getWeek(){
    let now = new Date();
    let onejan = new Date(now.getFullYear(), 0, 1);
    week = Math.ceil( (((now - onejan) / 86400000) + onejan.getDay() + 1) / 7 );
    return week;
}


//create time array for week (basic switching of days and months)
function generateWeek(day, month){
    week = getWeek();
    var hour = 0;
    for(var i = 0; i < 168; i++){
        if(day<31){
            if(hour<24){
                arr.push({
                        hourWeek: i,
                        time: String(month) + "-"  + String(day) + "-" + hour,
                        week: week,
                        month: String(month),
                        day: String(day),

                        caffeine: 0
                        });
                hour++;
            } else {
                hour = 0;
                day++;
            }
        } else {
            month++;
            day = 1;
            hour = 0;
        }
    }
};

// function calcCaff(week){
//     var index = findObjectByKey(arr, "week", week)
//     for(var i = 0; i<168; i++){
//         arr[index]["caffeine"]
//     }
    
// }

generateWeek(29,6);

//add caffeine drink
function addDrink(time, caffeine){
    week = getWeek();
    var index = findObjectByKey(arr, "time", time);
    arr[index].caffeine += caffeine;
    // console.log(arr[index-1].caffeine);
    // console.log(arr[index].caffeine);
    // console.log(arr[index+1].caffeine + arr[index].caffeine * 0.89089);
    for(var i = 1; i < 168; i++){
        arr[i].caffeine +=  arr[i-1].caffeine*0.89089;
        console.log(arr[i].caffeine);
    }
    console.log(arr);
};

addDrink("6-29-8", 100);
//console.log(arr);


//calculate arr

// function calCaffeine(){
//     var hours = time.getHours();
//     var day = time.getDate();
//     var month = time.getMonth();
//     for(i=0; i < 24; i++){
//         add hours
//         if(hours<24){
//             console.log(hours);
//             var timestamp = String(month.toString() + "-" + day.toString() + "-" + hours.toString());
//             check if there is already a time value
//             var index = findObjectByKey(arr, "time", timestamp);
//             console.log(index);
//             if there is a value
//             if(index !== null){
//                 check previous value
//                 previous = String(month.toString() + "-" + day.toString() + "-" + (hours-1).toString());
//                 previousIndex = findObjectByKey(arr, "time", previous);
//                 if previous value, retreive value and calculate
//                 if(previousIndex !== null){
//                     caffeine = arr[previousIndex]["caffAdd"];
//                     arr[index]["caffCalc"] = arr[previousIndex]["caffAdd"] * 0.89089 +  arr[index]["caffAdd"];
//                 } else {
//                     if no previous value, calc is same as add
//                     arr[index]["caffCalc"] = arr[index]["caffAdd"];
//                 }
//             if no value yet
//             } else{
//                 check previous value
//                 previous = String(month.toString() + "-" + day.toString() + "-" + (hours-1).toString());
//                 previousIndex = findObjectByKey(arr, "time", previous);
//                 caffeine = arr[previousIndex]["caffCalc"] * 0.89089;
//                 arr.push({
//                     time: timestamp,
//                     caffAdd: 0,
//                     caffCalc: caffeine
//                     });
//                 };
            
//             hours++

//         do day switch
//         } else {
//             hours = 0;
//             day += 1;
//             var timestamp = month.toString() + "-" + day.toString() + "-" + hours.toString()
//             obj.push(timestamp, caffeine);
//             data.push(obj);
//             hours++;
//             caffeine = caffeine * 0.89089;
//         };
//     }
//     console.log(arr);
// }


