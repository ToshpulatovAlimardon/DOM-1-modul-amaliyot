const advs = document.querySelectorAll(".promo__adv img"),
  genre = document.querySelector(".promo__genre"),
  wrapper = document.querySelector(".promo__bg"),
  seriesList = document.querySelector(".promo__interactive-list");

advs.forEach((item) => {
  item.remove();
});

genre.textContent = "COMEDY";

wrapper.style.cssText =
  "background: url('../img/1.jpg') center bottom/cover no-repeat;";

const seriesDb = {
  series: [
    "Omar",
    "The Final Legacy",
    "Ertugrul",
    "Magnificent Century",
    "The Great Seljuks: Guardians...",
  ],
};

seriesDb.series.forEach((item, indx) => {
  seriesList.innerHTML += `
    <li class="promo__interactive-item">
      ${indx + 1}. ${item}
      <div class="delete"></div>
    </li>
  `;
});
