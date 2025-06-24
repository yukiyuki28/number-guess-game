function startGame() {
  let maximum = parseInt(prompt(`数字の上限を入力してください：`));
  while (!maximum){
    maximum = parseInt(prompt(`エラー：有効な数字を入力してください：`));
  }

  const targetNum = Math.floor(Math.random() * maximum) + 1;
  let guess = prompt(`1〜${maximum}の間で数字を当ててみてください（qで終了）:`);
  let count = 1;

  while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    count++;
    if (parseInt(guess) > targetNum) {
      guess = prompt("その数字より小さいです！もう一度：");
    } else {
      guess = prompt("その数字より大きいです！もう一度：");
    }
  }

  if (guess === 'q') {
    alert("ゲームを終了します。");
  } else {
    alert(`正解！${count}回で当てました🎉`);
  }
}