function yinYangBalance() {
  const yin = Math.floor(Math.random() * 101);
  const yang = 100 - yin;
  const diff = Math.abs(yin - yang);
  let status = "Balanced";
  if (diff > 10) status = yin > yang ? "Yin dominant" : "Yang dominant";
  return { yin, yang, status };
}
