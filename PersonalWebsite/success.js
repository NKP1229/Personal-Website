setTimeout(() => {
  window.location.href = "contact.html";
}, 5000);

document.addEventListener("DOMContentLoaded", function () {
  const time = document.getElementById("timer");
  setTimeout(() => {
    time.textContent = `4 seconds.`;
  }, 1000);
  setTimeout(() => {
    time.textContent = `3 seconds.`;
  }, 2000);
  setTimeout(() => {
    time.textContent = `2 seconds.`;
  }, 3000);
  setTimeout(() => {
    time.textContent = `1 seconds.`;
  }, 4000);
});
