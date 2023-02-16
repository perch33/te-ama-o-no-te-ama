const heart = document.querySelector(".heart");

const boton = document.querySelector(".boton_1");

const cajaBoton = document.querySelector(".boton");

const textContent = document.querySelector(".text__content");

const reload = document.querySelectorAll(".reload");

const happy = document.querySelector(".happy");

const sad = document.querySelector(".sad");

const body = document.querySelector(".body__background");

let numberAleatory = Math.round(Math.random());

const musicPrincipal = new Audio("assets/music/Lovely Piano Song.mp3");

const musicSad = new Audio("assets/music/Blonde Redhead - recortado.mp3");

const musicHappy = new Audio(
  "assets/music/Tu Me Cambiaste La Vida recortado.mp3"
);

musicPrincipal.play();

musicPrincipal.loop = true;

musicPrincipal.volume = 0.5;

let aleatory;

const activator = () => {
  if (!aleatory) {
    aleatory = setInterval(moveAleatory, 800);
  }
};

const stopHappy = () => {
  clearInterval(aleatory);
  aleatory = null;
  heart.classList.add("ocultar");
  happy.classList.remove("ocultar");
  body.classList.replace("heightVh", "heightVh2");
  musicPrincipal.pause();
  musicHappy.play();
  musicHappy.volume = 0.5;
};

const stopSad = () => {
  clearInterval(aleatory);
  aleatory = null;
  heart.classList.add("ocultar");
  sad.classList.remove("ocultar");
  body.classList.replace("heightVh", "heightVh2");
  musicPrincipal.pause();
  musicSad.play();
  musicSad.volume = 0.5;
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
  cajaBoton.classList.add("ocultar");
  heart.classList.remove("ocultar");
  textContent.classList.add("ocultar");
  body.classList.add("heightVh");
  moveAleatory();
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
