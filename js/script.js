const advs = document.querySelectorAll(".promo__adv img"),
  genre = document.querySelector(".promo__genre"),
  wrapper = document.querySelector(".promo__bg");

advs.forEach((item) => {
  item.remove();
});

genre.textContent = "COMEDY";

wrapper.style.cssText = "background: url('../img/1.jpg') center bottom/cover no-repeat;"