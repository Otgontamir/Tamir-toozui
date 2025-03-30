function generateMatrix() {
  const date = document.getElementById("birthDate").value;
  const name = document.getElementById("name").value;

  // Энд бодит тооцоолол орж ирнэ — жишээ үр дүн:
  const zam = 33;
  const nerniiToo = 11;
  const niilber = 8;

  document.getElementById("report").innerHTML = `
    <h2>📌 ${name} - Матрицын тайлан</h2>
    <p>🗓 Төрсөн огноо: ${date}</p>
    <p>🔢 Амьдралын замын тоо: <strong>${zam}</strong></p>
    <p>🧬 Нэрний тоо: <strong>${nerniiToo}</strong></p>
    <p>🎵 Нийлбэр чичиргээ: <strong>${niilber}</strong></p>
  `;

  // Чакра ба Инь Ян дуудаж байна
  generateChakra();
  generateYinYang();
}
