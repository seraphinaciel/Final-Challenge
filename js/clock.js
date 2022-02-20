const cToday = document.querySelector(".today");
const cTimie = document.querySelector(".time");


function todayClock() {
  const cDate = new Date();
  const cYear = cDate.getFullYear();
  const cMonth = cDate.getMonth() + 1;
  const cDay = cDate.getDate();
  const cHour = cDate.getHours();
  const cMin = cDate.getMinutes();
  const cSec = cDate.getSeconds();

 
  cToday.innerHTML = `<span>${cYear}</span>.  <span>${cMonth}</span>. <span>${cDay}</span>.`;
  cTimie.innerHTML = `<span>${cHour}</span> : <span>${cMin}</span> : <span>${cSec}</span>`;
}

todayClock();
setInterval(todayClock, 1000);