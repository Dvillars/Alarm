var apiKey = require("./../.env").apiKey;

function Alarm(){
  this.time = time;
}


Alarm.prototype.getCurrentTime = function() {
  $.get('http://api.timezonedb.com/v2/get-time-zone?key='+ apiKey + '&format=json&by=zone&zone=America/Los_Angeles').then(function(response) {
    console.log(response);
    $('#current-time').text(response.formatted);
  })
  .fail(function(error) {
    $('#current-time').text(error.responseJSON.message);
  });
}

Alarm.prototype.getUp = function(string) {
  $.get('http://api.timezonedb.com/v2/get-time-zone?key='+ apiKey + '&format=json&by=zone&zone=America/Los_Angeles').then(function(response) {
    var then = string;
    var rightNow = response.formatted;
    var difference = moment.duration(moment(then).diff(moment(rightNow)));
    console.log(difference._milliseconds);

    setTimeout(function() { alert("We are the Campions My Friend, We'll keep on Fighting 'till the end"); }, difference._milliseconds);
  })
  .fail(function(error) {
    $('#error').text(error.responseJSON.message);
  });
}

exports.alarmModule = Alarm;
