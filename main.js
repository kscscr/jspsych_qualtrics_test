// 新しいカタチで名前を保存するもの
// 可読性向上と編集のしやすさのために

// var repo_site = "https://experiment.kscscr.com/personality_2022_04/";
var repo_site = "Picture/";

// 0. 名前の保存の容器
let self_name01 = null;
let self_name02 = null;
let self_name03 = null;
let self_name04 = null;
let other_name01 = null;
let other_name02 = null;
let other_name03 = null;
let other_name04 = null;

//1. 名前の入力
var survey_self_name = {
  type: 'survey-text',
  preamble: '次の単語の課題で使用するために、ご自身の名前などを質問します。' + '</br>ここで収集した名前については、次の課題でのみ使用し、分析には使用致しません。',
  questions: [
    {prompt: "名字（姓）を入力してください（例：田中 太郎さんなら、田中）", name: 'name_up', required:'True'}, 
    {prompt: "名前（名）を入力してください（例：田中 太郎さんなら、太郎）",  name: 'name_down', required:"True"},
    {prompt: "Web上でよく使うハンドルネームを入力してください</br>なければクラウドワークスのユーザー名を入力してください",  name: 'name_handle', required:"True"},
    {prompt: "日常生活でよく呼ばれるニックネーム（あだ名など）を入力してください</br>ない場合は上3つと重複しても構いません",  name: 'name_nick', required:"True"},

  ],
  button_label: "次へ",
  on_finish: function(data){
    self_name01 = JSON.parse(data.responses).name_up;
    self_name02 = JSON.parse(data.responses).name_down;
    self_name03 = JSON.parse(data.responses).name_handle;
    self_name04 = JSON.parse(data.responses).name_nick;   
  }
};

// 2. 自分と遠いと思う名前を選択する
var survey_other_name = {
  type: 'survey-multi-choice',
  questions: [
    {
      prompt: "あなたの姓から最も遠いと思う名字を選択してください。", 
      name: 'name_01', 
      options: ['前田', '大山', '菊池', '筒香', '梶谷'], 
      required: true
    }, 
    {
      prompt: "あなたの名から最も遠いと思う名を選択してください。", 
      name: 'name_02', 
      options: ['健太', '悠輔', '雄星', '嘉智', '隆幸'], 
      required: true
    },
    {
      prompt: "あなたのイニシャルから最も遠いと思うものを選択してください。", 
      name: 'name_03', 
      options: ['KM', 'YO', 'YK', 'YT', 'TK'], 
      required: true
    }, 
    {
      prompt: "あなたのあだ名から最も遠いと思うものを選択してください。", 
      name: 'name_04', 
      options: ['りんご', 'ばなな', 'もも', 'なし', 'ぶどう'], 
      required: true
    }
  ],
  button_label_next: "次へ",
  on_finish: function(data){
    other_name01 = JSON.parse(data.responses).name_01;
    other_name02 = JSON.parse(data.responses).name_02;
    other_name03 = JSON.parse(data.responses).name_03;
    other_name04 = JSON.parse(data.responses).name_04;   
  }


};

//　3. IATに対する練習施行の教示文
// （練習の練習なので、使用しないのもOK）
var instruction_test = {
  type: "html-keyboard-response",
  stimulus:"<img src='" + repo_site + "Picture03.jpg' width='60%'>"+"<p style = 'font-size:1.5em; text-align: center'>練習です</p>"+"<p>キーボードを利用した単語の分類課題を行います。</p>"+"<p>画面中央に表示される単語が、左上の<b>「よい」</b>または<b>「虫」</b>のカテゴリーに当てはまると思ったら<b>「E」</b>キーを、<br>右上の<b>「わるい」</b>のカテゴリーに当てはまると思ったら<b>「I」</b>キーを押してください。</p>"+ "<p><b>左右のカテゴリーは固定で、中央の単語が変わります。</b></p>"+"<p>間違えるとX（バツ）が中央に表示されるので、押したキーと反対のキーを押してください</br><b>スペースキー</b>を押すと開始します。</p>"+"<p style = 'font-size: 1.5em;'>単語が表示されたら、なるべく早く回答してください。</p>",
  choices: ["space"]
};

// 4. IATそのものの練習試行
// （練習の練習なので、使用しないのもOK）
var trial_test01 = {
  timeline:[
    {
      type: 'iat-html',
      stimulus: jsPsych.timelineVariable('stimulus'),
      stim_key_association: jsPsych.timelineVariable('stim_key_association'),
      html_when_wrong: '<span style="color: red; font-size: 80px">X</span>',
      bottom_instructions: '<p>間違えるとバツが表示されます。バツが表示されたら反対のキーを押してください</p>',
      force_correct_key_press: true,
      display_feedback: true,
      left_category_key: 'E',
      right_category_key: 'I',
      left_category_label: ["よい","虫"],
      right_category_label: ["わるい"],
      response_ends_trial: true
    }
    ],  
  //IATで使う刺激
  timeline_variables: [
    /* 快語 */
    {stimulus: "美しい", stim_key_association: "left"},
    {stimulus: "素晴らしい", stim_key_association: "left"},
    {stimulus: "きれい", stim_key_association: "left"},
    {stimulus: "優しい", stim_key_association: "left"},

    {stimulus: "醜い", stim_key_association: "right"},
    {stimulus: "駄目な", stim_key_association: "right"},
    {stimulus: "汚い", stim_key_association: "right"},
    {stimulus: "愚かな", stim_key_association: "right"},

    {stimulus: "カブトムシ", stim_key_association: "left"},
    {stimulus: "バッタ", stim_key_association: "left"},
    {stimulus: "クワガタ", stim_key_association: "left"},
    {stimulus: "ハチ", stim_key_association: "left"},

    {stimulus: "バラ", stim_key_association: "right"},
    {stimulus: "チューリップ", stim_key_association: "right"},
    {stimulus: "ユリ", stim_key_association: "right"},
    {stimulus: "ガーベラ", stim_key_association: "right"}
    ],
  randomize_order: true,
  post_trial_gap: 50,
  repetitions: 1
};


// 5. 名前ありIAT（好ましい + 自分 / 好ましくない + 他者）の練習試行の教示文
var instruction_nameIAT_prac01 = {
  type: "html-keyboard-response",
  stimulus:"<img src='" + repo_site + "good.jpg' width='60%'>"+"<p style = 'font-size:1.5em; text-align: center'>本番です</p>"+"<p style = 'font-size: 2em;'><b>左右のカテゴリーが変わっています</b></p>"+"<p>キーボードを利用した単語の分類課題を行います。</p>"+"<p>画面中央に表示される単語が、左上の<b>「好ましい」</b>または<b>「自分」</b>のカテゴリーに当てはまると思ったら<b>「E」</b>キーを、<br>右上の<b>「好ましくない」</b>または、<b>「他者」</b>のカテゴリーに当てはまると思ったら<b>「I」</b>キーを押してください。</p>"+ "<p><b>左右のカテゴリーは固定で、中央の単語が変わります。</b></p>"+"<p>間違えるとX（バツ）が中央に表示されるので、押したキーと反対のキーを押してください</br><b>スペースキー</b>を押すと開始します。</p>"+"<p style = 'font-size: 1.5em;'>単語が表示されたら、なるべく早く回答してください。</p>",
  choices: ["space"]
};

// 6. 名前ありIATの練習試行 （好ましい + 自分 / 好ましくない + 他者）
var trial_nameIAT_prac01 = {
  timeline:[
    {
      type: 'iat-html',
      stimulus: jsPsych.timelineVariable('stimulus'),
      stim_key_association: jsPsych.timelineVariable('stim_key_association'),
      html_when_wrong: '<span style="color: red; font-size: 80px">X</span>',
      bottom_instructions: '<p>間違えるとバツが表示されます。バツが表示されたら反対のキーを押してください</p>',
      force_correct_key_press: true,
      display_feedback: true,
      left_category_key: 'E',
      right_category_key: 'I',
      left_category_label: ["好ましい","自分"],
      right_category_label: ["好ましくない", "他者"],
      post_trial_gap: 50,
      response_ends_trial: true
    }
    ],  
  //IATで使う刺激
  timeline_variables: [
    {stimulus: "悲しい", stim_key_association: "right"},
    {stimulus: "駄目な", stim_key_association: "right"},
    {stimulus: "醜い", stim_key_association: "right"},
    {stimulus: "汚い", stim_key_association: "right"},
    {stimulus: "つまらない", stim_key_association: "right"},

    {stimulus: "嬉しい", stim_key_association: "left"},
    {stimulus: "素晴らしい", stim_key_association: "left"},
    {stimulus: "美しい", stim_key_association: "left"},
    {stimulus: "きれい", stim_key_association: "left"},

    {stimulus: function(){ return self_name01; }, stim_key_association: "left"},
    {stimulus: function(){ return self_name02; }, stim_key_association: "left"},
    {stimulus: function(){ return self_name03; }, stim_key_association: "left"},
    {stimulus: function(){ return self_name04; }, stim_key_association: "left"},

    {stimulus: function(){ return other_name01;}, stim_key_association: "right"},
    {stimulus: function(){ return other_name02; }, stim_key_association: "right"},
    {stimulus: function(){ return other_name03; }, stim_key_association: "right"},
    {stimulus: function(){ return other_name04; }, stim_key_association: "right"},

    ],

  randomize_order: true,
  repetitions: 1
};


// 7. 名前ありIATの休憩（好ましい + 自分 / 好ましくない + 他者）：本番前
var instruction_nameIAT_main01 = {
  type: "html-keyboard-response",
  stimulus:"<img src='" + repo_site + "good.jpg' width='60%'>"+"<p style = 'font-size:1.5em; text-align: center'>休憩です</p>"+"<p>キーボードを利用した単語の分類課題を行います。</p>"+"<p>画面中央に表示される単語が、左上の<b>「好ましい」</b>または<b>「自分」</b>のカテゴリーに当てはまると思ったら<b>「E」</b>キーを、<br>右上の<b>「好ましい」</b>または<b>「他者」</b>のカテゴリーに当てはまると思ったら<b>「I」</b>キーを押してください。</p>"+ "<p><b>左右のカテゴリーは固定で、中央の単語が変わります。</b></p>"+"<p>間違えるとX（バツ）が中央に表示されるので、押したキーと反対のキーを押してください</br><b>スペースキー</b>を押すと開始します。</p>"+"<p style = 'font-size: 1.5em;'>単語が表示されたら、なるべく早く回答してください。</p>",
  choices: ["space"]
};

// 8. 名前ありIATの本番試行 （好ましい + 自分 / 好ましくない + 他者）
var trial_nameIAT_main01 = {
  timeline:[
    {
      type: 'iat-html',
      stimulus: jsPsych.timelineVariable('stimulus'),
      stim_key_association: jsPsych.timelineVariable('stim_key_association'),
      html_when_wrong: '<span style="color: red; font-size: 80px">X</span>',
      bottom_instructions: '<p>間違えるとバツが表示されます。バツが表示されたら反対のキーを押してください</p>',
      force_correct_key_press: true,
      display_feedback: true,
      left_category_key: 'E',
      right_category_key: 'I',
      left_category_label: ["好ましい","自分"],
      right_category_label: ["好ましくない", "他者"],
      post_trial_gap: 50,
      response_ends_trial: true
    }
    ],  
  //IATで使う刺激
  timeline_variables: [
    {stimulus: "悲しい", stim_key_association: "right"},
    {stimulus: "駄目な", stim_key_association: "right"},
    {stimulus: "醜い", stim_key_association: "right"},
    {stimulus: "汚い", stim_key_association: "right"},
    {stimulus: "つまらない", stim_key_association: "right"},
    {stimulus: "けがれた", stim_key_association: "right"},
    {stimulus: "嫌い", stim_key_association: "right"},
    {stimulus: "非道い", stim_key_association: "right"},
    {stimulus: "愚かな", stim_key_association: "right"},
    {stimulus: "卑しい ", stim_key_association: "right"},

    {stimulus: "嬉しい", stim_key_association: "left"},
    {stimulus: "素晴らしい", stim_key_association: "left"},
    {stimulus: "美しい", stim_key_association: "left"},
    {stimulus: "きれい", stim_key_association: "left"},
    {stimulus: "楽しい", stim_key_association: "left"},
    {stimulus: "清らか", stim_key_association: "left"},
    {stimulus: "好き", stim_key_association: "left"},
    {stimulus: "喜び", stim_key_association: "left"},
    {stimulus: "優しい", stim_key_association: "left"},
    {stimulus: "ほがらか", stim_key_association: "left"},

    {stimulus: function(){ return self_name01; }, stim_key_association: "left"},
    {stimulus: function(){ return self_name02; }, stim_key_association: "left"},
    {stimulus: function(){ return self_name03; }, stim_key_association: "left"},
    {stimulus: function(){ return self_name04; }, stim_key_association: "left"},

    {stimulus: function(){ return other_name01; }, stim_key_association: "right"},
    {stimulus: function(){ return other_name02; }, stim_key_association: "right"},
    {stimulus: function(){ return other_name03; }, stim_key_association: "right"},
    {stimulus: function(){ return other_name04; }, stim_key_association: "right"},
    
    ],
  randomize_order: false,
  post_trial_gap: 50,
  repetitions: 1
};


// 9. （入れ替え）名前ありIAT（好ましい + 他者 / 好ましくない + 自分）の練習試行の教示文
var instruction_nameIAT_prac02 = {
  type: "html-keyboard-response",
  stimulus:"<img src='" + repo_site + "change.jpg' width='60%'>"+"<p style = 'font-size:1.5em; text-align: center'>休憩です</p>"+"<p>キーボードを利用した単語の分類課題を行います。</p>"+"<p style = 'font-size: 2em;'><b>左右のカテゴリーが変わっています</b></p>"+"<p>画面中央に表示される単語が、左上の<b>「好ましい」</b>または<b>「他者」</b>のカテゴリーに当てはまると思ったら<b>「E」</b>キーを、<br>右上の<b>「好ましくない」</b>又は<b>「自分」</b>のカテゴリーに当てはまると思ったら<b>「I」</b>キーを押してください。</p>"+ "<p><b>左右のカテゴリーは固定で、中央の単語が変わります。</b></p>"+"<p>間違えるとX（バツ）が中央に表示されるので、押したキーと反対のキーを押してください</br><b>スペースキー</b>を押すと開始します。</p>"+"<p style = 'font-size: 1.5em;'>単語が表示されたら、なるべく早く回答してください。</p>",
  choices: ["space"]
};

// 10. 名前ありIATの練習試行 （好ましい + 他者 / 好ましくない + 自分）

var trial_nameIAT_prac02 = {
  timeline:[
    {
      type: 'iat-html',
      stimulus: jsPsych.timelineVariable('stimulus'),
      stim_key_association: jsPsych.timelineVariable('stim_key_association'),
      html_when_wrong: '<span style="color: red; font-size: 80px">X</span>',
      bottom_instructions: '<p>間違えるとバツが表示されます。バツが表示されたら反対のキーを押してください</p>',
      force_correct_key_press: true,
      display_feedback: true,
      left_category_key: 'E',
      right_category_key: 'I',
      left_category_label: ["好ましい", "他者"],
      right_category_label: ["好ましくない","自分"],
      post_trial_gap: 50,
      response_ends_trial: true
    }
    ],  
  //IATで使う刺激
  timeline_variables: [
    {stimulus: "悲しい", stim_key_association: "right"},
    {stimulus: "駄目な", stim_key_association: "right"},
    {stimulus: "醜い", stim_key_association: "right"},
    {stimulus: "汚い", stim_key_association: "right"},
    {stimulus: "つまらない", stim_key_association: "right"},
    {stimulus: "けがれた", stim_key_association: "right"},
    {stimulus: "嫌い", stim_key_association: "right"},

    {stimulus: "嬉しい", stim_key_association: "left"},
    {stimulus: "素晴らしい", stim_key_association: "left"},
    {stimulus: "美しい", stim_key_association: "left"},
    {stimulus: "きれい", stim_key_association: "left"},
    {stimulus: "楽しい", stim_key_association: "left"},
    {stimulus: "清らか", stim_key_association: "left"},
    {stimulus: "好き", stim_key_association: "left"},
    {stimulus: "喜び", stim_key_association: "left"},
    {stimulus: "優しい", stim_key_association: "left"},
    {stimulus: "ほがらか", stim_key_association: "left"},


    {stimulus: function(){ return self_name01; }, stim_key_association: "right"},
    {stimulus: function(){ return self_name02; }, stim_key_association: "right"},
    {stimulus: function(){ return self_name03; }, stim_key_association: "right"},
    {stimulus: function(){ return self_name04; }, stim_key_association: "right"},

    {stimulus: function(){ return other_name01; }, stim_key_association: "left"},
    {stimulus: function(){ return other_name02; }, stim_key_association: "left"},
    {stimulus: function(){ return other_name03; }, stim_key_association: "left"},
    {stimulus: function(){ return other_name04; }, stim_key_association: "left"},
    ],
  randomize_order: true,
  post_trial_gap: 50,
  repetitions: 1
};

// 11. 名前ありIATの休憩（好ましい + 他者 / 好ましくない + 自分）：本番前
var instruction_nameIAT_main02 = {
  type: "html-keyboard-response",
  stimulus:"<img src='" + repo_site + "bad.jpg' width='60%'>"+"<p style = 'font-size:1.5em; text-align: center'>休憩です</p>"+"<p>キーボードを利用した単語の分類課題を行います。</p>"+"<p>画面中央に表示される単語が、左上の<b>「好ましい」</b>または<b>「他者」</b>のカテゴリーに当てはまると思ったら<b>「E」</b>キーを、<br>右上の<b>「好ましくない」</b>または<b>「自分」</b>のカテゴリーに当てはまると思ったら<b>「I」</b>キーを押してください。</p>"+ "<p><b>左右のカテゴリーは固定で、中央の単語が変わります。</b></p>"+"<p>間違えるとX（バツ）が中央に表示されるので、押したキーと反対のキーを押してください</br><b>スペースキー</b>を押すと開始します。</p>"+"<p style = 'font-size: 1.5em;'>単語が表示されたら、なるべく早く回答してください。</p>",
  choices: ["space"]
};

// 12. 名前ありIATの本番試行 （好ましい + 他者 / 好ましくない + 自分）
var trial_nameIAT_main02 = {
  timeline:[
    {
      type: 'iat-html',
      stimulus: jsPsych.timelineVariable('stimulus'),
      stim_key_association: jsPsych.timelineVariable('stim_key_association'),
      html_when_wrong: '<span style="color: red; font-size: 80px">X</span>',
      bottom_instructions: '<p>間違えるとバツが表示されます。バツが表示されたら反対のキーを押してください</p>',
      force_correct_key_press: true,
      display_feedback: true,
      left_category_key: 'E',
      right_category_key: 'I',
      left_category_label: ["好ましい", "他者"],
      right_category_label: ["好ましくない", "自分"],
      response_ends_trial: true
    }
    ],  
  //IATで使う刺激
  timeline_variables: [
    {stimulus: "悲しい", stim_key_association: "right"},
    {stimulus: "駄目な", stim_key_association: "right"},
    {stimulus: "醜い", stim_key_association: "right"},
    {stimulus: "汚い", stim_key_association: "right"},
    {stimulus: "つまらない", stim_key_association: "right"},
    {stimulus: "けがれた", stim_key_association: "right"},
    {stimulus: "嫌い", stim_key_association: "right"},
    {stimulus: "非道い", stim_key_association: "right"},
    {stimulus: "愚かな", stim_key_association: "right"},
    {stimulus: "卑しい ", stim_key_association: "right"},

    {stimulus: "嬉しい", stim_key_association: "left"},
    {stimulus: "素晴らしい", stim_key_association: "left"},
    {stimulus: "美しい", stim_key_association: "left"},
    {stimulus: "きれい", stim_key_association: "left"},
    {stimulus: "楽しい", stim_key_association: "left"},
    {stimulus: "清らか", stim_key_association: "left"},
    {stimulus: "好き", stim_key_association: "left"},
    {stimulus: "喜び", stim_key_association: "left"},
    {stimulus: "優しい", stim_key_association: "left"},
    {stimulus: "ほがらか", stim_key_association: "left"},

    {stimulus: function(){ return self_name01; }, stim_key_association: "right"},
    {stimulus: function(){ return self_name02; }, stim_key_association: "right"},
    {stimulus: function(){ return self_name03; }, stim_key_association: "right"},
    {stimulus: function(){ return self_name04; }, stim_key_association: "right"},

    {stimulus: function(){ return other_name01; }, stim_key_association: "left"},
    {stimulus: function(){ return other_name02; }, stim_key_association: "left"},
    {stimulus: function(){ return other_name03; }, stim_key_association: "left"},
    {stimulus: function(){ return other_name04; }, stim_key_association: "left"},
    
    ],
  randomize_order: false,
  repetitions: 1
};

// 13. 名前ありIATの終了メッセージ
var endmessage_nameIAT = {
  type: 'instructions',
  pages: ["<p>この課題はこれで終了になります</p>"+"<p>「次へ」をクリックして次へ進んでください</p>"
  ],
  allow_backward: false,
  show_clickable_nav: true,
  button_label_next: "次へ"
  
};

// 14. 



// 14. IAT課題の終了メッセージ
var endmessage = {
    type: 'instructions',
    pages: ["<p>この課題はこれで終了になります</p>"+"<p>「次へ」をクリックして次へ進んでください</p>"
    ],
    allow_backward: false,
    show_clickable_nav: true,
    button_label_next: "次へ"
    
};

// var endmessage = {
//     type: 'instructions',
//     pages: ["<p>次の画面で「クラウドワークス」に入力してもらうためのコードが表示されます。</p>"
//     ],
//     allow_backward: false,
//     show_clickable_nav: true,
//     button_label_next: "次へ"
    
// };



/* 実験の提示の順番 */
var timeline = [];



timeline.push({
  type: 'fullscreen',
  fullscreen_mode: true
});
timeline.push(survey_self_name);
timeline.push(survey_other_name);
timeline.push(instruction_test);
timeline.push(trial_test01);
//timeline.push(instruction_nameIAT_prac01);
//timeline.push(trial_nameIAT_prac01);
//timeline.push(instruction_nameIAT_main01);
//timeline.push(trial_nameIAT_main01);
//timeline.push(instruction_nameIAT_prac02);
//timeline.push(trial_nameIAT_prac02);
//timeline.push(instruction_nameIAT_main02);
//timeline.push(trial_nameIAT_main02);


timeline.push({
  type: 'fullscreen',
  fullscreen_mode: false
});

timeline.push(endmessage);
