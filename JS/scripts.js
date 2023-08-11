const form = document.getElementById('survey-form');
const resultDiv = document.getElementById('result');
const suggestionPara = document.getElementById('language-suggestion');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const q1Value = form.q1.value;
  const q2Value = form.q2.value.toLowerCase();

  let languageSuggestion = '';

  if (q1Value === 'web') {
    if (q2Value.includes('dog')) {
      languageSuggestion = 'JavaScript';
    } else {
      languageSuggestion = 'Python';
    }
  } else if (q1Value === 'app') {
    languageSuggestion = 'Swift';
  } else if (q1Value === 'sys') {
    languageSuggestion = 'C#';
  }

  suggestionPara.textContent = languageSuggestion;
  resultDiv.classList.remove('hidden');
  form.reset();
});

