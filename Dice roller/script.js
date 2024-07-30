function rollDice() {
  const numOfDice = document.getElementById("numOfDice").value;
  const diceRes = document.getElementById("diceRes");
  const diceImg = document.getElementById("diceImg");
  const values = [];
  const images = [];

  for (let i = 0; i < numOfDice; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(
      `<img src="dice_imgs/Dice-${value}-b.svg" alt="dice${value}">`
    );
  }

  diceRes.textContent = `Result: ${values.join(", ")}`;
  diceImg.innerHTML = images.join("");
}
