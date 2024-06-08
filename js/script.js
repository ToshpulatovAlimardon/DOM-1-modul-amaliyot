document.addEventListener("DOMContentLoaded", () => {
  const advs = document.querySelectorAll(".promo__adv img"),
    genre = document.querySelector(".promo__genre"),
    wrapper = document.querySelector(".promo__bg"),
    seriesList = document.querySelector(".promo__interactive-list"),
    addForm = document.querySelector("form.add"),
    input = addForm.querySelector(".adding__input"),
    checkbox = addForm.querySelector("[type='checkbox']");

  const seriesDB = {
    series: [
      "Omar",
      "The Final Legacy",
      "Ertugrul",
      "Magnificent Century",
      "The Great Seljuks: Guardians...",
    ],
  };

  addForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let newValue = input.value;
    const favourite = checkbox.checked;

    if (newValue) {
      if (newValue.length > 18) {
        newValue = `${newValue.slice(0, 18)}...`;
      }

      if (favourite) {
        console.log("Sevimli serial qo’shilidi");
      }

      seriesDB.series.push(newValue);
      sort();
      setList();
      event.target.reset();
    }
  });

  advs.forEach((item) => {
    item.remove();
  });

  genre.textContent = "Comedy";

  wrapper.style.backgroundImage = "url(./img/1.jpg)";

  function sort() {
    seriesDB.series.sort();
  }

  function setList() {
    seriesList.innerHTML = "";
    sort();

    seriesDB.series.forEach((item, index) => {
      seriesList.innerHTML += `
				<li class="promo__interactive-item">
					${index + 1}. ${item}
					<div class="delete"></div>
				</li>
			`;
    });

    document.querySelectorAll(".delete").forEach((trashBtn, index) => {
      trashBtn.addEventListener("click", () => {
        trashBtn.parentElement.remove();
        seriesDB.series.splice(index, 1);
        setList();
      });
    });
  }

  sort();
  setList();
});
