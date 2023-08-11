const form = document.getElementById('survey-form');
const resultDiv = document.getElementById('result');
const suggestionPara = document.getElementById('language-suggestion');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const q1Value = form.q1.value;

  let languageSuggestion = '';

  if (q1Value === 'web') {
    languageSuggestion = 'JavaScript';
  } else if (q1Value === 'mobile') {
    languageSuggestion = 'Swift';
  } else if (q1Value === 'system') {
    languageSuggestion = 'C#';
  }

  suggestionPara.textContent = languageSuggestion;
  resultDiv.classList.remove('hidden');
});
