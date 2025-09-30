
var repo_site = "https://experiment.kscscr.com/IAT_SD_2022_07/";

//教示文を読んで入力してもらう
var iat_instruction_test = {
  type: "html-keyboard-response",
  stimulus:"<img src='" + repo_site + "/pic/Picture03.jpg' width='60%'>"+"<p style = 'font-size:1.5em; text-align: center'>練習です</p>"+"<p>キーボードを利用した単語の分類課題を行います。</p>"+"<p>画面中央に表示される単語が、左上の<b>「よい」</b>または<b>「虫」</b>のカテゴリーに当てはまると思ったら<b>「E」</b>キーを、<br>右上の<b>「わるい」</b>のカテゴリーに当てはまると思ったら<b>「I」</b>キーを押してください。</p>"+ "<p><b>左右のカテゴリーは固定で、中央の単語が変わります。</b></p>"+"<p>間違えるとX（バツ）が中央に表示されるので、押したキーと反対のキーを押してください</br><b>スペースキー</b>を押すと開始します。</p>"+"<p style = 'font-size: 1.5em;'>単語が表示されたら、なるべく早く回答してください。</p>",
  choices: ["space"]
};

var iat_instruction = {
  type: "html-keyboard-response",
  stimulus:"<img src='" + repo_site + "/pic/good.jpg' width='60%'>"+"<p style = 'font-size:1.5em; text-align: center'>本番です</p>"+"<p style = 'font-size: 2em;'><b>左右のカテゴリーが変わっています</b></p>"+"<p>キーボードを利用した単語の分類課題を行います。</p>"+"<p>画面中央に表示される単語が、左上の<b>「よい」</b>または<b>「あなた自身」</b>のカテゴリーに当てはまると思ったら<b>「E」</b>キーを、<br>右上の<b>「わるい」</b>のカテゴリーに当てはまると思ったら<b>「I」</b>キーを押してください。</p>"+ "<p><b>左右のカテゴリーは固定で、中央の単語が変わります。</b></p>"+"<p>間違えるとX（バツ）が中央に表示されるので、押したキーと反対のキーを押してください</br><b>スペースキー</b>を押すと開始します。</p>"+"<p style = 'font-size: 1.5em;'>単語が表示されたら、なるべく早く回答してください。</p>",
  choices: ["space"]
};

var iat_brakegood = {
  type: "html-keyboard-response",
  stimulus:"<img src='" + repo_site + "/pic/good.jpg' width='60%'>"+"<p style = 'font-size:1.5em; text-align: center'>休憩です</p>"+"<p>キーボードを利用した単語の分類課題を行います。</p>"+"<p>画面中央に表示される単語が、左上の<b>「よい」</b>または<b>「あなた自身」</b>のカテゴリーに当てはまると思ったら<b>「E」</b>キーを、<br>右上の「わるい」のカテゴリーに当てはまると思ったら<b>「I」</b>キーを押してください。</p>"+ "<p><b>左右のカテゴリーは固定で、中央の単語が変わります。</b></p>"+"<p>間違えるとX（バツ）が中央に表示されるので、押したキーと反対のキーを押してください</br><b>スペースキー</b>を押すと開始します。</p>"+"<p style = 'font-size: 1.5em;'>単語が表示されたら、なるべく早く回答してください。</p>",
  choices: ["space"]
};


var iat_brakechange = {
  type: "html-keyboard-response",
  stimulus:"<img src='" + repo_site + "/pic/change.jpg' width='60%'>"+"<p style = 'font-size:1.5em; text-align: center'>休憩です</p>"+"<p>キーボードを利用した単語の分類課題を行います。</p>"+"<p style = 'font-size: 2em;'><b>左右のカテゴリーが変わっています</b></p>"+"<p>画面中央に表示される単語が、左上の<b>「よい」</b>カテゴリーに当てはまると思ったら<b>「E」</b>キーを、<br>右上の<b>「わるい」</b>又は<b>「あなた自身」</b>のカテゴリーに当てはまると思ったら<b>「I」</b>キーを押してください。</p>"+ "<p><b>左右のカテゴリーは固定で、中央の単語が変わります。</b></p>"+"<p>間違えるとX（バツ）が中央に表示されるので、押したキーと反対のキーを押してください</br><b>スペースキー</b>を押すと開始します。</p>"+"<p style = 'font-size: 1.5em;'>単語が表示されたら、なるべく早く回答してください。</p>",
  choices: ["space"]
};

var iat_brakebad = {
  type: "html-keyboard-response",
  stimulus:"<img src='" + repo_site + "/pic/bad.jpg' width='60%'>"+"<p style = 'font-size:1.5em; text-align: center'>休憩です</p>"+"<p>キーボードを利用した単語の分類課題を行います。</p>"+"<p>画面中央に表示される単語が、左上の<b>「よい」</b>カテゴリーに当てはまると思ったら<b>「E」</b>キーを、<br>右上の<b>「わるい」</b>または<b>「あなた自身」</b>のカテゴリーに当てはまると思ったら<b>「I」</b>キーを押してください。</p>"+ "<p><b>左右のカテゴリーは固定で、中央の単語が変わります。</b></p>"+"<p>間違えるとX（バツ）が中央に表示されるので、押したキーと反対のキーを押してください</br><b>スペースキー</b>を押すと開始します。</p>"+"<p style = 'font-size: 1.5em;'>単語が表示されたら、なるべく早く回答してください。</p>",
  choices: ["space"]
};



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
    nameup = JSON.parse(data.responses).name_up;
    namedo = JSON.parse(data.responses).name_down;
    namehandle = JSON.parse(data.responses).name_handle;
    namenick = JSON.parse(data.responses).name_nick;
    jsPsych.data.addProperties({name01: nameup});
    jsPsych.data.addProperties({name02: namedo});
    jsPsych.data.addProperties({name03: namehandle});
    jsPsych.data.addProperties({name04: namenick});
  }
};



//練習試行
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
    {stimulus: "秀でた", stim_key_association: "left"},
    {stimulus: "優れた", stim_key_association: "left"},
    {stimulus: "必要な", stim_key_association: "left"},
    {stimulus: "価値のある", stim_key_association: "left"},

    {stimulus: "劣った", stim_key_association: "right"},
    {stimulus: "愚かな", stim_key_association: "right"},
    {stimulus: "不要な", stim_key_association: "right"},
    {stimulus: "役立たず", stim_key_association: "right"},

    {stimulus: "カブトムシ", stim_key_association: "left"},
    {stimulus: "バッタ", stim_key_association: "left"},
    {stimulus: "クワガタ", stim_key_association: "left"},
    {stimulus: "ハチ", stim_key_association: "left"}
    ],
  randomize_order: true,
  repetitions: 1
};


// SC-IAT：研究1バージョン
//Block1:self+good vs bad
var trial01_prac01 = {
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
      left_category_label: ["よい","あなた自身"],
      right_category_label: ["わるい"],
      response_ends_trial: true
    }
    ],  
  //IATで使う刺激
  timeline_variables: [
    {stimulus: "劣った", stim_key_association: "right"},
    {stimulus: "愚かな", stim_key_association: "right"},
    {stimulus: "不要な", stim_key_association: "right"},
    {stimulus: "役立たず", stim_key_association: "right"},
    {stimulus: "敗北", stim_key_association: "right"},
    {stimulus: "軽蔑", stim_key_association: "right"},
    {stimulus: "嫌らしい", stim_key_association: "right"},
    {stimulus: "無能", stim_key_association: "right"},
    {stimulus: "惨めな", stim_key_association: "right"},
    {stimulus: "駄目な ", stim_key_association: "right"},

    {stimulus: "秀でた", stim_key_association: "left"},
    {stimulus: "優れた", stim_key_association: "left"},
    {stimulus: "必要な", stim_key_association: "left"},
    {stimulus: "価値のある", stim_key_association: "left"},
    {stimulus: "成功", stim_key_association: "left"},
    {stimulus: "尊敬", stim_key_association: "left"},
    {stimulus: "好ましい", stim_key_association: "left"},

    {stimulus: function(){
    var named = jsPsych.data.get().last(1).values()[0].name01;
    return named;
    }, stim_key_association: "left"},
  {stimulus: function(){
    var named = jsPsych.data.get().last(1).values()[0].name02;
    return named;
    }, stim_key_association: "left"},
  {stimulus: function(){
    var named = jsPsych.data.get().last(1).values()[0].name03;
    return named;
    }, stim_key_association: "left"},
  {stimulus: function(){
    var named = jsPsych.data.get().last(1).values()[0].name04;
    return named;
    }, stim_key_association: "left"}
      ],
      
  randomize_order: true,
  repetitions: 1
};

var trial01_prac02 = {
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
      left_category_label: ["よい"],
      right_category_label: ["わるい","あなた自身"],
      response_ends_trial: true
    }
    ],  
  //IATで使う刺激
  timeline_variables: [
    {stimulus: "劣った", stim_key_association: "right"},
    {stimulus: "愚かな", stim_key_association: "right"},
    {stimulus: "不要な", stim_key_association: "right"},
    {stimulus: "役立たず", stim_key_association: "right"},
    {stimulus: "敗北", stim_key_association: "right"},
    {stimulus: "軽蔑", stim_key_association: "right"},
    {stimulus: "嫌らしい", stim_key_association: "right"},

    {stimulus: "秀でた", stim_key_association: "left"},
    {stimulus: "優れた", stim_key_association: "left"},
    {stimulus: "必要な", stim_key_association: "left"},
    {stimulus: "価値のある", stim_key_association: "left"},
    {stimulus: "成功", stim_key_association: "left"},
    {stimulus: "尊敬", stim_key_association: "left"},
    {stimulus: "好ましい", stim_key_association: "left"},
    {stimulus: "有能", stim_key_association: "left"},
    {stimulus: "誇らしい", stim_key_association: "left"},
    {stimulus: "素晴らしい", stim_key_association: "left"},


    {stimulus: function(){
      var named = jsPsych.data.get().last(1).values()[0].name01;
      return named;
      }, stim_key_association: "right"},
    {stimulus: function(){
      var named = jsPsych.data.get().last(1).values()[0].name02;
      return named;
      }, stim_key_association: "right"},
    {stimulus: function(){
      var named = jsPsych.data.get().last(1).values()[0].name03;
      return named;
      }, stim_key_association: "right"},
    {stimulus: function(){
      var named = jsPsych.data.get().last(1).values()[0].name04;
      return named;
      }, stim_key_association: "right"}
    ],
  randomize_order: true,
  repetitions: 1
};

//外国人+良い：本試行
var trial01_main01 = {
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
      left_category_label: ["よい","あなた自身"],
      right_category_label: ["わるい"],
      response_ends_trial: true
    }
    ],  
  //IATで使う刺激
  timeline_variables: [
    {stimulus: "軽蔑", stim_key_association: "right"},
    {stimulus:  function(){
    var named = jsPsych.data.get().last(1).values()[0].name03;
    return named;
    }, stim_key_association: "left"},
    {stimulus: "必要な", stim_key_association: "left"},
    {stimulus: function(){
      var named = jsPsych.data.get().last(1).values()[0].name01;
      return named;
      }, stim_key_association: "left"},
    {stimulus: "愚かな", stim_key_association: "right"},
    {stimulus: "秀でた", stim_key_association: "left"},
    {stimulus: "好ましい", stim_key_association: "left"},
    {stimulus: "成功", stim_key_association: "left"},
    {stimulus: "不要な", stim_key_association: "right"},
    {stimulus: function(){
      var named = jsPsych.data.get().last(1).values()[0].name01;
      return named;
      }, stim_key_association: "left"},
    {stimulus: "駄目な ", stim_key_association: "right"},
    {stimulus:  function(){
      var named = jsPsych.data.get().last(1).values()[0].name04;
      return named;
      }, stim_key_association: "left"},
    {stimulus: "尊敬", stim_key_association: "left"},
    {stimulus: "駄目な ", stim_key_association: "right"},
    {stimulus: "価値のある", stim_key_association: "left"},
    {stimulus: "惨めな", stim_key_association: "right"},
    {stimulus: "誇らしい", stim_key_association: "left"},
    {stimulus: "役立たず", stim_key_association: "right"},
    {stimulus: "有能", stim_key_association: "left"},
    {stimulus: "愚かな", stim_key_association: "right"},
    {stimulus: "秀でた", stim_key_association: "left"},
    {stimulus: function(){
      var named = jsPsych.data.get().last(1).values()[0].name01;
      return named;
      }, stim_key_association: "left"},
    {stimulus: "役立たず", stim_key_association: "right"},
    {stimulus: "素晴らしい", stim_key_association: "left"},
    {stimulus: "不要な", stim_key_association: "right"},
    {stimulus:  function(){
    var named = jsPsych.data.get().last(1).values()[0].name02;
    return named;
    }, stim_key_association: "left"},
    {stimulus: "劣った", stim_key_association: "right"},
    {stimulus:  function(){
    var named = jsPsych.data.get().last(1).values()[0].name03;
    return named;
    }, stim_key_association: "left"},
    {stimulus: "敗北", stim_key_association: "right"},
    {stimulus: "嫌らしい", stim_key_association: "right"},
    {stimulus:  function(){
    var named = jsPsych.data.get().last(1).values()[0].name02;
    return named;
    }, stim_key_association: "left"},
    {stimulus: "軽蔑", stim_key_association: "right"},
    {stimulus:  function(){
    var named = jsPsych.data.get().last(1).values()[0].name03;
    return named;
    }, stim_key_association: "left"},
    {stimulus: "敗北", stim_key_association: "right"},
    {stimulus: function(){
      var named = jsPsych.data.get().last(1).values()[0].name01;
      return named;
      }, stim_key_association: "left"},
    {stimulus: "無能", stim_key_association: "right"},
    {stimulus: "駄目な ", stim_key_association: "right"},
    {stimulus:  function(){
    var named = jsPsych.data.get().last(1).values()[0].name03;
    return named;
    }, stim_key_association: "left"},
    {stimulus: "惨めな", stim_key_association: "right"},
    {stimulus: "優れた", stim_key_association: "left"},
    {stimulus: "軽蔑", stim_key_association: "right"},
    {stimulus: "成功", stim_key_association: "left"},
    {stimulus:  function(){
    var named = jsPsych.data.get().last(1).values()[0].name02;
    return named;
    }, stim_key_association: "left"},
    {stimulus: "劣った", stim_key_association: "right"},
    {stimulus:  function(){
    var named = jsPsych.data.get().last(1).values()[0].name03;
    return named;
    }, stim_key_association: "left"},
    {stimulus: "尊敬", stim_key_association: "left"},
    {stimulus: "無能", stim_key_association: "right"},
    {stimulus: "素晴らしい", stim_key_association: "left"},
    {stimulus: "必要な", stim_key_association: "left"},
    {stimulus: "敗北", stim_key_association: "right"},
    {stimulus:  function(){
      var named = jsPsych.data.get().last(1).values()[0].name04;
      return named;
      }, stim_key_association: "left"},
    {stimulus: "愚かな", stim_key_association: "right"},
    {stimulus:  function(){
    var named = jsPsych.data.get().last(1).values()[0].name02;
    return named;
    }, stim_key_association: "left"},
    {stimulus: "価値のある", stim_key_association: "left"},
    {stimulus: "劣った", stim_key_association: "right"},
    {stimulus: "有能", stim_key_association: "left"},
    {stimulus: "不要な", stim_key_association: "right"},
    {stimulus:  function(){
      var named = jsPsych.data.get().last(1).values()[0].name04;
      return named;
      }, stim_key_association: "left"},
    {stimulus: "優れた", stim_key_association: "left"},
    {stimulus: "役立たず", stim_key_association: "right"},
    {stimulus: "好ましい", stim_key_association: "left"},
    {stimulus:  function(){
    var named = jsPsych.data.get().last(1).values()[0].name02;
    return named;
    }, stim_key_association: "left"},
    {stimulus: "嫌らしい", stim_key_association: "right"},
    {stimulus:  function(){
      var named = jsPsych.data.get().last(1).values()[0].name04;
      return named;
      }, stim_key_association: "left"},
    {stimulus: "嫌らしい", stim_key_association: "right"},
    {stimulus: function(){
      var named = jsPsych.data.get().last(1).values()[0].name01;
      return named;
      }, stim_key_association: "left"},
    {stimulus: "無能", stim_key_association: "right"},
    {stimulus: "惨めな", stim_key_association: "right"},
    {stimulus: "誇らしい", stim_key_association: "left"},
    {stimulus:  function(){
      var named = jsPsych.data.get().last(1).values()[0].name04;
      return named;
      }, stim_key_association: "left"},
    ],
  randomize_order: false,
  repetitions: 1
};

//外国人+悪い：本試行
var trial01_main02 = {
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
      left_category_label: ["よい"],
      right_category_label: ["わるい", "あなた自身"],
      response_ends_trial: true
    }
    ],  
  //IATで使う刺激
  timeline_variables: [
    {stimulus: "駄目な ", stim_key_association: "right"},
    {stimulus: "誇らしい", stim_key_association: "left"},
    {stimulus:  function(){
    var named = jsPsych.data.get().last(1).values()[0].name02;
    return named;
    }, stim_key_association: "right"},
    {stimulus: "好ましい", stim_key_association: "left"},
    {stimulus:  function(){
      var named = jsPsych.data.get().last(1).values()[0].name04;
      return named;
      }, stim_key_association: "right"},
    {stimulus: "秀でた", stim_key_association: "left"},
    {stimulus: "素晴らしい", stim_key_association: "left"},
    {stimulus: "惨めな", stim_key_association: "right"},
    {stimulus: function(){
      var named = jsPsych.data.get().last(1).values()[0].name01;
      return named;
      }, stim_key_association: "right"},
    {stimulus:  function(){
      var named = jsPsych.data.get().last(1).values()[0].name04;
      return named;
      }, stim_key_association: "right"},
    {stimulus: "優れた", stim_key_association: "left"},
    {stimulus: "好ましい", stim_key_association: "left"},
    {stimulus: "役立たず", stim_key_association: "right"},
    {stimulus:  function(){
    var named = jsPsych.data.get().last(1).values()[0].name02;
    return named;
    }, stim_key_association: "right"},
    {stimulus: "価値のある", stim_key_association: "left"},
    {stimulus: "駄目な ", stim_key_association: "right"},
    {stimulus:  function(){
    var named = jsPsych.data.get().last(1).values()[0].name03;
    return named;
    }, stim_key_association: "right"},
    {stimulus: "秀でた", stim_key_association: "left"},
    {stimulus: "無能", stim_key_association: "right"},
    {stimulus: function(){
      var named = jsPsych.data.get().last(1).values()[0].name01;
      return named;
      }, stim_key_association: "right"},
    {stimulus:  function(){
    var named = jsPsych.data.get().last(1).values()[0].name03;
    return named;
    }, stim_key_association: "right"},
    {stimulus: "尊敬", stim_key_association: "left"},
    {stimulus: "惨めな", stim_key_association: "right"},
    {stimulus: "優れた", stim_key_association: "left"},
    {stimulus: "好ましい", stim_key_association: "left"},
    {stimulus:  function(){
      var named = jsPsych.data.get().last(1).values()[0].name04;
      return named;
      }, stim_key_association: "right"},
    {stimulus: "有能", stim_key_association: "left"},
    {stimulus: "劣った", stim_key_association: "right"},
    {stimulus: "秀でた", stim_key_association: "left"},
    {stimulus: "価値のある", stim_key_association: "left"},
    {stimulus: "不要な", stim_key_association: "right"},
    {stimulus: "必要な", stim_key_association: "left"},
    {stimulus: "役立たず", stim_key_association: "right"},
    {stimulus: "嫌らしい", stim_key_association: "right"},
    {stimulus: "有能", stim_key_association: "left"},
    {stimulus: "軽蔑", stim_key_association: "right"},
    {stimulus: "敗北", stim_key_association: "right"},
    {stimulus:  function(){
    var named = jsPsych.data.get().last(1).values()[0].name02;
    return named;
    }, stim_key_association: "right"},
    {stimulus: "必要な", stim_key_association: "left"},
    {stimulus: "無能", stim_key_association: "right"},
    {stimulus: function(){
      var named = jsPsych.data.get().last(1).values()[0].name01;
      return named;
      }, stim_key_association: "right"},
    {stimulus: "有能", stim_key_association: "left"},
    {stimulus: "尊敬", stim_key_association: "left"},
    {stimulus:  function(){
    var named = jsPsych.data.get().last(1).values()[0].name02;
    return named;
    }, stim_key_association: "right"},
    {stimulus: "嫌らしい", stim_key_association: "right"},
    {stimulus: "誇らしい", stim_key_association: "left"},
    {stimulus: "劣った", stim_key_association: "right"},
    {stimulus: "敗北", stim_key_association: "right"},
    {stimulus: "優れた", stim_key_association: "left"},
    {stimulus:  function(){
    var named = jsPsych.data.get().last(1).values()[0].name03;
    return named;
    }, stim_key_association: "right"},
    {stimulus: "愚かな", stim_key_association: "right"},
    {stimulus: "成功", stim_key_association: "left"},
    {stimulus: "不要な", stim_key_association: "right"},
    {stimulus: "必要な", stim_key_association: "left"},
    {stimulus:  function(){
      var named = jsPsych.data.get().last(1).values()[0].name04;
      return named;
      }, stim_key_association: "right"},
    {stimulus: "軽蔑", stim_key_association: "right"},
    {stimulus:  function(){
    var named = jsPsych.data.get().last(1).values()[0].name03;
    return named;
    }, stim_key_association: "right"},
    {stimulus: function(){
      var named = jsPsych.data.get().last(1).values()[0].name01;
      return named;
      }, stim_key_association: "right"},
    {stimulus: "誇らしい", stim_key_association: "left"},
    {stimulus:  function(){
    var named = jsPsych.data.get().last(1).values()[0].name03;
    return named;
    }, stim_key_association: "right"},
    {stimulus: "成功", stim_key_association: "left"},
    {stimulus: "素晴らしい", stim_key_association: "left"},
    {stimulus: "愚かな", stim_key_association: "right"},
    {stimulus: "価値のある", stim_key_association: "left"},
    {stimulus:  function(){
    var named = jsPsych.data.get().last(1).values()[0].name02;
    return named;
    }, stim_key_association: "right"},
    {stimulus: "成功", stim_key_association: "left"},
    {stimulus: function(){
      var named = jsPsych.data.get().last(1).values()[0].name01;
      return named;
      }, stim_key_association: "right"},
    {stimulus: "素晴らしい", stim_key_association: "left"},
    {stimulus: "尊敬", stim_key_association: "left"},
    {stimulus:  function(){
      var named = jsPsych.data.get().last(1).values()[0].name04;
      return named;
      }, stim_key_association: "right"},
    
    ],
  randomize_order: false,
  repetitions: 1
};





var endmessage = {
    type: 'instructions',
    pages: ["<p>この課題はこれで終了になります</p>"+"<p>「次へ」をクリックして次へ進んでください</p>"
    ],
    allow_backward: false,
    show_clickable_nav: true,
    button_label_next: "次へ"
    
};

var endmessage = {
    type: 'instructions',
    pages: ["<p>次の画面で「クラウドワークス」に入力してもらうためのコードが表示されます。</p>"
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
timeline.push(iat_instruction_test);
timeline.push(trial_test01);
timeline.push(iat_instruction);
timeline.push(trial01_prac01);
timeline.push(iat_brakegood);
timeline.push(trial01_main01);
timeline.push(iat_brakechange);
timeline.push(trial01_prac02);
timeline.push(iat_brakebad);
timeline.push(trial01_main02);


timeline.push({
  type: 'fullscreen',
  fullscreen_mode: false
});

timeline.push(endmessage);
