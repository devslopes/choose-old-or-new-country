const $cards = document.querySelectorAll(".card");
const $newCountrySection = document.querySelector("#new-country-section");
const $oldCountrySection = document.querySelector("#old-country-section");
const $chooseSection = document.querySelector("#choose-section");

for (let $card of $cards) {
  const $newCountryButton = $card.querySelector(".new-country");
  const $oldCountryButton = $card.querySelector(".old-country");

  $newCountryButton.addEventListener("click", () => {
    $newCountrySection.append($card);
    $newCountryButton.remove();
    $oldCountryButton.remove();

    const $removeButton = document.createElement("button");
    $removeButton.classList.add("remove-button");
    $removeButton.innerText = "Remove";
    $card.append($removeButton);
    $removeButton.addEventListener("click", () => {
      $card.append($newCountryButton);
      $card.append($oldCountryButton);
      $removeButton.remove();
      $chooseSection.append($card);
    });
  });

  $oldCountryButton.addEventListener("click", () => {
    $oldCountrySection.append($card);
  });
}
