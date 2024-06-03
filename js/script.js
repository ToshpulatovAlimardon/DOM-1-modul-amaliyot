const advs = document.querySelectorAll(".promo__adv img"),
  genre = document.querySelector(".promo__genre");

advs.forEach((item) => {
  item.remove();
});

genre.textContent = "COMEDY";
