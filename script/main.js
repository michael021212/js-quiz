// 初期画面起動時
const Question = [
  ["アメリカの首都は？",
  "1. ワシントン",
  "2. ニューヨーク",
  "3. ロサンゼルス",
  "1"],
  ["カマキリの漢字は？",
  "1. 螽斯",
  "2. 蝙蝠",
  "3. 蟷螂",
  "3"],
  ["JavaScriptで余りを求めるのは？",
  "1. /",
  "2. %",
  "3. @",
  "2"]
  ];

// 初期変数定義
// 問題を表示するオブジェクトを取得する
const Q = document.querySelector('#”_question”');
// 問題を表示するオブジェクトを取得する
const A1 = document.querySelector('#_ans1');
const A2 = document.querySelector('#_ans2');
const A3 = document.querySelector('#_ans3');


// 正解数を保持する値
let Correct = 0;

// 現在の問題数
let Qcnt = 0;

// 問題を画面に表示する処理
function Q_Set() {
  Q.textContent = Question[Qcnt][0];
  A1.textContent = Question[Qcnt][1];
  A2.textContent = Question[Qcnt][2];
  A3.textContent = Question[Qcnt][3];
};

// 取得したテーブルに盤面生成
Q_Set();

// 回答ボタンを押したときの処理
function Answer_Check(ans) {
if(ans == Question[Qcnt][4]) {
alert("正解");
Correct++;
} else {
alert("不正解");
}
Qcnt++;
if (Qcnt == Question.length) {
Q.textContent = "問題は以上です。正解数は" + Correct + "でした。";
A1.textContent = "";
A2.textContent = "";
A3.textContent = "";
} else {
Q_Set();
}
}
