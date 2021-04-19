var fintime = $(".timeout i");

setInterval(function() {  // 設置倒數計時: 結束時間 - 當前時間

  // 當前時間
  var time = new Date();
  var nowTime = time.getTime(); 
  // 設置結束時間 : 5月28號 0點0分0秒
  time.setMonth(4); 
  time.setDate(28); 
  time.setHours(0); 
  time.setMinutes(0);
  time.setSeconds(0);
  var endTime = time.getTime();

  // 倒數計時: 差值
  var offsetTime = (endTime - nowTime) / 1000;
//   console.log(offsetTime)
  var sec = parseInt(offsetTime % 60);
  var min = parseInt((offsetTime / 60) % 60); 
  var hr = parseInt((offsetTime / 60 / 60) % 24 );
  var day = parseInt(offsetTime  / 60 / 60 / 24)

  fintime[0].textContent = day + "天";
  fintime[1].textContent = hr + "時";
  fintime[2].textContent = min + "分";
  fintime[3].textContent = sec + "秒";
}, 1000);