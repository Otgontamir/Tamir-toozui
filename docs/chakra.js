function chakraDiagnosis() {
  const chakras = ["Root", "Sacral", "Solar Plexus", "Heart", "Throat", "Third Eye", "Crown"];
  const result = {};
  chakras.forEach(ch => {
    const energy = Math.floor(Math.random() * 10) + 1;
    let status = "Balanced";
    if (energy < 4) status = "Underactive";
    else if (energy > 7) status = "Overactive";
    result[ch] = { energy, status };
  });
  return result;
}
