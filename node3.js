

let time = 5;

const intervalId = setInterval(() => {
  if (time > 0) {
    console.log(`Time left: ${time} seconds`);
    time--;
  } else {
    console.log("Countdown finished!");
    clearInterval(intervalId); 
  }
}, 1000);
