document.getElementById("subBtn").addEventListener("click", (e) => {
  if (soulValidation()) {
    console.log(e.target.setAttribute("href", "home.html"));
  }
});
function soulValidation() {
  const regex = /^111$/;
  const inputSoul = document.querySelector("input");
  if (regex.test(inputSoul.value)) {
    return true;
  } else {
    inputSoul.classList.add("is-invalid");
    return false;
  }
}
console.log(location.pathname);
