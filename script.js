function ghanaFood() {
  let name = prompt("What name is your name?");
  let country = prompt("Waht country are you from?");

  if (name >= "0") {
    alert(
      "Okay" +
        " " +
        name +
        ", " +
        "go out and try Ghana Jollof in any African shop today."
    );
  } else {
    alert(
      "Hey Null, don't be like the Nigerians and not try Ghana Jollof okay!"
    );
  }
}

let food = document.querySelector("button");

food.addEventListener("click", ghanaFood);
