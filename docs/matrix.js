const arcanaNames = {
  1: "Илбэчин — Хүсэл зориг, санаачилга",
  2: "Дээд санваартан — Зөн совин, мэргэн ухаан",
  3: "Хатан хаан — Бүтээлч байдал, халамж",
  4: "Эзэн хаан — Тогтвортой байдал, манлайлал",
  5: "Хиерофант — Сүнслэг мэдлэг, уламжлал",
  6: "Хайрлагчид — Сонголт, харилцаа",
  7: "Сүйх тэрэг — Зорилго, ялалт",
  8: "Шударга ёс — Үнэнч байдал, хариуцлага",
  9: "Даяанч — Бясалгал, мэргэн ухаан",
  10: "Азын хүрд — Өөрчлөлт, боломж",
  11: "Хүч чадал — Тэвчээр, дотоод хүч",
  12: "Дүүжлэгдсэн хүн — Золиос, хүлээн зөвшөөрөх",
  13: "Үхэл — Өөрчлөлт, шинэ эхлэл",
  14: "Зохицуулалт — Тэнцвэр, дасан зохицол",
  15: "Чөтгөр — Хамаарал, уруу таталт",
  16: "Цамхаг — Гэнэтийн өөрчлөлт, нуралт",
  17: "Од — Итгэл найдвар, урам зориг",
  18: "Сар — Зөн совин, хуурмаг байдал",
  19: "Нар — Амжилт, баяр хөөр",
  20: "Шүүх — Ухамсрын сэргэлт, өөрчлөлт",
  21: "Дэлхий — Бүтэн байдал, биелэлт",
  22: "Шоглогч — Эрх чөлөө, адал явдал"
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
<script
function reduceToArcana(num) {
  while (num > 22) {
    num = num.toString().split('').reduce((a, b) => a + parseInt(b), 0);
  }
  return num === 0 ? 22 : num;
}

function calculateMatrixPoints(day, month, year) {
  const arc = {};
  const dayArc = reduceToArcana(day);
  const monthArc = reduceToArcana(month);
  const yearArc = reduceToArcana(year.toString().split('').reduce((a, b) => a + parseInt(b), 0));

  arc.A = reduceToArcana(day + month);
  arc.B = reduceToArcana(month + yearArc);
  arc.C = reduceToArcana(arc.A + arc.B);
  arc.D = reduceToArcana(arc.A + arc.C);
  arc.G = reduceToArcana(day + yearArc);

  return arc;
}
// A–G цэгийн үр дүнг харуулах
const matrixList = document.getElementById('matrix-list');
if (matrixList) {
  matrixList.innerHTML = '';
  for (let key in arc) {
    const num = arc[key];
    const name = arcanaNames[num] || '';
    matrixList.innerHTML += `<li><b>${key}</b> цэг: Аркан ${num} — ${name}</li>`;
  }
}
const birth = new Date(date);
const day = birth.getDate();
const month = birth.getMonth() + 1;
const year = birth.getFullYear();
calculateMatrixPoints(day, month, year);
