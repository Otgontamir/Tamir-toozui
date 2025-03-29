const letterToNumberMap = {
  'а': 1, 'и': 1, 'р': 1, 'ш': 1,
  'б': 2, 'й': 2, 'с': 2, 'щ': 2,
  'в': 3, 'к': 3, 'т': 3, 'ъ': 3,
  'г': 4, 'л': 4, 'у': 4, 'ы': 4,
  'д': 5, 'м': 5, 'ү': 5, 'ь': 5,
  'е': 6, 'н': 6, 'ф': 6, 'э': 6,
  'ё': 7, 'о': 7, 'х': 7, 'ю': 7,
  'ж': 8, 'ө': 8, 'ц': 8, 'я': 8,
  'з': 9, 'п': 9, 'ч': 9
};

function reduceNumber(num) {
  while (![11, 22, 33].includes(num) && num > 9) {
    num = num.toString().split('').reduce((sum, d) => sum + Number(d), 0);
  }
  return num;
}

function calculateNameNumber(name) {
  const clean = name.toLowerCase().replace(/[^а-яёүө]/g, '');
  let total = 0;
  for (const char of clean) {
    total += letterToNumberMap[char] || 0;
  }
  return reduceNumber(total);
}

function calculateLifePathNumber(dateStr) {
  const digits = dateStr.replace(/-/g, '').split('').map(Number);
  const total = digits.reduce((a, b) => a + b, 0);
  return reduceNumber(total);
}

function generateReport() {
  const name = document.getElementById("name").value;
  const birthdate = document.getElementById("birthdate").value;
  if (!name || !birthdate) return alert("Бүх талбарыг бөглөнө үү.");

  const nameNum = calculateNameNumber(name);
  const lifeNum = calculateLifePathNumber(birthdate);
  const vibration = reduceNumber(nameNum + lifeNum);

  const chakra = chakraDiagnosis();
  const yinYang = yinYangBalance();

  let report = `<h2>🔢 Амьдралын замын тоо: ${lifeNum}</h2>`;
  report += `<p>🧬 Нэрний тоо: ${nameNum}</p>`;
  report += `<p>🎵 Нийлбэр чичиргээ: ${vibration}</p>`;

  report += `<h3>🧘‍♀️ Чакра онош:</h3><ul>`;
  for (let ch in chakra) {
    report += `<li>${ch}: ${chakra[ch].energy} (${chakra[ch].status})</li>`;
  }
  report += `</ul>`;

  report += `<h3>☯️ Инь Ян баланс:</h3>`;
  report += `<p>Yin: ${yinYang.yin}% | Yang: ${yinYang.yang}% → ${yinYang.status}</p>`;

  document.getElementById("report").innerHTML = report;
}
