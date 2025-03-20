console.log("Hello World");

const form = document.querySelector("#form");
const submitButton = document.querySelector("#submit");

document.addEventListener("DOMContentLoaded", function () {
  const FORM = document.getElementById("contact");
  let val1 = 1,
    val2 = 1,
    val3 = 1;
  const changeColor = () => {
    if (val1 < 251) val1 += 2;
    if (val1 == 251 && val2 <= 250) val2 += 2;
    if (val2 == 251 && val3 <= 250) val3 += 2;
    if (val3 == 251) {
      do {
        if (val1 > 2) {
          val1 -= 2;
        } else if (val2 > 3) {
          val2 -= 2;
        } else if (val3 > 3) {
          val3 -= 2;
        }
        FORM.style.backgroundColor = `rgba(${val1}, ${val2}, ${val3}, 0.3)`;
      } while (val3 !== 3);
    }
    FORM.style.backgroundColor = `rgba(${val1}, ${val2}, ${val3}, 0.3)`; // Corrected property and rgba usage
    requestAnimationFrame(changeColor);
  };
  changeColor();
});
