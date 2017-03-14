var Alarm = require('./../js/time.js').alarmModule;

$(document).ready(function(){
  var newAlarm = new Alarm();
  newAlarm.getCurrentTime();
  $('#form-button').click(function(event) {
    event.preventDefault();
  })
});
