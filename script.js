const arrayCount = [0, 0, 0, 0, 0];

document.getElementById("parent").addEventListener("click", (e) => {
  const target = e.target;
  if (target.nodeName === "BUTTON") {
    const index = parseInt(e.target.id.slice(-1)) - 1;
    if (!isNaN(index) && index >= 0 && index < arrayCount.length) {
      arrayCount[index]++;
      document.getElementById("count-" + (index + 1)).textContent =
        arrayCount[index];
    }
  }
});
