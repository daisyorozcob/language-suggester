const surveyForm = document.getElementById('surveyForm');
const resultDiv = document.getElementById('result');
const languageSuggestion = document.getElementById('languageSuggestion');

surveyForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const selectedOption = document.querySelector('input[name="applicationType"]:checked');
    if (selectedOption) {
        const applicationType = selectedOption.value;
        let suggestedLanguage = '';

        switch (applicationType) {
            case 'web':
                suggestedLanguage = 'JavaScript';
                break;
            case 'mobile':
                suggestedLanguage = 'Swift';
                break;
            case 'system':
                suggestedLanguage = 'C++';
                break;
        }

        languageSuggestion.textContent = suggestedLanguage;
        resultDiv.classList.remove('hidden');
    }
});

