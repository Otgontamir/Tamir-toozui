// 1–22 арканы товч тайлбарууд
const arcanaDescriptions = {
  1: "Илбэчин: Хүч, санаачилга",
  2: "Дээд санваартан: Зөн совин, дотоод ухаарал",
  3: "Хатан хаан: Бүтээлч байдал, халамж",
  4: "Эзэн хаан: Тогтвортой байдал, манлайлал",
  5: "Хиерофант: Сүнслэг мэдлэг, уламжлал",
  6: "Хайрлагчид: Харилцаа, сонголт",
  7: "Сүйх тэрэг: Зорилго, ялалт",
  8: "Шударга ёс: Хариуцлага, тэнцвэр",
  9: "Даяанч: Ганцаардал, гүн ухаан",
  10: "Азын хүрд: Өөрчлөлт, боломж",
  11: "Хүч чадал: Хүч, уужуу байдал",
  12: "Дүүжлэгдсэн: Золиослол, ухаарал",
  13: "Үхэл: Төгсгөл ба шинэ эхлэл",
  14: "Зохицуулалт: Эв нэгдэл, эдгэрэл",
  15: "Чөтгөр: Уруу таталт, хамаарал",
  16: "Цамхаг: Гэнэтийн нуралт",
  17: "Од: Итгэл найдвар",
  18: "Сар: Айдас, хуурмаг байдал",
  19: "Нар: Аз жаргал, илч",
  20: "Шүүлт: Гэгээрэл, уучлал",
  21: "Дэлхий: Амжилт, дуусах шат",
  22: "Шоглогч: Эхлэл, итгэл"
};

// 1–22-д багасгах функц
function reduceToArcana(num) {
  while (num > 22) {
    num = num.toString().split('').reduce((sum, d) => sum + parseInt(d), 0);
  }
  return num === 0 ? 22 : num;
}

// Үндсэн аркануудыг тооцоолох
function calculateMatrixArcanas(birthdate) {
  const [yearStr, monthStr, dayStr] = birthdate.split("-");
  const year = parseInt(yearStr);
  const month = parseInt(monthStr);
  const day = parseInt(dayStr);

  const dayArc = reduceToArcana(day);
  const monthArc = reduceToArcana(month);
  const yearArc = reduceToArcana(
    yearStr.split("").reduce((sum, d) => sum + parseInt(d), 0)
  );

  const karmicSum = dayArc + monthArc + yearArc;
  const karmicArc = reduceToArcana(karmicSum);
  const soulArc = reduceToArcana(
    karmicArc.toString().split("").reduce((sum, d) => sum + parseInt(d), 0)
  );

  return {
    day: dayArc,
    month: monthArc,
    year: yearArc,
    karmic: karmicArc,
    soul: soulArc
  };
}

// Тайлан үүсгэх функц
function generateMatrixReport(birthdate) {
  const resultDiv = document.getElementById("matrixResult");
  if (!resultDiv) {
    console.error("❌ matrixResult div олдсонгүй.");
    return;
  }

  const arc = calculateMatrixArcanas(birthdate);

  console.log("✅ Арканууд:", arc); // Debug log

  let html = `<ul>`;
  html += `<li>📅 Өдрийн Аркан: <strong>${arc.day}</strong> — ${arcanaDescriptions[arc.day]}</li>`;
  html += `<li>📆 Сарын Аркан: <strong>${arc.month}</strong> — ${arcanaDescriptions[arc.month]}</li>`;
  html += `<li>📈 Жилийн Аркан: <strong>${arc.year}</strong> — ${arcanaDescriptions[arc.year]}</li>`;
  html += `<li>🌀 Үйлийн үрийн Аркан: <strong>${arc.karmic}</strong> — ${arcanaDescriptions[arc.karmic]}</li>`;
  html += `<li>💖 Сэтгэлийн Аркан: <strong>${arc.soul}</strong> — ${arcanaDescriptions[arc.soul]}</li>`;
  html += `</ul>`;

  resultDiv.innerHTML = html;
}
