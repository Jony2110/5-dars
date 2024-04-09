let titel = document.querySelector("#titel1");
let start = document.querySelector("#btn1");
let pause = document.querySelector("#btn2");
let vaqt = +prompt("Vaqtni kiriting");
let sekund = 0;
let minut = vaqt % 60;
let soat = Math.floor(vaqt / 60);

start.addEventListener("click", () => {
  const interval = setInterval(() => {
    if (soat == 0 && minut == 0 && sekund == 0) {
      alert("Время вышло для повторения обновите страницу!");
      return clearInterval(interval);
    }
    else if (sekund == 0) {
      sekund = 59;
      minut -= 1;
    }
    else if(minut == 0){
      minut = 59;
      soat -= 1;
    }
    
    sekund -= 1;
    
    titel.textContent = `
      ${soat < 10 ? `0${soat}` : `${soat}`}:${
      minut < 10 ? `0${minut}` : `${minut}`
    }:${sekund < 10 ? `0${sekund}` : `${sekund}`}
      `;
      start.disabled = true;
      pause.disabled = false;
  }, 10);
  pause.addEventListener("click", ()=>{
    clearInterval(interval);
    start.disabled = false;
    pause.disabled = true;
  })
});

