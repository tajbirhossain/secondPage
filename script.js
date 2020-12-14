setInterval(() => {
var time = new Date;
var hour = time.getHours();
var minute = time.getMinutes();
var second = time.getSeconds();
var ampm;
if (hour>=12) {
  ampm = 'pm'
}
else {
  ampm = 'am'
}
hour = hour ? hour : 12;
hour = hour % 12;
minute = minute < 10 ? '0'+ minute : minute;
second = second < 10 ? '0'+ second : second;
var finalTime = hour + ':' + minute + ':' + second + ' ' + ampm;
document.querySelector('#timeNDate').innerText = finalTime;
},1000);
