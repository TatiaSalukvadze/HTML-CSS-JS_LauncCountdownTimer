document.addEventListener("DOMContentLoaded", function () {
  const deadline = new Date("December 31, 2023 11:13:00").getTime();
  const countdown = setInterval(function () {
    const currentDate = new Date().getTime();
    const gap = deadline - currentDate; //in miliseconds

    const days = document.getElementById("days");
    const hours = document.getElementById("hours");
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");
    if (gap <= 0) {
      clearInterval(countdown); // Stop the countdown when the target date is reached
      days.innerText = "00";
      hours.innerText = "00";
      minutes.innerText = "00";
      seconds.innerText = "00";
    } else {
      let second = 1000;
      let minute = 60 * second;
      let hour = 60 * minute;
      let day = 24 * hour; //day in miliseconds

      const countDays = Math.floor(gap / day);
      const countHours = Math.floor((gap % day) / hour);
      const countMinutes = Math.floor((gap % hour) / minute);
      const countSeconds = Math.floor((gap % minute) / second);
      //   console.log(
      //     countDays + " " + countHours + " " + countMinutes + " " + countSeconds
      //   );

      days.innerText = `${countDays}`;
      hours.innerText = `${countHours}`;
      minutes.innerText = `${countMinutes}`;
      seconds.innerText = `${countSeconds}`;
    }
  }, 1000);
});
