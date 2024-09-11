/* Function hitung Luas */

const formLuas = document.getElementById("form-luas");
const resetForm = document.getElementById("clear-output");

formLuas.addEventListener("submit", (e) => {
  e.preventDefault();
  //   hitungLuas();
  const nilaiAlas = document.getElementById("nilaiA").value;
  const nilaiTinggi = document.getElementById("nilaiT").value;

  const hitungLuas = (alas, tinggi) => {
    const sisiAlas = Number(alas);
    const sisiTinggi = Number(tinggi);

    luasAlas = (1 / 2) * sisiAlas * sisiTinggi;
    console.log(luasAlas);

    document.getElementById(
      "jawaban"
    ).innerHTML = `x ${sisiAlas} cm x ${sisiTinggi} cm = ${luasAlas} cm&sup2`;
    document.getElementById("answer").style.display = "block";
    document.getElementById("clear-output").style.display = "block";
    return;
  };

  hitungLuas(nilaiAlas, nilaiTinggi);
});

// reset form
resetForm.addEventListener("click", () => {
  if (confirm("Apakah Anda ingin menghapus hasil perhitungan?")) {
    formLuas.reset();
    document.getElementById("answer").style.display = "none";
    document.getElementById("clear-output").style.display = "none";
  }
});

/* end of Function hitung Luas */

/* Function hitung keliling */

const formKeliling = document.getElementById("form-keliling");
const resetForm2 = document.getElementById("clear-output-2");

formKeliling.addEventListener("submit", (e) => {
  e.preventDefault();

  const nilaiA = document.getElementById("sisiA").value;
  const nilaiB = document.getElementById("sisiB").value;
  const nilaiC = document.getElementById("sisiC").value;

  const hitungKeliling = (a, b, c) => {
    const sisiA = Number(a);
    const sisiB = Number(b);
    const sisiC = Number(c);

    keliling = sisiA + sisiB + sisiC;
    console.log(keliling);

    document.getElementById(
      "jawaban-2"
    ).innerHTML = `${sisiA} cm + ${sisiB} cm + ${sisiC} cm = ${keliling} cm`;
    document.getElementById("answer-2").style.display = "block";
    document.getElementById("clear-output-2").style.display = "block";
    return;
  };

  hitungKeliling(nilaiA, nilaiB, nilaiC);
});

// reset form
resetForm2.addEventListener("click", () => {
  if (confirm("Apakah Anda ingin menghapus hasil perhitungan?")) {
    formKeliling.reset();
    document.getElementById("answer-2").style.display = "none";
    document.getElementById("clear-output-2").style.display = "none";
  }
});
