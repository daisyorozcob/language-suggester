const form = document.getElementById('survey-form');
const resultDiv = document.getElementById('result');
const suggestionPara = document.getElementById('language-suggestion');

form.addEventListener('submit', function (event) {
  event.preventDefault();