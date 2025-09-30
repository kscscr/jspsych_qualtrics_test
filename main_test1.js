// 新しいカタチで名前を保存するもの
// 可読性向上と編集のしやすさのために

var repo_site = "Picture/";

// 0. 名前の保存の容器
// Qualtricsで変数の共有ができないので削除

//1. 名前の入力
var survey_self_name = {
  type: 'survey-text',
  preamble: 'これから行う実験の課題で使用するために、ご自身の名前などを質問します。' +
   '</br>ここで収集した名前については、実験の課題でのみ使用し、分析には使用致しません。',
  questions: [
    {prompt: "名字（姓）を<u>ひらがなで</u>入力してください（例：山田 太郎さんなら、やまだ）",name: 'name_up', required:"True"}, 
    {prompt: "名前（名）を<u>ひらがなで</u>入力してください（例：山田 太郎さんなら、たろう）",  name: 'name_down', required:"True"},
    {prompt: "イニシャルを<u>名.姓の順に大文字アルファベットで</u>入力してください（例：山田 太郎さんなら、T.Y）",  name: 'name_initial', required:"True"},
  ],
  button_label: "次へ",
  on_finish: function(data){
    // 修正：保存方法の修正（jsPsych内部のデータに入れるようにする）
    self_name01 = JSON.parse(data.responses).name_up;
    self_name02 = JSON.parse(data.responses).name_down;
    self_name03 = JSON.parse(data.responses).name_initial;

    jsPsych.data.addProperties({self_name01: self_name01});
    jsPsych.data.addProperties({self_name02: self_name02});
    jsPsych.data.addProperties({self_name03: self_name03});
  }
};

// 16. IAT課題の終了メッセージ
var endmessage = {
    type: 'instructions',
    pages: ["<p>この課題はこれで終了になります</p>"+"<p>「次へ」をクリックして次へ進んでください</p>"
    ],
    allow_backward: false,
    show_clickable_nav: true,
    button_label_next: "次へ"
    
};


/* 実験の提示の順番 */
var timeline = [];

timeline.push(survey_self_name);
timeline.push(endmessage);

