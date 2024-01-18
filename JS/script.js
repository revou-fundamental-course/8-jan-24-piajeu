const sisiInput = document.querySelector("#inputSide");
const hasilLuas = document.querySelector("#resultL");
const hasilKeliling = document.querySelector("#resultK");
const hitungButton = document.querySelector("#Count");
const resetButton = document.querySelector("#Reset");

function calculate() {
  const side = parseFloat(inputSide.value);

  if (isNaN(side) || side <= 0) {
    alert("Masukkan nilai sisi yang valid (Angka Positif)");
    return;
  }

  const luas = side * side;
  const keliling = 4 * side;

  hasilLuas.textContent = luas.toFixed(); 
  hasilKeliling.textContent = keliling.toFixed(); 
}

hitungButton.addEventListener("click", calculate);
resetButton.addEventListener("click", () => {
  sisiInput.value = "";
  hasilLuas.textContent = "";
  hasilKeliling.textContent = "";
});