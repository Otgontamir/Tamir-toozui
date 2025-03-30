// 22 арканы товч тайлбар (дараа нь дэлгэрүүлж болно)
const arcanaDescriptions = {
  1: "Илбэчин: Хүч, санаачлага, боломж",
  2: "Дээд санваартан: Зөн совин, тайван байдал",
  3: "Хатан хаан: Эмэгтэйлэг, бүтээлч",
  4: "Эзэн хаан: Тогтвортой, зохион байгуулагч",
  5: "Хиерофант: Сүнслэг мэдлэг",
  6: "Хайрлагчид: Харилцаа, сонголт",
  7: "Сүйх тэрэг: Ялалт, хяналт",
  8: "Шударга ёс: Тэнцвэр, хариуцлага",
  9: "Даяанч: Гүн ухаан, ганцаардал",
  10: "Азын хүрд: Мөчлөг, өөрчлөлт",
  11: "Хүч чадал: Дотоод хүч, эр зориг",
  12: "Дүүжлэгдсэн: Золиос, ухаарал",
  13: "Үхэл: Шинэчлэл, төгсгөл",
  14: "Зохицуулалт: Тэнцвэр, эдгэрэл",
  15: "Чөтгөр: Материаллаг зүйлд баригдал",
  16: "Цамхаг: Гэнэтийн сүйрэл",
  17: "Од: Итгэл найдвар",
  18: "Сар: Зөн совин, хуурмаг байдал",
  19: "Нар: Аз жаргал, гэгээлэг байдал",
  20: "Шүүлт: Сэрэх, гэгээрэл",
  21: "Дэлхий: Дуусах, амжилт",
  22: "Шоглогч: Эхлэл, итгэл"
};

// 🔢 Тоонуудыг 1–22 хооронд буулгах функц
function reduceToArcana(num) {
  while (num > 22) {
    num = num.toString().split('').reduce((acc, d) => acc + parseInt(d), 0);
  }
  return num === 0 ? 22 : num;
}

// 📅 Гол функц — матрицын үндсэн аркануудыг гаргана
function calculateMatrixArcanas(birthdate) {
  const dateParts = birthdate.split("-");
  const year = parseInt(dateParts[0]);
  const month = parseInt(dateParts[1]);
  const day = parseInt(dateParts[2]);

  const dayArcana = reduceToArcana(day);
  const monthArcana = reduceToArcana(month);
  const yearArcana = reduceToArcana(
    year.toString().split("").reduce((sum, digit) => sum + parseInt(digit), 0)
  );

  const karmicSum = dayArcana + monthArcana + yearArcana;
  const karmicArcana = reduceToArcana(karmicSum);
  const soulArcana = reduceToArcana(
    karmicArcana.toString().split("").reduce((acc, d) => acc + parseInt(d), 0)
  );

  return {
    day: dayArcana,
    month: monthArcana,
    year: yearArcana,
    karmic: karmicArcana,
    soul: soulArcana
  };
}

// 🧾 Тайлан үүсгэх
function generateMatrixReport(birthdate) {
  const arc = calculateMatrixArcanas(birthdate);

  let html = `<h2>🔢 Хувь заяаны Матриц</h2>`;
  html += `<p><strong>Төрсөн огноо:</strong> ${birthdate}</p><ul>`;
  html += `<li>📅 Өдрийн Аркан: ${arc.day} — ${arcanaDescriptions[arc.day]}</li>`;
  html += `<li>📆 Сарын Аркан: ${arc.month} — ${arcanaDescriptions[arc.month]}</li>`;
  html += `<li>📈 Жилийн Аркан: ${arc.year} — ${arcanaDescriptions[arc.year]}</li>`;
  html += `<li>🌀 Үйлийн үрийн Аркан: ${arc.karmic} — ${arcanaDescriptions[arc.karmic]}</li>`;
  html += `<li>💖 Сэтгэлийн Аркан: ${arc.soul} — ${arcanaDescriptions[arc.soul]}</li>`;
  html += `</ul>`;

  document.getElementById("matrixResult").innerHTML = html;
}
<script src="matrix.js"></script>
