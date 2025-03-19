console.log("Hello World");

const form = document.querySelector("#form");
const submitButton = document.querySelector("#submit");

document.addEventListener("DOMContentLoaded", function () {
  const FORM = document.getElementById("contact");
  let val1 = 1,
    val2 = 1,
    val3 = 1;

  function changeColor() {
    if (val1 < 251) val1 += 2;
    if (val1 == 251 && val2 <= 250) val2 += 2;
    if (val2 == 251 && val3 <= 250) val3 += 2;
    if (val3 == 251) {
      do {
        if (val3 > 3) {
          val3 -= 2;
          console.log(`val3 = ${val3}.`);
        } else if (val2 > 3) {
          val2 -= 2;
          console.log(`val2 = ${val2}.`);
        } else if (val1 > 3) {
          val1 -= 2;
          console.log(`val2 = ${val1}.`);
        }
        FORM.style.backgroundColor = `rgba(${val1}, ${val2}, ${val3}, 0.3)`;
      } while (val1 !== 3);
    }
    FORM.style.backgroundColor = `rgba(${val1}, ${val2}, ${val3}, 0.3)`; // Corrected property and rgba usage
    requestAnimationFrame(changeColor);
  }
  changeColor();
});
