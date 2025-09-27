
var scale = ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"];

var likert_trial = {
    type: 'survey-likert',
    questions: [
      {prompt: "I like vegetables.", name: 'Vegetables', labels: scale, required: true}, 
      {prompt: "I like fruit.", name: 'Fruit', labels: scale, required: true}
    ],
};

var likert_trial_random_order = {
    type: 'survey-likert',
    questions: [
      {prompt: "Question 1", labels: scale}, 
      {prompt: "Question 2", labels: scale},
      {prompt: "Question 3", labels: scale},
      {prompt: "Question 4", labels: scale},
      {prompt: "Question 5", labels: scale}
    ],
    randomize_question_order: true,
    scale_width: 500
};



/* 実験の提示の順番 */
var timeline = [];

timeline.push(likert_trial);
timeline.push(likert_trial_random_order);

