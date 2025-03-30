function reduceToSingleDigit(num) {
  while (num > 9 && num !== 11 && num !== 22 && num !== 33) {
    num = num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
  }
  return num;
}

function getNameNumber(name) {
  const letterMap = {
    1: ['А', 'И', 'Р', 'Ш'],
    2: ['Б', 'Й', 'С', 'Щ'],
    3: ['В', 'К', 'Т', 'Ъ'],
    4: ['Г', 'Л', 'У', 'Ы'],
    5: ['Д', 'М', 'Ү', 'Ь'],
    6: ['Е', 'Н', 'Ф', 'Э'],
    7: ['Ё', 'О', 'Х', 'Ю'],
    8: ['Ж', 'Ө', 'Ц', 'Я'],
    9: ['З', 'П', 'Ч']
  };

  let total = 0;
  for (let char of name.toUpperCase()) {
    for (let key in letterMap) {
      if (letterMap[key].includes(char)) {
        total += parseInt(key);
        break;
      }
    }
  }
  return reduceToSingleDigit(total);
}

function generateMatrixReport(birthDateStr, name) {
  const date = new Date(birthDateStr);
  const day = reduceToSingleDigit(date.getDate());
  const month = reduceToSingleDigit(date.getMonth() + 1);
  const year = reduceToSingleDigit(date.getFullYear().toString().split('').reduce((sum, d) => sum + parseInt(d), 0));
  const lifePath = reduceToSingleDigit(day + month + year);
  const nameNumber = getNameNumber(name);
  const vibration = reduceToSingleDigit(lifePath + nameNumber);

  const chakra = analyzeChakra(lifePath, nameNumber);
  const yinYang = analyzeYinYang(nameNumber, vibration);

  return `
    🔢 <b>Амьдралын замын тоо:</b> ${lifePath}<br/>
    🧬 <b>Нэрний тоо:</b> ${nameNumber}<br/>
    🎵 <b>Нийлбэр чичиргээ:</b> ${vibration}<br/><br/>
    
    🧘‍♀️ <b>Чакра онош:</b><br/>
    ${chakra}<br/>
    
    ☯️ <b>Инь Ян баланс:</b><br/>
    ${yinYang}<br/>
    
    🪄 <b>Матрицын тайлбар:</b><br/>
    Энд хувь тавилан, үйлийн үр, мөн чанар, архетип тайлбарууд динамикаар орно.
  `;
}
