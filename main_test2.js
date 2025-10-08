// 新しいカタチで名前を保存するもの
// 可読性向上と編集のしやすさのために

var repo_site = "Picture/";



// 12. 代名詞IATの本番試行（私 + 好ましい言葉 / 私でない + 好ましくない言葉）の教示
var instruction_pronounIAT_main01 = {
  type: 'html-keyboard-response',
  stimulus:"<img src='" + repo_site + "bad.jpg' width='60%'>"+
  '<p style="text-align: center;">お疲れさまでした。次の課題では<u>分類するカテゴリーが先ほどとは異なります</u>ので、下記の文章をよく確認してください。</p><br>'+
    '<p>画面中央に表示される単語が、<b>左上の[私」または「好ましい言葉」のカテゴリーに当てはまると思ったら「E」キー</b>を、</p>'+
  '<p><b>右上の「私でない」または「好ましくない言葉」のカテゴリーに当てはまると思ったら「I」キー</b>を押してください。</p><br>' +
  "左右のカテゴリーは固定で、中央の単語が変わります。<br>"+
 '間違えると×（バツ）が中央に表示されるので、押したキーと反対のキーを押してください。<br>'+
 '単語が表示されたら、<u>できるだけ速く正確に</u>回答してください。<br>'+
 'そのために、左右の中指をEとIのキーの上にあらかじめのせておいてください。<br>'+
 "<br>それでは本番を行います。準備がよろしければ、課題を開始してください。</p>" +
 "<p style = 'color: red; font-size: 0.8em;'>スペースキーを押すと開始します</p>",
  choices:[' ']
};



//13. 代名詞IATの本番試行（私 + 好ましい言葉 / 私でない + 好ましくない言葉）

var trial_pronounIAT_main01 = {
  timeline: [
    {
      type: 'iat-html',
      stimulus: jsPsych.timelineVariable('stimulus'),
      stim_key_association: jsPsych.timelineVariable('stim_key_association'),
      html_when_wrong: '<span style="color: red; font-size: 80px">×</span>',
      bottom_instructions: '<p>間違えるとバツが表示されるので、押したキーと反対のキーを押してください</p>',
      force_correct_key_press: true,
      display_feedback: true,
      left_category_key: 'E',
      right_category_key: 'I',
      left_category_label: ['私', '好ましい言葉'],
      right_category_label: ['私でない', '好ましくない言葉'],
      response_ends_trial: true,
    }
  ],

  //IATで使う刺激
  timeline_variables: [
    {stimulus: "私", stim_key_association: "left"},
    {stimulus: "私の", stim_key_association: "left"},
    {stimulus: "私に", stim_key_association: "left"},
    {stimulus: "自分の", stim_key_association: "left"},
    {stimulus: "自分に", stim_key_association: "left"},

    {stimulus: "彼らは", stim_key_association: "right"},
    {stimulus: "彼らの", stim_key_association: "right"},
    {stimulus: "他人の", stim_key_association: "right"},
    {stimulus: "他の人", stim_key_association: "right"},
    {stimulus: "他人は", stim_key_association: "right"},

    {stimulus: "温かい", stim_key_association: "left"},
    {stimulus: "幸せ", stim_key_association: "left"},
    {stimulus: "楽しい", stim_key_association: "left"},
    {stimulus: "嬉しい", stim_key_association: "left"},
    {stimulus: "心地よい", stim_key_association: "left"},

    {stimulus: "苦しい", stim_key_association: "right"},
    {stimulus: "醜い", stim_key_association: "right"},
    {stimulus: "痛い", stim_key_association: "right"},
    {stimulus: "恥ずかしい", stim_key_association: "right"},
    {stimulus: "汚い", stim_key_association: "right"}

    
  ],
  randomize_order: true,
  post_trial_gap: 50,
  repetitions: 1
};


//14.　（入れ替え）代名詞IATの本番試行（私 + 好ましくない言葉 / 私でない + 好ましい言葉）の教示
var instruction_pronounIAT_main02 = {
  type: 'html-keyboard-response',
  stimulus:"<img src='" + repo_site + "bad.jpg' width='60%'>"+
  '<p style="text-align: center;">お疲れさまでした。次の課題では<u>分類する基準が先ほどとは異なります</u>ので、下記の文章をよく確認してください。</p><br>'+
    '<p>画面中央に表示される単語が、<b>左上の[私」または「好ましくない言葉」のカテゴリーに当てはまると思ったら「E」キー</b>を、</p>'+
  '<p><b>右上の「私でない」または「好ましい言葉」のカテゴリーに当てはまると思ったら「I」キー</b>を押してください。</p><br>' +
  "左右のカテゴリーは固定で、中央の単語が変わります。<br>"+
 '間違えると×（バツ）が中央に表示されるので、押したキーと反対のキーを押してください。<br>'+
 '単語が表示されたら、<u>できるだけ速く正確に</u>回答してください。<br>'+
 'そのために、左右の中指をEとIのキーの上にあらかじめのせておいてください。<br>'+
 "<br>それでは本番を行います。準備がよろしければ、課題を開始してください。</p>" +
 "<p style = 'color: red; font-size: 0.8em;'>スペースキーを押すと開始します</p>",
  choices:[' '],
};

//15.　（入れ替え）代名詞IATの本番試行（私 + 好ましくない言葉 / 私でない + 好ましい言葉）
var trial_pronounIAT_main02 = {
  timeline: [
    {
      type: 'iat-html',
      stimulus: jsPsych.timelineVariable('stimulus'),
      stim_key_association: jsPsych.timelineVariable('stim_key_association'),
      html_when_wrong: '<span style="color: red; font-size: 80px">×</span>',
      bottom_instructions: '<p>間違えるとバツが表示されるので、押したキーと反対のキーを押してください</p>',
      force_correct_key_press: true,
      display_feedback: true,
      left_category_key: 'E',
      right_category_key: 'I',
      left_category_label: ['私', '好ましくない言葉'],
      right_category_label: ['私でない', '好ましい言葉'],
      response_ends_trial: true,
    }
  ],

  //IATで使う刺激
  timeline_variables: [
    {stimulus: "私", stim_key_association: "left"},
    {stimulus: "私の", stim_key_association: "left"},
    {stimulus: "私に", stim_key_association: "left"},
    {stimulus: "自分の", stim_key_association: "left"},
    {stimulus: "自分に", stim_key_association: "left"},

    {stimulus: "彼らは", stim_key_association: "right"},
    {stimulus: "彼らの", stim_key_association: "right"},
    {stimulus: "他人の", stim_key_association: "right"},
    {stimulus: "他の人", stim_key_association: "right"},
    {stimulus: "他人は", stim_key_association: "right"},

    {stimulus: "苦しい", stim_key_association: "left"},
    {stimulus: "醜い", stim_key_association: "left"},
    {stimulus: "痛い", stim_key_association: "left"},
    {stimulus: "恥ずかしい", stim_key_association: "left"},
    {stimulus: "汚い", stim_key_association: "left"},

    {stimulus: "温かい", stim_key_association: "right"},
    {stimulus: "幸せ", stim_key_association: "right"},
    {stimulus: "楽しい", stim_key_association: "right"},
    {stimulus: "嬉しい", stim_key_association: "right"},
    {stimulus: "心地よい", stim_key_association: "right"}
    
  ],
  randomize_order: true,  
  post_trial_gap: 50,
  repetitions: 1
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

timeline.push(instruction_pronounIAT_main01);
timeline.push(trial_pronounIAT_main01);
timeline.push(instruction_pronounIAT_main02);
timeline.push(trial_pronounIAT_main02);



timeline.push({
  type: 'fullscreen',
  fullscreen_mode: false
});

timeline.push(endmessage);

