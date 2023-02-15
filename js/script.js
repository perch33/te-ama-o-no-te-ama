const heart = document.querySelector(".heart");

const boton = document.querySelector(".boton");

const reload = document.querySelectorAll(".reload");

const happy = document.querySelector(".happy");

const sad = document.querySelector(".sad");

let numberAleatory = Math.round(Math.random());

let aleatory;

const activator = () => {
  if (!aleatory) {
    aleatory = setInterval(moveAleatory, 1000);
  }
};

const stopHappy = () => {
  clearInterval(aleatory);
  aleatory = null;
  heart.classList.add("ocultar");
  happy.classList.remove("ocultar");
};

const stopSad = () => {
  clearInterval(aleatory);
  aleatory = null;
  heart.classList.add("ocultar");
  sad.classList.remove("ocultar");
};

const moveAleatory = () => {
  let top = Math.round(Math.random() * 90) + "%";
  let left = Math.round(Math.random() * 90) + "%";
  let width = Math.round(Math.random() * (70 - 30) + 30) + "px";
  heart.style.left = left;
  heart.style.top = top;
  heart.style.width = width;
};

boton.addEventListener("click", () => {
  boton.classList.add("ocultar");
  heart.classList.remove("ocultar");
  activator();
});

heart.addEventListener("click", () => {
  if (numberAleatory == 1) {
    stopHappy();
  } else {
    stopSad();
  }
});


reload.forEach((reinicio) =>
  reinicio.addEventListener("click", () => {
    reinicio.classList.add("rotar");
    setTimeout(() => {
      location.reload();
      clean();
    }, 1500);
  })
);
