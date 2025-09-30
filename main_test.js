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

// // 2. 自分と遠いと思う名前を選択する
// var survey_other_name = {
//   type: 'survey-multi-choice',
//   questions: [
//     {
//       prompt: "あなたの姓と最も無関係だと思う名字を選択してください。", 
//       name: 'name_01', 
//       options: ['さとう', 'すずき', 'たかはし', 'たなか', 'いとう', 'わたなべ'], 
//       required: true
//     }, 
//     {
//       prompt: "あなたの名と最も無関係だと思う名前を選択してください。", 
//       name: 'name_02', 
//       options: ['まこと', 'しょうた', 'はると', 'かずこ', 'ようこ', 'みさき'], 
//       required: true
//     },
//     {
//       prompt: "あなたの名と最も無関係だと思う名前を選択してください。", 
//       name: 'name_03', 
//       options: ['きよし', 'だいすけ', 'れん', 'けいこ', 'あい', 'ひな'], 
//       required: true
//     }
//   ],
//   button_label: "次へ",
//   on_finish: function(data){
//     console.log(JSON.parse(data.responses).name_01);
//     // 修正：保存方法の修正（jsPsych内部のデータに入れるようにする）
//     other_name01 = JSON.parse(data.responses).name_01;
//     other_name02 = JSON.parse(data.responses).name_02;
//     other_name03 = JSON.parse(data.responses).name_03;

//     jsPsych.data.addProperties({other_name01: other_name01});
//     jsPsych.data.addProperties({other_name02: other_name02});
//     jsPsych.data.addProperties({other_name03: other_name03});
//   }


// };


var multi_choice_block = {
  type: 'survey-multi-choice',
  questions: [
    {prompt: "I like vegetables", name: 'Vegetables', options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"], required:true}, 
    {prompt: "I like fruit", name: 'Fruit', options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"], required: false}
  ],
};

// 3. 名前ありIAT（自己 + 好ましい言葉 / 他者 + 好ましくない言葉）の練習試行の教示文
var instruction_nameIAT_prac01 = {
  type: "html-keyboard-response",
  stimulus:"<img src='" + repo_site + "good.jpg' width='60%'>"+
  '<p style="text-align: center;">名前の入力へのご協力ありがとうございました。これから行う課題は、単語の分類課題です。下記の文章をよく確認してください。</p><br>'+
    '<p>画面中央に表示される単語が、<b>左上の[自己」または「好ましい言葉」のカテゴリーに当てはまると思ったら「E」キー</b>を、</p>'+
  '<p><b>右上の「他者」または「好ましくない言葉」のカテゴリーに当てはまると思ったら「I」キー</b>を押してください。</p><br>' +
  "左右のカテゴリーは固定で、中央の単語が変わります。<br>"+
 '間違えると×（バツ）が中央に表示されるので、押したキーと反対のキーを押してください。<br>'+
 '単語が表示されたら、<u>できるだけ速く正確に</u>回答してください。<br>'+
 'そのために、左右の中指をEとIのキーの上にあらかじめのせておいてください。<br>'+
 "<br>まずは練習を行います。準備がよろしければ、課題を開始してください。</p>" +
 "<p style = 'color: red; font-size: 0.8em;'>スペースキーを押すと開始します</p>",
  choices: ["space"]
};





// 11. 名前ありIATの終了メッセージ
var endmessage_nameIAT = {
  type: 'instructions',
  pages: ["<p>この課題はこれで終了になります</p>"+
  "<p>「次へ」をクリックして次へ進んでください</p>"
  ],
  allow_backward: false,
  show_clickable_nav: true,
  button_label_next: "次へ"
  
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



timeline.push({
  type: 'fullscreen',
  fullscreen_mode: true
});
timeline.push(survey_self_name);
// timeline.push(survey_other_name);
timeline.push(multi_choice_block);

timeline.push(instruction_nameIAT_prac01);
// timeline.push(trial_nameIAT_prac01);
// timeline.push(instruction_nameIAT_main01);
// timeline.push(trial_nameIAT_main01);
// timeline.push(instruction_nameIAT_prac02);
// timeline.push(trial_nameIAT_prac02);
// timeline.push(instruction_nameIAT_main02);
// timeline.push(trial_nameIAT_main02);


timeline.push({
  type: 'fullscreen',
  fullscreen_mode: false
});

timeline.push(endmessage);

