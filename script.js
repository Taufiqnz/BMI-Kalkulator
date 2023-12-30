function hitung() {
  let berat = document.getElementById("beratValues").value;
  let tinggi = document.getElementById("tinggiValues").value;

  let hasilIMT = berat / ((tinggi / 100) * (tinggi / 100));
  let text = document.getElementById("result");

  text.innerHTML = "Hasil: " + hasilIMT;

  if (hasilIMT <= 18.5) {
    text.innerHTML =
      "Hasil: " + hasilIMT + ", Berat badan kurang (underweight).";
  } else if (hasilIMT > 18.5 && hasilIMT <= 22.9) {
    text.innerHTML = "Hasil: " + hasilIMT + ", Berat badan normal.";
  } else if (hasilIMT >= 23 && hasilIMT <= 24.9) {
    text.innerHTML =
      "Hasil: " +
      hasilIMT +
      ", Kelebihan berat badan (overweight dengan risiko).";
  } else if (hasilIMT >= 25 && hasilIMT <= 29.9) {
    text.innerHTML = "Hasil: " + hasilIMT + ", Obesitas I.";
  } else if (hasilIMT >= 30) {
    text.innerHTML = "Hasil: " + hasilIMT + ", Obesitas II.";
  }
}
