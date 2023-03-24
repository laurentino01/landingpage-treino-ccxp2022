const days = document.getElementById("dia");
const hours = document.getElementById("hora");
const minutes = document.getElementById("minuto");
const seconds = document.getElementById("segundo");

const lounch = "17 oct 2023";

function countDown() {
  const lounchDays = new Date(lounch);
  const today = new Date();

  const totalSeg = (lounchDays - today) / 1000;
  const finalDays = Math.floor(totalSeg / 60 / 60 / 24);
  const finalHours = Math.floor(totalSeg / 60 / 60) % 24;
  const finalMinutes = Math.floor(totalSeg / 60) % 60;
  const finalSeconds = Math.floor(totalSeg) % 60;

  days.innerHTML = timeFormat(finalDays);
  hours.innerHTML = timeFormat(finalHours);
  minutes.innerHTML = timeFormat(finalMinutes);
  seconds.innerHTML = timeFormat(finalSeconds);
}

function timeFormat(time) {
  return time < 10 ? `0${time}` : time;
}

countDown();
setInterval(countDown, 1000);
