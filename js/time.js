var apiKey = require("./../.env").apiKey;

function Alarm(){
  this.date = date;
  this.time = time;
}


Alarm.prototype.getCurrentTime = function() {
  $.get('http://api.timezonedb.com/v2/get-time-zone?key='+ apiKey + '&format=json&by=zone&zone=America/Los_Angeles').then(function(response) {
    console.log(response);
    $('#current-time').text(response.formatted);
  })
  .fail(function(error) {
    $('#current-time').text(error.responseJSON.message)
  });
}

exports.alarmModule = Alarm;
