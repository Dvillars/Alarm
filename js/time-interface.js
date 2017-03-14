var Alarm = require('./../js/time.js').alarmModule;

$(document).ready(function(){
  $('#time').bootstrapMaterialDatePicker({ date: false, format : 'HH:mm' });;

  var newAlarm = new Alarm();
  newAlarm.getCurrentTime();
  $('#form-button').click(function(event) {
    event.preventDefault();
    var timeString = $("input#date").val().toString()+ " " + $("input#time").val().toString() + ":00";
    console.log(timeString);
    newAlarm.getUp(timeString);
  })
});
