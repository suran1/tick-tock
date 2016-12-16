

 var timeoutID = setTimeout(function(){Time()});
 var intervalID = setInterval(function(){Time()}, 60000);


function Time(date){
var currentDate = new Date();

var DD = currentDate.getDate();
var MM=currentDate.getMonth()+1;
var YYYY =currentDate.getFullYear();
var HH =currentDate.getHours();
var MIN=currentDate.getMinutes();

//var cutterDate= '';

current =MIN
if(DD<10){
DD= '0'+DD
}
if(MM<10){
  MM= '0'+MM

}
currentDate = MM +'/' + DD + '/' + YYYY +'/' + ' ' + HH+ ':' + MIN;

return currentDate;
}
console.log(Time(new Date()));
