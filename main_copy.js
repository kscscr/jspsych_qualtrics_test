// timeline変数を定義
var timeline = [];

// 手順教示画面
var instructions = {
  type: 'instructions',
  pages: [
    '実験にご協力いただきありがとうございます。',
    'この画面が表示されれば、基本的な設定は成功しています。',
    'スペースキーを押して次に進んでください。'
  ],
  show_clickable_nav: true,
  button_label_next: "次へ",
  button_label_previous: "前へ"
};

// 終了画面
var thank_you = {
  type: 'html-keyboard-response',
  stimulus: 'テストは正常に終了しました。Qualtricsの画面に戻ります。'
};

// タイムラインに上記の試行を追加
timeline.push(instructions);
timeline.push(thank_you);

