document
  .getElementById("calorie-form")
  .addEventListener("submit", function (e) {
    document.getElementById("results").style.display = "none";

    document.getElementById("loading").style.display = "block";

    setTimeout(calculateCalories, 2000);

    e.preventDefault();
  });
const totalCalories = document.getElementById("total-calories");
function calculateCalories(e) {
  const age = document.getElementById("age");
  const gender = document.querySelector(
    'input[name="customRadioInline1"]:checked'
  );
  const weight = document.getElementById("weight");
  const height = document.getElementById("height");
  const activity = document.getElementById("list").value;

  if (
    age.value === "" ||
    weight.value === "" ||
    height.value === "" ||
    80 < age.value ||
    age.value < 15
  ) {
    errorMessage("Please make sure the values you entered are correct");
  } else if (gender.id === "male" && activity === "1") {
    totalCalories.value =
      1.2 *
      (66.5 +
        13.75 * parseFloat(weight.value) +
        5.003 * parseFloat(height.value) -
        6.755 * parseFloat(age.value));
  } else if (gender.id === "male" && activity === "2") {
    totalCalories.value =
      1.375 *
      (66.5 +
        13.75 * parseFloat(weight.value) +
        5.003 * parseFloat(height.value) -
        6.755 * parseFloat(age.value));
  } else if (gender.id === "male" && activity === "3") {
    totalCalories.value =
      1.55 *
      (66.5 +
        13.75 * parseFloat(weight.value) +
        5.003 * parseFloat(height.value) -
        6.755 * parseFloat(age.value));
  } else if (gender.id === "male" && activity === "4") {
    totalCalories.value =
      1.725 *
      (66.5 +
        13.75 * parseFloat(weight.value) +
        5.003 * parseFloat(height.value) -
        6.755 * parseFloat(age.value));
  } else if (gender.id === "female" && activity === "1") {
    totalCalories.value =
      1.2 *
      (655 +
        9.563 * parseFloat(weight.value) +
        1.85 * parseFloat(height.value) -
        4.676 * parseFloat(age.value));
  } else if (gender.id === "female" && activity === "2") {
    totalCalories.value =
      1.375 *
      (655 +
        9.563 * parseFloat(weight.value) +
        1.85 * parseFloat(height.value) -
        4.676 * parseFloat(age.value));
  } else if (gender.id === "female" && activity === "3") {
    totalCalories.value =
      1.55 *
      (655 +
        9.563 * parseFloat(weight.value) +
        1.85 * parseFloat(height.value) -
        4.676 * parseFloat(age.value));
  } else if (gender.id === "female" && activity === "4") {
    totalCalories.value =
      1.725 *
      (655 +
        9.563 * parseFloat(weight.value) +
        1.85 * parseFloat(height.value) -
        4.676 * parseFloat(age.value));
  }

  document.getElementById("results").style.display = "block";

  document.getElementById("loading").style.display = "none";

  document.getElementById("total-calories").innerHTML = Math.round(
    totalCalories.value
  );
}

function clearError() {
  document.querySelector(".alert").remove();
}
